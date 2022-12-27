import React from 'react';

import { IconButton } from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';

type CartRemoveButtonProps = {
  productNumber: string;
};
export const CartRemoveButton: React.FC<CartRemoveButtonProps> = ({
  productNumber
}) => {
  const { remove } = useCart();
  return (
    <IconButton
      iconProps={{ iconName: 'Delete' }}
      onClick={() => {
        if (productNumber) {
          remove(productNumber);
        }
      }}
    />
  );
};
