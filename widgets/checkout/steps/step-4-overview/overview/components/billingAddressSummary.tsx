import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Stack, useTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { PostalAddress } from '@services/portal-api';
import { useCheckout } from '@widgets/checkout/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout/shared/overviewGroupContainer';
import { OrderSummaryAddress } from '@widgets/checkout/shared/temp/orderSummaryAddress';

const messages = defineMessages({
  billingAddress: {
    id: messageIds.pages.checkout.payment.billingAddress,
    defaultMessage: 'Shipping Address'
  }
});

export const BillingAddressSummary: React.FC<{
  billingAddress: PostalAddress | null | undefined;
}> = ({ billingAddress }) => {
  const { formatMessage } = useIntl();
  const { steps } = useCheckout();
  const { spacing } = useTheme();

  return (
    <Stack tokens={{ childrenGap: spacing.l1 }}>
      <OverviewGroupContainer
        text={formatMessage(messages.billingAddress)}
        stepIndex={steps?.payment.index}
      >
        <OrderSummaryAddress address={billingAddress} />
      </OverviewGroupContainer>
    </Stack>
  );
};
