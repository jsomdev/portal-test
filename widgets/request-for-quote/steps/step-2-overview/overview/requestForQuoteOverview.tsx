import React, { useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';
import { messageIds } from '@services/i18n';
import { QuoteRequest } from '@services/portal-api/models/QuoteRequest';
import { CheckoutFormGroupTitle } from '@widgets/checkout/shared/checkoutFormGroupTitle';
import { BillingAddressSummary } from '@widgets/checkout/steps/step-4-overview/overview/components/billingAddressSummary';
import { BillingContactSummary } from '@widgets/checkout/steps/step-4-overview/overview/components/billingContactSummary';
import { EmailSummary } from '@widgets/checkout/steps/step-4-overview/overview/components/emailSummary';
import { useMobile } from '@widgets/media-queries';
import { useRequestForQuote } from '@widgets/request-for-quote/providers/requestForQuoteProvider';
import { mapRequestForQuoteFormValuesToQuoteRequest } from '@widgets/request-for-quote/requestForQuoteHelper';

const messages = defineMessages({
  reviewTitle: {
    id: messageIds.pages.checkout.overview.reviewTitle,
    defaultMessage: 'Review'
  }
});

export const RequestForQuoteOverview: React.FC = () => {
  const { formatMessage } = useIntl();
  const { spacing } = useTheme();
  const isMobile = useMobile();
  const { formValues, steps } = useRequestForQuote();
  const { quoteItems } = useCart();

  const quoteRequest: QuoteRequest | undefined = useMemo(
    () =>
      formValues
        ? mapRequestForQuoteFormValuesToQuoteRequest(formValues, quoteItems)
        : undefined,
    [formValues, quoteItems]
  );

  if (!quoteRequest) {
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
              stepIndex={steps?.details.index}
              email={quoteRequest.emailAddresses?.[0] || undefined}
            />
          </Stack.Item>
          <Stack.Item>
            <Stack
              styles={styles}
              horizontal={!isMobile}
              horizontalAlign="space-between"
              tokens={{ childrenGap: spacing.l1 }}
            >
              <Stack.Item>
                <BillingContactSummary
                  stepIndex={steps?.details.index}
                  billingContactInfo={quoteRequest.contactInfo}
                />
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack
              styles={styles}
              horizontal={!isMobile}
              horizontalAlign="space-between"
              tokens={{ childrenGap: spacing.l1 }}
            >
              <Stack.Item>
                <BillingAddressSummary billingAddress={quoteRequest.address} />
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
