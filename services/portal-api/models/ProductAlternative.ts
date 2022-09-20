/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { Product } from './Product';
import type { Relationship } from './Relationship';

export type ProductAlternative = Relationship & {
  alternativeId?: string;
  alternative?: Product | null;
};
