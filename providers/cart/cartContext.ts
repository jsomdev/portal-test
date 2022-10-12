import React from 'react';

import { MultilingualString, Product } from '@services/portal-api';
import { PriceBreak } from '@services/portal-api/base/types';
import { ReactQueryStatus } from '@services/react-query/types';

import { BaseCartItem } from './cartModels';

export type CartItem = BaseCartItem &
  Partial<Product> & {
    priceBreaks?: PriceBreak[];
  };

interface CartContextModel {
  /** Array of BaseCartItems that are stored either in de api or in your cookies. */
  baseItems: BaseCartItem[];
  /** Array of BaseCartItems stored in your cookies */
  cookieBaseItems: BaseCartItem[];
  /** Array of BaseCartItems combined with product and pricing information that needs to be retrieved asynchronously. */
  items: CartItem[];
  /**
   * ReactQueryStatus that returns the current status of the product and pricing information logic.
   */
  itemsStatus: ReactQueryStatus;
  /** Memoized Array of CartItems that are available for checkout. */
  checkoutItems: CartItem[];
  /** Total Price of the cart items */
  totalPrice: number;
  /** Memoized Array of CartItems that are only available for quotation. */
  quoteItems: CartItem[];
  /** Boolean that indicates whether the cart has been initialized (persisted data has been pushed to state). */
  initialized: boolean;
  /** Total amount of items in your cart. */
  totalItems: number;

  /**
   * Function that will either increase the quantity of a CartItem if the item is already in the cart.
   * Otherwise it will create a new item.
   * @param id Identifier of the CartItem.
   * @param productNumber ProductNumber of the CartItem.
   * @param quantityToAdd Value to increase the quantity with.
   * @param productName ProductName of the CartItem.
   */
  add: (
    id: string | null,
    productNumber: string,
    quantityToAdd: number,
    productName?: MultilingualString | null
  ) => BaseCartItem;
  /**
   * Function that will update an existing cart item with a new quantity
   * @param productNumber Identifier of the CartItem
   * @param updatedQuantity Value to overwrite the existing quantity with
   */
  updateItem: (
    productNumber: string,
    updatedQuantity: number
  ) => BaseCartItem | undefined;
  /**
   * Function that will remove a CartItem if either no quantityToRemove was passed,
   * or if the resulting quantity is 0 or lower. If the item does not exist, nothing will happen.
   * @param productNumber Identifier of the CartItem.
   * @param quantityToRemove (optional) Value to decrease the quantity with.
   */
  remove: (
    productNumber: string,
    quantityToRemove?: number
  ) => BaseCartItem | undefined;
  /**
   * Function that will return how many items are in the Cart.
   */
  countItems: () => number;
  /**
   * Function that will return the quantity of a CartItem that matches the id.
   * If no id was passed it will return the sum of all quantities.
   * @param productNumber Identifier of the CartItem.
   */
  getQuantity: (productNumber?: string) => number;
  /**
   * Function that will remove all items.
   */
  clear: (productNumbers?: string[]) => BaseCartItem[];
  /**
   * Function that will clear the items stored in the cookies.
   */
  clearCookie: () => void;
  /**
   * Function that will clear the items stored in the cookies.
   */
  mergeCookie: () => void;
  /**
   * Function that will merge an array of BaseCartItems that need to be added with the current Cart.
   */
  merge: (items: BaseCartItem[]) => BaseCartItem[];
  /**
   * Function that will return a CartItem if there's one stored.
   * If the productNumber is not found, undefined will be returned.
   * @param productNumber Identifier of the CartItem.
   */
  getItem: (productNumber: string) => BaseCartItem | undefined;
}

const initialCartContext: CartContextModel = {
  baseItems: [],
  cookieBaseItems: [],
  totalItems: 0,
  items: [],
  quoteItems: [],
  itemsStatus: 'idle',
  checkoutItems: [],
  totalPrice: 0,
  initialized: false,
  add: () => {
    throw new Error('Not implemented yet');
  },
  updateItem: () => {
    throw new Error('Not implemented yet');
  },
  remove: () => {
    throw new Error('Not implemented yet');
  },
  countItems: () => {
    throw new Error('Not implemented yet');
  },
  getQuantity: () => {
    throw new Error('Not implemented yet');
  },
  clear: () => {
    throw new Error('Not implemented yet');
  },
  clearCookie: () => {
    throw new Error('Not implemented yet');
  },
  merge: () => {
    throw new Error('Not implemented yet');
  },
  mergeCookie: () => {
    throw new Error('Not implemented yet');
  },
  getItem: () => {
    throw new Error('Not implemented yet');
  }
};

export const CartContext: React.Context<CartContextModel> =
  React.createContext<CartContextModel>(initialCartContext);

export const useCart = (): CartContextModel =>
  React.useContext<CartContextModel>(CartContext);
