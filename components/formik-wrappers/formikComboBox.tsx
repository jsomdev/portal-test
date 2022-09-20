import React from 'react';

import { useField, useFormikContext } from 'formik';

import {
  ComboBox,
  DirectionalHint,
  IComboBox,
  IComboBoxStyles,
  Stack,
  useTheme
} from '@fluentui/react';

import { rem } from '@utilities/rem';
import { FormikComboBoxProps } from './formikWrappers.types';
import { useFormikWrapperStyles } from './useFormikWrapperStyles';

export const FormikComboBox: React.FC<FormikComboBoxProps> = ({
  name,
  validationProps,
  getSelectedKey: getKey,
  ...props
}) => {
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
        allowFreeform={true}
        calloutProps={{
          directionalHintFixed: true,
          directionalHint: DirectionalHint.bottomRightEdge
        }}
        onClick={onOpenClick}
        selectedKey={getKey?.(input.value, props.options)}
        errorMessage={meta.touched && meta.error ? meta.error : undefined}
        onChange={(e, option) => {
          setFieldValue(name, option?.key, true);
        }}
        styles={mergedStyles}
        onBlur={() => {
          setFieldTouched(name, true, false);
        }}
        //autofill={{ name: input.name } as any}
      />
    </Stack>
  );
};
