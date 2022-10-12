import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Summary } from '@components/summary/summary';
import { FontSizes, FontWeights, Stack, Text, useTheme } from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';
import { messageIds } from '@services/i18n';

import { CartSummaryDetailStyles } from './cartSummary.types';
import { CartSummaryActions } from './cartSummaryActions';

const messages = defineMessages({
  header: {
    id: messageIds.pages.cart.summary.header,
    description: 'Title for cart summary on cart page',
    defaultMessage: 'Summary'
  },
  numberOfProducts: {
    id: messageIds.pages.cart.summary.numberOfProducts,
    description: 'Number of products in cart',
    defaultMessage: 'Number of Products'
  },
  numberOfItems: {
    id: messageIds.pages.cart.summary.numberOfItems,
    description: 'Number of items in cart',
    defaultMessage: 'Number of Items'
  },
  subtotal: {
    id: messageIds.pages.cart.summary.subtotal,
    description: 'Sub total price of cart',
    defaultMessage: 'Sub Total'
  }
});

export const CartSummary: React.FC = () => {
  const { formatMessage } = useIntl();
  const { spacing, palette, semanticColors } = useTheme();
  const { formatNumber } = useIntl();
  const { items, checkoutItems, totalItems, totalPrice } = useCart();

  const subTotalCost: string = React.useMemo(() => {
    return (
      (checkoutItems.length &&
        formatNumber(totalPrice, {
          currency: checkoutItems?.[0].priceBreaks?.[0].currencyCode || 'USD',
          currencyDisplay: 'narrowSymbol',
          style: 'currency'
        })) ||
      '--'
    );
  }, [checkoutItems, formatNumber, totalPrice]);

  const styles: CartSummaryDetailStyles = {
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
    }
  };

  return (
    <Stack>
      <Summary
        headerText={formatMessage(messages.header)}
        onRenderDetails={() => (
          <Stack.Item>
            <Stack horizontalAlign="space-between" horizontal>
              <Stack.Item>
                <Text>{formatMessage(messages.numberOfProducts)}</Text>
              </Stack.Item>
              <Stack.Item>
                <Text>{items?.length}</Text>
              </Stack.Item>
            </Stack>
            <Stack
              tokens={{ padding: `${spacing.s1} 0 0 0` }}
              horizontalAlign="space-between"
              horizontal
            >
              <Stack.Item>
                <Text>{formatMessage(messages.numberOfItems)}</Text>
              </Stack.Item>
              <Stack.Item>
                <Text>{totalItems}</Text>
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
                  {formatMessage(messages.subtotal)}
                </Text>
              </Stack.Item>
              <Stack.Item>
                <Text styles={styles.totalText}>{subTotalCost}</Text>
              </Stack.Item>
            </Stack>
          </Stack.Item>
        )}
        onRenderActions={() => {
          return <CartSummaryActions />;
        }}
      />
    </Stack>
  );
};
