/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Entity } from './Entity';

export type TracedEntity = Entity & {
  rowVersion?: number;
};
