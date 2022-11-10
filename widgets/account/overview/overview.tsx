import React, { useMemo } from 'react';

import Link from 'next/link';
import { defineMessages, useIntl } from 'react-intl';
import { useQuery } from 'react-query';

import { AccountInfo } from '@azure/msal-browser';
import { useIsAuthenticated } from '@azure/msal-react';
import {
  ActionButton,
  IStackStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { msalInstance } from '@services/authentication/authenticationConfiguration';
import { useClaims } from '@services/authentication/claims';
import { messageIds } from '@services/i18n';
import { UserFormatter } from '@services/i18n/formatters/entity-formatters/userFormatter';
import { fetchMyOrders } from '@services/portal-api/orders';
import { QUERYKEYS } from '@services/react-query/constants';
import pagePaths from '@utilities/pagePaths';
import { OverviewTag } from '@widgets/account/overview/overviewTag';

import { OrderCard } from '../orders/orderCard';
import { OverviewCompanyInfo } from './overviewCompanyInfo';
import { OverviewProfileInfo } from './overviewProfileInfo';

const messages = defineMessages({
  welcome: {
    id: messageIds.pages.account.overview.welcome,
    description: 'Text to welcome user',
    defaultMessage: 'Welcome default'
  },
  subTitle: {
    id: messageIds.pages.account.overview.subTitle,
    description: 'Account page sub title',
    defaultMessage: 'Subtitle default text'
  },
  accountManager: {
    id: messageIds.pages.account.overview.account.status.manager,
    description: 'manager tag',
    defaultMessage: 'manager default'
  },
  accountEmployee: {
    id: messageIds.pages.account.overview.account.status.employee,
    description: 'employee tag',
    defaultMessage: 'employee default'
  },
  accountAdmin: {
    id: messageIds.pages.account.overview.account.status.admin,
    description: 'admin tag',
    defaultMessage: 'admin default'
  },
  accountVerified: {
    id: messageIds.pages.account.overview.account.status.verified,
    description: 'verified tag',
    defaultMessage: 'verified default'
  },
  accountCustomer: {
    id: messageIds.pages.account.overview.account.status.customer,
    description: 'customer tag',
    defaultMessage: 'customer default'
  },
  recentOrders: {
    id: messageIds.pages.account.overview.orders.title,
    description: 'Recent orders title',
    defaultMessage: 'Your recent orders default'
  },
  viewAllRecentOrders: {
    id: messageIds.pages.account.overview.orders.viewAllText,
    description: 'View all previous orders link text',
    defaultMessage: 'View all previous orders default'
  },
  profileInformation: {
    id: messageIds.pages.account.overview.profileInformation.title,
    description: 'Profile sub section title',
    defaultMessage: 'Profile information default'
  }
});

interface OverviewStyles {
  welcomeSection: IStackStyles;
}

export const Overview: React.FC = () => {
  const { spacing, effects, palette } = useTheme();
  const { formatMessage } = useIntl();
  const account: AccountInfo | undefined = msalInstance.getAllAccounts()[0];
  const isAuthenticated = useIsAuthenticated();
  const { accountId } = useClaims();
  const claims = useClaims();
  const { me, isOrderHistoryEnabled, showCustomerDetails } = useMe();
  const { isAccountManager, isAdministrator, isEmployee } = claims;

  const { data: orders, status: ordersStatus } = useQuery(
    [QUERYKEYS.recentOrders, isAuthenticated, accountId, isOrderHistoryEnabled],
    () =>
      fetchMyOrders(2, 0, isAuthenticated, isOrderHistoryEnabled, accountId),
    {
      keepPreviousData: true,
      enabled: !!isAuthenticated && isOrderHistoryEnabled && !!accountId,
      refetchOnMount: true,
      refetchOnWindowFocus: true
    }
  );

  const name = useMemo(() => {
    const userFormatter = new UserFormatter(me, account);
    const name = userFormatter.formatDisplayName(
      `${claims.firstName} ${claims.lastName}`
    );
    return name;
  }, [account, claims, me]);

  const styles: OverviewStyles = {
    welcomeSection: {
      root: {
        backgroundColor: palette.neutralLighter,
        padding: spacing.l1,
        borderRadius: effects.roundedCorner4
      }
    }
  };

  return (
    <Stack tokens={{ childrenGap: spacing.l2 }}>
      <Stack
        styles={styles.welcomeSection}
        tokens={{ childrenGap: spacing.s1 }}
      >
        <Stack>
          <Stack.Item>
            <Text variant="large">
              {formatMessage(messages.welcome, {
                name
              })}
            </Text>
          </Stack.Item>
        </Stack>
        <Stack tokens={{ childrenGap: spacing.l1 }}>
          <Stack horizontal tokens={{ childrenGap: spacing.s1 }}>
            {isAccountManager && (
              <OverviewTag text={formatMessage(messages.accountManager)} />
            )}
            {isAdministrator && (
              <OverviewTag text={formatMessage(messages.accountAdmin)} />
            )}
            {isEmployee && (
              <OverviewTag text={formatMessage(messages.accountEmployee)} />
            )}
          </Stack>
          <Stack.Item>
            <Text variant="medium">{formatMessage(messages.subTitle)}</Text>
          </Stack.Item>
        </Stack>
      </Stack>
      {ordersStatus === 'success' && orders?.value.length && (
        <Stack tokens={{ childrenGap: spacing.m }}>
          <Stack.Item>
            <Text variant="large" as={'h2'}>
              {formatMessage(messages.recentOrders)}
            </Text>
          </Stack.Item>
          <Stack.Item>
            <Stack horizontal wrap tokens={{ childrenGap: spacing.m }}>
              {orders.value.map(order => {
                return (
                  <OrderCard compactView={true} key={order.id} order={order} />
                );
              })}
            </Stack>
          </Stack.Item>
          <Stack>
            <Link href={pagePaths.orders} passHref>
              <a>
                <ActionButton
                  iconProps={{ iconName: 'ChevronRight' }}
                  text={formatMessage(messages.viewAllRecentOrders)}
                />
              </a>
            </Link>
          </Stack>
        </Stack>
      )}
      <Stack tokens={{ childrenGap: spacing.m }}>
        <Stack.Item>
          <Text variant="large" as={'h2'}>
            {formatMessage(messages.profileInformation)}
          </Text>
        </Stack.Item>
        <Stack.Item>
          <Stack horizontal wrap tokens={{ childrenGap: spacing.m }}>
            <OverviewProfileInfo me={me} formattedName={name} />
            {showCustomerDetails && <OverviewCompanyInfo me={me} />}
          </Stack>
        </Stack.Item>
      </Stack>
    </Stack>
  );
};
