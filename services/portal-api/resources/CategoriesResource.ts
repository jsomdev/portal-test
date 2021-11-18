import { Category } from '../models/Category';
import { BaseResource } from '../base/baseResource';
export class CategoriesResource extends BaseResource<Category> {
  constructor() {
    super('/Categories');
  }
}
