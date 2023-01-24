import { BaseResource } from './base/baseResource';
import { OrderPost } from './base/types';
import { Order } from './models/Order';
import { Resource } from './models/Resource';
import { OdataCollection, OdataEntity, QueryOptions } from './o-data';

export const createResource = async (file: File): Promise<Resource> => {
  const formData = new FormData();
  formData.append('file', file);

  const fileUploadResource: BaseResource<unknown> = new BaseResource(
    '/me/resources'
  );

  const data: Resource = await fileUploadResource.fetch(
    '/me/resources',
    {},
    {
      method: 'POST',
      body: formData
    }
  );
  return data;
};

export interface CreateOrderData {
  order: OrderPost;
  referenceDocument: File | undefined;
}

export const createOrder = async (
  orderData: CreateOrderData
): Promise<Order> => {
  const customOrderResource: BaseResource<unknown> = new BaseResource(
    '/me/cart/checkout?$expand=lines'
  );

  let file: Resource | undefined;
  let purchaseOrderDocumentId: string | null = null;

  if (orderData.referenceDocument) {
    try {
      file = await createResource(orderData.referenceDocument);
      purchaseOrderDocumentId = file.id || null;
    } catch (error) {
      console.warn('resource could not be created');
    }
  }

  const data: Order = await customOrderResource.fetch<Order>(
    '/me/cart/checkout?$expand=lines',
    {},
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...orderData.order,
        purchaseOrderDocumentId
      })
    }
  );
  return data;
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
  try {
    if (!isVerified || !accountId || !isAuthenticated) {
      throw new Error('User is not authenticated');
    }

    const queryOptions: Partial<QueryOptions> = {
      selectQuery: 'number,submittedOn,id,status,totalAmount',
      expandQuery:
        'lines($select=productName,productNumber,unitAmount,totalAmount,currencyCode,quantity,productId;$expand=product($select=id,name,number,attributes;$expand=image))',
      orderbyQuery: 'submittedOn desc',
      includeCount: true,
      top,
      skip
    };
    const baseResource: BaseResource<Order> = new BaseResource<Order>(
      '/me/account/orders'
    );
    const orders: OdataCollection<Order> = await baseResource.getEntities(
      queryOptions
    );
    return orders;
  } catch (error) {
    console.error(error);
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
      throw new Error('User is not authenticated');
    }
    const baseResource: BaseResource<Order> = new BaseResource<Order>(
      '/Me/Account/Orders'
    );
    const queryOptions: Partial<QueryOptions> = {
      expandQuery:
        'resources($select=url,fileName),lines($expand=product($select=id,name,number,slug;$expand=image($select=url))),transactions($select=card($select=number,issuer))'
    };
    const data: Order & OdataEntity = await baseResource.getEntity(
      orderId,
      queryOptions
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
