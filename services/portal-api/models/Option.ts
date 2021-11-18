/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LinkedEntity } from './LinkedEntity';
import type { Variant } from './Variant';

export type Option = LinkedEntity & {
  typeCode?: string;
  variants?: Array<Variant | null>;
  sortIndex?: number;
};
