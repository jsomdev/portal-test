import React, { useMemo } from 'react';

import {
  IStackStyles,
  Shimmer,
  ShimmerElementType,
  ShimmerElementsGroup,
  Stack
} from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';
import { CartItemViewModel } from '@widgets/cart-list/cartList.types';
import CartPrice from '@widgets/cart-list/cartPrice';
import { useProductPricing } from '@widgets/pricing/useProductPrice';

type CartListTotalPriceProps = {
  item: CartItemViewModel;
};

export const CartListTotalPrice: React.FC<CartListTotalPriceProps> = ({
  item
}) => {
  const { product } = item;
  const { getUnitPrice, getBasePrice, currencyCode, status } =
    useProductPricing(product.number || '', item.priceBreaks);
  const { getQuantity } = useCart();

  const totalPrice = useMemo(() => {
    const price = getUnitPrice(getQuantity(product.number || ''));
    if (!price) {
      return undefined;
    }
    return price * item.quantity;
  }, [getQuantity, getUnitPrice, item.quantity, product.number]);

  const basePrice = useMemo(() => {
    const price = getBasePrice();
    if (!price) {
      return undefined;
    }
    return price * item.quantity;
  }, [getBasePrice, item]);

  const styles: IStackStyles = {
    root: {
      width: '100%'
    }
  };

  // This is to avoid the flashing to Quoted Price as you remove the item
  if (getQuantity(product.number || '') === 0) {
    return null;
  }
  return (
    <Stack styles={styles}>
      <Shimmer
        customElementsGroup={
          <ShimmerElementsGroup
            width="100%"
            shimmerElements={[{ type: ShimmerElementType.line, height: 24 }]}
          />
        }
        width="85%"
        isDataLoaded={status !== 'loading'}
      >
        <Stack.Item>
          <CartPrice
            price={totalPrice}
            basePrice={basePrice}
            currencyCode={currencyCode}
            status={status}
          />
        </Stack.Item>
      </Shimmer>
    </Stack>
  );
};
