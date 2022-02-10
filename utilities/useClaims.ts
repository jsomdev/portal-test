import { useCallback, useMemo } from 'react';

import { useMsal } from '@azure/msal-react';
import {
  customerLoginRequest,
  employeeLoginRequest
} from '@services/authentication/authenticationConfiguration';

enum ExtensionRole {
  VerifiedCustomer = 'VerifiedCustomer',
  Employee = 'Employee',
  Administrator = 'Administrator',
  AccountManager = 'AccountManager'
}

interface ClaimsHook {
  accountId: string | undefined;
  accountNumber: string | undefined;
  isVerified: boolean;
  isEmployee: boolean;
  isAccountManager: boolean;
  forceRefresh: () => Promise<boolean>;
  isAdmin: boolean;
}

interface Claims {
  at_hash: string;
  aud: string;
  auth_time: number;
  emails: string[];
  exp: number;
  name: string;
  tfp: string;
  ver: string;
  oid: string;
  sub: string;
  nonce: string;
  iss: string;
  iat: number;
  nbf: number;
}

interface ClaimsExtensions {
  extension_Roles: string;
  extension_TermsAccepted?: boolean;
  extension_UserId?: string;
  extension_AccountNumber?: string;
  extension_AccountId?: string;
}

export type ExtendedClaims = Claims & ClaimsExtensions;

export const useClaims = (): ClaimsHook => {
  const { accounts, instance } = useMsal();

  const claims = useMemo(() => {
    console.log(accounts?.[0]?.idTokenClaims as ExtendedClaims | undefined);
    return accounts?.[0]?.idTokenClaims as ExtendedClaims | undefined;
  }, [accounts]);

  const isRole = useCallback(
    (role: ExtensionRole): boolean => {
      return !!claims?.extension_Roles?.split(',').includes(role);
    },
    [claims]
  );

  const isEmployee = useMemo(() => {
    return !!isRole(ExtensionRole.Employee);
  }, [isRole]);

  const isVerified = useMemo(() => {
    return !!isRole(ExtensionRole.VerifiedCustomer);
  }, [isRole]);

  const isAccountManager = useMemo(() => {
    return !!isRole(ExtensionRole.AccountManager);
  }, [isRole]);

  const isAdmin = useMemo(() => {
    return !!isRole(ExtensionRole.Administrator);
  }, [isRole]);

  const forceRefresh: () => Promise<boolean> = useCallback(async () => {
    try {
      const loginRequest = isEmployee
        ? employeeLoginRequest
        : customerLoginRequest;

      const authResult = await instance.ssoSilent({
        account: accounts?.[0],
        ...loginRequest
      });

      const isVerified = (
        authResult.idTokenClaims as ExtendedClaims | undefined
      )?.extension_Roles
        ?.split(',')
        .includes(ExtensionRole.VerifiedCustomer);

      return !!isVerified;
    } catch (e) {
      return false;
    }
  }, [accounts, instance, isEmployee]);

  return {
    isEmployee,
    isVerified,
    accountId: claims?.extension_AccountId,
    accountNumber: claims?.extension_AccountNumber,
    isAccountManager,
    isAdmin,
    forceRefresh
  };
};
