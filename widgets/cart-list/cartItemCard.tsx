import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { CartItemViewModel } from '@widgets/cart-list/cartList.types';
import { CartListQuantity } from '@widgets/cart-list/cartListQuantity';
import { CartListTotalPrice } from '@widgets/cart-list/cartListTotalPrice';
import { CartListUnitPrice } from '@widgets/cart-list/cartListUnitPrice';
import CartProductImage from '@widgets/cart-list/cartProductImage';
import { CartRemoveButton } from '@widgets/cart-list/cartRemoveButton';
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

const messages = defineMessages({
  subTotal: {
    id: 'missing.id',
    defaultMessage:
      'Subtotal ({quantity} {quantity, plural, one {item} other {items}})'
  }
});

export const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  showPricing,
  readOnly
}) => {
  const { semanticColors, spacing } = useTheme();
  const { formatMessage } = useIntl();
  const styles: CartItemCardStyles = {
    leftContainer: {
      root: { flex: 1, minWidth: 220 }
    },
    rightContainer: { root: { flex: 2 } }
  };

  const stackStyles: IStackStyles = {
    root: {
      marginBottom: spacing.l1,
      border: `1px solid ${semanticColors.variantBorder}`,
      borderRadius: 7,
      justifyContent: 'space-around'
    }
  };

  return (
    <Stack
      styles={stackStyles}
      tokens={{ padding: `${spacing.m} ${spacing.m} 0 ${spacing.m}` }}
    >
      <Stack horizontal>
        <Stack.Item>
          <CartProductImage
            {...item.product}
            fallbackImageUrl={STATIC_IMAGES.cart.defaultItem}
          />
        </Stack.Item>
        <Stack verticalAlign="space-between" styles={styles.leftContainer}>
          <Stack
            horizontal
            horizontalAlign="space-between"
            tokens={{ childrenGap: spacing.m }}
          >
            <ProductCardTitleLink {...item.product} />
            <Stack.Item>
              <CartListUnitPrice item={item} />
            </Stack.Item>
          </Stack>
          <Stack
            horizontal
            horizontalAlign="space-between"
            verticalAlign="end"
            tokens={{ padding: `${spacing.m} 0` }}
          >
            {!readOnly && (
              <Stack horizontal>
                <CartListQuantity item={item} />
                <CartRemoveButton productNumber={item.product.number} />
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
      {showPricing && item.priceBreaks && item.priceBreaks.length > 0 && (
        <Stack
          horizontal
          tokens={{
            childrenGap: spacing.m
          }}
          styles={{
            root: {
              borderTop: `1px solid ${semanticColors.variantBorder}`,
              padding: `${spacing.m} 0 ${spacing.m} 0`,
              width: '100%',
              textAlign: 'right',
              justifyContent: 'flex-end'
            }
          }}
        >
          <Stack.Item>
            {formatMessage(messages.subTotal, { quantity: item.quantity })}
          </Stack.Item>
          <Stack.Item>
            <CartListTotalPrice item={item} />
          </Stack.Item>
        </Stack>
      )}
    </Stack>
  );
};
