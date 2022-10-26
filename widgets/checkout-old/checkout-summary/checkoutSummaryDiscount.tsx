import React from 'react';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { DefaultButton, Stack, Text, useTheme } from '@fluentui/react';

const messages = {
  apply: 'Apply',
  discountCode: 'Discount code'
};

export const CheckoutSummaryDiscount: React.FC = () => {
  const { spacing } = useTheme();

  return (
    <Stack>
      <Stack.Item>
        <Text variant="mediumPlus">{messages.discountCode}</Text>
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
              placeholder={messages.discountCode}
              validationProps={{ disabled: true }}
            />
          </Stack.Item>
          <Stack.Item>
            <DefaultButton text={messages.apply} />
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
