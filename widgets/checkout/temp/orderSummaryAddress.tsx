//TODO ward refactor/move/cleanup
import React from 'react';

import { FontWeights, Stack, Text, useTheme } from '@fluentui/react';
import { PostalAddress } from '@services/portal-api';

import { OrderSummaryAddressStyles } from './orderDetail.types';

export const OrderSummaryAddress: React.FC<{
  title: string;
  address: Partial<PostalAddress> | null;
  displayTitle?: boolean;
}> = ({ address, title, displayTitle = true }) => {
  const { spacing } = useTheme();

  const styles: OrderSummaryAddressStyles = {
    boldText: {
      root: {
        fontWeight: FontWeights.semibold
      }
    }
  };

  if (address === null) {
    return null;
  }
  return (
    <Stack tokens={{ childrenGap: spacing.s1 }}>
      {displayTitle && (
        <Stack.Item>
          <Text styles={styles.boldText} variant="mediumPlus">
            {title}
          </Text>
        </Stack.Item>
      )}
      <Stack.Item>
        <Stack tokens={{ childrenGap: spacing.s2 }}>
          <Stack.Item>
            <Stack>
              {address.lines?.map((line, i) => {
                return (
                  <Stack.Item key={`${title}-line-${i}`}>
                    <Text>{line}</Text>
                  </Stack.Item>
                );
              })}
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Text>{`${address.city || ''}, ${address.region || ''}, ${
              address.postalCode || ''
            }`}</Text>
          </Stack.Item>
          <Stack.Item>
            <Text>{`${address.country || ''}`}</Text>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
