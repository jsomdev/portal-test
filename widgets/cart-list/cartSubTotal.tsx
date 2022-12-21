import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Stack, useTheme } from '@fluentui/react';
import { CartItemViewModel } from '@widgets/cart-list/cartList.types';
import { CartListTotalPrice } from '@widgets/cart-list/cartListTotalPrice';
import { mediaQueryFrom, useTabletAndDesktop } from '@widgets/media-queries';

const messages = defineMessages({
  subTotalLabel: {
    id: 'missing.id',
    defaultMessage: 'Subtotal'
  },
  subTotalItems: {
    id: 'missing.id2',
    defaultMessage: '{quantity} {quantity, plural, one {item} other {items}}'
  }
});

export const CartSubTotal: React.FC<{
  item: CartItemViewModel;
}> = ({ item }) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
  const isTabletOrDesktop = useTabletAndDesktop();

  if (!isTabletOrDesktop && item.quantity === 1) {
    return null;
  }

  return (
    <Stack
      horizontal
      tokens={{
        childrenGap: spacing.m
      }}
      styles={{
        root: {
          textAlign: 'right',
          justifyContent: 'space-between',
          ...mediaQueryFrom('tablet', {
            justifyContent: 'flex-end'
          }),
          alignItems: 'center'
        }
      }}
    >
      <Stack.Item>
        {formatMessage(messages.subTotalLabel)}
        {isTabletOrDesktop && (
          <span>
            {' ('}
            {formatMessage(messages.subTotalItems, {
              quantity: item.quantity
            })}
            {')'}
          </span>
        )}
      </Stack.Item>
      <Stack.Item>
        <CartListTotalPrice item={item} />
      </Stack.Item>
    </Stack>
  );
};
