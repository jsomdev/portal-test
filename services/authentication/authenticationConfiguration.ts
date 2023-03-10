import {
  AccountInfo,
  AuthenticationResult,
  Configuration,
  EventType,
  PublicClientApplication,
  RedirectRequest
} from '@azure/msal-browser';
import { ENVIRONMENT_VARIABLES } from '@utilities/environmentVariables';

export const PORTAL_API_BASE_URL: string =
  ENVIRONMENT_VARIABLES.portalApi.baseUrl;

function getRedirectUri(): string {
  return window.location.origin;
}

export const msalConfig: Configuration = {
  auth: {
    clientId: ENVIRONMENT_VARIABLES.clientId,
    get redirectUri(): string {
      return getRedirectUri();
    },
    knownAuthorities: [
      ENVIRONMENT_VARIABLES.authorityEmployeeSignUpAndSignIn,
      ENVIRONMENT_VARIABLES.authorityCustomerSignUpAndSignIn
    ],

    authority: ENVIRONMENT_VARIABLES.authorityCustomerSignUpAndSignIn
  },

  cache: {
    cacheLocation: 'localStorage',

    storeAuthStateInCookie: true
  }
};

export const employeeLoginRequest: RedirectRequest = {
  scopes: [
    // Scope needed to login
    'openid',
    // Scope needed to have permissions to access the portal api
    `${ENVIRONMENT_VARIABLES.portalApi.resourceUrl}/Access.All`
  ],
  get redirectUri(): string {
    return getRedirectUri();
  },
  authority: ENVIRONMENT_VARIABLES.authorityEmployeeSignUpAndSignIn || ''
};

export const customerLoginRequest: RedirectRequest = {
  scopes: [
    // Scope needed to login
    'openid',
    // Scope needed to have permissions to access the portal api
    `${ENVIRONMENT_VARIABLES.portalApi.resourceUrl}/Access.All`
  ],

  get redirectUri(): string {
    return getRedirectUri();
  },
  authority: ENVIRONMENT_VARIABLES.authorityCustomerSignUpAndSignIn || ''
};
// USE INSTANCE WITH CAUTION!!! Preferably use the useMsal() hook by msal-react.
let msalInstance: PublicClientApplication | undefined = undefined;

export function getMsalInstance(): PublicClientApplication | undefined {
  if (typeof window === 'undefined') {
    return undefined;
  }
  if (msalInstance) {
    return msalInstance;
  }
  msalInstance = new PublicClientApplication(msalConfig);

  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
  }

  msalInstance.addEventCallback(event => {
    if (
      event.eventType === EventType.LOGIN_SUCCESS &&
      (event.payload as AuthenticationResult | undefined)?.account
    ) {
      const account: AccountInfo | null = (
        event.payload as AuthenticationResult
      ).account;
      msalInstance?.setActiveAccount(account);
    }
  });
  return msalInstance;
}
