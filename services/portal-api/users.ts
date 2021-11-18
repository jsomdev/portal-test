import { BaseResource } from './base/baseResource';
import { CustomerVerificationRequestStatus } from './base/types';
import { CartItem } from './models/CartItem';
import { User } from './models/User';
import { OdataCollection } from './o-data';
/**
 * Function that retrieves the data of the Authenticated User
 * @returns The Authenticated User
 */
export const fetchMe = async (
  isAuthenticated: boolean
): Promise<User | undefined> => {
  try {
    const baseResource: BaseResource<User> = new BaseResource<User>('/Me');
    const me: User = await baseResource.fetch<User>(
      '/Me',
      {
        selectQuery: 'id,accountId,contactInfo,roles,name',
        expandQuery: `account($select=number,name,paymentMethod),cart,customerVerificationRequests($select=status;$filter=status eq '${CustomerVerificationRequestStatus.Pending}')`,
      },
      {},
      true
    );
    return me as User;
  } catch (e) {
    throw e;
  }
};

/**
 * Function that retrieves the data of the Authenticated User
 * @returns The Authenticated User
 */
export const updateCart = async (
  items: CartItem[],
  isAuthenticated: boolean
): Promise<OdataCollection<CartItem> | undefined> => {
  try {
    if (!isAuthenticated) {
      return undefined;
    }
    const baseResource: BaseResource<User> = new BaseResource<User>('/Me');
    const cartItems:
      | OdataCollection<CartItem>
      | undefined = await baseResource.fetch<OdataCollection<CartItem>>(
      '/Me/Cart/Update',
      {},
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
        }),
      },
      true
    );
    return cartItems;
  } catch (e) {
    throw e;
  }
};
