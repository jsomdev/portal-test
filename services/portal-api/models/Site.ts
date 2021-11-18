/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Location } from './Location';
import type { SiteArea } from './SiteArea';
import type { TracedEntity } from './TracedEntity';

export type Site = TracedEntity & {
  name?: string;
  areas?: Array<SiteArea>;
  locations?: Array<Location>;
};
