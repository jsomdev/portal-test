import React, { useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { mapFormFieldsToOrderPost } from '@widgets/checkout/checkoutForm.helper';
import { useCheckout } from '@widgets/checkout/checkoutProvider/checkoutProvider';
import { CheckoutFormGroupTitle } from '@widgets/checkout/shared/checkoutFormGroupTitle';
import { BillingAddressSummary } from '@widgets/checkout/steps/step-4-overview/overview/components/billingAddressSummary';
import { BillingContactSummary } from '@widgets/checkout/steps/step-4-overview/overview/components/billingContactSummary';
import { PaymentSummary } from '@widgets/checkout/steps/step-4-overview/overview/components/paymentSummary';
import { ShippingAddressSummary } from '@widgets/checkout/steps/step-4-overview/overview/components/shippingAddressSummary';
import { ShippingContactSummary } from '@widgets/checkout/steps/step-4-overview/overview/components/shippingContactSummary';
import { ShippingMethodSummary } from '@widgets/checkout/steps/step-4-overview/overview/components/shippingMethodSummary';
import { useBetweenMobileAndTablet, useMobile } from '@widgets/media-queries';

import { EmailSummary } from './components/emailSummary';

const messages = defineMessages({
  reviewTitle: {
    id: messageIds.pages.checkout.overview.reviewTitle,
    defaultMessage: 'Review'
  }
});

export const CheckoutOverview: React.FC = () => {
  const { formatMessage } = useIntl();
  const { spacing } = useTheme();
  const { steps, totalCost, orderTaxAmountStatus, formValues } = useCheckout();
  const isMobileOrTablet = useBetweenMobileAndTablet();

  const order = useMemo(
    () =>
      formValues
        ? mapFormFieldsToOrderPost(formValues, totalCost, orderTaxAmountStatus)
        : undefined,
    [formValues, totalCost, orderTaxAmountStatus]
  );

  if (!order) {
    return null;
  }

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
        <CheckoutFormGroupTitle title={formatMessage(messages.reviewTitle)} />
      </Stack.Item>
      <Stack.Item>
        <Stack tokens={{ childrenGap: spacing.l1 }}>
          <Stack.Item>
            <EmailSummary
              email={order.emailAddresses?.[0]}
              stepIndex={steps?.details.index}
            />
          </Stack.Item>
          <Stack.Item>
            <Stack
              styles={styles}
              horizontal={!isMobileOrTablet}
              horizontalAlign="space-between"
              tokens={{ childrenGap: spacing.l1 }}
            >
              <Stack.Item>
                <ShippingContactSummary
                  shippingContactInfo={order.shippingContactInfo}
                />
              </Stack.Item>
              <Stack.Item>
                <BillingContactSummary
                  stepIndex={steps?.payment.index}
                  billingContactInfo={order.billingContactInfo}
                />
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack
              styles={styles}
              horizontal={!isMobileOrTablet}
              horizontalAlign="space-between"
              tokens={{ childrenGap: spacing.l1 }}
            >
              <Stack.Item>
                <ShippingAddressSummary
                  shippingAddress={order.shippingAddress}
                />
              </Stack.Item>
              <Stack.Item>
                <BillingAddressSummary billingAddress={order.billingAddress} />
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack
              styles={styles}
              horizontal={!isMobileOrTablet}
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
