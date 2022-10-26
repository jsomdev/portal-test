import React from 'react';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { Stack, useTheme } from '@fluentui/react';

import { checkoutFormFields } from '../checkout-form/checkoutFormHelper';
import { CheckoutFormGroupTitle } from '../shared/checkoutFormGroupTitle';
import { CheckoutFormRowContainer } from '../shared/checkoutFormRowContainer';

export const ShippingContactFormGroup: React.FC<{ title?: string }> = ({
  title
}) => {
  const messages = {
    shippingContact: title || 'Shipping Contact'
  };
  const { spacing } = useTheme();

  return (
    <Stack tokens={{ childrenGap: spacing.s1 }}>
      <Stack.Item>
        <CheckoutFormGroupTitle title={messages.shippingContact} />
      </Stack.Item>
      <Stack.Item>
        <Stack tokens={{ childrenGap: spacing.s1 }}>
          <CheckoutFormRowContainer>
            <FormikTextField
              {...checkoutFormFields.firstName}
              required={true}
            />
            <FormikTextField {...checkoutFormFields.lastName} required={true} />
          </CheckoutFormRowContainer>
          <CheckoutFormRowContainer>
            <FormikTextField {...checkoutFormFields.company} required={true} />
            <FormikTextField {...checkoutFormFields.phone} required={true} />
          </CheckoutFormRowContainer>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
