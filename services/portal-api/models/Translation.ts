/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { KeyedEntity } from './KeyedEntity';
import type { MultilingualString } from './MultilingualString';

export type Translation = KeyedEntity & {
  value?: MultilingualString;
};
