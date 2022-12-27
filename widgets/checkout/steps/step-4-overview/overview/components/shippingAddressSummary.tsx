import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Stack } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { PostalAddress } from '@services/portal-api';
import { useCheckout } from '@widgets/checkout/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout/shared/overviewGroupContainer';
import { OrderSummaryAddress } from '@widgets/checkout/shared/temp/orderSummaryAddress';

const messages = defineMessages({
  shippingAddress: {
    id: messageIds.pages.checkout.details.shippingAddressTitle,
    defaultMessage: 'Shipping Address'
  }
});

export const ShippingAddressSummary: React.FC<{
  shippingAddress: PostalAddress;
}> = ({ shippingAddress }) => {
  const { formatMessage } = useIntl();
  const { steps } = useCheckout();

  return (
    <Stack>
      <OverviewGroupContainer
        text={formatMessage(messages.shippingAddress)}
        stepIndex={steps?.details.index}
      >
        <OrderSummaryAddress address={shippingAddress} />
      </OverviewGroupContainer>
    </Stack>
  );
};
