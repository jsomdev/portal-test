import { ProductView } from '@providers/recently-viewed/models';
import { OrderLine } from '@services/portal-api';
import { ShippingCostAmount } from '@services/portal-api/base/types';

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
