/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { Relationship } from './Relationship';

export type SiteArea = Relationship & {
  countryCode?: string | null;
  postalCode?: string | null;
};
