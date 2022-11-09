import React from 'react';

import { useField } from 'formik';
import { useIntl } from 'react-intl';

import formatError from '@components/formik-wrappers/formatError';
import {
  IIconProps,
  IStyleFunctionOrObject,
  ITextFieldStyleProps,
  ITextFieldStyles,
  TextField,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';

import { FormikTextFieldProps } from './formikWrappers.types';
import { useFormikWrapperStyles } from './useFormikWrapperStyles';

export const FormikTextField: React.FC<FormikTextFieldProps> = ({
  name,
  validationProps,
  ...props
}) => {
  const [input, meta] = useField(name);
  const { palette } = useTheme();
  const { formatMessage } = useIntl();

  const defaultValidationStyles: Partial<ITextFieldStyles> = {
    fieldGroup: { border: `${rem('1px')} solid ${palette.green}` }
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
    <TextField
      {...input}
      {...props}
      name={name}
      value={input.value}
      errorMessage={formatError(formatMessage, meta)}
      styles={mergedStyles}
      iconProps={
        meta.touched && !meta.error && !validationProps?.disabled
          ? validationProps?.icon || defaultValidationIcon
          : undefined
      }
    />
  );
};
