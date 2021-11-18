/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MultilingualString } from './MultilingualString';
import type { TracedEntity } from './TracedEntity';

export type AttributeGroup = TracedEntity & {
  code?: string;
  name?: MultilingualString | null;
  sortIndex?: number;
};
