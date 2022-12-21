import React from 'react';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { CartItemViewModel } from '@widgets/cart-list/cartList.types';
import { CartListQuantity } from '@widgets/cart-list/cartListQuantity';
import { CartListUnitPrice } from '@widgets/cart-list/cartListUnitPrice';
import CartProductImage from '@widgets/cart-list/cartProductImage';
import { CartRemoveButton } from '@widgets/cart-list/cartRemoveButton';
import { CartSubTotal } from '@widgets/cart-list/cartSubTotal';
import { mediaQueryFrom } from '@widgets/media-queries';
import { useProductPricing } from '@widgets/pricing/useProductPrice';
import ProductCardTitleLink from '@widgets/product-card-parts/productCardTitleLink';

type CartItemCardProps = {
  item: CartItemViewModel;
  showPricing: boolean;
  readOnly: boolean;
};

export const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  showPricing,
  readOnly
}) => {
  const { semanticColors, spacing } = useTheme();

  const stackStyles: IStackStyles = {
    root: {
      padding: `${spacing.m} 0`,
      borderBottom: `1px solid ${semanticColors.variantBorder}`,
      ...mediaQueryFrom('tablet', {
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: 7,
        padding: `${spacing.m}`,
        marginBottom: spacing.m
      }),
      justifyContent: 'space-around',
      alignItems: 'flex-start'
    }
  };

  const { getUnitPrice } = useProductPricing(
    item.product.number || '',
    item.priceBreaks
  );

  const price = getUnitPrice(item.quantity);

  return (
    <Stack>
      <Stack horizontal styles={stackStyles}>
        <Stack.Item grow={0} styles={{ root: { marginRight: spacing.m } }}>
          <CartProductImage
            {...item.product}
            fallbackImageUrl={STATIC_IMAGES.cart.defaultItem}
          />
        </Stack.Item>
        <Stack
          grow={1}
          verticalAlign={'space-around'}
          tokens={{
            childrenGap: spacing.s1
          }}
        >
          <Stack
            horizontal
            horizontalAlign="space-between"
            verticalAlign="start"
            tokens={{ childrenGap: spacing.s1 }}
          >
            <ProductCardTitleLink {...item.product} />
            <CartRemoveButton productNumber={item.product.number} />
          </Stack>

          <Stack
            horizontal
            horizontalAlign="space-between"
            verticalAlign="center"
          >
            {!readOnly && (
              <Stack.Item>
                <CartListQuantity item={item} />
              </Stack.Item>
            )}
            <Stack.Item>
              <CartListUnitPrice item={item} />
            </Stack.Item>
          </Stack>
          {showPricing && price && (
            <Stack.Item>
              <CartSubTotal item={item} />
            </Stack.Item>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
