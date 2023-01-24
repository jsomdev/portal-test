/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { ComplexEntity } from './ComplexEntity';

export type PostalAddress = ComplexEntity & {
  lines?: Array<string | null>;
  postalCode?: string | null;
  city?: string | null;
  region?: string | null;
  country?: string | null;
};
