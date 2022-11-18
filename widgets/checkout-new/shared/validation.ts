import * as yup from 'yup';

import { IDropdownOption } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import {
  supportedProvinceOptions,
  supportedStateOptions
} from '@utilities/places';

type RegionValidationTest = (
  value: string | undefined,
  options: IDropdownOption[]
) => boolean;

const regionValidationTest: RegionValidationTest = (value, options) =>
  !!options.find(region => region.key === value);

export const phoneValidation = yup
  .string()
  .label(messageIds.pages.checkout.details.fields.phone)
  .matches(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g)
  .required();

export const addressValidation = yup
  .string()
  .label(messageIds.pages.checkout.details.fields.address)
  .trim()
  .required();

export const countryValidation = yup
  .string()
  .label(messageIds.pages.checkout.details.fields.country)
  .length(2)
  .required();

export const cityValidation = yup
  .string()
  .label(messageIds.pages.checkout.details.fields.city)
  .required();

export const emailValidation = yup
  .string()
  .email()
  .label(messageIds.pages.checkout.details.fields.email)
  .required();

export const stateValidation = yup
  .string()
  .required()
  .label(messageIds.pages.checkout.details.fields.country)
  .when('country', {
    is: 'US',
    then: yup
      .string()
      .required()
      .test('state', value =>
        regionValidationTest(value, supportedStateOptions)
      )
  })
  .when('country', {
    is: 'CA',
    then: yup
      .string()
      .required()
      .test('state', value =>
        regionValidationTest(value, supportedProvinceOptions)
      )
  });

export const postalCodeValidation = yup
  .string()
  .label(messageIds.pages.checkout.details.fields.postalCode)
  .required();

export const firstNameValidation = yup
  .string()
  .label(messageIds.pages.checkout.details.fields.firstName)
  .max(40)
  .required();

export const lastNameValidation = yup
  .string()
  .label(messageIds.pages.checkout.details.fields.name)
  .max(40)
  .required();
