import React from 'react';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';
import { BillingAddressSummary } from '@widgets/checkout-new/steps/step-4-overview/overview/components/billingAddressSummary';
import { BillingContactSummary } from '@widgets/checkout-new/steps/step-4-overview/overview/components/billingContactSummary';
import { PaymentSummary } from '@widgets/checkout-new/steps/step-4-overview/overview/components/paymentSummary';
import { ShippingAddressSummary } from '@widgets/checkout-new/steps/step-4-overview/overview/components/shippingAddressSummary';
import { ShippingContactSummary } from '@widgets/checkout-new/steps/step-4-overview/overview/components/shippingContactSummary';
import { ShippingMethodSummary } from '@widgets/checkout-new/steps/step-4-overview/overview/components/shippingMethodSummary';
import { CheckoutFormGroupTitle } from '@widgets/checkout/shared/checkoutFormGroupTitle';

import { EmailSummary } from './components/emailSummary';

const messages = {
  review: 'Review'
};

export const CheckoutOverview: React.FC = () => {
  const { spacing } = useTheme();

  const styles: IStackStyles = {
    root: {
      selectors: {
        '& > div': {
          flex: 1,
          height: '100%'
        }
      }
    }
  };

  return (
    <Stack tokens={{ childrenGap: spacing.m }}>
      <Stack.Item>
        <CheckoutFormGroupTitle title={messages.review} />
      </Stack.Item>
      <Stack.Item>
        <Stack tokens={{ childrenGap: spacing.l1 }}>
          <Stack.Item>
            <EmailSummary />
          </Stack.Item>
          <Stack.Item>
            <Stack
              styles={styles}
              horizontal
              horizontalAlign="space-between"
              tokens={{ childrenGap: spacing.l1 }}
            >
              <Stack.Item>
                <ShippingContactSummary />
              </Stack.Item>
              <Stack.Item>
                <BillingContactSummary />
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack
              styles={styles}
              horizontal
              horizontalAlign="space-between"
              tokens={{ childrenGap: spacing.l1 }}
            >
              <Stack.Item>
                <ShippingAddressSummary />
              </Stack.Item>
              <Stack.Item>
                <BillingAddressSummary />
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack
              styles={styles}
              horizontal
              horizontalAlign="space-between"
              tokens={{ childrenGap: spacing.l1 }}
            >
              <Stack.Item>
                <ShippingMethodSummary />
              </Stack.Item>
              <Stack.Item>
                <PaymentSummary />
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
