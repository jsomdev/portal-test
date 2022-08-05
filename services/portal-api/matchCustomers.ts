import { BaseResource } from './base/baseResource';
import { MatchCustomersResponse } from './models/MatchCustomerResponse';

export const matchEmailToCustomer = async (
  email: string | undefined | null
): Promise<MatchCustomersResponse> => {
  const baseResource: BaseResource<MatchCustomersResponse> =
    new BaseResource<MatchCustomersResponse>('/MatchEmailToCustomer');
  const matchedCustomersResponse: MatchCustomersResponse =
    await baseResource.fetch<MatchCustomersResponse>(
      `/MatchEmailToCustomer(emailAddress=%27${email}%27)`,
      {},
      {},
      true
    );
  return matchedCustomersResponse;
};
