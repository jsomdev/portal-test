import React from 'react';

import { useField } from 'formik';

import {
  IIconProps,
  IStyleFunctionOrObject,
  ITextFieldStyleProps,
  ITextFieldStyles,
  MaskedTextField,
  Stack,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';

import { FormikMaskedTextFieldProps } from './formikWrappers.types';
import { useFormikWrapperStyles } from './useFormikWrapperStyles';

export const FormikMaskedTextField: React.FC<FormikMaskedTextFieldProps> = ({
  name,
  iconProps,
  validationProps,
  ...props
}) => {
  const [input, meta] = useField(name);
  const { palette } = useTheme();

  const defaultValidationStyles: Partial<ITextFieldStyles> = {
    fieldGroup: { border: `${rem(1)} solid ${palette.green}` }
  };

  const { mergedStyles } = useFormikWrapperStyles<
    | Partial<ITextFieldStyles>
    | IStyleFunctionOrObject<ITextFieldStyleProps, ITextFieldStyles>
    | undefined
  >(name, props.styles, defaultValidationStyles, validationProps);

  const defaultValidationIcon: IIconProps = {
    iconName: 'checkmark',
    styles: { root: { color: palette.green } }
  };

  return (
    <Stack.Item>
      <MaskedTextField
        {...input}
        {...props}
        name={name}
        value={input.value}
        errorMessage={meta.touched && meta.error ? meta.error : undefined}
        styles={mergedStyles}
        iconProps={
          meta.touched && !meta.error && !validationProps?.disabled
            ? validationProps?.icon || defaultValidationIcon
            : undefined
        }
      />
    </Stack.Item>
  );
};
