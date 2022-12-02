//TODO this is a temporary file, should be moved to be re-usable for order account pages, Gregory is still working on these
import React from 'react';

import {
  FontWeights,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { PostalAddress } from '@services/portal-api';

interface OrderSummaryAddressStyles {
  boldText: ITextStyles;
}

export const OrderSummaryAddress: React.FC<{
  title?: string;
  address: Partial<PostalAddress> | null;
}> = ({ address, title }) => {
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
      {title && (
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
