/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomerVerificationRequestStatus } from './CustomerVerificationRequestStatus';
import type { Identity } from './Identity';
import type { TracedEntity } from './TracedEntity';

export type CustomerVerificationRequest = TracedEntity & {
  accountNumber?: string | null;
  addressCity?: string | null;
  addressCountry?: string | null;
  addressLines?: Array<string | null>;
  addressPostalCode?: string | null;
  addressRegion?: string | null;
  companyName?: string | null;
  orderNumbers?: Array<string | null>;
  processedOn?: string | null;
  processedById?: string | null;
  status?: CustomerVerificationRequestStatus;
  userId?: string;
  processedBy?: Identity | null;
  user?: Identity | null;
};
