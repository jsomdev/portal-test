/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MultilingualString } from './MultilingualString';
import type { TracedEntity } from './TracedEntity';

export type AttributeType = TracedEntity & {
  code?: string;
  unitSymbol?: string | null;
  name?: MultilingualString;
  description?: MultilingualString | null;
  sortIndex?: number;
};
