import * as yup from 'yup';

import { messageIds } from '@services/i18n';
import {
  supportedProvinceOptions,
  supportedStateOptions
} from '@utilities/places';
import {
  checkoutFormFields,
  regionValidationTest
} from '@widgets/checkout/checkout-form/checkoutFormHelper';

//TODO how do we move this up?
yup.setLocale({
  mixed: {
    required: ({ label }) => ({
      messageId: messageIds.validation.mixed.required,
      values: { label }
    })
  },
  string: {
    email: ({ label }) => ({
      messageId: messageIds.validation.string.email,
      values: { label }
    }),
    matches: ({ label }) => ({
      messageId: messageIds.validation.string.matches,
      values: { label }
    }),
    min: ({ label, min }) => ({
      messageId: messageIds.validation.string.min,
      values: { label, min }
    }),
    max: ({ label, max }) => ({
      messageId: messageIds.validation.string.max,
      values: { label, max }
    })
  }
});

const validation = yup.object({
  email: yup
    .string()
    .email()
    .label(messageIds.pages.checkout.details.fields.email)
    .required(),
  name: yup
    .string()
    .label(messageIds.pages.checkout.details.fields.name)
    .max(40)
    .required(),
  firstName: yup
    .string()
    .label(messageIds.pages.checkout.details.fields.firstName)
    .matches(/^[A-Za-z ]*$/)
    .max(40)
    .required(),
  company: yup
    .string()
    .label(messageIds.pages.checkout.details.fields.company)
    .required(),
  country: yup
    .string()
    .label(messageIds.pages.checkout.details.fields.country)
    .length(2)
    .required(),
  address: yup
    .string()
    .label(messageIds.pages.checkout.details.fields.address)
    .trim()
    .required(),
  addressLineTwo: yup
    .string()
    .label(messageIds.pages.checkout.details.fields.addressLineTwo)
    .trim()
    .optional(),
  city: yup
    .string()
    .label(messageIds.pages.checkout.details.fields.city)
    .required(),
  state: yup
    .string()
    .required()
    .label(messageIds.pages.checkout.details.fields.country)
    .when('country', {
      is: 'US',
      then: yup
        .string()
        .required()
        .test(checkoutFormFields.state.name, value =>
          regionValidationTest(value, supportedStateOptions)
        )
    })
    .when('country', {
      is: 'CA',
      then: yup
        .string()
        .required()
        .test(checkoutFormFields.state.name, value =>
          regionValidationTest(value, supportedProvinceOptions)
        )
    }),
  postalCode: yup
    .string()
    .label(messageIds.pages.checkout.details.fields.postalCode)
    .required(),
  phone: yup
    .string()
    .label(messageIds.pages.checkout.details.fields.phone)
    .matches(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g)
    .required()
});

export default validation;
