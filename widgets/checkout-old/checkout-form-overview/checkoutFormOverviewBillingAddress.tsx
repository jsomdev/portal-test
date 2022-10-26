import React, { useMemo } from 'react';

import { FormikContextType, useFormikContext } from 'formik';

import { Stack, useTheme } from '@fluentui/react';
import { PostalAddress } from '@services/portal-api';
import { OrderSummaryAddress } from '@widgets/checkout-old/temp/orderSummaryAddress';

import { CheckoutFormValues } from '../checkout-form/checkoutForm.types';
import { CheckoutFormOverviewGroupContainer } from '../shared/checkoutFormOverviewGroupContainer';

const messages = {
  billingAddress: 'billingAddress'
};

export const CheckoutFormOverviewBillingAddress: React.FC = () => {
  const { values }: FormikContextType<CheckoutFormValues> = useFormikContext();
  const { spacing } = useTheme();

  const billingAddress: PostalAddress = useMemo(() => {
    return values.shippingAddressAsBillingAddress === 'no'
      ? {
          city: values.billingCity,
          country: values.billingCountry,
          postalCode: values.billingZipCode,
          region: values.billingState,
          lines: [values.billingAddress]
        }
      : {
          city: values.city,
          country: values.country,
          postalCode: values.zipCode,
          region: values.state,
          lines: [values.address]
        };
  }, [values]);

  return (
    <Stack tokens={{ childrenGap: spacing.l1 }}>
      <CheckoutFormOverviewGroupContainer text="Billing Address" stepIndex={2}>
        <OrderSummaryAddress
          address={billingAddress}
          title={messages.billingAddress}
          displayTitle={false}
        />
      </CheckoutFormOverviewGroupContainer>
    </Stack>
  );
};
