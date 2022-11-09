//TODO ward i18n
import valid from 'card-validator';
import * as yup from 'yup';

import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';
import {
  supportedProvinceOptions,
  supportedStateOptions
} from '@utilities/places';
import {
  formErrorMessages,
  formRequiredMessages
} from '@widgets/forms/formMessages';

import {
  checkoutFormFields,
  checkoutFormPaymentMethodFields,
  regionValidationTest
} from './checkoutFormHelper';

export const emailValidation = {
  [checkoutFormFields.email.name]: yup
    .string()
    .email(formErrorMessages.email)
    .required(formRequiredMessages.email)
};

export const firstNameValidation = {
  [checkoutFormFields.firstName.name]: yup
    .string()
    .matches(/^[A-Za-z ]*$/, formErrorMessages.name)
    .max(40, formErrorMessages.firstName)
    .required(formRequiredMessages.firstName)
};

export const lastNameValidation = {
  [checkoutFormFields.lastName.name]: yup
    .string()
    .matches(/^[A-Za-z ]*$/, formErrorMessages.name)
    .max(40, formErrorMessages.lastName)
    .required(formRequiredMessages.lastName)
};

export const companyValidation = {
  [checkoutFormFields.company.name]: yup
    .string()
    .required(formRequiredMessages.company)
};

export const addressValidation = {
  [checkoutFormFields.address.name]: yup
    .string()
    .trim()
    .required(formRequiredMessages.address)
};

export const addressLineTwoValidation = {
  [checkoutFormFields.address.name]: yup.string().trim().optional()
};

export const countryValidation = {
  [checkoutFormFields.country.name]: yup
    .string()
    .length(2, formErrorMessages.country)
    .required(formRequiredMessages.country)
};

export const cityValidation = {
  [checkoutFormFields.city.name]: yup
    .string()
    .required(formRequiredMessages.city)
};

export const stateValidation = {
  [checkoutFormFields.state.name]: yup
    .string()
    .required(formRequiredMessages.state)
    .when(checkoutFormFields.country.name, {
      is: 'US',
      then: yup
        .string()
        .required(formRequiredMessages.state)
        .test(
          checkoutFormFields.state.name,
          formRequiredMessages.stateUs,
          value => regionValidationTest(value, supportedStateOptions)
        )
    })
    .when(checkoutFormFields.country.name, {
      is: 'CA',
      then: yup
        .string()
        .required(formRequiredMessages.state)
        .test(
          checkoutFormFields.state.name,
          formRequiredMessages.providenceCa,
          value => regionValidationTest(value, supportedProvinceOptions)
        )
    })
};

export const zipCodeValidation = {
  [checkoutFormFields.zipCode.name]: yup
    .string()
    .required(formRequiredMessages.zipCode)
};

export const phoneValidation = {
  [checkoutFormFields.phone.name]: yup
    .string()
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g,
      formErrorMessages.phone
    )
    .required(formRequiredMessages.phone)
};

export const shippingMethodValidation = {
  [checkoutFormFields.shippingMethod.name]: yup.string().required()
};

export const billingFirstNameValidation = {
  [checkoutFormFields.billingFirstName.name]: yup
    .string()
    .matches(/^[A-Za-z ]*$/, formErrorMessages.name)
    .max(40, formErrorMessages.firstName)
    .when(
      checkoutFormPaymentMethodFields.shippingContactAsBillingContact.name,
      {
        is: 'no',
        then: yup.string().required(formRequiredMessages.firstName)
      }
    )
};
export const billingLastNameValidation = {
  [checkoutFormFields.billingLastName.name]: yup
    .string()
    .matches(/^[A-Za-z ]*$/, formErrorMessages.name)
    .max(40, formErrorMessages.lastName)
    .when(
      checkoutFormPaymentMethodFields.shippingContactAsBillingContact.name,
      {
        is: 'no',
        then: yup.string().required(formRequiredMessages.lastName)
      }
    )
};
export const billingCompanyValidation = {
  [checkoutFormFields.billingCompany.name]: yup
    .string()
    .when(
      checkoutFormPaymentMethodFields.shippingContactAsBillingContact.name,
      {
        is: 'no',
        then: yup.string().required(formRequiredMessages.company)
      }
    )
};
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
export const creditCardNumberValidation = {
  [checkoutFormFields.creditCardNumber.name]: yup
    .string()
    .when(checkoutFormPaymentMethodFields.paymentMethod.name, {
      is: PaymentMethod.CREDIT_CARD,
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
export const creditCardNameValidation = {
  [checkoutFormFields.creditCardName.name]: yup
    .string()
    .when(checkoutFormPaymentMethodFields.paymentMethod.name, {
      is: PaymentMethod.CREDIT_CARD,
      then: yup
        .string()
        .required(formRequiredMessages.creditCardName)
        .test(
          checkoutFormFields.creditCardName.name,
          formErrorMessages.name,
          value => valid.cardholderName(value).isPotentiallyValid
        )
    })
};
export const creditCardExpirationValidation = {
  [checkoutFormFields.creditCardExpiration.name]: yup
    .string()
    .when(checkoutFormPaymentMethodFields.paymentMethod.name, {
      is: PaymentMethod.CREDIT_CARD,
      then: yup
        .string()
        .required(formRequiredMessages.creditCardExpiration)
        .test(
          checkoutFormPaymentMethodFields.creditCardExpiration.name,
          formErrorMessages.expirationDate,
          value => valid.expirationDate(value, 19).isValid
        )
    })
};
export const creditCardCCVValidation = {
  [checkoutFormFields.creditCardCVV.name]: yup
    .string()
    .when(checkoutFormPaymentMethodFields.paymentMethod.name, {
      is: PaymentMethod.CREDIT_CARD,
      then: yup
        .string()
        .matches(/^[0-9]*$/, formErrorMessages.creditCardCVV)
        .required(formRequiredMessages.creditCardCVV)
        .min(3, formErrorMessages.creditCardCVV)
        .max(4, formErrorMessages.creditCardCVV)
    })
};
export const referenceNumberValidation = {
  [checkoutFormFields.referenceNumber.name]: yup
    .string()
    .when(checkoutFormPaymentMethodFields.paymentMethod.name, {
      is: PaymentMethod.PURCHASE_ORDER,
      then: yup.string().required(formRequiredMessages.referenceNumber)
    })
};
export const shippingAddressAsBillingAddressValidation = {
  [checkoutFormFields.shippingAddressAsBillingAddress.name]: yup.string()
};

export const shippingContactAsBillingContactValidation = {
  [checkoutFormFields.shippingContactAsBillingContact.name]: yup.string()
};

export const paymentTypeValidation = {
  paymentType: yup.string()
};

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
