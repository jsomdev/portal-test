import * as yup from 'yup';
import { RequiredStringSchema } from 'yup/lib/string';
import { AnyObject } from 'yup/lib/types';

import { IDropdownOption } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import {
  supportedProvinceOptions,
  supportedStateOptions
} from '@utilities/places';
import setYupLocalisation from '@utilities/yup/setYupLocalisation';

type RegionValidationTest = (
  value: string | undefined | null,
  options: IDropdownOption[]
) => boolean;

//set this everywhere where you are defining yup validation schema's
setYupLocalisation();

export const regionValidationTest: RegionValidationTest = (value, options) =>
  !!options.find(region => region.key === value);

export function phoneValidation(
  label?: string
): RequiredStringSchema<string | undefined, AnyObject> {
  return yup
    .string()
    .label(label || messageIds.pages.checkout.details.fields.phone)
    .matches(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g)
    .required();
}

export function addressValidation(
  label?: string
): RequiredStringSchema<string | undefined, AnyObject> {
  return yup
    .string()
    .label(label || messageIds.pages.checkout.details.fields.address)
    .trim()
    .required();
}

export function countryValidation(
  label?: string
): RequiredStringSchema<string | undefined, AnyObject> {
  return yup
    .string()
    .label(label || messageIds.pages.checkout.details.fields.country)
    .length(2)
    .required();
}

export function cityValidation(
  label?: string
): RequiredStringSchema<string | undefined, AnyObject> {
  return yup
    .string()
    .label(label || messageIds.pages.checkout.details.fields.city)
    .required();
}

export function emailValidation(
  label?: string
): RequiredStringSchema<string | undefined, AnyObject> {
  return yup
    .string()
    .email()
    .label(label || messageIds.pages.checkout.details.fields.email)
    .required();
}

export function stateValidation(
  testValue: string,
  label?: string,
  usLabel?: string,
  caLabel?: string
): RequiredStringSchema<string | undefined | null, AnyObject> {
  return yup
    .string()
    .required()
    .label(label || messageIds.pages.checkout.details.fields.state)
    .when('country', {
      is: 'US',
      then: yup
        .string()
        .label(usLabel || messageIds.pages.checkout.details.fields.state)
        .required()
        .nullable()
        .test(testValue, value =>
          regionValidationTest(value, supportedStateOptions)
        )
    })
    .when('country', {
      is: 'CA',
      then: yup
        .string()
        .label(caLabel || messageIds.pages.checkout.details.fields.state)
        .required()
        .nullable()
        .test(testValue, value =>
          regionValidationTest(value, supportedProvinceOptions)
        )
    });
}

export function postalCodeValidation(
  label?: string
): RequiredStringSchema<string | undefined, AnyObject> {
  return yup
    .string()
    .label(label || messageIds.pages.checkout.details.fields.postalCode)
    .required();
}

export function firstNameValidation(
  label?: string
): RequiredStringSchema<string | undefined, AnyObject> {
  return yup
    .string()
    .label(label || messageIds.pages.checkout.details.fields.firstName)
    .max(40)
    .required();
}

export function lastNameValidation(
  label?: string
): RequiredStringSchema<string | undefined, AnyObject> {
  return yup
    .string()
    .label(label || messageIds.pages.checkout.details.fields.name)
    .max(40)
    .required();
}
