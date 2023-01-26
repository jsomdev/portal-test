import { MessageDescriptor } from 'react-intl';
import * as yup from 'yup';
import { RequiredStringSchema } from 'yup/lib/string';
import { AnyObject } from 'yup/lib/types';

import { Step } from '@components/stepper/stepperContext';
import { defineMessages } from '@formatjs/intl';
import { messageIds } from '@services/i18n';
import setYupLocalisation from '@utilities/yup/setYupLocalisation';
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
} from '@widgets/checkout/shared/validation';

import {
  CompanyDetailsFormValues,
  CompleteSignUpFormFields,
  ContactDetailsFormValues,
  CustomerDetailsFormValues
} from './completeSignUp.types';

setYupLocalisation();

const messages = defineMessages({
  firstName: {
    id: messageIds.pages.checkout.details.fields.firstName,
    description: 'First name field label',
    defaultMessage: 'First Name'
  },
  lastName: {
    id: messageIds.pages.checkout.details.fields.name,
    description: 'Last name field label',
    defaultMessage: 'Last Name'
  },
  jobTitle: {
    id: messageIds.pages.checkout.details.fields.jobTitle,
    description: 'Job title field label',
    defaultMessage: 'Job Title'
  },
  phone: {
    id: messageIds.pages.checkout.details.fields.phone,
    description: 'Phone number field label',
    defaultMessage: 'Phone Number'
  },
  customerNumber: {
    id: messageIds.signupFlow.customerNumberTitle,
    description: 'Customer number field label',
    defaultMessage: 'Customer Number'
  },
  invoiceNumber: {
    id: messageIds.signupFlow.invoiceNumberTitle,
    description: 'Invoice number field label',
    defaultMessage: 'Invoice Number'
  },
  companyName: {
    id: messageIds.pages.checkout.details.fields.company,
    description: 'Company details field label',
    defaultMessage: 'Company Name'
  },
  companyPlaceholder: {
    id: messageIds.pages.checkout.details.fields.companyPlaceholder,
    description: 'Company details placeholder',
    defaultMessage: 'Company Name'
  },
  country: {
    id: messageIds.pages.checkout.details.fields.country,
    description: 'Country field label',
    defaultMessage: 'Country'
  },
  address: {
    id: messageIds.pages.checkout.details.fields.address,
    description: 'Address field label',
    defaultMessage: 'Address'
  },
  city: {
    id: messageIds.pages.checkout.details.fields.city,
    description: 'City field label',
    defaultMessage: 'City'
  },
  state: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .addressBook.formFields.region.label.default,
    defaultMessage: 'Region',
    description: 'Region label'
  },
  postalCode: {
    id: messageIds.pages.checkout.details.fields.postalCode,
    description: 'Zip code field label',
    defaultMessage: 'Postal Code'
  },
  invoiceNumberValidation: {
    id: messageIds.signupFlow.invoiceNumberValidation,
    description: 'Invoice numbers validation message',
    defaultMessage: 'Please enter a valid invoice number'
  },
  customerNumberValidation: {
    id: messageIds.signupFlow.customerNumberValidation,
    description: 'Customer number validation message',
    defaultMessage: 'Please enter a valid customer number'
  }
});

export function getContactDetailsFormFields(
  formatMessage?: (message: MessageDescriptor) => string
): CompleteSignUpFormFields {
  return {
    email: { label: 'Email', placeholder: 'example@domain.com', name: 'email' },
    firstName: {
      label: formatMessage?.(messages.firstName) || 'First Name',
      placeholder: '',
      name: 'firstName'
    },
    lastName: {
      label: formatMessage?.(messages.lastName) || 'Last Name',
      placeholder: '',
      name: 'lastName'
    },
    phone: {
      label: formatMessage?.(messages.phone) || 'Phone Number',
      placeholder: '',
      name: 'phone'
    },
    jobTitle: {
      label: formatMessage?.(messages.jobTitle) || 'Job Title',
      placeholder: '',
      name: 'jobTitle'
    }
  };
}

export function getCustomerDetailsFormFields(
  formatMessage?: (message: MessageDescriptor) => string
): CompleteSignUpFormFields {
  return {
    customerNumber: {
      label: formatMessage?.(messages.customerNumber) || 'Customer Number',
      placeholder: 'e.g. 1234567',
      name: 'customerNumber'
    },
    invoiceNumbers: {
      label: formatMessage?.(messages.invoiceNumber) || 'Invoice Number',
      placeholder: 'e.g. AB12345',
      name: 'invoiceNumbers'
    }
  };
}

