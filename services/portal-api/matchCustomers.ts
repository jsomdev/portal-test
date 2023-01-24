import { BaseResource } from './base/baseResource';
import { MatchCustomersResponse } from './models/MatchCustomerResponse';

export const matchEmailToCustomer =
  async (): Promise<MatchCustomersResponse> => {
    const baseResource: BaseResource<MatchCustomersResponse> =
      new BaseResource<MatchCustomersResponse>('/matchEmailToCustomer');
    const matchedCustomersResponse: MatchCustomersResponse =
      await baseResource.fetch<MatchCustomersResponse>(
        `/matchEmailToCustomer()`,
        {},
        {},
        true
      );
    return matchedCustomersResponse;
  };
