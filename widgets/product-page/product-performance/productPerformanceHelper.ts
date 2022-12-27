import { Attribute } from '@services/portal-api';

/**
 * Returns an array of attributes that contain conditions needed to create a performance chart
 * @param attribteTypeCode the code of an attribute type we want to create a performance chart of
 * @param attributes an array of Attribute that will be filtered
 */
export function filterProductPerformanceChartAttributes(
  attributeTypeCode: string,
  attributes: Attribute[] | undefined
): Attribute[] {
  // 1. If there are no attributes, we return an empty array
  if (attributes === undefined) {
    return [];
  }
  // 2. Filter all attributes based on 2 conditionals and return the attribute if both conditionals are true
  const chartAttributes: Attribute[] = attributes?.filter(attribute => {
    // Condition 1: does the attributeTypeId match the expected attributeTypeId
    const isAttributeType: boolean = attribute.typeCode === attributeTypeCode;
    // Condition 2: the attribute must have conditions where the value is neither null or undefined
    const attributeHasValidConditions: boolean = !!attribute.conditions?.filter(
      condition => condition?.value !== undefined || condition?.value !== null
    ).length;
    // We return true if both conditionals are true
    return isAttributeType && attributeHasValidConditions;
  });
  return chartAttributes;
}
