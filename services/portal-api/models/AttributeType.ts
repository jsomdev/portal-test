/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { MultilingualString } from './MultilingualString';
import type { TracedEntity } from './TracedEntity';

export type AttributeType = TracedEntity & {
  code?: string | null;
  description?: MultilingualString | null;
  name?: MultilingualString | null;
  sortIndex?: number;
  unitSymbol?: string | null;
};
