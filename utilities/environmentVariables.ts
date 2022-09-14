export interface EnvironmentVariables {
  clientId: string;
  tenantId: string;
  redirectUri: string;
  authorityEmployeeSignUpAndSignIn: string;
  authorityCustomerSignUpAndSignIn: string;
  portalApi: {
    resourceUrl: string;
    baseUrl: string;
  };
  forceLogin: boolean;
  supportedLocales: string[] | undefined;
  defaultLocale: string;
}

export const ENVIRONMENT_VARIABLES: EnvironmentVariables = {
  forceLogin: process.env.NEXT_PUBLIC_FORCE_LOGIN === 'false' ? false : true,
  supportedLocales: process.env.NEXT_PUBLIC_SUPPORTED_LOCALES?.split(','),
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'en',
  redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI || '',
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID || '',
  tenantId: process.env.NEXT_PUBLIC_TENANT_ID || '',
  authorityEmployeeSignUpAndSignIn:
    process.env.NEXT_PUBLIC_AUTHORITY_EMPLOYEE_SIGN_IN || '',
  authorityCustomerSignUpAndSignIn:
    process.env.NEXT_PUBLIC_AUTHORITY_CUSTOMER_SIGN_IN || '',
  portalApi: {
    resourceUrl: process.env.NEXT_PUBLIC_PORTAL_API_RESOURCE_URL || '',
    baseUrl:
      process.env.NEXT_PUBLIC_PORTAL_API_BASE_URL ||
      `${window?.location.origin}/api/odata`
  }
};
