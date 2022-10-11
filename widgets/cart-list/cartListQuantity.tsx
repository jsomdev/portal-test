import React, { useEffect, useState } from 'react';

import { ISpinButtonStyles, SpinButton, Stack, Text } from '@fluentui/react';
import {
  MAX_CART_QUANTITY,
  MIN_CART_QUANTITY
} from '@providers/cart/cartConstants';
import { useCart } from '@providers/cart/cartContext';

import { CartListColumnProps } from './cartList.types';

export const CartListQuantity: React.FC<CartListColumnProps> = ({
  item,
  readOnly
}) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const { add, remove, updateItem } = useCart();

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  function handleIncrement() {
    if (quantity + 1 > MAX_CART_QUANTITY) {
      setQuantity(MAX_CART_QUANTITY);
    } else {
      setQuantity(Number(quantity + 1));
      add(item.productId || null, item.productNumber || '', 1);
    }
  }

  function handleDecrement() {
    if (quantity - 1 < MIN_CART_QUANTITY) {
      setQuantity(MIN_CART_QUANTITY);
    } else {
      setQuantity(Number(quantity - 1));
      remove(item.productNumber || '', 1);
    }
  }

  function handleValidate(value: string) {
    if (
      isNaN(Number(value)) ||
      Number(value) < MIN_CART_QUANTITY ||
      Number(value) > MAX_CART_QUANTITY
    ) {
      updateItem(item.productNumber || '', Number(quantity));
    } else {
      setQuantity(Number(value));
      updateItem(item.productNumber || '', Number(value));
    }
  }

  const styles: Partial<ISpinButtonStyles> = {
    root: {
      width: 70,
      minWidth: 70
    },
    input: {
      minWidth: 47,
      flexGrow: 0
    },
    spinButtonWrapper: {
      width: 70,
      minWidth: 70
    }
  };

  if (readOnly) {
    return (
      <Stack>
        <Text variant="large">{quantity}</Text>
      </Stack>
    );
  }
  return (
    <Stack>
      <Stack>
        <SpinButton
          value={`${quantity}`}
          styles={styles}
          onIncrement={() => {
            handleIncrement();
          }}
          onDecrement={() => {
            handleDecrement();
          }}
          onValidate={(value: string) => {
            handleValidate(value);
          }}
        />
      </Stack>
    </Stack>
  );
};
