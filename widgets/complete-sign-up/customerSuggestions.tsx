import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { FontWeights, Stack, Text, useTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';

import { CustomerSuggestionCard } from './customerSuggestionCard';
import {
  CustomerSuggestionsProps,
  CustomerSuggestionsStyles
} from './customerSuggestionTypes';

const messages = defineMessages({
  selectCompanyTitle: {
    id: messageIds.signupFlow.selectCompanyTitle,
    defaultMessage: 'Select your company'
  },
  companyDetailsTitle: {
    id: messageIds.signupFlow.companyDetailsTitle,
    defaultMessage: 'Company Details'
  }
});

export const CustomerSuggestions: React.FC<CustomerSuggestionsProps> = ({
  customers,
  selectedCustomer,
  onSelect
}) => {
  const { spacing, palette } = useTheme();
  const { formatMessage } = useIntl();

  const styles: CustomerSuggestionsStyles = {
    customerCardsContainer: {
      root: {
        maxHeight: 300,
        overflow: 'auto'
      }
    },
    companyName: { root: { fontWeight: FontWeights.semibold } },
    buttonStyles: {
      root: {
        height: 40
      },
      label: {
        fontSize: '14px',
        fontWeight: 400
      }
    },
    accountNumberText: {
      root: {
        color: palette.neutralSecondaryAlt
      }
    }
  };

  if (selectedCustomer) {
    return (
      <Stack horizontalAlign="stretch" tokens={{ childrenGap: spacing.m }}>
        <Stack
          horizontalAlign="stretch"
          tokens={{ childrenGap: spacing.m, padding: `${spacing.m} 0` }}
        >
          <Text variant="xLarge">
            {formatMessage(messages.companyDetailsTitle)}
          </Text>
        </Stack>
        <Stack tokens={{ childrenGap: spacing.m }}>
          <Stack
            horizontal
            horizontalAlign="space-between"
            verticalAlign="center"
          >
            <Text variant="mediumPlus" styles={styles.companyName}>
              {selectedCustomer.companyName}
            </Text>
            <Text styles={styles.accountNumberText}>
              #{selectedCustomer.accountNumber}
            </Text>
          </Stack>
          <Stack>
            <Stack.Item>
              <Stack>
                {selectedCustomer.addressLines?.map((line, i) => {
                  return (
                    <Stack.Item key={`address-line-${i}`}>
                      <Text>{line || ''}</Text>
                    </Stack.Item>
                  );
                })}
              </Stack>
            </Stack.Item>
            <Stack.Item>
              <Text>{`${selectedCustomer.addressCity || ''}, ${
                selectedCustomer.addressRegion || ''
              }, ${selectedCustomer.addressPostalCode || ''}`}</Text>
            </Stack.Item>
            <Stack.Item>
              <Text>{`${selectedCustomer.addressCountry || ''}`}</Text>
            </Stack.Item>
          </Stack>
        </Stack>
      </Stack>
    );
  }

  if (!!customers.length && customers.length > 1) {
    return (
      <Stack horizontalAlign="stretch" tokens={{ childrenGap: spacing.m }}>
        <Stack
          horizontalAlign="stretch"
          tokens={{ childrenGap: spacing.m, padding: `${spacing.m} 0` }}
        >
          <Text variant="xLarge">
            {formatMessage(messages.selectCompanyTitle)}
          </Text>
        </Stack>
        <Stack
          tokens={{ childrenGap: spacing.m }}
          styles={styles.customerCardsContainer}
          className="list-scroll"
        >
          {customers.map((customer, i) => {
            return (
              <CustomerSuggestionCard
                key={`customer-card-${i}`}
                customer={customer}
                onSelect={() => {
                  onSelect(customer);
                }}
              />
            );
          })}
        </Stack>
      </Stack>
    );
  }

  return null;
};
