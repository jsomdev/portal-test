import React from 'react';

import { useField } from 'formik';
import { useIntl } from 'react-intl';

import formatError from '@components/formik-wrappers/formatError';
import { PortalMessageBar } from '@components/messages/portalMessageBar';
import {
  Checkbox,
  ICheckStyles,
  ICheckboxProps,
  MessageBarType,
  Stack,
  useTheme
} from '@fluentui/react';

export const FormikCheckbox: React.FC<ICheckboxProps & { name: string }> = ({
  name,
  ...props
}) => {
  const { spacing } = useTheme();
  const intl = useIntl();
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

  const errorMessage = formatError(intl, meta, name);
  return (
    <Stack tokens={{ childrenGap: spacing.m }}>
      <Stack.Item>
        <Checkbox {...props} {...input} checked={input.value} styles={styles} />
      </Stack.Item>
      {errorMessage ? (
        <Stack.Item>
          <PortalMessageBar messageBarType={MessageBarType.warning}>
            {errorMessage}
          </PortalMessageBar>
        </Stack.Item>
      ) : null}
    </Stack>
  );
};
