/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { LinkedEntity } from './LinkedEntity';
import type { MultilingualString } from './MultilingualString';
import type { Product } from './Product';

export type CartItem = LinkedEntity & {
  productId?: string | null;
  productName?: MultilingualString | null;
  productNumber?: string | null;
  quantity?: number;
  product?: Product | null;
};
