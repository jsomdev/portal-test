import React from 'react';

import { useField, useFormikContext } from 'formik';
import { useIntl } from 'react-intl';

import formatError from '@components/formik-wrappers/formatError';
import {
  ComboBox,
  DirectionalHint,
  IComboBox,
  IComboBoxStyles,
  IDropdownOption,
  Stack,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';

import { FormikComboBoxProps } from './formikWrappers.types';
import { useFormikWrapperStyles } from './useFormikWrapperStyles';

export const FormikComboBox: React.FC<FormikComboBoxProps> = ({
  name,
  validationProps,
  ...props
}) => {
  const intl = useIntl();
  const [input, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const { palette } = useTheme();
  const comboBoxRef = React.useRef<IComboBox>(null);

  const onOpenClick = React.useCallback(() => {
    if (!props.disabled) {
      comboBoxRef.current?.focus(true);
    }
  }, [props.disabled]);

  const defaultValidationStyles: Partial<IComboBoxStyles> = {
    root: {
      border: `${rem(1)} solid ${palette.green}`,
      selectors: {
        '&:after': {
          content: 'none'
        }
      }
    }
  };

  function getSelectedKey(value: string, options: IDropdownOption[]) {
    return (
      options.find(option => option.key === value)?.key.toString() ||
      props.defaultSelectedKey ||
      null
    );
  }

  const { mergedStyles } = useFormikWrapperStyles<Partial<IComboBoxStyles>>(
    name,
    props.styles,
    defaultValidationStyles,
    validationProps
  );

  return (
    <Stack>
      <ComboBox
        {...input}
        {...props}
        componentRef={comboBoxRef}
        allowFreeform={
          props.allowFreeform === undefined ? true : props.allowFreeform
        }
        calloutProps={{
          directionalHintFixed: true,
          directionalHint: DirectionalHint.bottomRightEdge
        }}
        onClick={onOpenClick}
        selectedKey={getSelectedKey(input.value, props.options)}
        errorMessage={formatError(intl, meta, input.name)}
        onChange={(e, option, index, value) => {
          if (props.onChange) {
            return props.onChange(e, option, index, value);
          }
          return setFieldValue(name, option?.key || null, true);
        }}
        styles={mergedStyles}
        onBlur={() => {
          setFieldTouched(name, true, false);
        }}
      />
    </Stack>
  );
};
