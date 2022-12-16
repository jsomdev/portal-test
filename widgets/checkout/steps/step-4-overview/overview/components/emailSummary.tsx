import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Stack, Text } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { OverviewGroupContainer } from '@widgets/checkout/shared/overviewGroupContainer';

const messages = defineMessages({
  email: {
    id: messageIds.pages.checkout.details.fields.email,
    defaultMessage: 'Email'
  }
});

interface EmailSummaryProps {
  stepIndex: number | undefined;
  email: string | undefined;
}
export const EmailSummary: React.FC<EmailSummaryProps> = ({
  stepIndex,
  email
}) => {
  const { formatMessage } = useIntl();
  return (
    <Stack>
      <Stack.Item>
        <OverviewGroupContainer
          text={formatMessage(messages.email)}
          stepIndex={stepIndex}
        >
          <Text>{email}</Text>
        </OverviewGroupContainer>
      </Stack.Item>
    </Stack>
  );
};
