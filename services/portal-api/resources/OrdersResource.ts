import { BaseResource } from '../base/baseResource';
import { Order } from '../models/Order';

export class OrdersResource extends BaseResource<Order> {
  constructor() {
    super('/orders');
  }
}
