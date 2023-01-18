import { BaseResource } from './base/baseResource';
import { OrderPost } from './base/types';
import { Order } from './models/Order';
import { OdataCollection, OdataEntity, QueryOptions } from './o-data';

export const createFile = async (file: File): Promise<{ id: string }> => {
  const formData = new FormData();
  formData.append('file', file);
  const fileUploadResource: BaseResource<unknown> = new BaseResource(
    '/Me/Resources'
  );

  const data: { id: string } = await fileUploadResource.fetch(
    '/Me/Resources',
    {},
    {
      method: 'POST',
      body: formData
    }
  );
  return data;
};

export const createOrder = async (order: OrderPost): Promise<Order> => {
  const customOrderResource: BaseResource<unknown> = new BaseResource(
    '/me/cart/checkout?$expand=lines'
  );

  let fileId: { id: string } | undefined = undefined;

  if (order.referenceDocumentFile) {
    fileId = await createFile(order.referenceDocumentFile);
  }

  delete order.referenceDocumentFile;

  const data: Order = await customOrderResource.fetch<Order>(
    '/me/cart/checkout?$expand=lines',
    {},
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...order,
        purchaseOrderDocumentId: fileId?.id || undefined
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
        'lines($expand=product($select=id,name,number,slug;$expand=image($select=url))),transactions($select=card($select=number,issuer))'
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
