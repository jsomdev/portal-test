import { Path } from 'react-hook-form';
import { FieldError } from 'react-hook-form/dist/types/errors';

import { IIconProps } from '@fluentui/react';

export type ValidationErrorProps<TStyles> = {
  icon?: IIconProps;
  disabled?: boolean;
  styles?: TStyles;
};

export type FieldState = {
  invalid: boolean;
  isDirty: boolean;
  isTouched: boolean;
  error?: FieldError;
};

export type FormWrapperProps<T, TStyles> = {
  name: Path<T>;
  validationProps?: ValidationErrorProps<TStyles>;
};
