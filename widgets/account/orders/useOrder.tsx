import React, { useMemo } from 'react';

import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';

import { useIsAuthenticated } from '@azure/msal-react';
import { useTheme } from '@fluentui/react';
import { MAX_CART_QUANTITY } from '@providers/cart/cartConstants';
import { useCart } from '@providers/cart/cartContext';
import { BaseCartItem } from '@providers/cart/cartModels';
import { useMe } from '@providers/user/userContext';
import { useClaims } from '@services/authentication/claims';
import { Order } from '@services/portal-api';
import { fetchMyOrder } from '@services/portal-api/orders';
import { QUERYKEYS } from '@services/react-query/constants';
import { ReactQueryStatus } from '@services/react-query/types';
import { validateProductNumbers } from '@widgets/add-bulk-card/addBulkFormHelpers';

import { mapOrderToOrderViewModel } from './orderHelper';
import { OrderViewModel } from './orders.types';

interface OrderHookProps {
  order: OrderViewModel | undefined;
  orderData: Order | undefined;
  orderDataStatus: ReactQueryStatus;
  reorder: (items: BaseCartItem[]) => BaseCartItem[];
}

/**
 * Hook to get the order data for the order page. The data is mapped to an OrderViewModel and the reorder functinoality is calculated.
 * @param orderId the order id used to fetch an order from the portal api
 * @returns an order and the status of the order data
 */
export const useOrder = (orderId: string): OrderHookProps => {
  const isAuthenticated = useIsAuthenticated();
  const { palette } = useTheme();
  const { accountId } = useClaims();
  const { merge, getQuantity } = useCart();
  const { isOrderHistoryEnabled } = useMe();
  const intl = useIntl();

  const { data: orderData, status: orderDataStatus } = useQuery(
    [
      QUERYKEYS.orderDetail,
      orderId,
      isAuthenticated,
      accountId,
      isOrderHistoryEnabled
    ],
    () =>
      fetchMyOrder(orderId, isAuthenticated, isOrderHistoryEnabled, accountId),
    {
      enabled: !!isAuthenticated,
      retry: 3,
      retryDelay: () => 500
    }
  );

  const reorder = React.useCallback(
    (items: BaseCartItem[]) => {
      const mappedItems: BaseCartItem[] = items.map(item => {
        const maxQuantityToAdd: number =
          MAX_CART_QUANTITY - getQuantity(item.productNumber || '');
        return {
          productNumber: item.productNumber,
          quantity:
            item.quantity <= maxQuantityToAdd
              ? item.quantity
              : maxQuantityToAdd,
          productId: item.productId,
          productName: item.productName
        };
      });
      merge(mappedItems);
      return items.map((item, index) => ({
        ...item,
        quantity: mappedItems[index].quantity
      }));
    },
    [getQuantity, merge]
  );

  // An array of all product numbers used to validate for reorder functionality
  const orderProductNumbers: string[] = React.useMemo((): string[] => {
    if (orderData === undefined) {
      return [];
    }
    const productNumbers: string[] = [];
    orderData?.lines?.forEach(orderLine => {
      const productNumber = orderLine.productNumber;
      if (productNumber) {
        productNumbers.push(productNumber);
      }
    });
    return productNumbers;
  }, [orderData]);

  const { data: validationData, status: validationStatus } = useQuery(
    [QUERYKEYS.orderVerifyProducts, orderProductNumbers],
    () => validateProductNumbers(orderProductNumbers)
  );

  const orderViewModel: OrderViewModel | undefined = useMemo(() => {
    return mapOrderToOrderViewModel(
      orderData,
      intl,
      palette,
      validationData,
      validationStatus
    );
  }, [intl, orderData, palette, validationData, validationStatus]);

  return {
    order: orderViewModel,
    orderData,
    orderDataStatus,
    reorder
  };
};
