/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { CatalogEntry } from './CatalogEntry';
import type { Family } from './Family';
import type { Model } from './Model';

export type Series = CatalogEntry & {
  familyId?: string | null;
  family?: Family | null;
  models?: Array<Model>;
};
