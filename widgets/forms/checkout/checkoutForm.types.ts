import { IStackItemStyles } from '@fluentui/react';
import { ShippingMethod } from '@services/portal-api';

import { PaymentMethodFieldNames } from './checkoutFormHelper';

export interface CheckoutFormValues {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  address: string;
  addressLineTwo: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  billingFirstName: string;
  billingLastName: string;
  billingCompany: string;
  billingCountry: string;
  billingAddress: string;
  billingAddressLineTwo: string;
  billingCity: string;
  billingState: string;
  billingZipCode: string;
  billingPhone: string;
  shippingMethod: ShippingMethod | undefined;
  shippingAddressAsBillingAddress: 'yes' | 'no';
  shippingContactAsBillingContact: 'yes' | 'no';
  paymentMethod:
    | PaymentMethodFieldNames.CREDIT_CARD
    | PaymentMethodFieldNames.PURCHASE_ORDER
    | undefined;
  referenceNumber: string;
  additionalInformation: string;
  creditCardNumber: string;
  creditCardName: string;
  creditCardCVV: string;
  creditCardExpiration: string;
  acceptedTerms: boolean;
}

export interface CheckoutFormField {
  label: string;
  placeholder: string;
  name: string;
}
export interface CheckoutFormFields {
  [key: string]: CheckoutFormField;
}

export interface CheckoutFormStyles {
  leftColumn: IStackItemStyles;
  rightColumn: IStackItemStyles;
}
