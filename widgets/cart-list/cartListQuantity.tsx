import React, { useEffect, useState } from 'react';

import { ISpinButtonStyles, SpinButton, Stack } from '@fluentui/react';
import {
  MAX_CART_QUANTITY,
  MIN_CART_QUANTITY
} from '@providers/cart/cartConstants';
import { useCart } from '@providers/cart/cartContext';
import { CartItemViewModel } from '@widgets/cart-list/cartList.types';

type CartListQuantityProps = {
  item: CartItemViewModel;
  disabled?: boolean;
};

export const CartListQuantity: React.FC<CartListQuantityProps> = ({
  item,
  disabled = false
}) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const { add, remove, updateItem } = useCart();
  const { product } = item;
  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  function handleIncrement() {
    if (quantity + 1 > MAX_CART_QUANTITY) {
      setQuantity(MAX_CART_QUANTITY);
    } else {
      setQuantity(Number(quantity + 1));
      add(product.id || null, product.number || '', 1);
    }
  }

  function handleDecrement() {
    if (quantity - 1 < MIN_CART_QUANTITY) {
      setQuantity(MIN_CART_QUANTITY);
    } else {
      setQuantity(Number(quantity - 1));
      remove(product.number || '', 1);
    }
  }

  function handleValidate(value: string) {
    if (
      isNaN(Number(value)) ||
      Number(value) < MIN_CART_QUANTITY ||
      Number(value) > MAX_CART_QUANTITY
    ) {
      updateItem(product.number || '', Number(quantity));
    } else {
      setQuantity(Number(value));
      updateItem(product.number || '', Number(value));
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

  return (
    <Stack>
      <Stack>
        <SpinButton
          disabled={disabled}
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
