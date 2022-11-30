import React from 'react';

import { useIntl } from 'react-intl';

import {
  FontSizes,
  IButtonStyles,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { defineMessages } from '@formatjs/intl';
import { messageIds } from '@services/i18n';
import { User } from '@services/portal-api';
import { rem } from '@utilities/rem';

import { getPaymentMethodText } from '../orders/orderHelper';

const messages = defineMessages({
  companyHeader: {
    id: messageIds.pages.account.overview.companyInformation.companyHeader,
    description: 'Header text for company',
    defaultMessage: 'This is your company:'
  },
  customerHeader: {
    id: messageIds.pages.account.overview.companyInformation.customerHeader,
    description: 'Header text for customer number',
    defaultMessage: 'Customer number'
  },
  paymentHeader: {
    id: messageIds.pages.account.overview.companyInformation.paymentHeader,
    description: 'Header text for payment type',
    defaultMessage: 'Payment type'
  }
});

interface OverviewCompanyInfoStyles {
  container: IStackStyles;
  headerText: ITextStyles;
  editButton: IButtonStyles;
}

interface OverviewCompanyInfoProps {
  me: User | undefined;
}

export const OverviewCompanyInfo: React.FC<OverviewCompanyInfoProps> = ({
  me
}) => {
  const { spacing, semanticColors, effects, palette } = useTheme();
  const intl = useIntl();
  const { formatMessage } = intl;

  const styles: OverviewCompanyInfoStyles = {
    container: {
      root: {
        border: `1px solid ${semanticColors.variantBorder}`,
        padding: spacing.m,
        borderRadius: effects.roundedCorner4,
        flex: '1 1 0',
        minWidth: rem(300)
      }
    },
    headerText: {
      root: {
        color: palette.neutralDark
      }
    },
    editButton: {
      icon: {
        fontSize: FontSizes.size20
      }
    }
  };

  return (
    <Stack styles={styles.container}>
      <Stack tokens={{ childrenGap: spacing.m }}>
        <Stack tokens={{ childrenGap: spacing.s1 }}>
          <Text styles={styles.headerText}>
            {formatMessage(messages.companyHeader)}
          </Text>
          <Text variant="mediumPlus">{me?.account?.name}</Text>
        </Stack>
        <Stack tokens={{ childrenGap: spacing.s1 }} grow>
          <Text styles={styles.headerText}>
            {formatMessage(messages.customerHeader)}
          </Text>
          <Text variant="mediumPlus">{me?.account?.number}</Text>
        </Stack>
        <Stack tokens={{ childrenGap: spacing.s1 }} grow>
          <Text styles={styles.headerText}>
            {formatMessage(messages.paymentHeader)}
          </Text>
          <Text variant="mediumPlus">
            {getPaymentMethodText(intl, me?.account?.paymentMethod)}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
