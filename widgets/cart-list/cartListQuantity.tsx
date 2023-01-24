import React, { useEffect, useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { ISpinButtonStyles, SpinButton, Stack } from '@fluentui/react';
import {
  MAX_CART_QUANTITY,
  MIN_CART_QUANTITY
} from '@providers/cart/cartConstants';
import { useCart } from '@providers/cart/cartContext';
import { messageIds } from '@services/i18n';
import { CartItemViewModel } from '@widgets/cart-list/cartList.types';

type CartListQuantityProps = {
  item: CartItemViewModel;
  disabled?: boolean;
};

const messages = defineMessages({
  quantityItemsReadOnlyText: {
    id: messageIds.pages.cart.list.quantityItemsReadOnlyText,
    description: 'Label for quantity of items',
    defaultMessage: '{quantity} {quantity, plural, one {item} other {items}}'
  }
});

export const CartListQuantity: React.FC<CartListQuantityProps> = ({
  item,
  disabled = false
}) => {
  const { formatMessage } = useIntl();
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
      textAlign: 'center',
      fontSize: '16px' //hardcoded here, so we are sure it is 16px no matter what font sizes are set in the theme. This makes sure the page doesn't zoom in when this input is focussed on iOS devices
    }
  };

  return (
    <Stack horizontal>
      {disabled ? (
        <div>
          {formatMessage(messages.quantityItemsReadOnlyText, {
            quantity: item.quantity
          })}
        </div>
      ) : (
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
      )}
    </Stack>
  );
};
