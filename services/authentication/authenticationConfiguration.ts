import { Configuration, PublicClientApplication, RedirectRequest } from '@azure/msal-browser';
import { ENVIRONMENT_VARIABLES } from '@utilities/environmentVariables';

export const PORTAL_API_BASE_URL: string = ENVIRONMENT_VARIABLES.portalApi.baseUrl;
export const msalConfig: Configuration = {
  auth: {
    clientId: ENVIRONMENT_VARIABLES.clientId,
    redirectUri: 'https://portal.spray.com',

    knownAuthorities: [
      ENVIRONMENT_VARIABLES.authorityEmployeeSignUpAndSignIn,
      ENVIRONMENT_VARIABLES.authorityCustomerSignUpAndSignIn,
    ],

    authority: ENVIRONMENT_VARIABLES.authorityEmployeeSignUpAndSignIn,
  },

  cache: {
    cacheLocation: 'localStorage',

    storeAuthStateInCookie: true,
  },
};

export const employeeLoginRequest: RedirectRequest = {
  scopes: [
    // Scope needed to login
    'openid',
    // Scope needed to have permissions to access the portal api
    `${ENVIRONMENT_VARIABLES.portalApi.resourceUrl}/Access.All`,
  ],

  redirectUri: 'https://portal.spray.com',
  authority: ENVIRONMENT_VARIABLES.authorityEmployeeSignUpAndSignIn || '',
};

export const customerLoginRequest: RedirectRequest = {
  scopes: [
    // Scope needed to login
    'openid',
    // Scope needed to have permissions to access the portal api
    `${ENVIRONMENT_VARIABLES.portalApi.resourceUrl}/Access.All`,
  ],

  redirectUri: 'https://portal.spray.com',
  authority: ENVIRONMENT_VARIABLES.authorityCustomerSignUpAndSignIn || '',
};
// USE INSTANCE WITH CAUTION!!! Preferably use the useMsal() hook by msal-react.
export const msalInstance = new PublicClientApplication(msalConfig);
