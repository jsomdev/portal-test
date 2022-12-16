import { BaseResource } from '../base/baseResource';
import { CartItem } from '../models/CartItem';

export class CartItemsResource extends BaseResource<CartItem> {
  constructor() {
    super('/cartItems');
  }
}
