import { CartItem } from '../models/CartItem';
import { BaseResource } from '../base/baseResource';
export class CartItemsResource extends BaseResource<CartItem> {
  constructor() {
    super('/CartItems');
  }
}
