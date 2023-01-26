import { User } from '@services/portal-api';
import { ContactDetailsPut } from '@services/portal-api/base/types';
import { CustomerVerificationRequest } from '@services/portal-api/models/CustomerVerificationRequest';
import { CustomerVerificationRequestStatus } from '@services/portal-api/models/CustomerVerificationRequestStatus';

import {
  CompleteSignUpFormFields,
  CompleteSignUpFormValues,
  ContactDetailsFormValues
} from './completeSignUp.types';
import {
  getCompanyDetailsFormFields,
  getContactDetailsFormFields,
  getCustomerDetailsFormFields
} from './constants';

/**
 * This function will get all field names for the active step used for our stepper validation
 */
export function getCompleteSignUpFieldNames(
  toStepIndex: number,
  fromStepIndex: number = 0
): string[] {
  function getFieldNames(
    verificationFields: CompleteSignUpFormFields
  ): string[] {
    return Object.keys(verificationFields).map(key => key);
  }

  let fieldNames: string[] = [];

  if (toStepIndex >= 0 && fromStepIndex <= 0) {
    fieldNames = fieldNames.concat(
      getFieldNames(getContactDetailsFormFields())
    );
  }

  if (toStepIndex >= 1 && fromStepIndex <= 1) {
    fieldNames = fieldNames.concat(
      getFieldNames(getCompanyDetailsFormFields())
    );
  }
  if (toStepIndex >= 2 && fromStepIndex <= 2) {
    fieldNames = fieldNames.concat(
      getFieldNames(getCustomerDetailsFormFields())
    );
  }

  return fieldNames;
}

/**
 * This function will map all user info field values to a ContactDetailsPut object used in our POST
 */
export function mapContactDetailsFieldsToContactDetailsPut(
  formValues: ContactDetailsFormValues
): ContactDetailsPut {
  return {
    firstName: formValues.firstName,
    lastName: formValues.lastName,
    jobTitle: formValues.jobTitle,
    emailAddresses: [formValues.email],
    phoneNumber: formValues.phone,
    urls: []
  };
}

/**
 * This function will map all verification request field values to a CustomerVerificationRequest object used in our POST
 */
export function mapVerificationRequestFieldsToVerificationPost(
  values: CompleteSignUpFormValues,
  me: User | undefined
): CustomerVerificationRequest {
  return {
    accountNumber: values.customerNumber,
    addressCity: values.city,
    addressCountry: values.country,
    addressLines: [values.address],
    addressPostalCode: values.postalCode,
    addressRegion: values.state,
    companyName: values.customerCompany,
    status: CustomerVerificationRequestStatus.PENDING,
    userInitializationId: values.userInitializationId || undefined,
    userId: me?.id || '',
    orderNumbers: values.invoiceNumbers?.length
      ? [...values.invoiceNumbers]
      : []
  };
}

export function compareContactDetailsFormValues(
  formValues: ContactDetailsFormValues,
  initialFormValues: ContactDetailsFormValues
): number {
  return JSON.stringify(formValues).localeCompare(
    JSON.stringify(initialFormValues)
  );
}
