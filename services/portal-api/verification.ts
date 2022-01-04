import { BaseResource } from './base/baseResource';
import { CustomerVerificationRequest } from './base/types';

export const createUserVerification = async (
  verification: CustomerVerificationRequest
): Promise<CustomerVerificationRequest> => {
  const customUserVerificationResource: BaseResource<unknown> =
    new BaseResource('/Me/CustomerVerificationRequests');

  const data: CustomerVerificationRequest =
    await customUserVerificationResource.fetch<CustomerVerificationRequest>(
      '/Me/CustomerVerificationRequests',
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
