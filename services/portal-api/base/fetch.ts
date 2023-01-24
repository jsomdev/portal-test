import { AccountInfo, SilentRequest } from '@azure/msal-browser';
import { AuthenticationResult } from '@azure/msal-common';
import {
  customerLoginRequest,
  employeeLoginRequest,
  getMsalInstance
} from '@services/authentication/authenticationConfiguration';
import { ExtendedClaims } from '@services/authentication/claims';

import { OdataCollection } from '../o-data/oData';
import { OdataException } from '../o-data/oDataException';
import { QueryOptions } from '../o-data/queryOptions';
import { ErpApiError } from './erpApiError';
import { ODataQueryHelper } from './queryHelper';

export async function handleResponse<T>(
  response: Response,
  method: string,
  shouldParseToJson: boolean
): Promise<T | Response> {
  if (response.ok) {
    if (response.status === 204) {
      return response;
    }
    return shouldParseToJson
      ? (response.json() as Promise<T>)
      : (Promise.resolve(response) as Promise<Response>);
  }
  if (response.status === 400) {
    const error: OdataCollection<string> | OdataException =
      await response.json();
    console.log(error);
    throw new ErpApiError(response.status, method, error);
  }
  throw new ErpApiError(response.status, method);
}
/**
 * Returns a Promise: Response or Object
 * @param serviceRootUri
 * @param resourcePath
 * @param queryOptions string or partial queryOptions to allow flexibility. If not yet a string, the service will format the queryOptions (e.g: "?$select=id" or {select: "id"})
 * @param requestOptions
 * @param shouldParseToJson Whether or not the response should be parsed to JSON
 */
export const digitalHighWayFetch = async <T>(
  serviceRootUri: string,
  resourcePath: string,
  queryOptions: Partial<QueryOptions> | string,
  requestOptions?: RequestInit,
  shouldParseToJson = true
): Promise<T | Response> => {
  let defaultHeaders = {};
  const account: AccountInfo | undefined =
    getMsalInstance()?.getAllAccounts()[0];
  let authenticationResult: AuthenticationResult | undefined = undefined;
  if (account) {
    const tfp:
      | 'B2C_1_CustomerSignUpAndSignIn'
      | 'B2C_1_EmployeeSignUpAndSignIn'
      | string
      | undefined = (account?.idTokenClaims as ExtendedClaims | undefined)?.tfp;
    const loginRequest =
      tfp === 'B2C_1_CustomerSignUpAndSignIn'
        ? customerLoginRequest
        : employeeLoginRequest;
    try {
      const silentRequest: SilentRequest = { ...loginRequest, account };
      authenticationResult = await getMsalInstance()?.acquireTokenSilent({
        ...loginRequest,
        account
      });
    } catch (e: unknown) {
      console.error('Failed the acquire token silently. Will logout the user');

      if ((e as any)?.errorMessage?.includes('AADB2C90077')) {
        getMsalInstance()?.acquireTokenRedirect({
          ...loginRequest,
          account
        });
      } else {
        getMsalInstance()?.logoutRedirect({
          ...loginRequest,
          account
        });
      }
    }
  }

  if (authenticationResult?.accessToken) {
    // Configure the headers, add the bear token to any optional options
    defaultHeaders = {
      Authorization: 'Bearer ' + authenticationResult.accessToken
    };
  }

  const options = (requestOptions && {
    ...requestOptions,
    headers:
      (requestOptions.headers && {
        ...requestOptions.headers,
        ...defaultHeaders
      }) ||
      defaultHeaders
  }) || {
    headers: defaultHeaders
  };

  // Format the queryOptions to odata query options if its not already a string
  const odataQueryOptions =
    typeof queryOptions === 'string'
      ? queryOptions
      : ODataQueryHelper.formatQueryOptionsToOdataQueryOptions(queryOptions);
  const fetchUrl = serviceRootUri
    .concat(resourcePath)
    .concat(odataQueryOptions);
  // Return the parsed response as promise instead of the response itselve
  const response: Response = await fetch(fetchUrl, options);
  const result: T | Response = await handleResponse<T>(
    response,
    requestOptions?.method || 'GET',
    shouldParseToJson
  );
  return result;
};
