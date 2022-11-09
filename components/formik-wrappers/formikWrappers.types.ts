import { MessageDescriptor } from 'react-intl';

import {
  IComboBoxProps,
  IComboBoxStyles,
  IDropdownOption,
  IIconProps,
  IMaskedTextFieldProps,
  ITextFieldProps,
  ITextFieldStyles
} from '@fluentui/react';

export interface FormikValidationProps<TStyles> {
  icon?: IIconProps;
  disabled?: boolean;
  styles?: TStyles;
}

export interface FormikWrapperProps<TStyles> {
  name: string;
  validationProps?: FormikValidationProps<TStyles>;
}

export type FormikTextFieldProps = ITextFieldProps &
  FormikWrapperProps<Partial<ITextFieldStyles>>;

export type FormikMaskedTextFieldProps = IMaskedTextFieldProps &
  FormikWrapperProps<Partial<ITextFieldStyles>>;

export type FormikComboBoxProps = IComboBoxProps &
  FormikWrapperProps<Partial<IComboBoxStyles>> & {
    getSelectedKey?: (
      value: string,
      options: IDropdownOption[]
    ) => string | undefined;
  };
