import { useEffect, useMemo } from 'react';

import { useIntl } from 'react-intl';

import { useRecentlyViewedProducts } from '@providers/recently-viewed/recentlyViewedContext';
import { getAudience } from '@services/i18n';
import {
  Attribute,
  Identifier,
  IdentifierType,
  Option,
  Product,
  ProductAccessory,
  Resource,
  ResourceType
} from '@services/portal-api';
import { ATTRIBUTETYPECODES } from '@services/portal-api/constants';
import { FlaggedEnum } from '@services/portal-api/flaggedEnum';
import { AttributeSettings } from '@services/portal-api/models/AttributeSettingsFlags';
import { Audience } from '@services/portal-api/models/AudienceFlags';
import { ProductSection } from '@widgets/product-page/product-sections/productSections.types';
import { getProductSections } from '@widgets/product-page/product-sections/productSectionsHelper';

import { ProductPageContext } from './productPageContext';

interface ProductPageProviderProps {
  product: Product;
}

export const ProductPageProvider: React.FC<ProductPageProviderProps> = ({
  product,
  children
}) => {
  const intl = useIntl();
  const { locale } = intl;

  const attributes: Attribute[] = product.attributes || [];
  const keyAttributes: Attribute[] =
    product.attributes?.filter(filterKeyAttribute) || [];
  const performanceAttributes = getPerformanceAttributes(
    product.attributes || []
  );
  const flow: Attribute | undefined = product.attributes?.find(
    attribute =>
      attribute.typeCode === ATTRIBUTETYPECODES.flowDiagramCaptionText
  );

  const resources: Resource[] = product.resources || [];
  const downloads = resources.filter(filterDownloadableResource);
  const cadenasIdentifier: Identifier | undefined = product.identifiers?.find(
    identifier => identifier.type === IdentifierType.CADENAS_IDENTIFIER
  );

  const configurations: Option[] = product.options || [];

  const accessories: ProductAccessory[] = product.accessories || [];

  const sections: ProductSection[] = useMemo(() => {
    const productSections = getProductSections(intl);
    const filteredSections: ProductSection[] = [];
    if (product.description || resources.length) {
      filteredSections.push(productSections.generalInformationSection);
    }

    if (cadenasIdentifier || downloads.length) {
      filteredSections.push(productSections.downloadsSection);
    }
    if (performanceAttributes) {
      filteredSections.push(productSections.performanceSection);
    }
    if (attributes.length) {
      filteredSections.push(productSections.specificationsSection);
    }
    if (accessories.length) {
      filteredSections.push(productSections.accessoriesSection);
    }

    return filteredSections;
  }, [
    accessories.length,
    attributes.length,
    cadenasIdentifier,
    downloads.length,
    intl,
    performanceAttributes,
    product.description,
    resources.length
  ]);

  const isValidAudience = useMemo(() => {
    if (!product?.audience) {
      return true;
    }
    const productAudience: Audience = FlaggedEnum.create<Audience>(
      Audience,
      product?.audience
    );

    return getAudience(locale) === productAudience;
  }, [locale, product?.audience]);

  function filterKeyAttribute(attribute: Attribute): boolean {
    const keyAttributeSetting: AttributeSettings =
      AttributeSettings.DisplayOnProductCharacteristics;

    const attributeSettings: AttributeSettings =
      FlaggedEnum.create<AttributeSettings>(
        AttributeSettings,
        attribute.settings || ''
      );

    return !!(attributeSettings & keyAttributeSetting);
  }

  function filterDownloadableResource(resource: Resource): boolean {
    return (
      resource.id !== product.image?.id &&
      resource.type !== undefined &&
      [
        ResourceType.PRODUCT_BULLETIN,
        ResourceType.CASE_STUDY,
        ResourceType.CATALOG_DETAIL,
        ResourceType.CATALOG
      ].includes(resource.type)
    );
  }

  function getPerformanceAttributes(allAttributes: Attribute[]):
    | {
        sprayAngleAttributes: Attribute[];
        liquidFlowRateAttributes: Attribute[];
        airFlowRateAttributes: Attribute[];
      }
    | undefined {
    const sprayAngleAttributes: Attribute[] = allAttributes.filter(
      attribute => attribute.typeCode === ATTRIBUTETYPECODES.sprayAngle
    );
    const liquidFlowRateAttributes: Attribute[] = allAttributes.filter(
      attribute => attribute.typeCode === ATTRIBUTETYPECODES.liquidFlowRate
    );
    const airFlowRateAttributes: Attribute[] = allAttributes.filter(
      attribute => attribute.typeCode === ATTRIBUTETYPECODES.airFlowRate
    );

    if (
      sprayAngleAttributes.length ||
      liquidFlowRateAttributes.length ||
      airFlowRateAttributes.length
    ) {
      return {
        sprayAngleAttributes,
        liquidFlowRateAttributes,
        airFlowRateAttributes
      };
    }
    return undefined;
  }

  return (
    <ProductPageContext.Provider
      value={{
        accessories,
        attributes,
        downloads,
        keyAttributes,
        performanceAttributes,
        flow,
        cadenasIdentifier,
        configurations,
        isValidAudience,
        product,
        resources,
        sections
      }}
    >
      {children}
    </ProductPageContext.Provider>
  );
};
