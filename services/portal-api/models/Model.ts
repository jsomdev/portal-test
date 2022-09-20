/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attribute } from './Attribute';
import type { CatalogEntry } from './CatalogEntry';
import type { Product } from './Product';
import type { Series } from './Series';

export type Model = CatalogEntry & {
  seriesId?: string | null;
  attributes?: Array<Attribute>;

  series?: Series | null;
  products?: Array<Product>;
};
