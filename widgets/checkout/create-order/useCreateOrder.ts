import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import { useCart } from '@providers/cart/cartContext';
import { Order } from '@services/portal-api';
import { createOrder } from '@services/portal-api/orders';
import { ReactQueryStatus } from '@services/react-query/types';
import pagePaths from '@utilities/pagePaths';
import { scrollToTop } from '@utilities/scrollToTop';
import { CreateOrderError } from '@widgets/checkout/create-order/CreateOrderError';

import { CreateOrderData } from './../../../services/portal-api/orders';

export interface CreateOrderHook {
  create: (orderData: CreateOrderData) => Promise<Order>;
  createdOrder: Order | undefined;
  status: ReactQueryStatus;
  error: CreateOrderError | null | undefined | unknown;
}

export const useCreateOrder = (productNumbers: string[]): CreateOrderHook => {
  const { clear } = useCart();
  const { push } = useRouter();
  const { mutateAsync, data, status, error } = useMutation<
    Order,
    CreateOrderError | unknown,
    CreateOrderData
  >(createOrder, {
    onSuccess: (data: Order) => {
      clear(productNumbers);
      handleRedirect(data);
    },
    onSettled: () => {
      scrollToTop();
    }
  });

  function handleRedirect(order: Order) {
    if (order.id) {
      push(pagePaths.orderDetail(order.id, true));
    }
  }

  return {
    create: mutateAsync,
    createdOrder: data,
    status: status,
    error: error as CreateOrderError | unknown | null | undefined
  };
};
