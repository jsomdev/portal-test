import React from 'react';

import { FormikTextField } from '@components/formik-wrappers/formikTextField';
import { Stack, useTheme } from '@fluentui/react';

import { checkoutFormFields } from '../checkout-form/checkoutFormHelper';
import { CheckoutFormGroupTitle } from '../shared/checkoutFormGroupTitle';
import { CheckoutFormRowContainer } from '../shared/checkoutFormRowContainer';

const messages = {
  contact: 'General'
};

export const OrderContactFormGroup: React.FC = () => {
  const { spacing } = useTheme();

  return (
    <Stack tokens={{ childrenGap: spacing.s1 }}>
      <Stack.Item>
        <CheckoutFormGroupTitle title={messages.contact} />
      </Stack.Item>
      <Stack.Item>
        <Stack>
          <CheckoutFormRowContainer>
            <FormikTextField {...checkoutFormFields.email} required={true} />
          </CheckoutFormRowContainer>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
