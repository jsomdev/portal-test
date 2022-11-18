import React, { useMemo } from 'react';

import { Stack } from '@fluentui/react';
import { PostalAddress } from '@services/portal-api';
import { useCheckout } from '@widgets/checkout-new/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout-new/shared/overviewGroupContainer';
import { OrderSummaryAddress } from '@widgets/checkout/temp/orderSummaryAddress';

const messages = {
  shippingAddress: 'Shipping Address'
};

export const ShippingAddressSummary: React.FC = () => {
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
        text={messages.shippingAddress}
        stepIndex={steps?.details.index}
      >
        <OrderSummaryAddress
          address={shippingAddress}
          title={messages.shippingAddress}
          displayTitle={false}
        />
      </OverviewGroupContainer>
    </Stack>
  );
};
