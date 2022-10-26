import { FontSizes, Icon, Stack, Text, useTheme } from '@fluentui/react';
import React from 'react';
import { ServiceBadgesStyles } from './serviceUsps.types';

const messages = {
  qualityServices: 'Quality Services',
  secureTransactions: 'Secure Transactions',
  expertSupport: 'Expert Support',
};

export const ServiceBadges: React.FC = () => {
  const { spacing, palette } = useTheme();
  const styles: ServiceBadgesStyles = {
    iconWrapper: {
      root: {
        textAlign: 'center',
      },
    },
    iconStyles: {
      root: {
        fontSize: '30px',
        color: palette.neutralSecondary,
      },
    },
    iconText: {
      root: {
        color: palette.neutralSecondary,
        fontSize: FontSizes.size12,
      },
    },
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
        <Text styles={styles.iconText}>{messages.qualityServices}</Text>
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
        <Text styles={styles.iconText}>{messages.secureTransactions}</Text>
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
        <Text styles={styles.iconText}>{messages.expertSupport}</Text>
      </Stack>
    </Stack>
  );
};
