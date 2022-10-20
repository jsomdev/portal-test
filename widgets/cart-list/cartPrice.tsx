import React from 'react';

import { useIntl } from 'react-intl';

import { ReactQueryStatus } from '@services/react-query/types';
import { PriceLabel } from '@widgets/pricing/price-label/priceLabel';

type CartPriceProps = {
  price?: number;
  basePrice?: number;
  currencyCode: string | undefined;
  status: ReactQueryStatus;
};

const CartPrice: React.FC<CartPriceProps> = ({
  price,
  basePrice,
  currencyCode,
  status
}) => {
  const { formatNumber } = useIntl();
  return (
    <PriceLabel
      primaryText={
        (price &&
          formatNumber(price, {
            currency: currencyCode,
            currencyDisplay: 'narrowSymbol',
            style: 'currency'
          })) ||
        'Quoted Price'
      }
      secondaryText={
        basePrice && price !== basePrice
          ? `${formatNumber(basePrice, {
              currency: currencyCode,
              currencyDisplay: 'narrowSymbol',
              style: 'currency'
            })}`
          : undefined
      }
      status={status}
    />
  );
};

export default CartPrice;
