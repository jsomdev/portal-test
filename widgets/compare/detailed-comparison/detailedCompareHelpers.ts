import { IntlShape, defineMessages } from 'react-intl';

import { STATIC_IMAGES } from '@public/media/images';
import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { messageIds } from '@services/i18n';
import { AttributeFormatter } from '@services/i18n/formatters/entity-formatters/attributeFormatter';
import { AttributeGroupFormatter } from '@services/i18n/formatters/entity-formatters/attributeGroupFormatter';
import { AttributeTypeFormatter } from '@services/i18n/formatters/entity-formatters/attributeTypeFormatter';
import { getDisplayValueType } from '@services/i18n/formatters/entity-formatters/displayFormatter';
import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import {
  Attribute,
  AttributeGroup,
  AttributeType,
  Product
} from '@services/portal-api';
import { AttributeTypeCodes } from '@services/portal-api/base/types';
import { FlaggedEnum } from '@services/portal-api/flaggedEnum';
import { AttributeSettings } from '@services/portal-api/models/AttributeSettingsFlags';
import { groupArrayByKey } from '@utilities/groupBy';
import {
  sortCompareGroups,
  sortProductCompareAttributeValues
} from '@utilities/sortBy';

import {
  CompareAttribute,
  CompareAttributeValue,
  CompareGroup,
  CompareProductCardViewModel
} from './detailedCompare.types';

const messages = defineMessages({
  generalTitle: {
    id: messageIds.pages.compare.generalTitle,
    description: 'Title for attributes that do not belong to a group',
    defaultMessage: 'General'
  }
});

export function showMultiPerformanceChart(
  product: Product,
  code: string
): boolean {
  return !!(
    product.attributes?.filter(attribute => attribute.typeCode === code)?.[0]
      ?.conditions?.length === 2
  );
}

export function mapProductToCompareProductCardViewModel(
  product: Product,
  locale: string
): CompareProductCardViewModel {
  const productFormatter: ProductFormatter = new ProductFormatter(
    product,
    locale
  );
  return {
    id: product.id,
    imageUrl:
      productFormatter.formatImageHref() ||
      STATIC_IMAGES.app.noImageAvailable.src,
    name: productFormatter.formatName(),
    number: product.number || '',
    url: productFormatter.formatUrl() || ''
  };
}
/**
 * Merges and sorts the provided `groupedGroups` object into a single array of `CompareGroup` objects.
 *
 * @param groupedGroups - An object whose keys are strings and values are arrays of `CompareGroup` objects.
 * @returns An array of `CompareGroup` objects.
 */
export const mergeGroups = (groupedGroups: {
  [groupedValue: string]: CompareGroup[];
}): CompareGroup[] => {
  const groups: CompareGroup[] = Object.entries(groupedGroups)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([key, items]) => {
      const compareAttributes: CompareAttribute[] = [];
      items.sort(sortCompareGroups).forEach(compareGroup => {
        compareGroup.attributes.forEach(attribute => {
          const attributeIndex = compareAttributes.findIndex(
            x => x.attributeTypeName === attribute.attributeTypeName
          );
          if (attributeIndex === -1) {
            compareAttributes.push({
              ...attribute,
              values: [
                {
                  ...attribute.values[0],
                  text: attribute.values.map(x => x.text).join(', '),
                  alternativeValue: attribute.values
                    .map(x => x.alternativeValue)
                    .join(', ')
                }
              ]
            });
          } else {
            attribute.values.forEach(attributeValue => {
              const productIndex = compareAttributes[
                attributeIndex
              ].values.findIndex(
                x => x.productNumber === attributeValue.productNumber
              );
              if (productIndex === -1) {
                compareAttributes[attributeIndex].values.push(attributeValue);
              } else {
                compareAttributes[attributeIndex].values[productIndex] = {
                  ...attributeValue,
                  alternativeValue: `${compareAttributes[attributeIndex].values[productIndex].text}, ${attributeValue.alternativeValue}`,
                  text: `${compareAttributes[attributeIndex].values[productIndex].text}, ${attributeValue.text}`
                };
              }
            });
          }
        });
      });
      return {
        groupName: key,
        attributes: compareAttributes.sort((a, b) =>
          a.attributeTypeName.localeCompare(b.attributeTypeName)
        )
      };
    });
  return groups;
};
/**
 * Maps the provided `products` to an array of `CompareGroup` objects, groups and sorts the resulting array, and returns the sorted array.
 *
 * @param products - An array of `Product` objects.
 * @param isPublicView - A boolean indicating whether the view is public.
 * @param getAttributeGroup - A function that takes in a group code and returns an `AttributeGroup` object.
 * @param getAttributeType - A function that takes in a type code and returns an `AttributeType` object.
 * @param systemOfMeasurement - The system of measurement for the products.
 * @param intl - The internationalization object for formatting dates and numbers.
 * @param locale - The locale for the current language.
 * @returns An array of `CompareGroup` objects.
 */
