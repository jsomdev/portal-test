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
        textAlign: 'center'
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
      <Stack
        verticalAlign="center"
        styles={styles.iconWrapper}
        tokens={{ childrenGap: spacing.s2 }}
      >
        <Icon
          aria-label="Quality Services"
          iconName="Timer"
          styles={styles.iconStyles}
        />
        <Text styles={styles.iconText}>
          {formatMessage(messages.qualityServices)}
        </Text>
      </Stack>
      <Stack
        verticalAlign="center"
        styles={styles.iconWrapper}
        tokens={{ childrenGap: spacing.s2 }}
      >
        <Icon
          aria-label="Secure Payment"
          iconName="ProtectionCenterLogo32"
          styles={styles.iconStyles}
        />
        <Text styles={styles.iconText}>
          {formatMessage(messages.secureTransactions)}
        </Text>
      </Stack>
      <Stack
        verticalAlign="center"
        styles={styles.iconWrapper}
        tokens={{ childrenGap: spacing.s2 }}
      >
        <Icon
          aria-label="Expert Support"
          iconName="Telemarketer"
          styles={styles.iconStyles}
        />
        <Text styles={styles.iconText}>
          {formatMessage(messages.expertSupport)}
        </Text>
      </Stack>
    </Stack>
  );
};
