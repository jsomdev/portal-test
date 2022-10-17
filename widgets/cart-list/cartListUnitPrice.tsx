import React, { useMemo } from 'react';

import {
  IStackStyles,
  Shimmer,
  ShimmerElementType,
  ShimmerElementsGroup,
  Stack
} from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';
import { CartListItemProps } from '@widgets/cart-list/cartList.types';
import CartPrice from '@widgets/cart-list/cartPrice';
import { useProductPricing } from '@widgets/pricing/useProductPrice';

export const CartListUnitPrice: React.FC<CartListItemProps> = ({ item }) => {
  const { getUnitPrice, getBasePrice, currencyCode, status } =
    useProductPricing(item.product.number || '', item.priceBreaks);
  const { getQuantity } = useCart();

  const unitPrice = useMemo(() => {
    return getUnitPrice(getQuantity(item.product.number || undefined));
  }, [getQuantity, getUnitPrice, item.product.number]);

  const basePrice = useMemo(() => {
    return getBasePrice();
  }, [getBasePrice]);

  const styles: IStackStyles = {
    root: {
      width: '100%'
    }
  };

  // This is to avoid the flashing to Quoted Price as you remove the item
  if (getQuantity(item.product.number || '') === 0) {
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
        width={'100%'}
        isDataLoaded={status !== 'loading'}
      >
        <Stack.Item>
          <CartPrice
            price={unitPrice}
            basePrice={basePrice}
            currencyCode={currencyCode}
            status={status}
          />
        </Stack.Item>
      </Shimmer>
    </Stack>
  );
};
