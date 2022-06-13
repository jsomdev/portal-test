/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { AudienceFlags } from './AudienceFlags';
import type { MultilingualString } from './MultilingualString';
import type { Resource } from './Resource';
import type { TracedEntity } from './TracedEntity';

export type CatalogEntry = TracedEntity & {
  description?: MultilingualString | null;
  imageId?: string | null;
  name?: MultilingualString | null;
  number?: string | null;
  seoPath?: string | null;
  image?: Resource | null;
  audience?: AudienceFlags | null;
  slug?: MultilingualString;
  resources?: Array<Resource>;
};
