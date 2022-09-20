/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { Identity } from './Identity';
import type { Setting } from './Setting';
import type { Translation } from './Translation';

export type Application = Identity & {
  settings?: Array<Setting>;
  translations?: Array<Translation>;
};
