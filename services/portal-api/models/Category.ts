/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { AudienceFlags } from './AudienceFlags';
import type { CatalogEntry } from './CatalogEntry';
import { Setting } from './Setting';

export type Category = CatalogEntry & {
  parentId?: string | null;
  settings?: Array<Setting> | null;
  sortIndex?: number;
  audience?: AudienceFlags | null;
  children?: Array<Category>;
  parent?: Category | null;
};
