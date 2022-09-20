/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { CatalogEntry } from './CatalogEntry';
import type { Series } from './Series';

export type Family = CatalogEntry & {
  series?: Array<Series>;
};
