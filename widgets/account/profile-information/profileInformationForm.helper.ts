import { defineMessages } from 'react-intl';
import { IntlShape } from 'react-intl/src/types';
import * as yup from 'yup';

import { messageIds } from '@services/i18n';
import setYupLocalisation from '@utilities/yup/setYupLocalisation';
import { StepFields } from '@widgets/checkout/shared/types';
import {
  emailValidation,
  firstNameValidation,
  lastNameValidation,
  phoneValidation
} from '@widgets/checkout/shared/validation';

setYupLocalisation();

export const validation = yup.object({
  email: emailValidation(),
  name: lastNameValidation(),
  firstName: firstNameValidation(),
  jobTitle: yup
    .string()
    .label(messageIds.pages.checkout.details.fields.jobTitle)
    .required(),
  phone: phoneValidation()
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
  jobTitle: {
    id: fieldMessageIds.jobTitle,
    defaultMessage: 'Job Title'
  },
  companyPlaceholder: {
    id: fieldMessageIds.companyPlaceholder,
    defaultMessage: 'Name of organization'
  },
  phone: {
    id: fieldMessageIds.phone,
    defaultMessage: 'Phone'
  }
});

export type ProfileInformationFormData = yup.InferType<typeof validation>;

export const getFields = (
  intl: IntlShape
): StepFields<ProfileInformationFormData> => {
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
    jobTitle: {
      label: formatMessage(messages.jobTitle),
      name: 'jobTitle'
    },
    phone: {
      label: formatMessage(messages.phone),
      name: 'phone'
    }
  };
};
