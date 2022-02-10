import { sortShippingOptionsByCostAscending } from '../../utilities/sortBy';
import { BaseResource } from './base/baseResource';
import { ShippingCostAmount } from './base/types';
import { PostalAddress } from './models/PostalAddress';
import { OdataCollection } from './o-data';

export const fetchShippingOptions = async (
  // create mapped type
  address: PostalAddress | undefined
): Promise<ShippingCostAmount[]> => {
  const customShippingOptionsResource: BaseResource<unknown> = new BaseResource(
    '/me/cart/shippingOptions'
  );

  const data: OdataCollection<ShippingCostAmount> =
    await customShippingOptionsResource.fetch<
      OdataCollection<ShippingCostAmount>
    >(
      '/me/cart/shippingOptions',
      {},
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ shippingAddress: { ...address } })
      }
    );

  //Sort the shipping options from least expensive to most expensive
  const sortedData = data.value.sort(sortShippingOptionsByCostAscending);

  return sortedData;
};
