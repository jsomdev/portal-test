import { BaseCartItem } from './cartModels';

export interface CartProviderProps {
  initialCartItems?: BaseCartItem[] | null;
}
