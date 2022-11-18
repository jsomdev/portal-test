//TODO this is a temporary file, should be moved to be re-usable for order account pages, Gregory is still working on these
import React from 'react';

import {
  FontWeights,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { ContactInfo } from '@services/portal-api';

interface OrderSummaryContactStyles {
  boldText: ITextStyles;
}

export const OrderSummaryContact: React.FC<{
  title?: string;
  contactInfo: Partial<ContactInfo> | null;
}> = ({ title, contactInfo }) => {
  const { spacing } = useTheme();

  const styles: OrderSummaryContactStyles = {
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
