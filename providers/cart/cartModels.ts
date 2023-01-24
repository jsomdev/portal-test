import { CartItem } from '@services/portal-api';

export type BaseCartItem = Pick<CartItem, 'productId' | 'productName'> &
  Required<Pick<CartItem, 'quantity' | 'productNumber'>>;

// State model describing the data that will be stored
export interface CartState {
  baseItems: BaseCartItem[] | null;
  initialized: boolean;
}

// Action types that describe how the cart data can be manipulated
export type CartAction =
  | {
      type: 'UPDATE';
      items: BaseCartItem[];
    }
  | {
      type: 'INITIALIZE';
      items: BaseCartItem[];
    };

export type CartReducer = (state: CartState, action: CartAction) => CartState;
