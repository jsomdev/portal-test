import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Stack, Text } from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';
import { messageIds } from '@services/i18n';

const messages = defineMessages({
  numberOfProducts: {
    id: messageIds.pages.requestForQuote.summary.numberOfProducts,
    defaultMessage: 'Number of products',
    description: 'Label for the number of products'
  },
  numberOfItems: {
    id: messageIds.pages.requestForQuote.summary.numberOfItems,
    defaultMessage: 'Number of items',
    description: 'Label for the number of items'
  }
});

export const RequestForQuoteSummaryDetails: React.FC = () => {
  const { quoteItems } = useCart();
  const { formatNumber, formatMessage } = useIntl();

  const numberOfProducts = quoteItems.length;
  const numberOfItems: number = quoteItems
    .map(item => item.quantity)
    .reduce((acc, value) => acc + value, 0);

  return (
    <Stack>
      <Stack horizontalAlign="space-between" horizontal>
        <Stack.Item>
          <Text>{formatMessage(messages.numberOfProducts)}</Text>
        </Stack.Item>
        <Stack.Item>
          <Text>{formatNumber(numberOfProducts)}</Text>
        </Stack.Item>
      </Stack>
      <Stack horizontalAlign="space-between" horizontal>
        <Stack.Item>
          <Text>{formatMessage(messages.numberOfItems)}</Text>
        </Stack.Item>
        <Stack.Item>
          <Text>{formatNumber(numberOfItems)}</Text>
        </Stack.Item>
      </Stack>
    </Stack>
  );
};
