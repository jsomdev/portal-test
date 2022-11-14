import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { FontSizes, Icon, Stack, Text, useTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';

import { ServiceBadgesStyles } from './serviceUsps.types';

const messages = defineMessages({
  qualityServices: {
    id: messageIds.pages.checkout.usps.qualityServices,
    defaultMessage: 'Quality Services',
    description: 'Quality Services label on checkout USPs'
  },
  secureTransactions: {
    id: messageIds.pages.checkout.usps.secureTransactions,
    defaultMessage: 'Secure Transactions',
    description: 'Secure Transactions label on checkout USPs'
  },
  expertSupport: {
    id: messageIds.pages.checkout.usps.expertSupport,
    defaultMessage: 'Expert Support',
    description: 'Expert Support label on checkout USPs'
  }
});

export const ServiceBadges: React.FC = () => {
  const { spacing, palette } = useTheme();
  const { formatMessage } = useIntl();
  const styles: ServiceBadgesStyles = {
    iconWrapper: {
      root: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100px',
        gap: spacing.s1
      }
    },
    iconStyles: {
      root: {
        fontSize: '30px',
        color: palette.neutralSecondary
      }
    },
    iconText: {
      root: {
        color: palette.neutralSecondary,
        fontSize: FontSizes.size12
      }
    }
  };
  return (
    <Stack horizontal horizontalAlign="space-evenly">
      <Stack.Item styles={styles.iconWrapper}>
        <Icon
          aria-label="Quality Services"
          iconName="Timer"
          styles={styles.iconStyles}
        />
        <Text styles={styles.iconText}>
          {formatMessage(messages.qualityServices)}
        </Text>
      </Stack.Item>
      <Stack.Item styles={styles.iconWrapper}>
        <Icon
          aria-label="Secure Payment"
          iconName="ProtectionCenterLogo32"
          styles={styles.iconStyles}
        />
        <Text styles={styles.iconText}>
          {formatMessage(messages.secureTransactions)}
        </Text>
      </Stack.Item>

      <Stack.Item styles={styles.iconWrapper}>
        <Icon
          aria-label="Expert Support"
          iconName="Telemarketer"
          styles={styles.iconStyles}
        />
        <Text styles={styles.iconText}>
          {formatMessage(messages.expertSupport)}
        </Text>
      </Stack.Item>
    </Stack>
  );
};
