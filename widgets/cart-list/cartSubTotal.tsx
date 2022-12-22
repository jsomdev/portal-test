import React from 'react';

import { Stack, useTheme } from '@fluentui/react';
import { CartItemViewModel } from '@widgets/cart-list/cartList.types';
import { CartListTotalPrice } from '@widgets/cart-list/cartListTotalPrice';

export const CartSubTotal: React.FC<{
  item: CartItemViewModel;
}> = ({ item }) => {
  const { spacing } = useTheme();

  return (
    <Stack
      horizontal
      tokens={{
        childrenGap: spacing.m
      }}
      styles={{
        root: {
          textAlign: 'right',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }
      }}
    >
      <Stack.Item>
        <CartListTotalPrice item={item} />
      </Stack.Item>
    </Stack>
  );
};
