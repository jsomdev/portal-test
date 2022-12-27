/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { Account } from './Account';
import type { CartItem } from './CartItem';
import type { ContactInfo } from './ContactInfo';
import type { CustomerVerificationRequest } from './CustomerVerificationRequest';
import type { Identity } from './Identity';
import type { Location } from './Location';
import type { QuoteRequest } from './QuoteRequest';
import type { Setting } from './Setting';
import type { UserRolesFlags } from './UserRolesFlags';
import type { UserStatus } from './UserStatus';

export type User = Identity & {
  accountId?: string | null;
  contactInfo?: ContactInfo | null;
  status?: UserStatus;
  roles?: UserRolesFlags | null;
  cart?: Array<CartItem>;
  customerVerificationRequests?: Array<CustomerVerificationRequest>;
  locations?: Array<Location>;
  settings?: Array<Setting>;
  account?: Account | null;
  quoteRequests?: Array<QuoteRequest>;
};
