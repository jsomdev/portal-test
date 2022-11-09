import React from 'react';

import { useIntl } from 'react-intl';

import {
  FontSizes,
  FontWeights,
  Shimmer,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { PricePrimaryText } from '@widgets/pricing/price-label/pricePrimaryText';

import { CheckoutFormContext } from '../shared/checkoutFormContext';
import { CheckoutSummaryDetailStyles } from './checkoutSummary.types';

const messages = {
  details: 'Details',
  subTotal: 'Sub Total',
  shippingCost: 'Shipping',
  total: 'Order Total',
  vat: 'Tax'
};

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
  const { formatNumber } = useIntl();

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
            <Text>{messages.subTotal}</Text>
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
            <Text>{messages.shippingCost}</Text>
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
            <Text>{messages.vat}</Text>
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
            <Text styles={styles.totalText}>{messages.total}</Text>
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
