import React from 'react';

import { useField } from 'formik';

import {
  Checkbox,
  ICheckboxProps,
  ICheckStyles,
  MessageBar,
  MessageBarType,
  Stack,
  useTheme
} from '@fluentui/react';

export const FormikCheckbox: React.FC<ICheckboxProps & { name: string }> = ({
  name,
  ...props
}) => {
  const { spacing } = useTheme();
  const [input, meta] = useField(name);

  const styles: Partial<ICheckStyles> = {
    root: {
      selectors: {
        '.ms-Checkbox-label': {
          alignItems: 'flex-start'
        }
      }
    }
  };

  return (
    <Stack tokens={{ childrenGap: spacing.m }}>
      <Stack.Item>
        <Checkbox {...props} {...input} checked={input.value} styles={styles} />
      </Stack.Item>

      {meta.touched && meta.error ? (
        <Stack.Item>
          <MessageBar messageBarType={MessageBarType.warning}>
            {meta.error}
          </MessageBar>
        </Stack.Item>
      ) : null}
    </Stack>
  );
};
