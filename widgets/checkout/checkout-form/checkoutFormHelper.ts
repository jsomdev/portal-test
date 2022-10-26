import { Step } from '@components/stepper/stepperContext';
import { IDropdownOption } from '@fluentui/react';
import { ShippingMethod } from '@services/portal-api';

import { CheckoutFormFields, CheckoutFormValues } from './checkoutForm.types';

/**
 * @param stepIndex the current (active) stepper index
 * @returns an array of all form field names on the current (active) and previous (completed) steps
 */
export function getCheckoutFieldNames(
  toStepIndex: number,
  fromStepIndex: number = 0
): string[] {
  function getFieldNames(checkoutFields: CheckoutFormFields): string[] {
    return Object.keys(checkoutFields).map(key => key);
  }

  let fieldNames: string[] = [];

  if (toStepIndex >= 0 && fromStepIndex <= 0) {
    fieldNames = fieldNames.concat(getFieldNames(checkoutFormDetailsFields));
  }

  if (toStepIndex >= 1 && fromStepIndex <= 1) {
    fieldNames = fieldNames.concat(
      getFieldNames(checkoutFormShippingOptionsFields)
    );
  }

  if (toStepIndex >= 2 && fromStepIndex <= 2) {
    fieldNames = fieldNames.concat(
      getFieldNames(checkoutFormPaymentMethodFields)
    );
  }
  if (toStepIndex >= 3 && fromStepIndex <= 3) {
    fieldNames = fieldNames.concat(getFieldNames(checkoutFormOverviewFields));
  }

  return fieldNames;
}

export function regionValidationTest(
  value: string | undefined,
  options: IDropdownOption[]
): boolean {
  const valueIsValid = options.find(region => region.key === value);
  if (valueIsValid) {
    return true;
  }
  return false;
}

export const checkoutFormStepLabels: Step[] = [
  {
    label: 'Details',
    isValid: false,
    iconProps: { iconName: 'ContactInfo' }
  },
  {
    label: 'Shipping Method',
    isValid: false,
    iconProps: { iconName: 'Product' }
  },
  {
    label: 'Payment Method',
    isValid: false,
    iconProps: { iconName: 'PaymentCard' }
  },
  {
    label: 'Overview',
    isValid: false,
    iconProps: { iconName: 'WaitlistConfirm' }
  }
];

export const checkoutFormValues: CheckoutFormValues = {
  email: '',
  firstName: '',
  lastName: '',
  company: '',
  country: '',
  address: '',
  addressLineTwo: '',
  city: '',
  state: '',
  zipCode: '',
  phone: '',
  billingFirstName: '',
  billingLastName: '',
  billingCompany: '',
  billingCountry: '',
  billingAddress: '',
  billingAddressLineTwo: '',
  billingCity: '',
  billingState: '',
  billingZipCode: '',
  billingPhone: '',
  shippingMethod: ShippingMethod.UPS_GROUND || undefined,
  shippingAddressAsBillingAddress: 'yes',
  shippingContactAsBillingContact: 'yes',
  paymentMethod: undefined,
  referenceNumber: '',
  additionalInformation: '',
  creditCardNumber: '',
  creditCardName: '',
  creditCardCVV: '',
  creditCardExpiration: '',
  acceptedTerms: false
};
export const checkoutFormDetailsFields: CheckoutFormFields = {
  email: { label: 'Email', placeholder: 'example@domain.com', name: 'email' },
  firstName: {
    label: 'First Name',
    placeholder: '',
    name: 'firstName'
  },
  lastName: { label: 'Last Name', placeholder: '', name: 'lastName' },
  company: {
    label: 'Company Name',
    placeholder: 'Name of organization',
    name: 'company'
  },
  country: {
    label: 'Country',
    placeholder: 'Select an option',
    name: 'country'
  },
  address: {
    label: 'Address',
    placeholder: '',
    name: 'address'
  },
  addressLineTwo: {
    label: 'Address Line 2',
    placeholder: 'Address Line 2',
    name: 'addressLineTwo'
  },
  city: { label: 'City', placeholder: '', name: 'city' },
  state: {
    label: 'State / Province',
    placeholder: 'Select an option',
    name: 'state'
  },
  zipCode: {
    label: 'Postal Code',
    placeholder: '',
    name: 'zipCode'
  },
  phone: { label: 'Phone Number', placeholder: '', name: 'phone' }
};

export const checkoutFormShippingOptionsFields = {
  shippingMethod: {
    label: 'Shipping Method',
    placeholder: '',
    name: 'shippingMethod'
  }
};

export const checkoutFormPaymentMethodFields = {
  billingFirstName: {
    label: 'First Name',
    placeholder: '',
    name: 'billingFirstName'
  },
  billingLastName: {
    label: 'Last Name',
    placeholder: '',
    name: 'billingLastName'
  },
  billingCompany: {
    label: 'Company Name',
    placeholder: 'Name of organization',
    name: 'billingCompany'
  },
  billingCountry: {
    label: 'Country',
    placeholder: 'Country',
    name: 'billingCountry'
  },
  billingAddress: {
    label: 'Address',
    placeholder: '',
    name: 'billingAddress'
  },
  billingAddressLineTwo: {
    label: 'Address Line 2',
    placeholder: 'Address Line 2',
    name: 'billingAddressLineTwo'
  },
  billingCity: { label: 'City', placeholder: '', name: 'billingCity' },
  billingState: {
    label: 'State / Province',
    placeholder: 'Select an option',
    name: 'billingState'
  },
  billingZipCode: {
    label: 'Postal Code',
    placeholder: '',
    name: 'billingZipCode'
  },
  billingPhone: {
    label: 'Phone Number',
    placeholder: '',
    name: 'billingPhone'
  },
  shippingAddressAsBillingAddress: {
    name: 'shippingAddressAsBillingAddress',
    label: 'Shipping as Billing',
    placeholder: 'Shipping as Billing'
  },
  shippingContactAsBillingContact: {
    name: 'shippingContactAsBillingContact',
    label: 'Shipping Contact as Billing Contact',
    placeholder: 'Shipping Contact as Billing Contact'
  },
  creditCardNumber: {
    label: 'Card Number',
    placeholder: '',
    name: 'creditCardNumber'
  },
  creditCardName: {
    label: 'Name on Card',
    placeholder: '',
    name: 'creditCardName'
  },
  creditCardCVV: {
    label: 'CVV / CVC Code',
    placeholder: '',
    name: 'creditCardCVV'
  },
  creditCardExpiration: {
    label: 'Valid Thru',
    placeholder: 'MM/YY',
    name: 'creditCardExpiration'
  },
  referenceNumber: {
    label: 'Reference Number',
    placeholder: 'PO Number / Requisition Number',
    name: 'referenceNumber'
  },
  paymentMethod: {
    label: 'Payment Method',
    placeholder: '',
    name: 'paymentMethod'
  }
};

export const checkoutFormOverviewFields: CheckoutFormFields = {
  additionalInformation: {
    label: 'Additional Information',
    placeholder: '',
    name: 'additionalInformation'
  },
  acceptedTerms: {
    label: '',
    placeholder: '',
    name: 'acceptedTerms'
  }
};

export const checkoutFormFields: CheckoutFormFields = {
  ...checkoutFormDetailsFields,
  ...checkoutFormPaymentMethodFields,
  ...checkoutFormShippingOptionsFields,
  ...checkoutFormOverviewFields
};
