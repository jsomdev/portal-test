import React, { useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  Shimmer,
  ShimmerElementType,
  ShimmerElementsGroup
} from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';
import { messageIds } from '@services/i18n';
import { CartItemViewModel } from '@widgets/cart-list/cartList.types';
import { PriceLabel } from '@widgets/pricing/price-label/priceLabel';
import { useProductPricing } from '@widgets/pricing/useProductPrice';

const messages = defineMessages({
  quotedPrice: {
    id: messageIds.pricing.quotedPrice,
    description: 'Label for Quoted Price',
    defaultMessage: 'Quoted Price'
  },
  suffix: {
    id: messageIds.pricing.unitPriceSuffix,
    description: 'Text to show after the unit price',
    defaultMessage: '/ each'
  }
});

type CartListUnitPriceProps = {
  item: CartItemViewModel;
};

export const CartListUnitPrice: React.FC<CartListUnitPriceProps> = ({
  item
}) => {
  const { formatMessage, formatNumber } = useIntl();

  const { getUnitPrice, getBasePrice, currencyCode, status } =
    useProductPricing(item.product.number || '', item.priceBreaks);
  const { getQuantity } = useCart();

  const cartQuantity: number | undefined = useMemo(() => {
    return getQuantity(item.product.number || '');
  }, [getQuantity, item.product.number]);

  const unitPrice: string | undefined = useMemo(() => {
    const price = getUnitPrice(cartQuantity);
    if (price === undefined) {
      return undefined;
    }
    return formatNumber(price, {
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol',
      style: 'currency'
    });
  }, [getUnitPrice, cartQuantity, formatNumber, currencyCode]);

  const basePrice: string | undefined = useMemo(() => {
    const price: number | undefined = getBasePrice();
    if (price === undefined) {
      return undefined;
    }
    return formatNumber(price, {
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol',
      style: 'currency'
    });
  }, [getBasePrice, currencyCode, formatNumber]);

  // This is to avoid the flashing to Quoted Price as you remove the item
  if (cartQuantity === 0) {
    return null;
  }

  return (
    <Shimmer
      styles={{ root: { float: 'right' } }}
      customElementsGroup={
        <ShimmerElementsGroup
          width="100%"
          shimmerElements={[{ type: ShimmerElementType.line, height: 24 }]}
        />
      }
      width={'100%'}
      isDataLoaded={status !== 'loading'}
    >
      <PriceLabel
        primaryText={unitPrice || formatMessage(messages.quotedPrice)}
        secondaryText={unitPrice !== basePrice ? basePrice : undefined}
        status={status}
        suffix={
          unitPrice && basePrice ? formatMessage(messages.suffix) : undefined
        }
      />
    </Shimmer>
  );
};
