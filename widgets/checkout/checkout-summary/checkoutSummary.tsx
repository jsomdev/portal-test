import React from 'react';

import { Summary } from '@components/summary/summary';
import { Stack, useTheme } from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';
import { scrollToTop } from '@utilities/scrollToTop';
import { CheckoutFormSummaryStepActions } from '@widgets/forms/checkoutFormSummaryStepAction';
import { FormStepActions } from '@widgets/forms/formStepActions';
import { ServiceBadges } from '@widgets/service-badges/serviceBadges';

import { getCheckoutFieldNames } from '../checkout-form/checkoutFormHelper';
import { CheckoutFormContext } from '../shared/checkoutFormContext';
import { CheckoutSummaryDetails } from './checkoutSummaryDetails';
import { CheckoutSummaryProductsList } from './checkoutSummaryProductsList';

const messages = {
  header: 'SUMMARY'
};

export const CheckoutSummary: React.FC = () => {
  const { checkoutItems } = useCart();
  const { spacing } = useTheme();
  const { orderTaxAmountStatus } = React.useContext(CheckoutFormContext);

  return (
    <Stack>
      <Summary
        headerText={messages.header}
        onRenderActions={() => {
          return (
            <Stack tokens={{ childrenGap: spacing.m }}>
              <Stack.Item>
                <FormStepActions getFieldNames={getCheckoutFieldNames}>
                  {(onProceed: () => void, onPrevious: () => void) => (
                    <CheckoutFormSummaryStepActions
                      onProceedClick={() => {
                        onProceed();
                        scrollToTop('body');
                      }}
                      onPreviousClick={() => {
                        onPrevious();
                        scrollToTop('body');
                      }}
                      disableSubmit={orderTaxAmountStatus === 'loading'}
                    />
                  )}
                </FormStepActions>
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
