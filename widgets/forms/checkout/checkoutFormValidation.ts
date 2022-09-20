import valid from 'card-validator';
import * as yup from 'yup';

import { formErrorMessages, formRequiredMessages } from '../formMessages';
import {
  PaymentMethodFieldNames,
  checkoutFormFields,
  checkoutFormPaymentMethodFields
} from './checkoutFormHelper';

// TODO GR make typesafe

// TODO: i18N
export const emailValidation = {
  [checkoutFormFields.email.name]: yup
    .string()
    .email(formErrorMessages.email)
    .required(formRequiredMessages.email)
};

// TODO: i18N
export const firstNameValidation = {
  [checkoutFormFields.firstName.name]: yup
    .string()
    .matches(/^[A-Za-z ]*$/, formErrorMessages.name)
    .max(40, 'First name can not be longer than 40 characters')
    .required(formRequiredMessages.firstName)
};

// TODO: i18N
export const lastNameValidation = {
  [checkoutFormFields.lastName.name]: yup
    .string()
    .matches(/^[A-Za-z ]*$/, formErrorMessages.name)
    .max(40, 'Last name can not be longer than 40 characters')
    .required(formRequiredMessages.lastName)
};

// TODO: i18N
export const companyValidation = {
  [checkoutFormFields.company.name]: yup.string().required()
};

// TODO: i18N
export const addressValidation = {
  [checkoutFormFields.address.name]: yup
    .string()
    .required(formRequiredMessages.address)
};

// TODO: i18N
export const addressLineTwoValidation = {
  [checkoutFormFields.address.name]: yup.string().optional()
};

// TODO: i18N
export const countryValidation = {
  [checkoutFormFields.country.name]: yup
    .string()
    .required(formRequiredMessages.country)
};

// TODO: i18N
// TODO: i18N
export const cityValidation = {
  [checkoutFormFields.city.name]: yup
    .string()
    .required(formRequiredMessages.city)
};

// TODO: i18N
export const stateValidation = {
  [checkoutFormFields.state.name]: yup
    .string()
    .required(formRequiredMessages.state)
};

// TODO: i18N
export const zipCodeValidation = {
  [checkoutFormFields.zipCode.name]: yup
    .string()
    .required(formRequiredMessages.zipCode)
};

// TODO: i18N
export const phoneValidation = {
  [checkoutFormFields.phone.name]: yup
    .string()
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g,
      formErrorMessages.phone
    )
    .required(formRequiredMessages.phone)
};

// TODO: i18N
export const shippingMethodValidation = {
  [checkoutFormFields.shippingMethod.name]: yup.string().required()
};

