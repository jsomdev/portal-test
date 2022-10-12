import React from 'react';

import { IconButton } from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';

import { CartListColumnProps } from './cartList.types';

export const CartRemoveButton: React.FC<CartListColumnProps> = ({ item }) => {
  const { remove } = useCart();
  return (
    <IconButton
      iconProps={{ iconName: 'Delete' }}
      onClick={() => {
        remove(item.productNumber || '');
      }}
    />
  );
};
