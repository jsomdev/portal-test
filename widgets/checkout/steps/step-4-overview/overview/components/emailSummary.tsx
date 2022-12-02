import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Stack, Text } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { useCheckout } from '@widgets/checkout/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout/shared/overviewGroupContainer';

const messages = defineMessages({
  email: {
    id: messageIds.pages.checkout.details.fields.email,
    defaultMessage: 'Email'
  }
});

export const EmailSummary: React.FC = () => {
  const { formatMessage } = useIntl();
  const { formValues, steps } = useCheckout();
  return (
    <Stack>
      <Stack.Item>
        <OverviewGroupContainer
          text={formatMessage(messages.email)}
          stepIndex={steps?.details.index}
        >
          <Text>{formValues?.details.email}</Text>
        </OverviewGroupContainer>
      </Stack.Item>
    </Stack>
  );
};