export const mapProductsWithAttributesToCompareGroups = (
  products: Product[],
  isPublicView: boolean,
  getAttributeGroup: (groupCode: string) => AttributeGroup | undefined,
  getAttributeType: (typeCode: string) => AttributeType | undefined,
  systemOfMeasurement: SystemOfMeasurement,
  intl: IntlShape,
  locale: string
): CompareGroup[] => {
  let list: CompareGroup[] = [];
  products.forEach((product, index) => {
    const mappedValues = mapAttributesToCompareGroups(
      product.attributes || [],
      isPublicView,
      product.number || '',
      index,
      getAttributeGroup,
      getAttributeType,
      systemOfMeasurement,
      intl,
      locale
    );
    list = list.concat(mappedValues);
  });

  const groupedGroups = groupArrayByKey<string, CompareGroup>('groupName')(
    list
  );

  return mergeGroups(groupedGroups);
};

/**
 * Maps the provided `attributes` to an array of `CompareGroup` objects, groups and sorts the resulting array, and returns the sorted array.
 *
 * @param attributes - An array of `Attribute` objects.
 * @param showPublicOnly - A boolean indicating whether to show only public attributes.
 * @param productNumber - The product number for the attributes.
 * @param index - The index of the product within the list of products.
 * @param getAttributeGroup - A function that takes in a group code and returns an `AttributeGroup` object.
 * @param getAttributeType - A function that takes in a type code and returns an `AttributeType` object.
 * @param systemOfMeasurement - The system of measurement for the products.
 * @param intl - The internationalization object for formatting dates and numbers.
 * @param locale - The locale for the current language.
 * @returns An array of `CompareGroup` objects.
 */
