import { Order } from '../models/Order';
import { BaseResource } from '../base/baseResource';
export class OrdersResource extends BaseResource<Order> {
  constructor() {
    super('/Orders');
  }
}
