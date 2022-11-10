import React from 'react';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { Stack, useTheme } from '@fluentui/react';
import { StepFields } from '@widgets/checkout-new/checkout.types';
import { Step1FormData } from '@widgets/checkout-new/steps/step-1-details/step-1-details';
import { CheckoutFormGroupTitle } from '@widgets/checkout/shared/checkoutFormGroupTitle';
import { CheckoutFormRowContainer } from '@widgets/checkout/shared/checkoutFormRowContainer';

export const ShippingContactFormGroup: React.FC<{
  title?: string;
  fields: Pick<
    StepFields<Step1FormData>,
    'firstName' | 'name' | 'company' | 'phone'
  >;
}> = ({ title, fields }) => {
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
            <FormikTextField {...fields.firstName} required={true} />
            <FormikTextField {...fields.name} required={true} />
          </CheckoutFormRowContainer>
          <CheckoutFormRowContainer>
            <FormikTextField {...fields.company} required={true} />
            <FormikTextField {...fields.phone} required={true} />
          </CheckoutFormRowContainer>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
