import React, { useMemo } from 'react';

import { useIntl } from 'react-intl';

import { PricePrimaryText } from '@components/price-label/pricePrimaryText';
import { PriceSecondaryText } from '@components/price-label/priceSecondaryText';
import {
  IStackStyles,
  Shimmer,
  ShimmerElementType,
  ShimmerElementsGroup,
  Stack
} from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';
import { useProductPricing } from '@utilities/useProductPrice';

import { CartListColumnProps } from './cartList.types';

export const CartListTotalPrice: React.FC<CartListColumnProps> = ({ item }) => {
  const { getUnitPrice, getBasePrice, currencyCode, status } =
    useProductPricing(item.productNumber || '', item.priceBreaks);
  const { getQuantity } = useCart();
  const { formatNumber } = useIntl();

  const unitPrice = useMemo(() => {
    const price = getUnitPrice(getQuantity(item.productNumber || ''));
    if (!price) {
      return undefined;
    }
    return price * item.quantity;
  }, [getQuantity, getUnitPrice, item]);

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
  if (getQuantity(item.productNumber || '') === 0) {
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
          <PricePrimaryText
            text={`${
              (unitPrice &&
                formatNumber(unitPrice, {
                  currency: currencyCode,
                  currencyDisplay: 'narrowSymbol',
                  style: 'currency'
                })) ||
              'Quoted Price'
            }`}
          />
        </Stack.Item>
        {basePrice && unitPrice !== basePrice && (
          <Stack.Item>
            <PriceSecondaryText
              text={`${formatNumber(basePrice, {
                currency: currencyCode,
                currencyDisplay: 'narrowSymbol',
                style: 'currency'
              })}`}
            />
          </Stack.Item>
        )}
      </Shimmer>
    </Stack>
  );
};
