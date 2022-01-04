import { ProductView } from '@providers/recently-viewed/models';

import { OrderLine } from '../services/portal-api';
import { ShippingCostAmount } from '../services/portal-api/base/types';

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

export function sortShippingOptionsByCostAscending(
  a: ShippingCostAmount,
  b: ShippingCostAmount
): number {
  return a.amount - b.amount;
}

export function sortProductViewsByLastViewedOn(
  a: ProductView,
  b: ProductView
): number {
  return (
    new Date(b.lastViewedOn).getTime() - new Date(a.lastViewedOn).getTime()
  );
}
