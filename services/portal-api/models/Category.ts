/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CatalogEntry } from './CatalogEntry';
import type { CategorySettingsFlags } from './CategorySettingsFlags';

export type Category = CatalogEntry & {
  settings?: CategorySettingsFlags | null;
  parentId?: string | null;
  sortIndex?: number;
  parent?: Category | null;
  children?: Array<Category>;
};
