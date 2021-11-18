/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { ContactInfo } from './ContactInfo';
import type { OrderLine } from './OrderLine';
import type { OrderStatus } from './OrderStatus';
import { PaymentMethod } from './PaymentMethod';
import type { PostalAddress } from './PostalAddress';
import type { ShippingMethod } from './ShippingMethod';
import type { TracedEntity } from './TracedEntity';
import type { Transaction } from './Transaction';

export type Order = TracedEntity & {
  status?: OrderStatus;
  currencyCode?: string | null;
  comment?: string | null;
  number?: string | null;
  accountId?: string;
  emailAddresses?: Array<string | null>;
  billingAddress?: PostalAddress | null;
  billingContactInfo?: ContactInfo | null;
  shippingAddress?: PostalAddress | null;
  shippingContactInfo?: ContactInfo | null;
  shippingMethod?: ShippingMethod | null;
  shippingCostAmount?: number;
  taxAmount?: number;
  totalAmount?: number;
  submittedOn?: string | null;
  account?: Account;
  lines?: Array<OrderLine>;
  transactions?: Array<Transaction>;
  referenceNumber?: string | null;
  paymentMethod?: PaymentMethod | null;
};
