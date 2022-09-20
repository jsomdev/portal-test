/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { ComplexLinkedEntity } from './ComplexLinkedEntity';
import type { MultilingualString } from './MultilingualString';
import type { UrlType } from './UrlType';

export type Url = ComplexLinkedEntity & {
  type?: UrlType;
  text?: MultilingualString | null;
  value?: string | null;
};
