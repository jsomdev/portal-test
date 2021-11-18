import { BaseResource } from './base/baseResource';
import { OrderPost } from './base/types';
import { Order } from './models/Order';
import { OdataCollection, OdataEntity, QueryOptions } from './o-data';

export const createOrder = async (order: OrderPost): Promise<Order> => {
  try {
    const customOrderResource: BaseResource<unknown> = new BaseResource(
      '/me/cart/checkout?$expand=lines'
    );

    const data: Order = await customOrderResource.fetch<Order>(
      '/me/cart/checkout?$expand=lines',
      {},
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      }
    );
    return data;
  } catch (e) {
    throw e;
  }
};
/**
 * Function that retrieves the orders of the user's linked account
 * @returns The Orders linked to the user's account
 */
export const fetchMyOrders = async (
  top: number,
  skip: number,
  isAuthenticated: boolean,
  isVerified: boolean,
  accountId: string | undefined
): Promise<OdataCollection<Order> | undefined> => {
  if (!isVerified || !accountId || !isAuthenticated) {
    return undefined;
  }

  const queryOptions: Partial<QueryOptions> = {
    selectQuery: 'number,submittedOn,id,status,totalAmount',
    expandQuery:
      'lines($select=productName,productNumber,unitAmount,totalAmount,currencyCode,quantity,productId)',
    includeCount: true,
    orderbyQuery: 'submittedOn desc',
    top,
    skip,
  };
  try {
    const baseResource: BaseResource<Order> = new BaseResource<Order>(
      '/Me/Account/Orders'
    );
    const orders: OdataCollection<Order> = await baseResource.getEntities(
      queryOptions
    );
    return orders;
  } catch (e) {
    throw e;
  }
};

export const fetchMyOrder = async (
  orderId: string,
  isAuthenticated: boolean,
  isVerified: boolean,
  accountId: string | undefined
): Promise<Order | undefined> => {
  try {
    if (!isVerified || !accountId || !isAuthenticated) {
      return undefined;
    }
    const baseResource: BaseResource<Order> = new BaseResource<Order>(
      '/Me/Account/Orders'
    );
    const queryOptions: Partial<QueryOptions> = {
      expandQuery:
        'lines($expand=product($select=id;$expand=image($select=url))),transactions($select=card($select=number,issuer))',
    };
    const data: Order & OdataEntity = await baseResource.getEntity(
      orderId,
      queryOptions
    );
    return data;
  } catch (error) {
    throw error;
  }
};
