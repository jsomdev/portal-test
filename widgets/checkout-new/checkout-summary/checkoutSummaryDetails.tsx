import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  FontSizes,
  FontWeights,
  Shimmer,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { CheckoutFormContext } from '@widgets/checkout/shared/checkoutFormContext';
import { PricePrimaryText } from '@widgets/pricing/price-label/pricePrimaryText';

import { CheckoutSummaryDetailStyles } from './checkoutSummary.types';

const messages = defineMessages({
  details: {
    id: messageIds.pages.checkout.summary.details,
    defaultMessage: 'Details',
    description: 'Details section title on checkout summary'
  },
  subTotal: {
    id: messageIds.pages.checkout.summary.subTotal,
    defaultMessage: 'Subtotal',
    description: 'Subtotal label on checkout summary'
  },
  shippingCost: {
    id: messageIds.pages.checkout.summary.shippingCost,
    defaultMessage: 'Shipping',
    description: 'Shipping label on checkout summary'
  },
  total: {
    id: messageIds.pages.checkout.summary.total,
    defaultMessage: 'Shipping',
    description: 'Total label on checkout summary'
  },
  tax: {
    id: messageIds.pages.checkout.summary.tax,
    defaultMessage: 'Tax',
    description: 'Tax label on checkout summary'
  }
});

export const CheckoutSummaryDetails: React.FC = () => {
  const { spacing, semanticColors, palette } = useTheme();
  const {
    currencyCode,
    subTotalCost,
    totalCost,
    selectedShippingOption,
    orderTaxAmount,
    orderTaxAmountStatus
  } = React.useContext(CheckoutFormContext);
  const { formatNumber, formatMessage } = useIntl();

  const styles: CheckoutSummaryDetailStyles = {
    headerText: {
      root: {
        borderBottom: `1px solid ${semanticColors.variantBorder}`
      }
    },
    total: {
      root: {
        borderTop: `1px solid ${semanticColors.variantBorder}`,
        marginTop: spacing.l1
      }
    },
    totalText: {
      root: {
        color: palette.themePrimary,
        fontWeight: FontWeights.semibold,
        fontSize: FontSizes.mediumPlus
      }
    },
    totalShimmer: {
      shimmerWrapper: { height: '21px' }
    }
  };

  return (
    <Stack>
      <Stack.Item>
        <Stack horizontalAlign="space-between" horizontal>
          <Stack.Item>
            <Text>{formatMessage(messages.subTotal)}</Text>
          </Stack.Item>
          <Stack.Item>
            <PricePrimaryText
              text={formatNumber(subTotalCost, {
                currency: currencyCode,
                currencyDisplay: 'narrowSymbol',
                style: 'currency'
              }).toString()}
              variant={'medium'}
            />
          </Stack.Item>
        </Stack>
        <Stack
          tokens={{ padding: `${spacing.s2} 0 0 0` }}
          horizontalAlign="space-between"
          horizontal
        >
          <Stack.Item>
            <Text>{formatMessage(messages.shippingCost)}</Text>
          </Stack.Item>
          <Stack.Item>
            <Text>
              {selectedShippingOption ? (
                <PricePrimaryText
                  text={(
                    selectedShippingOption &&
                    formatNumber(selectedShippingOption.amount, {
                      currency: selectedShippingOption.currencyCode || 'USD',
                      currencyDisplay: 'narrowSymbol',
                      style: 'currency'
                    })
                  ).toString()}
                  variant={'medium'}
                />
              ) : (
                '--'
              )}
            </Text>
          </Stack.Item>
        </Stack>
        <Stack
          tokens={{ padding: `${spacing.s2} 0 0 0` }}
          horizontalAlign="space-between"
          horizontal
        >
          <Stack.Item>
            <Text>{formatMessage(messages.tax)}</Text>
          </Stack.Item>
          <Stack.Item>
            {orderTaxAmountStatus === 'loading' ? (
              <Shimmer width="50px" />
            ) : (
              <Text>
                {orderTaxAmount ? (
                  <PricePrimaryText
                    text={(
                      orderTaxAmount &&
                      formatNumber(orderTaxAmount.amount, {
                        currency: orderTaxAmount.currencyCode || 'USD',
                        currencyDisplay: 'narrowSymbol',
                        style: 'currency'
                      })
                    ).toString()}
                    variant={'medium'}
                  />
                ) : (
                  '--'
                )}
              </Text>
            )}
          </Stack.Item>
        </Stack>

        <Stack
          tokens={{ padding: `${spacing.m} 0 0 0` }}
          styles={styles.total}
          horizontalAlign="space-between"
          horizontal
        >
          <Stack.Item>
            <Text styles={styles.totalText}>
              {formatMessage(messages.total)}
            </Text>
          </Stack.Item>
          <Stack.Item>
            {orderTaxAmountStatus === 'loading' ? (
              <Shimmer width="70px" styles={styles.totalShimmer} />
            ) : (
              <Text styles={styles.totalText}>
                {`${
                  (totalCost &&
                    formatNumber(totalCost, {
                      currency: currencyCode,
                      currencyDisplay: 'narrowSymbol',
                      style: 'currency'
                    })) ||
                  '--'
                }`}
              </Text>
            )}
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
