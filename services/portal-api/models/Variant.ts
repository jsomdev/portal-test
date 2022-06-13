/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComplexLinkedEntity } from './ComplexLinkedEntity';
import type { Display } from './Display';
import type { MultilingualString } from './MultilingualString';

export type Variant = ComplexLinkedEntity & {
  productId?: string;
  productNumber?: string | null;
  productName?: MultilingualString | null;
  productSeoPath?: string | null;
  displays?: Array<Display | null>;
  sortIndex?: number;
};
