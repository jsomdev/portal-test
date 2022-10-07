/**
 * Function that will map the attributes:
 * - to have the groupCode on root level (groupBy key)
 * - group the mapped attributes by groupCode
 * - map the grouped entries to ProductSpecificationGroups with ProductSpecificationItems
 * @param attributes the attributes of a product that need to be mapped.
 */
import {
  ProductSpecificationsGroup,
  ProductSpecificationsItem
} from '@components/product-items/productSpecifications.types';
import {
  getAttributeTextWithConditions,
  getDisplayForSystemOfMeasurement,
  getDisplayValueType
} from '@components/products/productDisplayHelper';
import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { defaultLanguage } from '@services/i18n';
import { Attribute, AttributeGroup, AttributeType } from '@services/portal-api';
import { FlaggedEnum } from '@services/portal-api/flaggedEnum';
import { AttributeSettings } from '@services/portal-api/models/AttributeSettingsFlags';
import { groupArrayByKey } from '@utilities/groupBy';
import {
  sortProductSpecificationGroups,
  sortProductSpecificationItems
} from '@utilities/sortBy';

export function mapProductAttributesToProductSpecificationGroups(
  attributes: Attribute[],
  getAttributeType: (code: string) => AttributeType | undefined,
  getAttributeGroup: (code: string) => AttributeGroup | undefined,
  showPublicOnly: boolean,
  systemOfMeasurement: SystemOfMeasurement
): ProductSpecificationsGroup[] {
  const attributesWithGroupName: Array<
    Attribute & { attributeTypeGroupName: string }
  > = attributes.map(
    (
      attribute
    ): Attribute & {
      attributeTypeGroupName: string;
    } => ({
      ...attribute,

      attributeTypeGroupName:
        getAttributeGroup(attribute.groupCode || '')?.name?.[defaultLanguage] ||
        'General'
    })
  );

  const groupedAttributes = groupArrayByKey<string, Attribute>(
    'attributeTypeGroupName'
  )(attributesWithGroupName);

  const groups: ProductSpecificationsGroup[] = Object.entries(
    groupedAttributes
  ).map(([key]) => {
    return {
      id: key,
      sortIndex: 0,
      name: key,
      description: '',
      items: mapAttributesToProductSpecificationItems(
        groupedAttributes[key],
        getAttributeType,
        systemOfMeasurement
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

export function mapKeyAttributesToProductSpecificationItems(
  attributes: Attribute[],
  getAttributeType: (code: string) => AttributeType | undefined,
  systemOfMeasurement: SystemOfMeasurement
): ProductSpecificationsItem[] {
  const keyAttributes: Attribute[] = attributes.filter(
    (attribute: Attribute) => {
      const settings: AttributeSettings = FlaggedEnum.create<AttributeSettings>(
        AttributeSettings,
        attribute.settings || ''
      );
      return settings & AttributeSettings.DisplayOnProductCharacteristics;
    }
  );
  return mapAttributesToProductSpecificationItems(
    keyAttributes,
    getAttributeType,
    systemOfMeasurement
  );
}

export function mapAttributesToProductSpecificationItems(
  attributes: Attribute[],
  getAttributeType: (code: string) => AttributeType | undefined,
  systemOfMeasurement: SystemOfMeasurement
): ProductSpecificationsItem[] {
  const items: ProductSpecificationsItem[] = attributes.map(attribute => {
    const settings: AttributeSettings = FlaggedEnum.create<AttributeSettings>(
      AttributeSettings,
      attribute.settings || ''
    );
    const isPublic: boolean = !!(
      settings & AttributeSettings.DisplayOnProductSpecifications
    );
    return {
      isPublic,
      description:
        getAttributeType(attribute.typeCode || '')?.description?.[
          defaultLanguage
        ] || '',
      key: attribute.id || '',
      sortIndex: attribute.sortIndex || 0,
      value: attribute.value,
      name:
        getAttributeType(attribute.typeCode || '')?.name?.[defaultLanguage] ||
        '',
      alternativeText: getAttributeTextWithConditions(
        attribute,
        systemOfMeasurement === 'Metric' ? 'US' : 'Metric'
      ),
      text: getAttributeTextWithConditions(attribute, systemOfMeasurement),
      type: getDisplayValueType(
        getDisplayForSystemOfMeasurement(
          attribute.displays || undefined,
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
