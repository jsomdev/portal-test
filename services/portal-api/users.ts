import { BaseResource } from './base/baseResource';
import { ContactDetailsPut } from './base/types';
import { CartItem } from './models/CartItem';
import { CustomerVerificationRequest } from './models/CustomerVerificationRequest';
import { CustomerVerificationRequestStatus } from './models/CustomerVerificationRequestStatus';
import { User } from './models/User';
import { OdataCollection } from './o-data';

/**
 * Function that retrieves the data of the Authenticated User
 * @returns The Authenticated User
 */
export const fetchMe = async (): Promise<User | undefined> => {
  const baseResource: BaseResource<User> = new BaseResource<User>('/Me');
  const me: User = await baseResource.fetch<User>(
    '/Me',
    {
      selectQuery: 'id,accountId,contactInfo,roles,name',
      expandQuery: `account($select=number,name,paymentMethod),cart,customerVerificationRequests($select=status;$filter=status eq '${CustomerVerificationRequestStatus.PENDING}')`
    },
    {},
    true
  );
  return me as User;
};

/**
 * Function that retrieves the data of the Authenticated User
 * @returns The Authenticated User
 */
export const updateCart = async (
  items: CartItem[],
  isAuthenticated: boolean
): Promise<OdataCollection<CartItem> | undefined> => {
  if (!isAuthenticated) {
    return undefined;
  }
  const baseResource: BaseResource<User> = new BaseResource<User>('/Me');
  const cartItems: OdataCollection<CartItem> | undefined =
    await baseResource.fetch<OdataCollection<CartItem>>(
      '/Me/Cart/Update',
      {},
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items
        })
      },
      true
    );
  return cartItems;
};

export const updateContactDetails = async (
  contactDetails: ContactDetailsPut
): Promise<User> => {
  const customUserResource: BaseResource<unknown> = new BaseResource('/me');
  const data: User = await customUserResource.fetch<User>(
    '/me/contactInfo',
    {},
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...contactDetails })
    }
  );
  return data;
};

export const createUserVerification = async (
  contactDetails: ContactDetailsPut,
  verification: CustomerVerificationRequest
): Promise<CustomerVerificationRequest> => {
  const customUserVerificationResource: BaseResource<unknown> =
    new BaseResource('/me/customerVerificationRequests');

  await updateContactDetails(contactDetails);

  const data: CustomerVerificationRequest =
    await customUserVerificationResource.fetch<CustomerVerificationRequest>(
      '/me/customerVerificationRequests',
      {},
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(verification)
      }
    );
  return data;
};
