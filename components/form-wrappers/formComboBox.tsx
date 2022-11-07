import React from 'react';

import { Controller, FieldValues, useFormContext } from 'react-hook-form';

import {
  getErrorMessage,
  getValidationWrapperStyles
} from '@components/form-wrappers/formWrappers.helper';
import {
  ComboBox,
  DirectionalHint,
  IComboBox,
  IComboBoxProps,
  IComboBoxStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';

import { FormWrapperProps } from './formWrappers.types';

export type FormComboBoxProps<T> = IComboBoxProps &
  FormWrapperProps<T, Partial<IComboBoxStyles>> & {
    defaultToPreviousValueOnInvalidSelection?: boolean;
  };

const FormComboBox = <T extends FieldValues>({
  name,
  validationProps,
  ...props
}: FormComboBoxProps<T>) => {
  const { register, getFieldState, control, formState, setValue } =
    useFormContext<T>();

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

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const fieldState = getFieldState(name, formState);
        const errorMessage = getErrorMessage(fieldState);

        const mergedStyles = getValidationWrapperStyles(
          fieldState,
          props.styles,
          defaultValidationStyles,
          validationProps
        );
        return (
          <Stack>
            <ComboBox
              {...props}
              {...register(name)}
              componentRef={comboBoxRef}
              allowFreeform={true}
              calloutProps={{
                directionalHintFixed: true,
                directionalHint: DirectionalHint.bottomRightEdge
              }}
              onClick={onOpenClick}
              selectedKey={field.value || ''}
              errorMessage={errorMessage}
              onChange={(e, option: any) => {
                if (
                  props.defaultToPreviousValueOnInvalidSelection &&
                  !option?.key
                ) {
                  setValue(name, field.value, {
                    shouldValidate: true,
                    shouldTouch: true
                  });
                } else {
                  setValue(name, option?.key || '', {
                    shouldValidate: true,
                    shouldTouch: true
                  });
                }

                if (props.onChange) {
                  props.onChange(e, option);
                }
              }}
              styles={mergedStyles}
            />
          </Stack>
        );
      }}
    />
  );
};

export default FormComboBox;
