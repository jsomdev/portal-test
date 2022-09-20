/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { EnumerationItem } from './EnumerationItem';
import type { MultilingualString } from './MultilingualString';
import type { TracedEntity } from './TracedEntity';

export type Enumeration = TracedEntity & {
  type?: string | null;
  name?: MultilingualString | null;
  description?: MultilingualString | null;
  isFlag?: boolean;
  items?: Array<EnumerationItem>;
};
