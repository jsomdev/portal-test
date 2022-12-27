/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { ComplexEntity } from './ComplexEntity';
import type { Url } from './Url';

export type ContactInfo = ComplexEntity & {
  firstName?: string | null;
  lastName?: string | null;
  company?: string | null;
  jobTitle?: string | null;
  emailAddresses?: Array<string | null>;
  phoneNumber?: string | null;
  urls?: Array<Url | null>;
};
