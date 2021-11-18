/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MultilingualString } from './MultilingualString';
import type { TracedEntity } from './TracedEntity';

export type ConditionType = TracedEntity & {
  code?: string;
  unitSymbol?: string | null;
  name?: MultilingualString;
  sortIndex?: number;
};
