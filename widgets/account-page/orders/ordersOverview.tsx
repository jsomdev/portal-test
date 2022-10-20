import React from 'react';

import { useQuery } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import { Stack, useTheme } from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { useClaims } from '@services/authentication/claims';
import { fetchMyOrders } from '@services/portal-api/orders';
import { QUERYKEYS } from '@services/react-query/constants';

import { OrderOverviewCard } from './orderOverviewCard';

export const OrdersOverview: React.FC = () => {
  const { spacing } = useTheme();
  const isAuthenticated = useIsAuthenticated();
  const { accountId } = useClaims();
  const { isOrderHistoryEnabled } = useMe();
  const { data: orders, status: ordersStatus } = useQuery(
    [QUERYKEYS.orders, isAuthenticated, accountId, isOrderHistoryEnabled],
    () =>
      fetchMyOrders(10, 0, isAuthenticated, isOrderHistoryEnabled, accountId),
    {
      keepPreviousData: true,
      enabled: !!isAuthenticated && isOrderHistoryEnabled && !!accountId,
      refetchOnMount: true,
      refetchOnWindowFocus: true
    }
  );
  return (
    <Stack>
      {ordersStatus === 'success' && orders?.value.length && (
        <Stack tokens={{ childrenGap: spacing.m }}>
          <Stack.Item>
            <Stack horizontal wrap tokens={{ childrenGap: spacing.m }}>
              {orders.value.map(order => {
                return <OrderOverviewCard key={order.id} order={order} />;
              })}
            </Stack>
          </Stack.Item>
        </Stack>
      )}
    </Stack>
  );
};
