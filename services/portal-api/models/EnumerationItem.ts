/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { KeyedEntity } from './KeyedEntity';
import type { MultilingualString } from './MultilingualString';

export type EnumerationItem = KeyedEntity & {
  value?: number;
  name?: MultilingualString;
  description?: MultilingualString | null;
};
