/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { CustomerVerificationRequest } from '../base/types';
import type { Account } from './Account';
import type { CartItem } from './CartItem';
import { ContactInfo } from './ContactInfo';
import type { Identity } from './Identity';
import type { Location } from './Location';
import type { Setting } from './Setting';
import { UserRolesFlags } from './UserRolesFlags';
import type { UserType } from './UserType';

export type User = Identity & {
  type?: UserType;
  accountId?: string;
  account?: Account;
  cart?: Array<CartItem>;
  locations?: Array<Location>;
  settings?: Array<Setting>;
  contactInfo?: ContactInfo & { jobTitle: string };
  customerVerificationRequests?: CustomerVerificationRequest[];
  roles?: UserRolesFlags;
};
