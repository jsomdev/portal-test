import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Stack, Text } from '@fluentui/react';
import { messageIds } from '@services/i18n';

export interface PriceBreakListHeaderProps {
  quantity: number;
  cartQuantity: number;
}

const messages = defineMessages({
  priceBreakQuantityInfo: {
    id: messageIds.pricing.priceBreakQuantityInfo,
    defaultMessage:
      'Adding {quantity} {quantity, plural, one {item} other {items}} to your cart will bring you to a total of {projectedQuantity} {projectedQuantity, plural, one {item.} other {items.}}'
  }
});

/**
 * A component that renders text that explains to the user how many items of a specific product are in the cart,
 * how many items that will be added, and the total amount of items that will be in the cart after adding them.
 * @param quantity The quantity of the item that will be added to the cart
 * @param cartQuantity The quantity of the item already stored in the cart
 */
export const PriceBreakListHeader: React.FC<PriceBreakListHeaderProps> = ({
  cartQuantity,
  quantity
}) => {
  const { formatMessage } = useIntl();
  const projectedQuantity: number = React.useMemo((): number => {
    return quantity + cartQuantity;
  }, [quantity, cartQuantity]);
  return (
    <Stack>
      <Stack.Item>
        <Text>
          {formatMessage(messages.priceBreakQuantityInfo, {
            quantityDisplay: <strong>{quantity}</strong>,
            quantity,
            projectedQuantityDisplay: <strong>{projectedQuantity}</strong>,
            projectedQuantity
          })}
        </Text>
      </Stack.Item>
    </Stack>
  );
};
