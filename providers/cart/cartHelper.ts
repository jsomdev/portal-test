import { CartItem } from '@providers/cart/cartContext';
import { BaseCartItem } from '@providers/cart/cartModels';
import { Product } from '@services/portal-api';
import { PriceBreak } from '@services/portal-api/base/types';
import {
  fetchAllPriceBreaksByNumber,
  fetchBaseDesignsByIds
} from '@services/portal-api/products';

export function combineCartItemsInformation(
  baseCartItems: BaseCartItem[],
  products: Product[] | undefined,
  productsPriceBreaks:
    | {
        productNumber: string;
        priceBreaks: PriceBreak[];
      }[]
    | undefined
): CartItem[] {
  const cartItems: CartItem[] = [];
  baseCartItems.map(cartItem => {
    const product: Product | undefined = products?.find(product => {
      return product.number === cartItem.productNumber;
    });
    const productPriceBreaks:
      | {
          productNumber: string;
          priceBreaks: PriceBreak[];
        }
      | undefined = productsPriceBreaks?.find(productPriceBreaks => {
      return productPriceBreaks.productNumber === cartItem?.productNumber;
    });
    return cartItems.push({
      ...cartItem,
      ...product,
      priceBreaks: productPriceBreaks?.priceBreaks || []
    });
  });
  return cartItems;
}

export async function getCombinedCartItemsProductInformation(
  baseCartItems: BaseCartItem[] | null,
  currentCartItems: CartItem[] | undefined,
  isAuthenticated: boolean,
  isVerified: boolean,
  isEmployee: boolean
): Promise<CartItem[]> {
  const currentCartItemProductNumbers: string[] = currentCartItems
    ?.filter(cartItem => cartItem.productNumber !== null)
    .map(cartItem => cartItem.productNumber) as string[];
  const missingItems: BaseCartItem[] | undefined = baseCartItems?.filter(
    baseItem =>
      baseItem.productNumber !== null &&
      !currentCartItemProductNumbers.includes(baseItem.productNumber)
  );

  const catalogIds: string[] =
    (missingItems &&
      (missingItems
        .map(baseItem => baseItem.productId)
        .filter(id => !!id) as string[])) ||
    [];
  const productNumbers: string[] =
    (missingItems &&
      (missingItems
        .map(baseItem => baseItem.productNumber)
        .filter(productNumber => !!productNumber) as string[])) ||
    [];

  const dataPromises: [
    Promise<Product[]>,
    Promise<
      | {
          productNumber: string;
          priceBreaks: PriceBreak[];
        }[]
      | undefined
    >
  ] = [
    fetchBaseDesignsByIds(catalogIds),
    fetchAllPriceBreaksByNumber(
      productNumbers,
      isAuthenticated,
      isVerified,
      isEmployee
    )
  ];

  const [products, productPriceBreaks]: [
    Product[],
    (
      | {
          productNumber: string;
          priceBreaks: PriceBreak[];
        }[]
      | undefined
    )
  ] = await Promise.all(dataPromises);

  const newCartItems: CartItem[] =
    (missingItems &&
      combineCartItemsInformation(
        missingItems,
        products,
        productPriceBreaks
      )) ||
    [];

  const updatedCurrentItems: CartItem[] =
    currentCartItems
      ?.filter(
        currentCartItem =>
          !!baseCartItems?.find(
            baseItem => baseItem.productNumber === currentCartItem.productNumber
          )
      )
      .map(currentCartItem => {
        // We can safely assume the BaseCartItem exists as we just filtered out the ones that don't have a BaseCartItem
        const baseItem: BaseCartItem = baseCartItems?.find(
          baseItem => baseItem.productNumber === currentCartItem.productNumber
        ) as BaseCartItem;
        return {
          ...currentCartItem,
          quantity: baseItem.quantity
        };
      }) || [];

  return [...newCartItems, ...updatedCurrentItems];
}
