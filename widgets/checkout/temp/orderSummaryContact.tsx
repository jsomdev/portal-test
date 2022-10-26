//TODO ward refactor/move/cleanup
import React from 'react';

import { FontWeights, Stack, Text, useTheme } from '@fluentui/react';
import { ContactInfo } from '@services/portal-api';
import { OrderSummaryAddressStyles } from '@widgets/checkout/temp/orderDetail.types';

export const OrderSummaryContact: React.FC<{
  title: string;
  contactInfo: Partial<ContactInfo> | null;
  displayTitle?: boolean;
}> = ({ title, contactInfo, displayTitle = true }) => {
  const { spacing } = useTheme();

  const styles: OrderSummaryAddressStyles = {
    boldText: {
      root: {
        fontWeight: FontWeights.semibold
      }
    }
  };

  if (contactInfo === null) {
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
            {contactInfo.lastName && <Text>{contactInfo.lastName}</Text>}
            {contactInfo.lastName && contactInfo.firstName && <Text>, </Text>}
            {contactInfo.firstName && <Text>{contactInfo.firstName}</Text>}
          </Stack.Item>
          {contactInfo.company && (
            <Stack.Item>
              <Text>{`${contactInfo.company}`}</Text>
            </Stack.Item>
          )}
          <Stack.Item>
            <Text>{`${contactInfo.phoneNumber || ''}`}</Text>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
