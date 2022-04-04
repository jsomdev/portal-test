/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MultilingualString } from './MultilingualString';
import type { Resource } from './Resource';
import type { TracedEntity } from './TracedEntity';

export type CatalogEntry = TracedEntity & {
  number?: string | null;
  name?: MultilingualString;
  description?: MultilingualString | null;
  imageId?: string | null;
  seoPath?: string | null;
  image?: Resource | null;
  slug?: MultilingualString;
  resources?: Array<Resource>;
};
