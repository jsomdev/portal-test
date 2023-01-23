import React, { useMemo } from 'react';

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
  }
});

export const AccountOverviewTags: React.FC = () => {
  const intl = useIntl();
  const { formatMessage } = intl;
  const { isAccountManager, isAdministrator, isEmployee } = useClaims();
  const { spacing } = useTheme();
  const { me } = useMe();

  const tags: string[] = useMemo(() => {
    const list: string[] = [];
    if (isAccountManager) {
      list.push(formatMessage(messages.accountManager));
    }
    if (isAdministrator) {
      list.push(formatMessage(messages.accountAdmin));
    }
    if (isEmployee) {
      list.push(formatMessage(messages.accountEmployee));
    }
    if (
      me?.account?.paymentMethod !== null &&
      me?.account?.paymentMethod !== undefined
    ) {
      list.push(getPaymentMethodText(intl, me.account.paymentMethod));
    }
    return list;
  }, [
    formatMessage,
    intl,
    isAccountManager,
    isAdministrator,
    isEmployee,
    me?.account?.paymentMethod
  ]);

  if (!tags.length) {
    return null;
  }

  return (
    <Stack horizontal wrap tokens={{ childrenGap: spacing.s1 }}>
      {tags.map(tag => {
        return <OverviewTag key={tag} text={tag} />;
      })}
    </Stack>
  );
};
