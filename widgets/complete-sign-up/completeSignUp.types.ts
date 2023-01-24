import {
  IButtonStyles,
  IImageStyles,
  IStackItemStyles,
  IStackStyles,
  ITextStyles
} from '@fluentui/react';

export interface CompleteSignUpStyles {
  formContainer: IStackStyles;
  bottomContentContainer: IStackItemStyles;
  bottomSeperatorText: ITextStyles;
  root: IStackStyles;
  logo: Partial<IImageStyles>;
  inner: IStackStyles;
  boxContainer: IStackItemStyles;
  box: IStackStyles;
  defaultButton: IButtonStyles;
}

export interface ContactDetailsFormValues {
  firstName: string;
  lastName: string;
  jobTitle: string;
  phone: string;
  email: string;
}

export interface CompanyDetailsFormValues {
  country: string;
  address: string;
  zipCode: string;
  city: string;
  state: string;
  customerCompany: string;
}

export interface CustomerDetailsFormValues {
  invoiceNumbers: string[] | undefined;
  customerNumber: string | undefined;
  userInitializationId: string | undefined;
}
export type CompleteSignUpFormValues = ContactDetailsFormValues &
  CompanyDetailsFormValues &
  CustomerDetailsFormValues;

export interface CompleteSignUpFormField {
  label: string;
  placeholder: string;
  name: string;
}
export interface CompleteSignUpFormFields {
  [key: string]: CompleteSignUpFormField;
}
