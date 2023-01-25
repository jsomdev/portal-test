/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { Card } from './Card';
import type { ContactInfo } from './ContactInfo';
import type { PaymentMethod } from './PaymentMethod';
import type { PostalAddress } from './PostalAddress';
import type { ShippingMethod } from './ShippingMethod';

export type PostCartCheckoutParameters = {
  billingAddress?: PostalAddress | null;
  billingContactInfo?: ContactInfo | null;
  card?: Card | null;
  cvv?: string | null;
  expectedAmount?: number;
  shippingAddress?: PostalAddress | null;
  shippingContactInfo?: ContactInfo | null;
  shippingMethod?: ShippingMethod;
  emailAddresses?: Array<string | null>;
  comment?: string | null;
  name?: string | null;
  referenceNumber?: string | null;
  referenceDocumentId?: string | null;
  paymentMethod?: PaymentMethod;
};
