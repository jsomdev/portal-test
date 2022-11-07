import React from 'react';

import { Controller, FieldValues, useFormContext } from 'react-hook-form';

import {
  ITextFieldProps,
  ITextFieldStyles,
  TextField,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';

import {
  getErrorMessage,
  getValidationWrapperStyles
} from './formWrappers.helper';
import { FormWrapperProps } from './formWrappers.types';

export type FormTextFieldProps<T> = ITextFieldProps &
  FormWrapperProps<T, Partial<ITextFieldStyles>>;

const FormTextField: <T extends FieldValues>(
  props: React.PropsWithChildren<FormTextFieldProps<T>>
) => React.ReactElement<FormTextFieldProps<T>> = ({
  name,
  validationProps,
  ...props
}) => {
  const { control, getFieldState, formState } = useFormContext();

  const { palette } = useTheme();
  const defaultValidationStyles: Partial<ITextFieldStyles> = {
    fieldGroup: { border: `${rem('1px')} solid ${palette.green}` }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const fieldState = getFieldState(name, formState);
        console.log(name, fieldState);
        const errorMessage = getErrorMessage(fieldState);
        console.log('error: ' + name, errorMessage);
        const mergedStyles = getValidationWrapperStyles(
          fieldState,
          props.styles,
          defaultValidationStyles,
          validationProps
        );
        return (
          <TextField
            {...props}
            {...field}
            errorMessage={errorMessage}
            styles={mergedStyles}
            onChange={ev => {
              if (field.onChange) {
                field.onChange(ev);
              }
              if (props.onChange) {
                props.onChange(ev);
              }
            }}
          />
        );
      }}
    />
  );
};

export default FormTextField;
