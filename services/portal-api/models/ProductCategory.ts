/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { Category } from './Category';
import type { ProductCategoryType } from './ProductCategoryType';
import type { Relationship } from './Relationship';

export type ProductCategory = Relationship & {
  type?: ProductCategoryType;
  categoryId?: string | null;
  category?: Category | null;
};
