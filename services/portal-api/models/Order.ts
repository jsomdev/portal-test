/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { Account } from './Account';
import type { ContactInfo } from './ContactInfo';
import type { OrderLine } from './OrderLine';
import type { OrderStatus } from './OrderStatus';
import type { PaymentMethod } from './PaymentMethod';
import type { PostalAddress } from './PostalAddress';
import type { ShippingMethod } from './ShippingMethod';
import type { TracedEntity } from './TracedEntity';
import type { Transaction } from './Transaction';

export type Order = TracedEntity & {
  status?: OrderStatus;
  currencyCode?: string | null;
  comment?: string | null;
  name?: string | null;
  number?: string | null;
  referenceNumber?: string | null;
  accountId?: string | null;
  emailAddresses?: Array<string | null>;
  billingAddress?: PostalAddress | null;
  billingContactInfo?: ContactInfo | null;
  paymentMethod?: PaymentMethod | null;
  shippingAddress?: PostalAddress | null;
  shippingContactInfo?: ContactInfo | null;
  shippingMethod?: ShippingMethod | null;
  shippingCostAmount?: number;
  taxAmount?: number;
  totalAmount?: number;
  submittedOn?: string | null;
  lines?: Array<OrderLine>;
  transactions?: Array<Transaction>;
  account?: Account | null;
};
