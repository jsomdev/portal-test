/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { PostalAddress } from './PostalAddress';
import type { ShippingMethod } from './ShippingMethod';

export type PostCartTaxAmountParameters = {
  shippingAddress?: PostalAddress | null;
  shippingMethod?: ShippingMethod;
};
