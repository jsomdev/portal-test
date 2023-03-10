import React from 'react';

import { useField } from 'formik';
import { useIntl } from 'react-intl';

import formatError from '@components/formik-wrappers/formatError';
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
  validationProps,
  ...props
}) => {
  const intl = useIntl();
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

  const error = formatError(intl, meta, input.name);
  return (
    <Stack.Item>
      <MaskedTextField
        {...input}
        {...props}
        name={name}
        value={input.value}
        errorMessage={error}
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
