/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { MultilingualString } from './MultilingualString';
import type { TracedEntity } from './TracedEntity';

export type ConditionType = TracedEntity & {
  code?: string | null;
  unitSymbol?: string | null;
  name?: MultilingualString | null;
  sortIndex?: number;
};
