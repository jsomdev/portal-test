import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Stack } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { ContactInfo } from '@services/portal-api';
import { useCheckout } from '@widgets/checkout/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout/shared/overviewGroupContainer';
import { OrderSummaryContact } from '@widgets/checkout/shared/temp/orderSummaryContact';

const messages = defineMessages({
  billingContact: {
    id: messageIds.pages.checkout.payment.billingContact,
    defaultMessage: 'Billing Contact'
  }
});

export const BillingContactSummary: React.FC<{
  billingContactInfo: ContactInfo;
}> = ({ billingContactInfo }) => {
  const { formatMessage } = useIntl();
  const { steps } = useCheckout();

  return (
    <Stack>
      <OverviewGroupContainer
        text={formatMessage(messages.billingContact)}
        stepIndex={steps?.payment.index}
      >
        <OrderSummaryContact contactInfo={billingContactInfo} />
      </OverviewGroupContainer>
    </Stack>
  );
};
