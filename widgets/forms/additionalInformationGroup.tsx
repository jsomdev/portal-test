import React from 'react';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { Stack, useTheme } from '@fluentui/react';
import { CheckoutFormGroupTitle } from '@widgets/checkout/shared/checkoutFormGroupTitle';

export const AdditionalInformationFormGroup: React.FC = () => {
  const messages = {
    title: 'Additional Information',
    placeholder: 'Add any additional comments, request or remarks'
  };
  const { spacing } = useTheme();
  return (
    <Stack tokens={{ childrenGap: spacing.m }}>
      <Stack.Item>
        <CheckoutFormGroupTitle title={messages.title} />
      </Stack.Item>
      <Stack.Item>
        <FormikTextField
          name="additionalInformation"
          placeholder={messages.placeholder}
          multiline
          rows={3}
          validationProps={{ disabled: true }}
        />
      </Stack.Item>
    </Stack>
  );
};
