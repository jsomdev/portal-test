import React, { useEffect } from 'react';

import { useQuery } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import { LoadingSpinner } from '@components/spinners/loadingSpinner';
import { IStackStyles, Stack, useTheme } from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { useClaims } from '@services/authentication/claims';
import { fetchMyOrder } from '@services/portal-api/orders';
import { QUERYKEYS } from '@services/react-query/constants';

interface OrderDetailProps {
  id: string;
}

interface OrderDetailStyles {
  container: IStackStyles;
}

// NOTE: BASE IMPLEMENTION

export const OrderDetail: React.FC<OrderDetailProps> = ({ id }) => {
  const { spacing, fonts, palette } = useTheme();
  const isAuthenticated = useIsAuthenticated();
  const { accountId } = useClaims();
  const { isOrderHistoryEnabled } = useMe();

  const { data: order, status: orderDataStatus } = useQuery(
    [
      QUERYKEYS.orderDetail,
      id,
      isAuthenticated,
      accountId,
      isOrderHistoryEnabled
    ],
    () => fetchMyOrder(id, isAuthenticated, isOrderHistoryEnabled, accountId),
    {
      retry: 3,
      retryDelay: () => 500
    }
  );

  const styles: OrderDetailStyles = {
    container: {}
  };

  if (orderDataStatus === 'loading') {
    return <LoadingSpinner />;
  }

  return <Stack>{id}</Stack>;
};
