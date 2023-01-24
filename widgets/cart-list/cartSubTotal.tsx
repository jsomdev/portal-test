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
      horizontalAlign="end"
      verticalAlign="center"
      tokens={{
        childrenGap: spacing.m
      }}
    >
      <Stack.Item>
        <CartListTotalPrice item={item} />
      </Stack.Item>
    </Stack>
  );
};
