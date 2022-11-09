import React from 'react';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import CartItemPrices from '@widgets/cart-list/cartItemPrices';
import { CartItemViewModel } from '@widgets/cart-list/cartList.types';
import { CartListQuantity } from '@widgets/cart-list/cartListQuantity';
import { CartRemoveButton } from '@widgets/cart-list/cartRemoveButton';
import ProductCard from '@widgets/product-card-parts/productCard';
import ProductCardImage from '@widgets/product-card-parts/productCardImage';
import ProductCardTitleLink from '@widgets/product-card-parts/productCardTitleLink';

type CartItemCardProps = {
  item: CartItemViewModel;
  showPricing: boolean;
  readOnly: boolean;
};

type CartItemCardStyles = {
  leftContainer: IStackStyles;
  rightContainer: IStackStyles;
};

export const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  showPricing,
  readOnly
}) => {
  const { spacing } = useTheme();
  const styles: CartItemCardStyles = {
    leftContainer: {
      root: { flex: 1, minWidth: 220 }
    },
    rightContainer: { root: { flex: 2 } }
  };
  return (
    <ProductCard>
      <Stack.Item>
        <ProductCardImage
          {...item.product}
          fallbackImageUrl={STATIC_IMAGES.cart.defaultItem}
        />
      </Stack.Item>
      <Stack verticalAlign="space-between" styles={styles.leftContainer}>
        <Stack tokens={{ childrenGap: spacing.m }}>
          <ProductCardTitleLink {...item.product} />
          {!readOnly && (
            <Stack horizontal>
              <CartListQuantity item={item} />
              <CartRemoveButton productNumber={item.product.number} />
            </Stack>
          )}
        </Stack>
      </Stack>
      <Stack.Item styles={styles.rightContainer}>
        <CartItemPrices
          item={item}
          showPricing={showPricing}
          readonly={readOnly}
        />
      </Stack.Item>
    </ProductCard>
  );
};
