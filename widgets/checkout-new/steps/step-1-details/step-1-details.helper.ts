import { defineMessages } from 'react-intl';
import { IntlShape } from 'react-intl/src/types';
import * as yup from 'yup';

import { IDropdownOption } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import setYupLocalisation from '@utilities/yup/setYupLocalisation';
import { StepFields } from '@widgets/checkout-new/shared/types';
import {
  addressValidation,
  cityValidation,
  countryValidation,
  emailValidation,
  firstNameValidation,
  lastNameValidation,
  phoneValidation,
  postalCodeValidation,
  stateValidation
} from '@widgets/checkout-new/shared/validation';
import { Step1FormData } from '@widgets/checkout-new/steps/step-1-details/step-1-details';

setYupLocalisation();

export const validation = yup.object({
  email: emailValidation,
  name: lastNameValidation,
  firstName: firstNameValidation,
  company: yup
    .string()
    .label(messageIds.pages.checkout.details.fields.company)
    .required(),
  country: countryValidation,
  address: addressValidation,
  city: cityValidation,
  state: stateValidation,
  postalCode: postalCodeValidation,
  phone: phoneValidation
});

const fieldMessageIds = messageIds.pages.checkout.details.fields;
const messages = defineMessages({
  email: {
    id: fieldMessageIds.email,
    defaultMessage: 'Email'
  },
  emailPlaceholder: {
    id: fieldMessageIds.emailPlaceholder,
    defaultMessage: 'example@domain.com'
  },
  firstName: {
    id: fieldMessageIds.firstName,
    defaultMessage: 'First Name'
  },
  name: {
    id: fieldMessageIds.name,
    defaultMessage: 'Name'
  },
  company: {
    id: fieldMessageIds.company,
    defaultMessage: 'Company'
  },
  companyPlaceholder: {
    id: fieldMessageIds.companyPlaceholder,
    defaultMessage: 'Name of organization'
  },
  country: {
    id: fieldMessageIds.country,
    defaultMessage: 'Country'
  },
  countryPlaceholder: {
    id: fieldMessageIds.countryPlaceholder,
    defaultMessage: 'Select an option'
  },
  address: {
    id: fieldMessageIds.address,
    defaultMessage: 'Address'
  },
  addressPlaceholder: {
    id: fieldMessageIds.addressPlaceholder,
    defaultMessage: 'Street and number'
  },
  city: {
    id: fieldMessageIds.city,
    defaultMessage: 'City'
  },
  state: {
    id: fieldMessageIds.state,
    defaultMessage: 'State'
  },
  statePlaceholder: {
    id: fieldMessageIds.statePlaceholder.default,
    defaultMessage: 'Select an option'
  },
  postalCode: {
    id: fieldMessageIds.postalCode,
    defaultMessage: 'Postal Code'
  },
  phone: {
    id: fieldMessageIds.phone,
    defaultMessage: 'Phone'
  }
});

export const getFields = (intl: IntlShape): StepFields<Step1FormData> => {
  const { formatMessage } = intl;
  return {
    email: {
      label: formatMessage(messages.email),
      placeholder: formatMessage(messages.emailPlaceholder),
      name: 'email'
    },
    firstName: {
      label: formatMessage(messages.firstName),
      name: 'firstName'
    },
    name: {
      label: formatMessage(messages.name),
      name: 'name'
    },
    company: {
      label: formatMessage(messages.company),
      placeholder: formatMessage(messages.companyPlaceholder),
      name: 'company'
    },
    country: {
      label: formatMessage(messages.country),
      placeholder: formatMessage(messages.countryPlaceholder),
      name: 'country'
    },
    address: {
      label: formatMessage(messages.address),
      placeholder: formatMessage(messages.addressPlaceholder),
      name: 'address'
    },
    city: {
      label: formatMessage(messages.city),
      name: 'city'
    },
    state: {
      label: formatMessage(messages.state),
      placeholder: formatMessage(messages.statePlaceholder),
      name: 'state'
    },
    postalCode: {
      label: formatMessage(messages.postalCode),
      name: 'postalCode'
    },
    phone: {
      label: formatMessage(messages.phone),
      name: 'phone'
    }
  };
};
