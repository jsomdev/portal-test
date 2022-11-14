import React from 'react';

import { Summary } from '@components/summary/summary';
import { Stack, useTheme } from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';
import { CheckoutSummaryActions } from '@widgets/checkout-new/checkout-summary/checkoutSummaryActions';
import { CheckoutFormContext } from '@widgets/checkout/shared/checkoutFormContext';
import { ServiceBadges } from '@widgets/service-badges/serviceBadges';

import { CheckoutSummaryDetails } from './checkoutSummaryDetails';
import { CheckoutSummaryProductsList } from './checkoutSummaryProductsList';

type CheckoutSummaryProps = {
  onProceed: () => void;
  onPrevious: () => void;
  submitButtonText: string;
  showSubmitButton: boolean;
};
export const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  onProceed,
  onPrevious,
  submitButtonText,
  showSubmitButton
}) => {
  const { checkoutItems } = useCart();
  const { spacing } = useTheme();
  const { orderTaxAmountStatus } = React.useContext(CheckoutFormContext);

  return (
    <Stack>
      <Summary
        onRenderActions={() => {
          return (
            <Stack tokens={{ childrenGap: spacing.m }}>
              <Stack.Item>
                <CheckoutSummaryActions
                  submitButtonText={submitButtonText}
                  showSubmitButton={showSubmitButton}
                  onProceedClick={onProceed}
                  onPreviousClick={onPrevious}
                  disableSubmit={orderTaxAmountStatus === 'loading'}
                />
              </Stack.Item>
              <Stack.Item>
                <ServiceBadges />
              </Stack.Item>
            </Stack>
          );
        }}
        onRenderDetails={() => {
          return <CheckoutSummaryDetails />;
        }}
        onRenderTopSection={() => (
          <CheckoutSummaryProductsList items={checkoutItems} />
        )}
      />
    </Stack>
  );
};
