import { ProductView } from '@providers/recently-viewed/models';
import { OrderLine } from '@services/portal-api';
import { ShippingCostAmount } from '@services/portal-api/base/types';
import {
  CompareAttributeValue,
  CompareGroup
} from '@widgets/compare/detailed-comparison/detailedCompare.types';

/**
 * Sorts an array of OrderLine objects by product number in ascending order.
 * @param a - The first OrderLine object to compare.
 * @param b - The second OrderLine object to compare.
 * @returns A number indicating the sort order of the two OrderLine objects.
 */
export function sortOrderLinesByProductNumber(
  a: OrderLine,
  b: OrderLine
): number {
  return (
    a.productNumber
      ?.toLowerCase()
      .localeCompare(b.productNumber?.toLowerCase() || '') || -1
  );
}

/**
 * Sorts an array of ShippingCostAmount objects by cost amount in ascending order.
 * @param a - The first ShippingCostAmount object to compare.
 * @param b - The second ShippingCostAmount object to compare.
 * @returns A number indicating the sort order of the two ShippingCostAmount objects.
 */
export function sortShippingOptionsByCostAscending(
  a: ShippingCostAmount,
  b: ShippingCostAmount
): number {
  return a.amount - b.amount;
}

/**
 * Sorts an array of ProductView objects by last viewed on date in descending order.
 * @param a - The first ProductView object to compare.
 * @param b - The second ProductView object to compare.
 * @returns A number indicating the sort order of the two ProductView objects.
 */
export function sortProductViewsByLastViewedOn(
  a: ProductView,
  b: ProductView
): number {
  return (
    new Date(b.lastViewedOn).getTime() - new Date(a.lastViewedOn).getTime()
  );
}

/**
 * Compares two compare groups based on their group names.
 * @param a The first compare group to compare.
 * @param b The second compare group to compare.
 * @returns A number indicating the sort order of the compare groups. A value less than 0 indicates that `a` should be sorted before `b`. A value greater than 0 indicates that `b` should be sorted before `a`. A value of 0 indicates that the compare groups are equal and their order does not matter.
 */
export function sortCompareGroups(a: CompareGroup, b: CompareGroup): number {
  return a.groupName.localeCompare(b.groupName);
}

/**
 * Compares two compare attribute values based on their sort index, text value, and type code.
 * @param a The first compare attribute value to compare.
 * @param b The second compare attribute value to compare.
 * @returns A number indicating the sort order of the compare attribute values. A value less than 0 indicates that `a` should be sorted before `b`. A value greater than 0 indicates that `b` should be sorted before `a`. A value of 0 indicates that the compare attribute values are equal and their order does not matter.
 */
export function sortProductCompareAttributeValues(
  a: CompareAttributeValue,
  b: CompareAttributeValue
): number {
  if (typeof a.text === 'string' && typeof b.text === 'string') {
    // If both values are strings, sort them based on their sort index and then their lowercase text value
    return (
      a.sortIndex - b.sortIndex ||
      a.text.toLowerCase().localeCompare(b.text.toLowerCase())
    );
  }
  if (typeof a.text === 'number' && typeof b.text === 'number') {
    // If both values are numbers, sort them based on their sort index and then their numeric value
    return a.sortIndex - b.sortIndex || a.text - b.text;
  }
  // If the values are not both strings or both numbers, sort them based on their sort index and then their type code
  return (
    a.sortIndex - b.sortIndex ||
    a.typeCode?.localeCompare(b.typeCode || '') ||
    0
  );
}
