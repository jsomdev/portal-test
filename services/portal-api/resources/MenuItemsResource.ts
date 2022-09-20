import { BaseResource } from '../base/baseResource';
import { MenuItem } from '../models/MenuItem';

export class MenuItemsResource extends BaseResource<MenuItem> {
  constructor() {
    super('/MenuItems');
  }
}
