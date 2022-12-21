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
};

export const CartListQuantity: React.FC<CartListQuantityProps> = ({ item }) => {
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
    input: {
      width: '100px',
      minWidth: '100px',
      textAlign: 'center'
    }
  };

  return (
    <Stack horizontal>
      <SpinButton
        value={`${quantity}`}
        decrementButtonIcon={{
          iconName: 'Remove'
        }}
        incrementButtonIcon={{
          iconName: 'Add'
        }}
        downArrowButtonStyles={{
          root: {
            left: '0',
            top: 0,
            position: 'absolute',
            height: '100%',
            width: 30,
            color: 'black',
            textAlign: 'center',
            borderRight: '1px solid #ccc'
          }
        }}
        upArrowButtonStyles={{
          root: {
            right: '0',
            top: 0,
            position: 'absolute',
            height: '100%',
            width: 30,
            color: 'black',
            textAlign: 'center',
            borderLeft: '1px solid #ccc'
          }
        }}
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
  );
};
