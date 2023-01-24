/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { ComplexLinkedEntity } from './ComplexLinkedEntity';
import type { VariationFlags } from './VariationFlags';

export type Display = ComplexLinkedEntity & {
  variation?: VariationFlags;
  unitSymbol?: string | null;
};
