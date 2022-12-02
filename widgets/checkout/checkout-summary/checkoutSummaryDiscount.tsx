import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { DefaultButton, Stack, Text, useTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';

const messages = defineMessages({
  apply: {
    id: messageIds.pages.checkout.discounts.apply,
    defaultMessage: 'Apply',
    description: 'Apply button text on checkout summary'
  },
  discountCode: {
    id: messageIds.pages.checkout.discounts.discountCode,
    defaultMessage: 'Discount code',
    description: 'Discount code label on checkout summary'
  }
});

export const CheckoutSummaryDiscount: React.FC = () => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();

  return (
    <Stack>
      <Stack.Item>
        <Text variant="mediumPlus">{formatMessage(messages.discountCode)}</Text>
      </Stack.Item>
      <Stack.Item>
        <Stack
          tokens={{ padding: `${spacing.l1} 0 0 0` }}
          horizontal
          horizontalAlign="space-between"
        >
          <Stack.Item>
            <FormikTextField
              name="discountCode"
              placeholder={formatMessage(messages.discountCode)}
              validationProps={{ disabled: true }}
            />
          </Stack.Item>
          <Stack.Item>
            <DefaultButton text={formatMessage(messages.apply)} />
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
