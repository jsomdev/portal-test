import { MenuItem } from '../models/MenuItem';
import { BaseResource } from '../base/baseResource';
export class MenuItemsResource extends BaseResource<MenuItem> {
  constructor() {
    super('/MenuItems');
  }
}
