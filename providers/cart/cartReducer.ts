import { CartAction, CartReducer, CartState } from './cartModels';

export const cartReducer: CartReducer = (
  currentState: CartState,
  action: CartAction
) => {
  switch (action.type) {
    case 'UPDATE':
      return currentState.initialized
        ? {
            ...currentState,
            baseItems: action.items
          }
        : { ...currentState };
    case 'INITIALIZE':
      return {
        ...currentState,
        baseItems: action.items,
        initialized: true
      };
    default:
      return {
        ...currentState
      };
  }
};
