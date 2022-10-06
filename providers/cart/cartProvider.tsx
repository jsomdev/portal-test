import React, { useCallback, useEffect, useState } from 'react';

import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';

import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { useMe } from '@providers/user/userContext';
import { useClaims } from '@services/authentication/claims';
import { COOKIESKEYS } from '@services/cookies/constants';
import {
  CartItem as ApiCartItem,
  MultilingualString
} from '@services/portal-api';
import { updateCart } from '@services/portal-api/users';
import { QUERYKEYS } from '@services/react-query/constants';
import { useDebouncedCallback } from '@utilities/useDebouncedCallback';

import { MAX_CART_QUANTITY, MIN_CART_QUANTITY } from './cartConstants';
import { CartContext, CartItem } from './cartContext';
import { getCombinedCartItemsProductInformation } from './cartHelper';
import { BaseCartItem } from './cartModels';
import { CartProviderProps } from './cartProvider.types';
import { cartReducer } from './cartReducer';

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  // Cart Cookie that will be used to initialize (if not authenticated) or merge (if authenticated) your cart.
  const [cookies, setCookie] = useCookies([COOKIESKEYS.cart]);
  // Base Cart Items that are set in the cookies
  const [cookieBaseItems, setCookieBaseItems] = useState<BaseCartItem[]>([]);
  const isAuthenticated = useIsAuthenticated();
  const { inProgress } = useMsal();
  const { me, meStatus } = useMe();
  const { isVerifiedCustomer: isVerified, isEmployee } = useClaims();

  // Base Cart Items cart functionality
  const [cartState, cartDispatch] = React.useReducer(cartReducer, {
    initialized: false,
    baseItems: null
  });
  const [items, setItems] = React.useState<CartItem[]>([]);

  /**
   * This is a controlled query that will combine updated BaseCartItems (when an item gets added, updated er removed), Products
   * and PriceBreaks into an array of CartItems.
   * If one or more BaseCartItems are removed, the CartItem(s) with pricing and product information will no longer be included.
   * If one or more BaseCartItems are updated, for which CartItems with pricing and product information already exist, the CartItems will have its quanitty updated.
   * If one ore more BaseCartItems are added, the Product and Pricing information will be retrieved and combined into CartItems
   *
   * The PriceBreak calls and Product information calls happen parallel. So there is no longer wait time to get information about a BaseCartItem.
   * It is simply more controlled this way.
   */
  const { status: itemsStatus } = useQuery(
    [
      QUERYKEYS.appCartItems,
      cartState.baseItems,
      isAuthenticated,
      isVerified,
      isEmployee
    ],
    () =>
      getCombinedCartItemsProductInformation(
        cartState.baseItems,
        items,
        isAuthenticated,
        isVerified,
        isEmployee
      ),
    {
      onSuccess: data => setItems(data),
      keepPreviousData: true,
      enabled: cartState.initialized
    }
  );

  // Cart Items that are available for quotation
  const quoteItems: CartItem[] = React.useMemo(() => {
    return (
      items?.filter(cartItem => {
        // Check if there is a valid pricebreak for the current quantity

        return !cartItem.priceBreaks?.find(
          priceBreak =>
            priceBreak.minimumQuantity <= cartItem.quantity &&
            priceBreak.maximumQuantity >= cartItem.quantity &&
            !!priceBreak.price
        );
      }) || []
    );
  }, [items]);

  // Cart Items that are available for checkout
  const checkoutItems: CartItem[] = React.useMemo(() => {
    return (
      items?.filter(cartItem => {
        // Check if there is a valid pricebreak for the current quantity
        return !!cartItem.priceBreaks?.find(
          priceBreak =>
            priceBreak.minimumQuantity <= cartItem.quantity &&
            priceBreak.maximumQuantity >= cartItem.quantity &&
            !!priceBreak.price
        );
      }) || []
    );
  }, [items]);

  // Debounced callback that will call the update cart when it needs to be persisted
  const persistCart = useDebouncedCallback(
    (items: ApiCartItem[], isAuthenticated: boolean) =>
      updateCart(items, isAuthenticated).catch(() =>
        alert(
          'The server encountered a problem. Your cart could not be saved. Please contact your local support if this problem persists.'
        )
      ),
    500
  );

  // Initialisation Effect
  useEffect(() => {
    const isReady: boolean =
      inProgress === InteractionStatus.None && meStatus !== 'loading';

    if (isReady && !cartState.initialized) {
      let initialItems: BaseCartItem[] = [];

      if (isAuthenticated) {
        initialItems =
          me?.cart?.map(
            (cartItem): BaseCartItem => ({
              productId: cartItem.productId,
              productName: cartItem.productName,
              productNumber: cartItem.productNumber || null,
              quantity: cartItem.quantity || 1
            })
          ) || [];
      }
      if (!isAuthenticated) {
        const parsedItems: BaseCartItem[] = cookies[COOKIESKEYS.cart];
        // Check if cookie is correct format
        const isCookieArrayOfBaseCartItems: boolean =
          Array.isArray(parsedItems) &&
          parsedItems[0] &&
          'quantity' in parsedItems[0] &&
          'productNumber' in parsedItems[0];
        if (isCookieArrayOfBaseCartItems) {
          initialItems = parsedItems;
        }
      }

      cartDispatch({
        type: 'INITIALIZE',
        items: initialItems
      });
    }
  }, [
    inProgress,
    meStatus,
    isAuthenticated,
    cookies,
    me,
    cartState.initialized
  ]);

  // Cookie Parsing Effect
  useEffect(() => {
    if (me && meStatus === 'success') {
      const parsedItems: BaseCartItem[] = cookies[COOKIESKEYS.cart];
      // Check if cookie is correct format
      const isCookieArrayOfBaseCartItems: boolean =
        Array.isArray(parsedItems) &&
        parsedItems[0] &&
        'quantity' in parsedItems[0] &&
        'productNumber' in parsedItems[0];
      if (isCookieArrayOfBaseCartItems) {
        setCookieBaseItems(parsedItems);
      }
    }
  }, [cookies, me, meStatus]);

  // Total Price for the items in your cart (excludes shipping etc...)
  const totalPrice: number | undefined = React.useMemo(() => {
    let totalPrice = 0;
    checkoutItems?.map(item => {
      const currentPriceBreak = item.priceBreaks?.find(priceBreak => {
        return (
          item.quantity >= priceBreak.minimumQuantity &&
          item.quantity <= priceBreak.maximumQuantity
        );
      });
      if (currentPriceBreak) {
        return (totalPrice += currentPriceBreak?.price * item.quantity);
      } else return null;
    });
    return totalPrice;
  }, [checkoutItems]);

  const getItem = useCallback(
    (productNumber: string): BaseCartItem | undefined => {
      return cartState.baseItems?.find(
        item => item.productNumber === productNumber
      );
    },
    [cartState.baseItems]
  );

  const updateItems = useCallback(
    (items: BaseCartItem[]) => {
      if (isAuthenticated) {
        persistCart(items, isAuthenticated);
      }
      if (!isAuthenticated) {
        setCookie(COOKIESKEYS.cart, JSON.stringify(items));
      }
      cartDispatch({
        type: 'UPDATE',
        items: items
      });
    },
    [persistCart, setCookie, isAuthenticated]
  );

  const merge = useCallback(
    (items: BaseCartItem[]) => {
      const validItems = [...items, ...(cartState.baseItems || [])].filter(
        item => !!item.productNumber && item.quantity >= 1
      );
      const mergedItems: BaseCartItem[] = [];

      validItems.forEach(item => {
        const uniqueItemIndex: number = mergedItems
          .map(item => item.productNumber)
          .indexOf(item.productNumber);

        if (uniqueItemIndex === -1) {
          if (item.quantity < MIN_CART_QUANTITY) {
            item.quantity = 1;
          }
          if (item.quantity > MAX_CART_QUANTITY) {
            item.quantity = MAX_CART_QUANTITY;
          }
          mergedItems.push(item);
        } else {
          let mergedQuantity: number =
            mergedItems[uniqueItemIndex].quantity + item.quantity;
          if (mergedQuantity < MIN_CART_QUANTITY) {
            mergedQuantity = 1;
          }
          if (mergedQuantity > MAX_CART_QUANTITY) {
            mergedQuantity = MAX_CART_QUANTITY;
          }

          mergedItems[uniqueItemIndex].quantity = mergedQuantity;
        }
      });

      updateItems(mergedItems);
      return mergedItems;
    },
    [cartState.baseItems, updateItems]
  );

  const add = useCallback(
    (
      productId: string | null,
      productNumber: string,
      quantityToAdd: number,
      productName?: MultilingualString | null
    ): BaseCartItem => {
      const existingItem: BaseCartItem | undefined = getItem(productNumber);

      // If the item is already in the cart.
      if (existingItem !== undefined) {
        let updatedQuantity: number = existingItem.quantity + quantityToAdd;
        if (updatedQuantity < MIN_CART_QUANTITY) {
          updatedQuantity = MIN_CART_QUANTITY;
        }
        if (updatedQuantity > MAX_CART_QUANTITY) {
          updatedQuantity = MAX_CART_QUANTITY;
        }
        // Update it's quantity.
        const updatedItem: BaseCartItem = {
          ...existingItem,
          quantity: updatedQuantity
        };
        const updatedItems: BaseCartItem[] = [
          ...(cartState.baseItems?.filter(
            item => item.productNumber !== updatedItem.productNumber
          ) || []),
          updatedItem
        ];
        // And dispatch the action to store the updated item in the state.
        updateItems(updatedItems);
        if (quantityToAdd > MAX_CART_QUANTITY) {
          quantityToAdd = MAX_CART_QUANTITY;
        }
        return { ...updatedItem, quantity: quantityToAdd };
      }
      // If the item is not in the cart, a new item needs to be created.
      const newItem: BaseCartItem = {
        productId,
        productNumber,
        productName,
        quantity: quantityToAdd
      };
      const updatedItems: BaseCartItem[] = [
        ...(cartState.baseItems || []),
        newItem
      ];
      // And dispatch the action to store the new item in the state.
      updateItems(updatedItems);

      return newItem;
    },
    [getItem, cartState.baseItems, updateItems]
  );
  const totalItems = React.useMemo(() => {
    return items?.map(item => item.quantity).reduce((a, b) => a + b, 0);
  }, [items]);

  const updateItem = useCallback(
    (
      productNumber: string,
      updatedQuantity: number
    ): BaseCartItem | undefined => {
      const existingItem: BaseCartItem | undefined = getItem(productNumber);
      if (existingItem !== undefined) {
        const updatedItem: BaseCartItem = {
          ...existingItem,
          quantity: updatedQuantity
        };
        const updatedItems: BaseCartItem[] = [
          ...(cartState.baseItems?.filter(
            item => item.productNumber !== updatedItem.productNumber
          ) || []),
          updatedItem
        ];
        updateItems(updatedItems);
        return updatedItem;
      }
      return undefined;
    },
    [getItem, cartState.baseItems, updateItems]
  );

  const remove = useCallback(
    (
      productNumber: string,
      quantityToRemove?: number
    ): BaseCartItem | undefined => {
      const existingItem: BaseCartItem | undefined = getItem(productNumber);
      // Check if item exists
      if (existingItem !== undefined) {
        // Calculate the new quantity
        const newQuantity: number =
          quantityToRemove === undefined
            ? 0
            : existingItem.quantity - quantityToRemove;
        // If the new quantity for the product is equal or less than 0, the item will be removed
        if (newQuantity <= 0) {
          const updatedItems: BaseCartItem[] = [
            ...(cartState.baseItems || []).filter(
              item => item.productNumber !== productNumber
            )
          ];
          updateItems(updatedItems);
          return existingItem;
        }

        // If there is a valid quantity, an item is updated with the new quantity
        const updatedItem: BaseCartItem = {
          ...existingItem,
          quantity: newQuantity
        };
        const updatedItems: BaseCartItem[] = [
          ...(cartState.baseItems || []).filter(
            item => item.productNumber !== productNumber
          ),
          updatedItem
        ];

        // Update the items with the updated quantity
        updateItems(updatedItems);
        return updatedItem;
      }
      return undefined;
    },
    [getItem, cartState.baseItems, updateItems]
  );

  function clear(productNumbers?: string[] | undefined): BaseCartItem[] {
    const updatedCart: BaseCartItem[] | undefined = !productNumbers?.length
      ? []
      : cartState.baseItems?.filter(
          item =>
            item.productNumber && !productNumbers?.includes(item.productNumber)
        );

    updateItems(updatedCart || []);
    return updatedCart || [];
  }

  const getQuantity = useCallback(
    (productNumber?: string): number => {
      // Filter out any other item if the id is passed the get the quantity for that particular item.
      return (
        cartState.baseItems
          ?.filter((item: BaseCartItem) =>
            productNumber !== undefined
              ? productNumber === item.productNumber
              : true
          )
          .map((item: BaseCartItem) => item.quantity)
          .reduce((a, b) => a + b, 0) || 0
      );
    },
    [cartState.baseItems]
  );

  const countItems: () => number = useCallback(() => {
    return cartState.baseItems?.length || 0;
  }, [cartState.baseItems]);

  const clearCookie = useCallback(() => {
    setCookie(COOKIESKEYS.cart, []);
    setCookieBaseItems([]);
  }, [setCookie]);

  const mergeCookie = useCallback(() => {
    merge(cookieBaseItems);
    clearCookie();
  }, [clearCookie, cookieBaseItems, merge]);

  return (
    <CartContext.Provider
      value={{
        baseItems: cartState.baseItems || [],
        cookieBaseItems,
        items,
        itemsStatus,
        quoteItems,
        totalItems,
        checkoutItems,
        totalPrice,
        initialized: cartState.initialized,
        merge,
        add,
        updateItem,
        clear,
        countItems,
        getItem,
        getQuantity,
        remove,
        clearCookie,
        mergeCookie
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