function mapAttributesToCompareGroups(
  attributes: Attribute[],
  showPublicOnly: boolean,
  productNumber: string,
  index: number,
  getAttributeGroup: (groupCode: string) => AttributeGroup | undefined,
  getAttributeType: (typeCode: string) => AttributeType | undefined,
  systemOfMeasurement: SystemOfMeasurement,
  intl: IntlShape,
  locale: string
): CompareGroup[] {
  const attributesWithGroupName: Array<
    Attribute & { attributeTypeGroupName: string }
  > = attributes.map(
    (
      attribute
    ): Attribute & {
      attributeTypeGroupName: string;
    } => {
      const attributeGroupFormatter = new AttributeGroupFormatter(
        getAttributeGroup(attribute.groupCode || ''),
        locale
      );
      return {
        ...attribute,

        attributeTypeGroupName:
          attributeGroupFormatter.formatName() ||
          intl.formatMessage(messages.generalTitle)
      };
    }
  );

  const groupedAttributes = groupArrayByKey<string, Attribute>(
    'attributeTypeGroupName'
  )(attributesWithGroupName);

  const compareGroups: CompareGroup[] = [];

  Object.entries(groupedAttributes).forEach(([key, items]) => {
    const compareAttributes = mapAttributesToCompareAttributes(
      items,
      index,
      productNumber,
      showPublicOnly,
      getAttributeType,
      systemOfMeasurement,
      intl,
      locale
    );
    // Only show add groups that have attributes, otherwise no need to show them
    if (compareAttributes.length !== 0) {
      compareGroups.push({
        groupName: key,
        attributes: compareAttributes
      });
    }
  });
  return compareGroups;
}
/**
 * Maps the provided `attributes` to an array of `CompareAttribute` objects, filters and sorts the resulting array, and returns the sorted array.
 *
 * @param attributes - An array of `Attribute` objects.
 * @param index - The index of the product within the list of products.
 * @param productNumber - The product number for the attributes.
 * @param showPublicOnly - A boolean indicating whether to show only public attributes.
 * @param getAttributeType - A function that takes in a type code and returns an `AttributeType` object.
 * @param systemOfMeasurement - The system of measurement for the products.
 * @param intl - The internationalization object for formatting dates and numbers.
 * @param locale - The locale for the current language.
 * @returns An array of `CompareAttribute` objects.
 */
function mapAttributesToCompareAttributes(
  attributes: Attribute[],
  index: number,
  productNumber: string,
  showPublicOnly: boolean,
  getAttributeType: (typeCode: string) => AttributeType | undefined,
  systemOfMeasurement: SystemOfMeasurement,
  intl: IntlShape,
  locale: string
): CompareAttribute[] {
  const groupedAttributes = groupArrayByKey<string, Attribute>('typeCode')(
    attributes
  );

  const compareAttributes: CompareAttribute[] = [];

  Object.entries(groupedAttributes).forEach(([key, items]) => {
    const attributeTypeFormatter = new AttributeTypeFormatter(
      getAttributeType(key),
      locale
    );
    const attributeValues = mapAttributesToAttributeValues(
      items,
      index,
      productNumber,
      attributeTypeFormatter.formatName(),
      systemOfMeasurement,
      intl,
      locale
    )
      .filter(item => {
        if (!showPublicOnly) {
          return true;
        }
        return item.isPublic === true;
      })
      .sort(sortProductCompareAttributeValues);

    if (attributeValues.length !== 0) {
      compareAttributes.push({
        attributeTypeName: attributeTypeFormatter.formatName(),
        description: attributeTypeFormatter.formatDescription(),
        typeCode: key,
        values: attributeValues
      });
    }
  });

  return compareAttributes;
}

function mapAttributesToAttributeValues(
  attributes: Attribute[],
  index: number,
  productNumber: string,
  attributeName: string,
  systemOfMeasurement: SystemOfMeasurement,
  intl: IntlShape,
  locale: string
): CompareAttributeValue[] {
  return attributes.map(attribute => {
    const specificationItemType = getDisplayValueType(attribute.value);
    const settings: AttributeSettings = FlaggedEnum.create<AttributeSettings>(
      AttributeSettings,
      attribute.settings || ''
    );
    const isPublic: boolean = !!(
      settings & AttributeSettings.DisplayOnProductSpecifications
    );
    const attributeFormatter: AttributeFormatter = new AttributeFormatter(
      attribute,
      intl,
      systemOfMeasurement,
      locale
    );
    return {
      typeCode: attribute.typeCode || '',
      columnIndex: index,
      isPublic: isPublic,
      productNumber: productNumber,
      attributeName,
      sortIndex: attribute.sortIndex || 0,
      text: attributeFormatter.formatDisplayValueWithConditions(
        systemOfMeasurement
      ),
      value: attribute.value,
      alternativeValue: attributeFormatter.formatDisplayValueWithConditions(
        systemOfMeasurement === 'Metric' ? 'US' : 'Metric'
      ),
      type: specificationItemType
    };
  });
}