// TODO: i18N
export const billingFirstNameValidation = {
  [checkoutFormFields.billingFirstName.name]: yup
    .string()
    .matches(/^[A-Za-z ]*$/, formErrorMessages.name)
    .max(40, 'First name can not be longer than 40 characters')
    .when(
      checkoutFormPaymentMethodFields.shippingContactAsBillingContact.name,
      {
        is: 'no',
        then: yup.string().required(formRequiredMessages.firstName)
      }
    )
};
// TODO: i18N
export const billingLastNameValidation = {
  [checkoutFormFields.billingLastName.name]: yup
    .string()
    .matches(/^[A-Za-z ]*$/, formErrorMessages.name)
    .max(40, 'Last name can not be longer than 40 characters')
    .when(
      checkoutFormPaymentMethodFields.shippingContactAsBillingContact.name,
      {
        is: 'no',
        then: yup.string().required(formRequiredMessages.lastName)
      }
    )
};
// TODO: i18N
export const billingCompanyValidation = {
  [checkoutFormFields.billingCompany.name]: yup
    .string()
    .when(
      checkoutFormPaymentMethodFields.shippingContactAsBillingContact.name,
      {
        is: 'no',
        then: yup.string().required()
      }
    )
};
// TODO: i18N
export const billingAddressValidation = {
  [checkoutFormFields.billingAddress.name]: yup
    .string()
    .when(
      checkoutFormPaymentMethodFields.shippingAddressAsBillingAddress.name,
      {
        is: 'no',
        then: yup.string().required(formRequiredMessages.address)
      }
    )
};
// TODO: i18N
export const billingCityValidation = {
  [checkoutFormFields.billingCity.name]: yup
    .string()
    .when(
      checkoutFormPaymentMethodFields.shippingAddressAsBillingAddress.name,
      {
        is: 'no',
        then: yup.string().required(formRequiredMessages.city)
      }
    )
};
// TODO: i18N
export const billingStateValidation = {
  [checkoutFormFields.billingState.name]: yup
    .string()
    .when(
      checkoutFormPaymentMethodFields.shippingAddressAsBillingAddress.name,
      {
        is: 'no',
        then: yup.string().required(formRequiredMessages.state)
      }
    )
};
// TODO: i18N
export const billingCountryValidation = {
  [checkoutFormFields.billingCountry.name]: yup
    .string()
    .when(
      checkoutFormPaymentMethodFields.shippingAddressAsBillingAddress.name,
      {
        is: 'no',
        then: yup.string().required(formRequiredMessages.country)
      }
    )
};
// TODO: i18N
export const billingZipCodeValidation = {
  [checkoutFormFields.billingZipCode.name]: yup
    .string()
    .when(
      checkoutFormPaymentMethodFields.shippingAddressAsBillingAddress.name,
      {
        is: 'no',
        then: yup.string().required(formRequiredMessages.zipCode)
      }
    )
};
// TODO: i18N
export const billingPhoneValidation = {
  [checkoutFormFields.billingPhone.name]: yup
    .string()
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g,
      formErrorMessages.phone
    )
    .when(
      checkoutFormPaymentMethodFields.shippingContactAsBillingContact.name,
      {
        is: 'no',
        then: yup.string().required(formRequiredMessages.phone)
      }
    )
};
// TODO: i18N
export const creditCardNumberValidation = {
  [checkoutFormFields.creditCardNumber.name]: yup
    .string()
    .when(checkoutFormPaymentMethodFields.paymentMethod.name, {
      is: PaymentMethodFieldNames.CREDIT_CARD,
      then: yup
        .string()
        .required(formRequiredMessages.creditCardNumber)
        .test(
          checkoutFormPaymentMethodFields.creditCardNumber.name,
          formErrorMessages.creditCardNumber,
          value => valid.number(value).isValid
        )
    })
};
// TODO: i18N
export const creditCardNameValidation = {
  [checkoutFormFields.creditCardName.name]: yup
    .string()
    .matches(/^[A-Za-z ]*$/, formErrorMessages.name)
    .max(50, 'Name can not be longer than 50 characters')
    .when(checkoutFormPaymentMethodFields.paymentMethod.name, {
      is: PaymentMethodFieldNames.CREDIT_CARD,
      then: yup.string().required(formRequiredMessages.creditCardName)
    })
};
// TODO: i18N
export const creditCardExpirationValidation = {
  [checkoutFormFields.creditCardExpiration.name]: yup
    .string()
    .when(checkoutFormPaymentMethodFields.paymentMethod.name, {
      is: PaymentMethodFieldNames.CREDIT_CARD,
      then: yup.string().required(formRequiredMessages.creditCardExpiration)
    })
};
// TODO: i18N
export const creditCardCCVValidation = {
  [checkoutFormFields.creditCardCVV.name]: yup
    .string()
    .when(checkoutFormPaymentMethodFields.paymentMethod.name, {
      is: PaymentMethodFieldNames.CREDIT_CARD,
      then: yup
        .string()
        .matches(/^[0-9]*$/, formErrorMessages.creditCardCVV)
        .required(formRequiredMessages.creditCardCVV)
        .min(3, formErrorMessages.creditCardCVV)
        .max(4, formErrorMessages.creditCardCVV)
    })
};
// TODO: i18N
export const referenceNumberValidation = {
  [checkoutFormFields.referenceNumber.name]: yup
    .string()
    .when(checkoutFormPaymentMethodFields.paymentMethod.name, {
      is: PaymentMethodFieldNames.PURCHASE_ORDER,
      then: yup.string().required(formRequiredMessages.referenceNumber)
    })
};
// TODO: i18N
export const shippingAddressAsBillingAddressValidation = {
  [checkoutFormFields.shippingAddressAsBillingAddress.name]: yup.string()
};

// TODO: i18N
export const shippingContactAsBillingContactValidation = {
  [checkoutFormFields.shippingContactAsBillingContact.name]: yup.string()
};

// TODO: i18N
export const paymentTypeValidation = {
  paymentType: yup.string()
};

// TODO: i18N
export const termsAndConditionsValidation = {
  [checkoutFormFields.acceptedTerms.name]: yup
    .bool()
    .oneOf([true], formRequiredMessages.acceptedTerms)
};

export const checkoutFormValidation = yup.object().shape({
  ...emailValidation,
  ...firstNameValidation,
  ...lastNameValidation,
  ...companyValidation,
  ...addressValidation,
  ...countryValidation,
  ...cityValidation,
  ...stateValidation,
  ...zipCodeValidation,
  ...phoneValidation,
  ...shippingMethodValidation,
  ...billingFirstNameValidation,
  ...billingLastNameValidation,
  ...billingCompanyValidation,
  ...billingAddressValidation,
  ...billingCityValidation,
  ...billingStateValidation,
  ...billingCountryValidation,
  ...billingZipCodeValidation,
  ...billingPhoneValidation,
  ...creditCardNumberValidation,
  ...creditCardNameValidation,
  ...creditCardExpirationValidation,
  ...creditCardCCVValidation,
  ...shippingAddressAsBillingAddressValidation,
  ...shippingContactAsBillingContactValidation,
  ...paymentTypeValidation,
  ...referenceNumberValidation,
  ...termsAndConditionsValidation
});
