import React, { useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Stack } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { PostalAddress } from '@services/portal-api';
import { useCheckout } from '@widgets/checkout-new/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout-new/shared/overviewGroupContainer';
import { OrderSummaryAddress } from '@widgets/checkout-new/shared/temp/orderSummaryAddress';

const messages = defineMessages({
  shippingAddress: {
    id: messageIds.pages.checkout.details.shippingAddressTitle,
    defaultMessage: 'Shipping Address'
  }
});

export const ShippingAddressSummary: React.FC = () => {
  const { formatMessage } = useIntl();
  const { formValues, steps } = useCheckout();

  //TODO refactor
  const shippingAddress: PostalAddress = useMemo(() => {
    return {
      city: formValues?.details.city || null,
      country: formValues?.details.country || null,
      postalCode: formValues?.details.postalCode || null,
      region: formValues?.details.state || null,
      lines: formValues?.details.address
        ? [formValues.details.address]
        : undefined
    };
  }, [formValues]);

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
