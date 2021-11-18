import { ShippingMethod } from '.';
import { BaseResource } from './base/baseResource';
import { TaxAmount } from './base/types';
import { PostalAddress } from './models/PostalAddress';

export const fetchOrderTaxAmount = async (
  address: PostalAddress | undefined,
  shippingMethod: ShippingMethod | undefined
): Promise<TaxAmount> => {
  try {
    const customTaxAmountResource: BaseResource<unknown> = new BaseResource(
      '/me/cart/taxAmount'
    );

    const data: TaxAmount = await customTaxAmountResource.fetch<TaxAmount>(
      '/me/cart/taxAmount',
      {},
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          shippingAddress: {
            ...address,
          },
          shippingMethod,
        }),
      }
    );
    return data;
  } catch (e) {
    throw e;
  }
};
