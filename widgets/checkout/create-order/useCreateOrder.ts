import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import { useCart } from '@providers/cart/cartContext';
import { Order } from '@services/portal-api';
import { OrderPost } from '@services/portal-api/base/types';
import { createOrder } from '@services/portal-api/orders';
import { ReactQueryStatus } from '@services/react-query/types';
import pagePaths from '@utilities/pagePaths';
import { scrollToTop } from '@utilities/scrollToTop';
import { CreateOrderError } from '@widgets/checkout/create-order/CreateOrderError';

export interface CreateOrderHook {
  create: (order: OrderPost) => Promise<Order>;
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
    OrderPost
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
    push(pagePaths.orders(order.id, true));
  }

  return {
    create: mutateAsync,
    createdOrder: data,
    status: status,
    error: error as CreateOrderError | unknown | null | undefined
  };
};
