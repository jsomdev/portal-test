import { Stack, Text } from '@fluentui/react';
import { FormikContextType, useFormikContext } from 'formik';
import React from 'react';
import { CheckoutFormValues } from '../checkout-form/checkoutForm.types';
import { CheckoutFormOverviewGroupContainer } from '../shared/checkoutFormOverviewGroupContainer';

const messages = {
  email: 'Email',
};

export const CheckoutFormOverviewEmail: React.FC = () => {
  const { values }: FormikContextType<CheckoutFormValues> = useFormikContext();

  return (
    <Stack>
      <Stack.Item>
        <CheckoutFormOverviewGroupContainer text={messages.email} stepIndex={0}>
          <Text>{values.email}</Text>
        </CheckoutFormOverviewGroupContainer>
      </Stack.Item>
    </Stack>
  );
};
