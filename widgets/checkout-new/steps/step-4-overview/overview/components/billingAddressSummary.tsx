import React, { useMemo } from 'react';

import { Stack, useTheme } from '@fluentui/react';
import { PostalAddress } from '@services/portal-api';
import { useCheckout } from '@widgets/checkout-new/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout-new/shared/overviewGroupContainer';
import { OrderSummaryAddress } from '@widgets/checkout/temp/orderSummaryAddress';

const messages = {
  billingAddress: 'billingAddress'
};

export const BillingAddressSummary: React.FC = () => {
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
      {/*TODO i18n*/}
      <OverviewGroupContainer
        text="Billing Address"
        stepIndex={steps?.payment.index}
      >
        <OrderSummaryAddress
          address={billingAddress}
          title={messages.billingAddress}
          displayTitle={false}
        />
      </OverviewGroupContainer>
    </Stack>
  );
};
