import React, { useMemo } from 'react';

import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';
import { useQuery } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import { ErrorMessage } from '@components/errors/errorMessage';
import { PortalMessageBar } from '@components/messages/portalMessageBar';
import { LoadingSpinner } from '@components/spinners/loadingSpinner';
import { MessageBarType, Stack, Text, useTheme } from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { useClaims } from '@services/authentication/claims';
import { messageIds } from '@services/i18n';
import { Order } from '@services/portal-api';
import { OdataCollection } from '@services/portal-api/o-data';
import { fetchMyOrders } from '@services/portal-api/orders';
import { QUERYKEYS } from '@services/react-query/constants';
import { scrollToTop } from '@utilities/scrollToTop';
import { ResultViewPagination } from '@widgets/finder/result-view/product-result-view-pagination/resultViewPagination';

import { OrderCard } from './orderCard';

const messages = defineMessages({
  error: {
    id: messageIds.pages.account.orders.overviewError,
    description: 'Error message when orders overview page fails to load',
    defaultMessage: 'Something went wrong'
  },
  noData: {
    id: messageIds.pages.account.orders.overviewEmpty,
    description: 'Message when there are no orders',
    defaultMessage: 'You do not have any orders'
  }
});

const PAGE_SIZE = 10;
export const OrdersOverview: React.FC = () => {
  const { spacing } = useTheme();
  const isAuthenticated = useIsAuthenticated();
  const { accountId } = useClaims();
  const { formatMessage } = useIntl();
  const { isOrderHistoryEnabled } = useMe();
  const router = useRouter();

  const page: number | undefined = useMemo(() => {
    const pageParam = router.query.page;
    if (!pageParam || isNaN(Number(pageParam))) {
      return 1;
    }
    return Number(pageParam);
  }, [router.query.page]);
  const {
    data: orders,
    status: ordersStatus,
    error
  } = useQuery(
    [QUERYKEYS.orders, page, isAuthenticated, accountId, isOrderHistoryEnabled],
    () =>
      fetchMyOrders(
        PAGE_SIZE,
        (page - 1) * PAGE_SIZE,
        isAuthenticated,
        isOrderHistoryEnabled,
        accountId
      ),
    {
      keepPreviousData: true,
      enabled: isAuthenticated && isOrderHistoryEnabled && !!accountId,
      refetchOnMount: true,
      refetchOnWindowFocus: true
    }
  );

  const orderCount: number = useMemo(() => {
    return orders?.['@odata.count'] || 0;
  }, [orders]);

  function updatePage(newPage: number): void {
    router.push(
      { query: { page: newPage >= 1 ? newPage.toString() : '1' } },
      undefined,
      { shallow: true }
    );
  }

  if (ordersStatus === 'loading') {
    return <LoadingSpinner />;
  }

  if (!orders || !orders?.value || orders?.value.length === 0) {
    return (
      <PortalMessageBar messageBarType={MessageBarType.warning}>
        <Text>{formatMessage(messages.noData)}</Text>
      </PortalMessageBar>
    );
  }

  if (ordersStatus === 'error') {
    return <ErrorMessage error={error as Error | undefined} logError={true} />;
  }

  return (
    <Stack>
      {ordersStatus === 'success' && orders?.value.length && (
        <Stack tokens={{ childrenGap: spacing.m }}>
          <Stack.Item>
            <Stack horizontal wrap tokens={{ childrenGap: spacing.l2 }}>
              {orders.value.map(order => {
                return (
                  <OrderCard compactView={false} key={order.id} order={order} />
                );
              })}
            </Stack>
          </Stack.Item>
          <ResultViewPagination
            totalItems={orderCount}
            currentPage={page}
            pageSize={PAGE_SIZE}
            onPageChange={newPage => {
              scrollToTop('body');
              updatePage(newPage);
            }}
          />
        </Stack>
      )}
    </Stack>
  );
};
