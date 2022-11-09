import React, { useMemo } from 'react';

import { FormikContextType, useFormikContext } from 'formik';

import { Stack } from '@fluentui/react';
import { PostalAddress } from '@services/portal-api';
import { OrderSummaryAddress } from '@widgets/checkout/temp/orderSummaryAddress';

import { CheckoutFormValues } from '../checkout-form/checkoutForm.types';
import { CheckoutFormOverviewGroupContainer } from '../shared/checkoutFormOverviewGroupContainer';

const messages = {
  shippingAddress: 'Shipping Address'
};

export const CheckoutFormOverviewShippingAddress: React.FC = () => {
  const { values }: FormikContextType<CheckoutFormValues> = useFormikContext();

  const shippingAddress: PostalAddress = useMemo(() => {
    return {
      city: values.city,
      country: values.country,
      postalCode: values.zipCode,
      region: values.state,
      lines: [values.address]
    };
  }, [values]);

  return (
    <Stack>
      <CheckoutFormOverviewGroupContainer
        text={messages.shippingAddress}
        stepIndex={0}
      >
        <OrderSummaryAddress
          address={shippingAddress}
          title={messages.shippingAddress}
          displayTitle={false}
        />
      </CheckoutFormOverviewGroupContainer>
    </Stack>
  );
};
