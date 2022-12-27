import { IntlShape } from 'react-intl';

import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { AttributeFormatter } from '@services/i18n/formatters/entity-formatters/attributeFormatter';
import { AttributeGroupFormatter } from '@services/i18n/formatters/entity-formatters/attributeGroupFormatter';
import { AttributeTypeFormatter } from '@services/i18n/formatters/entity-formatters/attributeTypeFormatter';
import {
  getDisplayForSystemOfMeasurement,
  getDisplayValueType
} from '@services/i18n/formatters/entity-formatters/displayFormatter';
import { Attribute, AttributeGroup, AttributeType } from '@services/portal-api';
import { FlaggedEnum } from '@services/portal-api/flaggedEnum';
import { AttributeSettings } from '@services/portal-api/models/AttributeSettingsFlags';
import { groupArrayByKey } from '@utilities/groupBy';

import {
  ProductSpecificationsGroup,
  ProductSpecificationsItem
} from './productSpecifications.types';

/**
 * Function that will map the attributes:
 * - to have the groupCode on root level (groupBy key)
 * - group the mapped attributes by groupCode
 * - map the grouped entries to ProductSpecificationGroups with ProductSpecificationItems
 * @param attributes the attributes of a product that need to be mapped.
 */
export function mapAttributesToProductSpecificationGroups(
  attributes: Attribute[],
  getAttributeType: (code: string) => AttributeType | undefined,
  getAttributeGroup: (code: string) => AttributeGroup | undefined,
  systemOfMeasurement: SystemOfMeasurement,
  locale: string,
  intl: IntlShape,
  showPublicOnly: boolean = true
): ProductSpecificationsGroup[] {
  const attributesWithGroupName: Array<
    Attribute & { attributeTypeGroupName: string }
  > = attributes.map(
    (
      attribute
    ): Attribute & {
      attributeTypeGroupName: string;
    } => {
      const attributeGroupFormatter: AttributeGroupFormatter =
        new AttributeGroupFormatter(
          getAttributeGroup(attribute.groupCode || ''),
          locale
        );

      return {
        ...attribute,
        attributeTypeGroupName: attributeGroupFormatter.formatName()
      };
    }
  );

  const groupedAttributes = groupArrayByKey<string, Attribute>(
    'attributeTypeGroupName'
  )(attributesWithGroupName);

  const groups: ProductSpecificationsGroup[] = Object.keys(
    groupedAttributes
  ).map(key => {
    return {
      id: key,
      sortIndex: 0,
      name: key,
      description: '',
      items: mapAttributesToProductSpecificationItems(
        groupedAttributes[key],
        getAttributeType,
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
        .sort(sortProductSpecificationItems)
    };
  });

  return groups
    .filter(group => {
      return group.items.length > 0;
    })
    .sort(sortProductSpecificationGroups);
}

export function mapAttributesToProductSpecificationItems(
  attributes: Attribute[],
  getAttributeType: (code: string) => AttributeType | undefined,
  systemOfMeasurement: SystemOfMeasurement,
  intl: IntlShape,
  locale: string
): ProductSpecificationsItem[] {
  const items: ProductSpecificationsItem[] = attributes.map(attribute => {
    const settings: AttributeSettings = FlaggedEnum.create<AttributeSettings>(
      AttributeSettings,
      attribute.settings || ''
    );
    const attributeTypeFormatter: AttributeTypeFormatter =
      new AttributeTypeFormatter(
        getAttributeType(attribute.typeCode || ''),
        locale
      );
    const attributeFormatter: AttributeFormatter = new AttributeFormatter(
      attribute,
      intl,
      systemOfMeasurement,
      locale
    );
    const isPublic: boolean = !!(
      settings & AttributeSettings.DisplayOnProductSpecifications
    );
    return {
      isPublic,
      description: attributeTypeFormatter.formatDescription(),
      key: attribute.id || '',
      sortIndex: attribute.sortIndex || 0,
      value: attribute.value,
      name: attributeTypeFormatter.formatName(),
      alternativeText: attributeFormatter.formatDisplayValueWithConditions(
        systemOfMeasurement === 'Metric' ? 'US' : 'Metric'
      ),
      text: attributeFormatter.formatDisplayValueWithConditions(
        systemOfMeasurement
      ),
      type: getDisplayValueType(
        getDisplayForSystemOfMeasurement(
          attribute.displays || [],
          systemOfMeasurement
        )?.value
      ),
      attribute
    };
  });
  const concatenatedItems: ProductSpecificationsItem[] = [];
  // To concatenate multiple items with the same name into one we have to:
  // 1. sort them by sortIndex so the most important one is in front.
  // 2. map them so that we can add the text of the second item to the text of the first item.
  items.sort(sortProductSpecificationItems).forEach(item => {
    const index = concatenatedItems.findIndex(concatenatedItem => {
      //.name is the typeCode of the attribute
      return concatenatedItem.name === item.name;
    });

    if (index === -1) {
      concatenatedItems.push(item);
    } else {
      concatenatedItems[
        index
      ].text = `${concatenatedItems[index].text}, ${item.text}`;

      concatenatedItems[
        index
      ].alternativeText = `${concatenatedItems[index].alternativeText}, ${item.alternativeText}`;
    }
  });
  return concatenatedItems;
}

export function sortProductSpecificationItems(
  a: ProductSpecificationsItem,
  b: ProductSpecificationsItem
): number {
  return (
    a.sortIndex - b.sortIndex ||
    a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }) ||
    a.attribute?.typeCode?.localeCompare(b.attribute?.typeCode || '') ||
    0
  );
}

export function sortProductSpecificationGroups(
  a: ProductSpecificationsGroup,
  b: ProductSpecificationsGroup
): number {
  return a.sortIndex - b.sortIndex || a.name.localeCompare(b.name || '') || 0;
}
