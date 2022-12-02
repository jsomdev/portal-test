import * as yup from 'yup';

import { Step } from '@components/stepper/stepperContext';
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
import { formRequiredMessages } from '@widgets/forms/formMessages';

import {
  CompanyDetailsFormValues,
  CompleteSignUpFormFields,
  ContactDetailsFormValues,
  CustomerDetailsFormValues
} from './completeSignUp.types';

setYupLocalisation();

// TODO: i18n
export const contactDetailsFormFields: CompleteSignUpFormFields = {
  email: { label: 'Email', placeholder: 'example@domain.com', name: 'email' },
  firstName: {
    label: 'First Name',
    placeholder: '',
    name: 'firstName'
  },
  lastName: { label: 'Last Name', placeholder: '', name: 'lastName' },
  phone: { label: 'Phone Number', placeholder: '', name: 'phone' },
  jobTitle: { label: 'Job Title', placeholder: '', name: 'jobTitle' }
};

// TODO: i18n
export const customerDetailsFormFields: CompleteSignUpFormFields = {
  customerNumber: {
    label: 'Customer Number',
    placeholder: 'e.g. 1234567',
    name: 'customerNumber'
  },
  invoiceNumbers: {
    label: 'Invoice Number',
    placeholder: 'e.g. AB12345',
    name: 'invoiceNumbers'
  }
};

// TODO: i18n
export const companyDetailsFormFields: CompleteSignUpFormFields = {
  customerCompany: {
    label: 'Company Name',
    placeholder: 'Name of organization',
    name: 'customerCompany'
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
  }
};

// TODO: i18n
export const completeSignUpContactDetailsStep: Step = {
  label: '',
  isValid: false,
  iconProps: {
    iconName: 'ContactInfo'
  }
};
// TODO: i18n
export const completeSignUpChooseCustomerStep: Step = {
  label: '',
  isValid: false,
  iconProps: {
    iconName: 'FollowUser'
  }
};
// TODO: i18n
export const completeSignUpCustomerDetailsStep: Step = {
  label: '',
  isValid: false,
  iconProps: {
    iconName: 'Invoice'
  }
};

// TODO: i18n
export const completeSignUpCompanyDetailsStep: Step = {
  label: '',
  isValid: false,
  iconProps: { iconName: 'WaitlistConfirm' }
};
// TODO: i18n
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
  zipCode: ''
};

export const contactDetailsFormInitialValues: ContactDetailsFormValues = {
  email: '',
  firstName: '',
  jobTitle: '',
  lastName: '',
  phone: ''
};

export const completeSignUpErrorMessages = {
  customerNumber: 'A valid Customer Number is 7 digits long (e.g. 1234567)',
  invoiceNumbers:
    'A valid Invoice Number consists of 2 letters followed by 5 digits (e.g. AB12345)'
};

export const customerNumberValidation = {
  [customerDetailsFormFields.customerNumber.name]: yup
    .string()
    .matches(/^[0-9]{7}$/, completeSignUpErrorMessages.customerNumber)
};

export const invoiceNumbersValidation = {
  [customerDetailsFormFields.invoiceNumbers.name]: yup
    .array()
    .of(
      yup
        .string()
        .matches(
          /^[a-zA-Z]{2}[0-9]{5}$/,
          completeSignUpErrorMessages.invoiceNumbers
        )
    )
};

export const jobTitleValidation = {
  [contactDetailsFormFields.jobTitle.name]: yup.string()
};

export const customerCompanyValidation = {
  [companyDetailsFormFields.customerCompany.name]: yup
    .string()
    .required(formRequiredMessages.company)
};

export const completeSignUpValidation = yup.object().shape({
  email: emailValidation,
  phone: phoneValidation,
  address: addressValidation,
  country: countryValidation,
  city: cityValidation,
  state: stateValidation,
  zipCode: postalCodeValidation,
  firstName: firstNameValidation,
  lastName: lastNameValidation,
  ...customerCompanyValidation,
  ...customerNumberValidation,
  ...invoiceNumbersValidation,
  ...jobTitleValidation
});
