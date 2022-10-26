import { IStackItemStyles } from '@fluentui/react';
import { ShippingMethod } from '@services/portal-api';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';

export interface CheckoutDetailsFormValues {
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
}

export interface CheckoutShippingMethodFormValues {
  shippingMethod: ShippingMethod | undefined;
}

export interface CheckoutPaymentMethodFormValues {
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
  shippingAddressAsBillingAddress: 'yes' | 'no';
  shippingContactAsBillingContact: 'yes' | 'no';
  paymentMethod:
    | PaymentMethod.CREDIT_CARD
    | PaymentMethod.PURCHASE_ORDER
    | undefined;
  referenceNumber: string;
  creditCardNumber: string;
  creditCardName: string;
  creditCardCVV: string;
  creditCardExpiration: string;
}

export interface CheckoutOverviewFormValues {
  acceptedTerms: boolean;
  additionalInformation: string;
}

export type CheckoutFormValues = CheckoutDetailsFormValues &
  CheckoutShippingMethodFormValues &
  CheckoutPaymentMethodFormValues &
  CheckoutOverviewFormValues;

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
