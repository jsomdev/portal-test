import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  FontWeights,
  IShimmerStyles,
  ITextStyles,
  Shimmer,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { PaymentMethod } from '@services/portal-api/models/PaymentMethod';
import { useCheckout } from '@widgets/checkout/checkoutProvider/checkoutProvider';
import { OverviewGroupContainer } from '@widgets/checkout/shared/overviewGroupContainer';

const formatCreditCardIssuer = (issuer: string): string => {
  return issuer.replace(/^\w/, c => c.toUpperCase());
};

const formatCreditCardNumber = (cardNumber: string): string => {
  return `${cardNumber
    .substring(0, cardNumber.length - 4)
    .replace(/[0-9]/g, '●')
    .replace(/X/g, '●')}${cardNumber.substring(cardNumber.length - 4)}`;
};

const messages = defineMessages({
  paymentMethod: {
    id: messageIds.pages.checkout.payment.fields.paymentMethod,
    defaultMessage: 'Payment Method'
  },
  totalCost: {
    id: messageIds.pages.checkout.overview.totalCost,
    defaultMessage: 'You will pay'
  },
  creditCardLabel: {
    id: messageIds.pages.checkout.payment.creditCard,
    defaultMessage: 'Credit Card'
  },
  purchaseOrder: {
    id: messageIds.pages.checkout.payment.purchaseOrder,
    defaultMessage: 'Purchase Order'
  },
  invoiceAmount: {
    id: messageIds.pages.checkout.overview.invoiceAmount,
    defaultMessage: 'Invoice amount'
  }
});

export interface CheckoutFormOverviewPaymentInfoStyles {
  price: ITextStyles;
  priceShimmer: IShimmerStyles;
}

export const PaymentSummary: React.FC = () => {
  const { formatNumber, formatMessage } = useIntl();
  const {
    formValues,
    currencyCode,
    totalCost,
    creditCardIssuer,
    orderTaxAmountStatus,
    steps
  } = useCheckout();
  const { spacing, palette, fonts } = useTheme();

  const styles: CheckoutFormOverviewPaymentInfoStyles = {
    price: {
      root: {
        ...fonts.mediumPlus,
        color: palette.themePrimary,
        fontWeight: FontWeights.semibold
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
          text={formatMessage(messages.paymentMethod)}
          stepIndex={steps?.payment.index}
        >
          <Stack horizontal horizontalAlign="space-between">
            <Stack.Item>
              <Stack tokens={{ childrenGap: spacing.s1 }}>
                <Stack.Item>
                  <Text>{formValues.payment.referenceNumber || '---'}</Text>
                </Stack.Item>
                <Stack.Item>
                  <Text>{formatMessage(messages.purchaseOrder)}</Text>
                </Stack.Item>
              </Stack>
            </Stack.Item>
            <Stack.Item>
              <Stack tokens={{ childrenGap: spacing.s1 }} horizontalAlign="end">
                <Stack.Item>
                  <Text>{formatMessage(messages.invoiceAmount)}</Text>
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
      <OverviewGroupContainer
        text={formatMessage(messages.paymentMethod)}
        stepIndex={steps?.payment.index}
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
                <Text>{`${formatCreditCardIssuer(
                  creditCardIssuer || ''
                )} ${formatMessage(messages.creditCardLabel)}`}</Text>
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack tokens={{ childrenGap: spacing.s1 }} horizontalAlign="end">
              <Stack.Item>
                <Text>{formatMessage(messages.totalCost)}</Text>
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
};
