/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AudienceFlags } from './AudienceFlags';
import type { CatalogEntry } from './CatalogEntry';
import type { CategorySettingsFlags } from './CategorySettingsFlags';

export type Category = CatalogEntry & {
  parentId?: string | null;
  settings?: CategorySettingsFlags | null;
  sortIndex?: number;
  audience?: AudienceFlags | null;
  children?: Array<Category>;
  parent?: Category | null;
};
