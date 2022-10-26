import React from 'react';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';

import { CheckoutFormGroupTitle } from '../shared/checkoutFormGroupTitle';
import { CheckoutFormOverviewBillingAddress } from './checkoutFormOverviewBillingAddress';
import { CheckoutFormOverviewBillingContact } from './checkoutFormOverviewBillingContact';
import { CheckoutFormOverviewEmail } from './checkoutFormOverviewEmail';
import { CheckoutFormOverviewPaymentInfo } from './checkoutFormOverviewPaymentInfo';
import { CheckoutFormOverviewShippingAddress } from './checkoutFormOverviewShippingAddress';
import { CheckoutFormOverviewShippingContact } from './checkoutFormOverviewShippingContact';
import { CheckoutFormOverviewShippingMethod } from './checkoutFormOverviewShippingMethod';

const messages = {
  review: 'Review'
};

export const CheckoutFormOverview: React.FC = () => {
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
            <CheckoutFormOverviewEmail />
          </Stack.Item>
          <Stack.Item>
            <Stack
              styles={styles}
              horizontal
              horizontalAlign="space-between"
              tokens={{ childrenGap: spacing.l1 }}
            >
              <Stack.Item>
                <CheckoutFormOverviewShippingContact />
              </Stack.Item>
              <Stack.Item>
                <CheckoutFormOverviewBillingContact />
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
                <CheckoutFormOverviewShippingAddress />
              </Stack.Item>
              <Stack.Item>
                <CheckoutFormOverviewBillingAddress />
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
                <CheckoutFormOverviewShippingMethod />
              </Stack.Item>
              <Stack.Item>
                <CheckoutFormOverviewPaymentInfo />
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
