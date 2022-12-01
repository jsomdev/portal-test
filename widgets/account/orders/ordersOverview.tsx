import React, { useMemo } from 'react';

import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import {
  ISpinnerStyles,
  Spinner,
  SpinnerSize,
  Stack,
  useTheme
} from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { useClaims } from '@services/authentication/claims';
import { fetchMyOrders } from '@services/portal-api/orders';
import { QUERYKEYS } from '@services/react-query/constants';
import { scrollToTop } from '@utilities/scrollToTop';
import { ResultViewPagination } from '@widgets/finder/result-view/product-result-view-pagination/resultViewPagination';

import { OrderCard } from './orderCard';

interface OrdersOverviewStyles {
  spinner: ISpinnerStyles;
}

const PAGE_SIZE = 10;
export const OrdersOverview: React.FC = () => {
  const { spacing, fonts, palette } = useTheme();
  const isAuthenticated = useIsAuthenticated();
  const { accountId } = useClaims();
  const { isOrderHistoryEnabled } = useMe();
  const router = useRouter();

  const page: number | undefined = useMemo(() => {
    const pageParam = router.query.page;
    if (!pageParam || isNaN(Number(pageParam))) {
      return 1;
    }
    return Number(pageParam);
  }, [router.query.page]);

  const { data: orders, status: ordersStatus } = useQuery(
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

  const styles: OrdersOverviewStyles = {
    spinner: {
      label: {
        ...fonts.mediumPlus,
        color: palette.themeDark
      }
    }
  };

  if (ordersStatus === 'loading') {
    return (
      <Stack
        verticalAlign="center"
        horizontalAlign="center"
        tokens={{ childrenGap: spacing.l1, padding: `${spacing.l1} 0 ` }}
      >
        <Spinner styles={styles.spinner} size={SpinnerSize.large} />
      </Stack>
    );
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
