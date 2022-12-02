import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Stack } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { ContactInfo } from '@services/portal-api';
import { useCheckout } from '@widgets/checkout/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout/shared/overviewGroupContainer';
import { OrderSummaryContact } from '@widgets/checkout/shared/temp/orderSummaryContact';

const messages = defineMessages({
  shippingContact: {
    id: messageIds.pages.checkout.details.shippingContactTitle,
    defaultMessage: 'Shipping Contact'
  }
});

export const ShippingContactSummary: React.FC<{
  shippingContactInfo: ContactInfo;
}> = ({ shippingContactInfo }) => {
  const { formatMessage } = useIntl();
  const { steps } = useCheckout();

  return (
    <Stack>
      <OverviewGroupContainer
        text={formatMessage(messages.shippingContact)}
        stepIndex={steps?.details.index}
      >
        <OrderSummaryContact contactInfo={shippingContactInfo} />
      </OverviewGroupContainer>
    </Stack>
  );
};
