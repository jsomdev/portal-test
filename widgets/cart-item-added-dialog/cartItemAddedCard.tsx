import React from 'react';

import {
  IStackItemStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { rem } from '@utilities/rem';
import CartItemPrices from '@widgets/cart-list/cartItemPrices';
import { CartItemViewModel } from '@widgets/cart-list/cartList.types';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';
import ProductCard from '@widgets/product-card-parts/productCard';
import ProductCardImage from '@widgets/product-card-parts/productCardImage';
import ProductCardTitleLink from '@widgets/product-card-parts/productCardTitleLink';

type CartItemAddedCardStyles = {
  leftContainer: IStackStyles;
  mobilePrice: IStackItemStyles;
};

type CartItemAddedCardProps = {
  item: CartItemViewModel;
};

const CartItemAddedCard: React.FC<CartItemAddedCardProps> = ({ item }) => {
  const { hasPricing } = useMe();
  const showPricing =
    (hasPricing === 'Customer' || hasPricing === 'Standard') &&
    item.quantity > 1;
  const { spacing } = useTheme();
  const styles: CartItemAddedCardStyles = {
    leftContainer: {
      root: { flex: 1, minWidth: rem(220) }
    },
    mobilePrice: { root: { alignSelf: 'end' } }
  };
  return (
    <ProductCard>
      <Stack.Item>
        <ProductCardImage {...item.product} />
      </Stack.Item>
      <Stack verticalAlign="space-between" styles={styles.leftContainer}>
        <Stack>
          <ProductCardTitleLink {...item.product} />
          <Mobile>
            {(className, renderChildren) => (
              <Stack.Item
                className={className}
                tokens={{ padding: spacing.m }}
                styles={styles.mobilePrice}
              >
                {renderChildren && (
                  <CartItemPrices
                    item={item}
                    showPricing={showPricing}
                    readonly={true}
                  />
                )}
              </Stack.Item>
            )}
          </Mobile>
        </Stack>
      </Stack>
      <TabletAndDesktop>
        {(className, renderChildren) => (
          <Stack.Item className={className}>
            {renderChildren && (
              <CartItemPrices
                item={item}
                showPricing={showPricing}
                readonly={true}
              />
            )}
          </Stack.Item>
        )}
      </TabletAndDesktop>
    </ProductCard>
  );
};

export default CartItemAddedCard;
