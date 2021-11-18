/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Json } from './Json';
import type { KeyedEntity } from './KeyedEntity';

export type Setting = KeyedEntity & {
  value?: Json;
};
