/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { ShippingMethod } from './ShippingMethod';

export type ShippingCostAmount = {
  amount?: number;
  currencyCode?: string | null;
  shippingMethod?: ShippingMethod;
};
