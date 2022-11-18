import React from 'react';

import { useIntl } from 'react-intl';

import {
  FontSizes,
  FontWeights,
  IShimmerStyles,
  ITextStyles,
  Shimmer,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';
import { useCheckout } from '@widgets/checkout-new/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout-new/shared/overviewGroupContainer';
import { CheckoutFormOverviewGroupContainer } from '@widgets/checkout/shared/checkoutFormOverviewGroupContainer';

export const formatCreditCardIssuer = (issuer: string): string => {
  return issuer.replace(/^\w/, c => c.toUpperCase());
};

export const formatCreditCardNumber = (cardNumber: string): string => {
  return `${cardNumber
    .substring(0, cardNumber.length - 4)
    .replace(/[0-9]/g, '●')
    .replace(/X/g, '●')}${cardNumber.substring(cardNumber.length - 4)}`;
};

//TODO i18n
const messages = {
  paymentMethod: 'Payment Method',
  totalCost: 'You will pay',
  creditCardLabel: 'Credit Card',
  purchaseOrder: 'Purchase Order',
  invoiceAmount: 'Invoice amount'
};

export interface CheckoutFormOverviewPaymentInfoStyles {
  price: ITextStyles;
  priceShimmer: IShimmerStyles;
}

export const PaymentSummary: React.FC = () => {
  const { formatNumber } = useIntl();
  const {
    formValues,
    currencyCode,
    totalCost,
    creditCardIssuer,
    orderTaxAmountStatus,
    steps
  } = useCheckout();
  const { spacing, palette } = useTheme();

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

  if (formValues?.payment.paymentMethod === PaymentMethod.PURCHASE_ORDER) {
    return (
      <Stack tokens={{ childrenGap: spacing.l2 }}>
        <OverviewGroupContainer
          text={messages.paymentMethod}
          stepIndex={steps?.payment.index}
        >
          <Stack horizontal horizontalAlign="space-between">
            <Stack.Item>
              <Stack tokens={{ childrenGap: spacing.s1 }}>
                <Stack.Item>
                  <Text>{formValues.payment.referenceNumber || '---'}</Text>
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
        </OverviewGroupContainer>
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
                <Text>
                  {formValues?.payment.creditCardNumber &&
                    formatCreditCardNumber(formValues.payment.creditCardNumber)}
                </Text>
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
