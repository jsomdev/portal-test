/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { ComplexLinkedEntity } from './ComplexLinkedEntity';
import type { Display } from './Display';

export type Condition = ComplexLinkedEntity & {
  displays?: Array<Display | null>;
  sortIndex?: number;
  typeCode?: string | null;
  unitSymbol?: string | null;
  valueId?: string | null;
};