export function getCompanyDetailsFormFields(
  formatMessage?: (message: MessageDescriptor) => string
): CompleteSignUpFormFields {
  return {
    customerCompany: {
      label: formatMessage?.(messages.companyName) || 'Company Name',
      placeholder:
        formatMessage?.(messages.companyPlaceholder) || 'Name of organization',
      name: 'customerCompany'
    },
    country: {
      label: formatMessage?.(messages.country) || 'Country',
      placeholder: 'Select an option',
      name: 'country'
    },
    address: {
      label: formatMessage?.(messages.address) || 'Address',
      placeholder: '',
      name: 'address'
    },
    city: {
      label: formatMessage?.(messages.city) || 'City',
      placeholder: '',
      name: 'city'
    },
    state: {
      label: formatMessage?.(messages.state) || 'State / Province',
      placeholder: '',
      name: 'state'
    },
    postalCode: {
      label: formatMessage?.(messages.postalCode) || 'Postal Code',
      placeholder: '',
      name: 'postalCode'
    }
  };
}

export const completeSignUpContactDetailsStep: Step = {
  label: '',
  isValid: false,
  iconProps: {
    iconName: 'ContactInfo'
  }
};

export const completeSignUpChooseCustomerStep: Step = {
  label: '',
  isValid: false,
  iconProps: {
    iconName: 'FollowUser'
  }
};

export const completeSignUpCustomerDetailsStep: Step = {
  label: '',
  isValid: false,
  iconProps: {
    iconName: 'Invoice'
  }
};

export const completeSignUpCompanyDetailsStep: Step = {
  label: '',
  isValid: false,
  iconProps: { iconName: 'WaitlistConfirm' }
};

export const completeSignUpSubmitStep: Step = {
  label: '',
  isValid: true,
  iconProps: { iconName: 'WaitlistConfirm' }
};

export const completeSignUpSteps: Step[] = [
  completeSignUpContactDetailsStep,
  completeSignUpCompanyDetailsStep,
  completeSignUpCustomerDetailsStep,
  completeSignUpSubmitStep
];

export const customerDetailsFormInitialValues: CustomerDetailsFormValues = {
  customerNumber: '',
  invoiceNumbers: [''],
  userInitializationId: ''
};

export const companyDetailsFormInitialValues: CompanyDetailsFormValues = {
  customerCompany: '',
  country: 'US',
  address: '',
  city: '',
  state: '',
  postalCode: ''
};

export const contactDetailsFormInitialValues: ContactDetailsFormValues = {
  email: '',
  firstName: '',
  jobTitle: '',
  lastName: '',
  phone: ''
};

export const jobTitleValidation = {
  ['jobTitle']: yup.string()
};

export function customerCompanyValidation(
  label?: string
): RequiredStringSchema<string | undefined, AnyObject> {
  return yup
    .string()
    .label(label || messageIds.pages.checkout.details.fields.company)
    .trim()
    .required();
}

export function getCompleteSignUpValidation(
  formatMessage?: (message: MessageDescriptor) => string
): yup.ObjectSchema<AnyObject> {
  return yup.object().shape({
    email: emailValidation(),
    phone: phoneValidation(),
    address: addressValidation(),
    country: countryValidation(),
    city: cityValidation(),
    state: stateValidation(
      'state',
      messageIds.pages.account.sections.infoAndPreferences.sections.addressBook
        .formFields.region.label.default,
      messageIds.pages.account.sections.infoAndPreferences.sections.addressBook
        .formFields.region.label.us,
      messageIds.pages.account.sections.infoAndPreferences.sections.addressBook
        .formFields.region.label.ca
    ),
    postalCode: postalCodeValidation(),
    firstName: firstNameValidation(),
    lastName: lastNameValidation(),
    ['customerNumber']: yup
      .string()
      .matches(
        /^[0-9]{7}$/,
        formatMessage?.(messages.customerNumberValidation)
      ),
    ['invoiceNumbers']: yup.array().of(
      yup
        .string()
        .label(messageIds.pages.checkout.details.fields.company)
        .matches(
          /^[a-zA-Z]{2}[0-9]{5}$/,
          formatMessage?.(messages.invoiceNumberValidation)
        )
    ),
    ...jobTitleValidation
  });
}
