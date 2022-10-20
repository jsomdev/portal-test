import React from 'react';

import { mergeCss } from '@fluentui/merge-styles';
import {
  FontWeights,
  IStackItemStyles,
  IStyle,
  Stack,
  useTheme
} from '@fluentui/react';
import { CartItemViewModel } from '@widgets/cart-list/cartList.types';
import { CartListTotalPrice } from '@widgets/cart-list/cartListTotalPrice';
import { CartListUnitPrice } from '@widgets/cart-list/cartListUnitPrice';

type CartItemPricesProps = {
  item: CartItemViewModel;
  showPricing: boolean;
  readonly: boolean;
};

type CartItemPricesStyles = {
  root: IStackItemStyles;
  quantity: IStyle;
  totalPrice: IStackItemStyles;
};

const CartItemPrices: React.FC<CartItemPricesProps> = ({
  item,
  showPricing
}) => {
  const { spacing } = useTheme();
  const styles: CartItemPricesStyles = {
    quantity: {
      textAlign: 'right',
      marginBottom: spacing.s1,
      fontWeight: FontWeights.semibold
    },
    root: {
      root: {
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      }
    },
    totalPrice: {
      root: showPricing
        ? { borderTop: '1px solid black', paddingTop: spacing.s2 }
        : false
    }
  };
  return (
    <Stack styles={styles.root} tokens={{ childrenGap: spacing.s2 }}>
      {showPricing && (
        <React.Fragment>
          <Stack.Item>
            <CartListUnitPrice item={item} />
          </Stack.Item>
          <Stack.Item>
            <div className={mergeCss(styles.quantity)}>x {item.quantity}</div>
          </Stack.Item>
        </React.Fragment>
      )}
      <Stack.Item styles={styles.totalPrice}>
        <CartListTotalPrice item={item} />
      </Stack.Item>
    </Stack>
  );
};

export default CartItemPrices;
