import React from 'react';

import { useIntl } from 'react-intl';

import {
  FontWeights,
  PrimaryButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { defineMessages } from '@formatjs/intl';
import { messageIds } from '@services/i18n';

import {
  CustomerSuggestionCardProps,
  CustomerSuggestionCardStyles
} from './customerSuggestionTypes';

const messages = defineMessages({
  selectButton: {
    id: messageIds.signupFlow.selectButton,
    defaultMessage: 'Select'
  }
});

export const CustomerSuggestionCard: React.FC<CustomerSuggestionCardProps> = ({
  customer,
  onSelect
}) => {
  const { spacing, semanticColors, effects, palette } = useTheme();
  const { formatMessage } = useIntl();

  const styles: CustomerSuggestionCardStyles = {
    customerCard: {
      root: {
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner4,
        transition: 'border .3s ease'
      }
    },
    accountNumberText: {
      root: {
        color: palette.neutralSecondaryAlt
      }
    }
  };

  return (
    <Stack
      tokens={{ childrenGap: spacing.s1, padding: spacing.m }}
      styles={styles.customerCard}
    >
      <Stack tokens={{ childrenGap: spacing.m }}>
        <Stack
          horizontal
          horizontalAlign="space-between"
          verticalAlign="center"
        >
          <Text
            variant="mediumPlus"
            styles={{ root: { fontWeight: FontWeights.semibold } }}
          >
            {customer.companyName}
          </Text>
          <Text styles={styles.accountNumberText}>
            #{customer.accountNumber}
          </Text>
        </Stack>
        <Stack>
          <Stack.Item>
            <Stack>
              {customer.addressLines?.map((line, i) => {
                return (
                  <Stack.Item key={`address-line-${i}`}>
                    <Text>{line || ''}</Text>
                  </Stack.Item>
                );
              })}
            </Stack>
          </Stack.Item>
          <Stack horizontal horizontalAlign="space-between" verticalAlign="end">
            <Stack.Item>
              <Stack.Item>
                <Text>{`${customer.addressCity || ''}, ${
                  customer.addressRegion || ''
                }, ${customer.addressPostalCode || ''}`}</Text>
              </Stack.Item>
              <Stack.Item>
                <Text>{`${customer.addressCountry || ''}`}</Text>
              </Stack.Item>
            </Stack.Item>
            <Stack.Item>
              <PrimaryButton
                onClick={() => {
                  return onSelect(customer);
                }}
              >
                {formatMessage(messages.selectButton)}
              </PrimaryButton>
            </Stack.Item>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
