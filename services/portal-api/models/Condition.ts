/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComplexLinkedEntity } from './ComplexLinkedEntity';
import type { Display } from './Display';

export type Condition = ComplexLinkedEntity & {
  typeCode?: string;
  unitSymbol?: string | null;
  valueId?: string | null;
  displays?: Array<Display | null>;
  sortIndex?: number;
};
