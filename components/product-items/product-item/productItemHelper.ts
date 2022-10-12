import { ProductSpecificationsItem } from '@components/product-items/productSpecifications.types';
import { mapAttributesToProductSpecificationItems } from '@components/products/productSpecificationsHelper';
import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { Attribute, AttributeType } from '@services/portal-api';
import { sortProductSpecificationItems } from '@utilities/sortBy';

export function getProductKeySpecifications(
  keyAttributes: Attribute[],
  getAttributeType: (typeCode: string) => AttributeType | undefined,
  systemOfMeasurement: SystemOfMeasurement
): ProductSpecificationsItem[] {
  const items: ProductSpecificationsItem[] =
    mapAttributesToProductSpecificationItems(
      keyAttributes,
      getAttributeType,
      systemOfMeasurement
    );
  return items.sort(sortProductSpecificationItems);
}
