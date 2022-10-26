import React from 'react';

import { FormikContextType, useFormikContext } from 'formik';
import { useIntl } from 'react-intl';

import {
  FontSizes,
  FontWeights,
  Shimmer,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import {
  formatCreditCardIssuer,
  formatCreditCardNumber
} from '@services/i18n/formatters/entity-formatters/textFormatter';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';

import { CheckoutFormValues } from '../checkout-form/checkoutForm.types';
import { CheckoutFormContext } from '../shared/checkoutFormContext';
import { CheckoutFormOverviewGroupContainer } from '../shared/checkoutFormOverviewGroupContainer';
import { CheckoutFormOverviewPaymentInfoStyles } from './checkoutFormOverview.types';

const messages = {
  paymentMethod: 'Payment Method',
  totalCost: 'You will pay',
  creditCardLabel: 'Credit Card',
  purchaseOrder: 'Purchase Order',
  invoiceAmount: 'Invoice amount'
};

export const CheckoutFormOverviewPaymentInfo: React.FC = () => {
  const { formatNumber } = useIntl();
  const { values }: FormikContextType<CheckoutFormValues> = useFormikContext();
  const { spacing, palette } = useTheme();
  const { currencyCode, totalCost, creditCardIssuer, orderTaxAmountStatus } =
    React.useContext(CheckoutFormContext);

  const styles: CheckoutFormOverviewPaymentInfoStyles = {
    price: {
      root: {
        color: palette.themePrimary,
        fontWeight: FontWeights.semibold,
        fontSize: FontSizes.mediumPlus
      }
    },
    priceShimmer: {
      shimmerWrapper: { height: '21px' }
    }
  };

  const formattedCost: string = React.useMemo(() => {
    return (
      (totalCost &&
        formatNumber(totalCost, {
          currency: currencyCode || 'USD',
          currencyDisplay: 'narrowSymbol',
          style: 'currency'
        })) ||
      '--'
    ).toString();
  }, [currencyCode, formatNumber, totalCost]);

  if (values.paymentMethod === PaymentMethod.PURCHASE_ORDER) {
    return (
      <Stack tokens={{ childrenGap: spacing.l2 }}>
        <CheckoutFormOverviewGroupContainer
          text={messages.paymentMethod}
          stepIndex={2}
        >
          <Stack horizontal horizontalAlign="space-between">
            <Stack.Item>
              <Stack tokens={{ childrenGap: spacing.s1 }}>
                <Stack.Item>
                  <Text>{values.referenceNumber || '---'}</Text>
                </Stack.Item>
                <Stack.Item>
                  <Text>{messages.purchaseOrder}</Text>
                </Stack.Item>
              </Stack>
            </Stack.Item>
            <Stack.Item>
              <Stack tokens={{ childrenGap: spacing.s1 }} horizontalAlign="end">
                <Stack.Item>
                  <Text>{messages.invoiceAmount}</Text>
                </Stack.Item>
                <Stack.Item>
                  {orderTaxAmountStatus === 'loading' ? (
                    <Shimmer width="50px" styles={styles.priceShimmer} />
                  ) : (
                    <Text styles={styles.price}>{formattedCost}</Text>
                  )}
                </Stack.Item>
              </Stack>
            </Stack.Item>
          </Stack>
        </CheckoutFormOverviewGroupContainer>
      </Stack>
    );
  }

  return (
    <Stack tokens={{ childrenGap: spacing.l2 }}>
      <CheckoutFormOverviewGroupContainer
        text={messages.paymentMethod}
        stepIndex={2}
      >
        <Stack horizontal horizontalAlign="space-between">
          <Stack.Item>
            <Stack tokens={{ childrenGap: spacing.s1 }}>
              <Stack.Item>
                <Text>{formatCreditCardNumber(values.creditCardNumber)}</Text>
              </Stack.Item>
              <Stack.Item>
                <Text>{`${formatCreditCardIssuer(creditCardIssuer || '')} ${
                  messages.creditCardLabel
                }`}</Text>
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack tokens={{ childrenGap: spacing.s1 }} horizontalAlign="end">
              <Stack.Item>
                <Text>{messages.totalCost}</Text>
              </Stack.Item>
              <Stack.Item>
                {orderTaxAmountStatus === 'loading' ? (
                  <Shimmer width="50px" styles={styles.priceShimmer} />
                ) : (
                  <Text styles={styles.price}>{formattedCost}</Text>
                )}
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </CheckoutFormOverviewGroupContainer>
    </Stack>
  );
};
