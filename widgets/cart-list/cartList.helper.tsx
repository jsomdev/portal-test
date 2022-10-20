import { BaseCartItem } from '@providers/cart/cartModels';

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
