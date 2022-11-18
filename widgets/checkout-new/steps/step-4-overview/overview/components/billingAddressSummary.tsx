import React, { useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Stack, useTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { PostalAddress } from '@services/portal-api';
import { useCheckout } from '@widgets/checkout-new/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout-new/shared/overviewGroupContainer';
import { OrderSummaryAddress } from '@widgets/checkout-new/shared/temp/orderSummaryAddress';

const messages = defineMessages({
  billingAddress: {
    id: messageIds.pages.checkout.payment.billingAddress,
    defaultMessage: 'Shipping Address'
  }
});

export const BillingAddressSummary: React.FC = () => {
  const { formatMessage } = useIntl();
  const { formValues, steps } = useCheckout();
  const { spacing } = useTheme();

  const billingAddress: PostalAddress | undefined = useMemo(() => {
    if (!formValues) {
      return undefined;
    }

    //TODO refactor
    return formValues.payment.shippingAddressAsBillingAddress === 'no'
      ? {
          city: formValues.payment.billingCity,
          country: formValues.payment.billingCountry,
          postalCode: formValues.payment.billingPostalCode,
          region: formValues.payment.billingState,
          lines: formValues.payment.billingAddress
            ? [formValues.payment.billingAddress]
            : undefined
        }
      : {
          city: formValues.details.city,
          country: formValues.details.country,
          postalCode: formValues.details.postalCode,
          region: formValues.details.state,
          lines: formValues.details.address
            ? [formValues.details.address]
            : undefined
        };
  }, [formValues]);

  if (!billingAddress) {
    return null;
  }
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
