import * as yup from 'yup';

import { messageIds } from '@services/i18n';
import {
  supportedProvinceOptions,
  supportedStateOptions
} from '@utilities/places';
import setYupLocalisation from '@utilities/yup/setYupLocalisation';
import {
  checkoutFormFields,
  regionValidationTest
} from '@widgets/checkout/checkout-form/checkoutFormHelper';

setYupLocalisation();

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
