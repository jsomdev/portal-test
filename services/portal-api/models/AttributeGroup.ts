/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { MultilingualString } from './MultilingualString';
import type { TracedEntity } from './TracedEntity';

export type AttributeGroup = TracedEntity & {
  code?: string | null;
  name?: MultilingualString | null;
  sortIndex?: number;
};
