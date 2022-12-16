import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Stack, useTheme } from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { useClaims } from '@services/authentication/claims';
import { messageIds } from '@services/i18n';

import { getPaymentMethodText } from '../orders/orderHelper';
import { OverviewTag } from '../overview/overviewTag';

const messages = defineMessages({
  accountManager: {
    id: messageIds.pages.account.overview.account.status.manager,
    description: 'manager tag',
    defaultMessage: 'Manager'
  },
  accountEmployee: {
    id: messageIds.pages.account.overview.account.status.employee,
    description: 'employee tag',
    defaultMessage: 'Employee'
  },
  accountAdmin: {
    id: messageIds.pages.account.overview.account.status.admin,
    description: 'admin tag',
    defaultMessage: 'Admin'
  },
  accountVerified: {
    id: messageIds.pages.account.overview.account.status.verified,
    description: 'verified tag',
    defaultMessage: 'Verified'
  },
  accountCustomer: {
    id: messageIds.pages.account.overview.account.status.customer,
    description: 'customer tag',
    defaultMessage: 'Customer'
  }
});

export const AccountOverviewTags: React.FC = () => {
  const intl = useIntl();
  const { isAccountManager, isAdministrator, isEmployee } = useClaims();
  const { spacing } = useTheme();
  const { me } = useMe();
  return (
    <Stack horizontal tokens={{ childrenGap: spacing.s1 }}>
      {isAccountManager && (
        <OverviewTag text={intl.formatMessage(messages.accountManager)} />
      )}
      {isAdministrator && (
        <OverviewTag text={intl.formatMessage(messages.accountAdmin)} />
      )}
      {isEmployee && (
        <OverviewTag text={intl.formatMessage(messages.accountEmployee)} />
      )}
      {me?.account?.paymentMethod && (
        <OverviewTag
          text={getPaymentMethodText(intl, me.account.paymentMethod)}
        />
      )}
    </Stack>
  );
};
