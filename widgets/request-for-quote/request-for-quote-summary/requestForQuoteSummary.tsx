import React from 'react';

import { Summary } from '@components/summary/summary';
import { Stack, useTheme } from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';
import { ServiceBadges } from '@widgets/service-badges/serviceBadges';

import { RequestForQuoteSummaryActions } from './requestForQuoteSummaryActions';
import { RequestForQuoteSummaryDetails } from './requestForQuoteSummaryDetails';
import { RequestForQuoteSummaryProductsList } from './requestForQuoteSummaryProductsList';

type RequestForQuoteSummaryProps = {
  onProceed: () => void;
  onPrevious: () => void;
  submitButtonText: string;
  showSubmitButton: boolean;
};
export const RequestForQuoteSummary: React.FC<RequestForQuoteSummaryProps> = ({
  onProceed,
  onPrevious,
  submitButtonText,
  showSubmitButton
}) => {
  const { quoteItems } = useCart();
  const { spacing } = useTheme();

  return (
    <Stack>
      <Summary
        onRenderActions={() => {
          return (
            <Stack tokens={{ childrenGap: spacing.m }}>
              <Stack.Item>
                <RequestForQuoteSummaryActions
                  submitButtonText={submitButtonText}
                  showSubmitButton={showSubmitButton}
                  onProceedClick={onProceed}
                  onPreviousClick={onPrevious}
                />
              </Stack.Item>
              <Stack.Item>
                <ServiceBadges />
              </Stack.Item>
            </Stack>
          );
        }}
        onRenderDetails={() => {
          return <RequestForQuoteSummaryDetails />;
        }}
        onRenderTopSection={() => (
          <RequestForQuoteSummaryProductsList items={quoteItems} />
        )}
      />
    </Stack>
  );
};
