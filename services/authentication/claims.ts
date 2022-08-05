import { useCallback, useMemo } from 'react';

import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import {
  customerLoginRequest,
  employeeLoginRequest
} from '@services/authentication/authenticationConfiguration';

export enum ExtensionRole {
  VerifiedCustomer = 'VerifiedCustomer',
  Employee = 'Employee',
  Customer = 'Customer',
  Administrator = 'Administrator',
  AccountManager = 'AccountManager',
  RegisteredUser = 'RegisteredUser'
}

interface ClaimsHook {
  accountId: string | undefined;
  accountNumber: string | undefined;
  roles: ExtensionRole[];
  isVerifiedCustomer: boolean;
  isEmployee: boolean;
  isCustomer: boolean;
  isRegisteredUser: boolean;
  isAccountManager: boolean;
  forceRefreshToken: () => Promise<void>;
  isAdministrator: boolean;
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
  const isAuthenticated = useIsAuthenticated();
  const claims = useMemo(() => {
    return accounts?.[0]?.idTokenClaims as ExtendedClaims | undefined;
  }, [accounts]);

  const roles: ExtensionRole[] = useMemo(() => {
    return (claims?.extension_Roles?.split(',') || []) as ExtensionRole[];
  }, [claims?.extension_Roles]);

  const isRole = useCallback(
    (role: ExtensionRole): boolean => {
      return !!claims?.extension_Roles?.split(',').includes(role);
    },
    [claims]
  );

  const isEmployee = useMemo(() => {
    return !!isRole(ExtensionRole.Employee);
  }, [isRole]);

  const isVerifiedCustomer = useMemo(() => {
    return !!isRole(ExtensionRole.VerifiedCustomer);
  }, [isRole]);

  const isAccountManager = useMemo(() => {
    return !!isRole(ExtensionRole.AccountManager);
  }, [isRole]);
  const isRegisteredUser = useMemo(() => {
    return !!isRole(ExtensionRole.RegisteredUser);
  }, [isRole]);
  const isCustomer = useMemo(() => {
    return (
      !!isRole(ExtensionRole.Customer) ||
      !!isRole(ExtensionRole.VerifiedCustomer)
    );
  }, [isRole]);

  const isAdmin = useMemo(() => {
    return !!isRole(ExtensionRole.Administrator);
  }, [isRole]);

  const forceRefresh: () => Promise<void> = useCallback(async () => {
    if (isAuthenticated) {
      try {
        const loginRequest = isEmployee
          ? employeeLoginRequest
          : customerLoginRequest;

        instance.acquireTokenRedirect({
          account: accounts?.[0],
          ...loginRequest
        });
      } catch (e) {
        console.error(e);
      }
    }
  }, [accounts, instance, isAuthenticated, isEmployee]);

  return {
    isEmployee,
    isVerifiedCustomer,
    isCustomer,
    isRegisteredUser,
    roles,
    accountId: claims?.extension_AccountId,
    accountNumber: claims?.extension_AccountNumber,
    isAccountManager,
    isAdministrator: isAdmin,
    forceRefreshToken: forceRefresh
  };
};
