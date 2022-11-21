import { Guid } from 'guid-typescript';
import { IntlShape } from 'react-intl';

import { FacetFactory } from '@services/facet-service/factory/facetFactory';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetOption } from '@services/facet-service/models/facet/facetOption';
import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { AttributeTypeFormatter } from '@services/i18n/formatters/entity-formatters/attributeTypeFormatter';
import { FacetedSearchProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { TextFormatter } from '@services/i18n/formatters/entity-formatters/textFormatter';
import { FacetOptionFormatter } from '@services/i18n/formatters/facetFormatter';
import { AttributeType } from '@services/portal-api';
import { FacetedSearchProduct } from '@services/portal-api/faceted-search/types';
import { FacetedSearchProductViewModel } from '@widgets/finder/result-view/list-view/productListItem';

export function mapFacetedSearchProductsToProductListItems(
  products: FacetedSearchProduct[],
  systemOfMeasurement: SystemOfMeasurement,
  intl: IntlShape,
  getAttributeType: (code: string) => AttributeType | undefined
): FacetedSearchProductViewModel[] {
  const textFormatter = new TextFormatter();
  const facetPropertyKeys: string[] = FacetFactory.getFacetCodes().map(code =>
    textFormatter.formatCamelCase(code)
  );

  // TODO: Experiment with Chips as facets (will work out during product page implementaiton)
  function getChipValue(
    key: string,
    value: string | string[] | null | undefined
  ): string {
    if (!value || !value.length) {
      return '';
    }
    const facet: Facet | undefined = FacetFactory.getFacetsFromFiles([]).find(
      facet => facet.attributeTypeCode.toLowerCase() === key.toLowerCase()
    );

    if (!facet) {
      return '';
    }
    if (typeof value === 'string') {
      const option: FacetOption | undefined = facet.options.find(
        option => option.value === value
      );
      if (!option) {
        return '';
      }
      const facetOptionFormatter = new FacetOptionFormatter(
        option,
        undefined,
        intl,
        systemOfMeasurement,
        intl.locale
      );
      return facetOptionFormatter.formatDisplayValue();
    }

    if (Array.isArray(value)) {
      const options = value.map(value =>
        facet.options.find(option => option.value === value)
      );
      const values = options
        .map(option => {
          if (!option) {
            return '';
          }
          const facetOptionFormatter = new FacetOptionFormatter(
            option,
            undefined,
            intl,
            systemOfMeasurement,
            intl.locale
          );
          return facetOptionFormatter.formatDisplayValue();
        })
        .filter(value => !!value);
      return values.join(', ');
    }
    return '';
  }

  function getChips(
    product: FacetedSearchProduct,
    getAttributeType: (code: string) => AttributeType | undefined
  ): { code: string; value: string; description: string; title: string }[] {
    return facetPropertyKeys
      .map(key => {
        const attributeTypeFormatter = new AttributeTypeFormatter(
          getAttributeType(key)
        );
        return {
          code: attributeTypeFormatter.formatName(),
          value: getChipValue(key, product?.[key]),
          description: attributeTypeFormatter.formatDescription(),
          title: attributeTypeFormatter.formatName()
        };
      })
      .filter(chip => !!chip.value)
      .slice(0, 4);
  }
  return products.map(product => {
    const productFormatter = new FacetedSearchProductFormatter(
      product,
      intl.locale
    );
    return {
      product: {
        id: product.id || Guid.create().toString(),
        number: product.number || '',
        name: productFormatter.formatName(),
        url: productFormatter.formatHref() || undefined,
        imageUrl: productFormatter.formatImageSrc()
      },
      chips: getChips(product, getAttributeType),
      data: product
    };
  });
}
