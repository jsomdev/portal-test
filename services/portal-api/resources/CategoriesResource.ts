import { BaseResource } from '../base/baseResource';
import { Category } from '../models/Category';

export class CategoriesResource extends BaseResource<Category> {
  constructor() {
    super('/categories');
  }
}
