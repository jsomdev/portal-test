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
import { mediaQueryFrom, useTabletAndDesktop } from '@widgets/media-queries';
import ProductCardTitleLink from '@widgets/product-card-parts/productCardTitleLink';

type CartItemCardProps = {
  item: CartItemViewModel;
  showPricing: boolean;
  readOnly: boolean;
};

const messages = defineMessages({
  subTotalLabel: {
    id: 'missing.id',
    defaultMessage: 'Subtotal'
  },
  subTotalItems: {
    id: 'missing.id2',
    defaultMessage: '{quantity} {quantity, plural, one {item} other {items}}'
  }
});

const SubTotal: React.FC<{
  item: CartItemViewModel;
}> = ({ item }) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
  const isTabletOrDesktop = useTabletAndDesktop();

  if (!isTabletOrDesktop && item.quantity === 1) {
    return null;
  }

  return (
    <Stack
      horizontal
      tokens={{
        childrenGap: spacing.m
      }}
      styles={{
        root: {
          textAlign: 'right',
          justifyContent: 'space-between',
          ...mediaQueryFrom('tablet', {
            justifyContent: 'flex-end'
          }),
          alignItems: 'center'
        }
      }}
    >
      <Stack.Item>
        {formatMessage(messages.subTotalLabel)}
        {isTabletOrDesktop && (
          <span>
            {' ('}
            {formatMessage(messages.subTotalItems, {
              quantity: item.quantity
            })}
            {')'}
          </span>
        )}
      </Stack.Item>
      <Stack.Item>
        <CartListTotalPrice item={item} />
      </Stack.Item>
    </Stack>
  );
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
            <Stack.Item>
              <CartListQuantity item={item} disabled={readOnly} />
            </Stack.Item>
            <Stack.Item>
              <CartListUnitPrice item={item} />
            </Stack.Item>
          </Stack>
          {showPricing && item.priceBreaks && item.priceBreaks.length > 0 && (
            <Stack.Item>
              <SubTotal item={item} />
            </Stack.Item>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
