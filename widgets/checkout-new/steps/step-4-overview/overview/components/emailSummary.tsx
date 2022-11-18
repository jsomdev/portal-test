import React from 'react';

import { Stack, Text } from '@fluentui/react';
import { useCheckout } from '@widgets/checkout-new/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout-new/shared/overviewGroupContainer';

const messages = {
  email: 'Email'
};

export const EmailSummary: React.FC = () => {
  const { formValues, steps } = useCheckout();
  return (
    <Stack>
      <Stack.Item>
        <OverviewGroupContainer
          text={messages.email}
          stepIndex={steps?.details.index}
        >
          <Text>{formValues?.details.email}</Text>
        </OverviewGroupContainer>
      </Stack.Item>
    </Stack>
  );
};
