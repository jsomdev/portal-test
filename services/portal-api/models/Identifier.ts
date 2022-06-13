/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdentifierType } from './IdentifierType';
import type { LinkedEntity } from './LinkedEntity';

export type Identifier = LinkedEntity & {
  type?: IdentifierType;
  value?: string | null;
};
