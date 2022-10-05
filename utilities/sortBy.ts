import {
  ProductSpecificationsGroup,
  ProductSpecificationsItem
} from '@components/product-items/productSpecifications.types';
import { BaseCartItem } from '@providers/cart/cartModels';
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

export function sortCartItemsByProductNumber(
  a: BaseCartItem,
  b: BaseCartItem
): number {
  return (
    a.productNumber
      ?.toLowerCase()
      .localeCompare(b.productNumber?.toLowerCase() || '') || -1
  );
}

export function sortProductSpecificationItems(
  a: ProductSpecificationsItem,
  b: ProductSpecificationsItem
): number {
  return (
    a.sortIndex - b.sortIndex ||
    a.name.toLowerCase().localeCompare(b.name.toLowerCase()) ||
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
