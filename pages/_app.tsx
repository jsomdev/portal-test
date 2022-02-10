import '@styles/globals.css';

import { useEffect, useMemo } from 'react';

import { flatten } from 'flat';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import { IntlProvider, MessageFormatElement } from 'react-intl';

import {
  AuthenticatedTemplate,
  MsalProvider,
  UnauthenticatedTemplate
} from '@azure/msal-react';
import { PrimaryButton } from '@fluentui/react';
import { UserProvider } from '@providers/user/userProvider';
import {
  customerLoginRequest,
  msalInstance
} from '@services/authentication/authenticationConfiguration';
import { getMessages } from '@services/i18n/helper';
import { ReactQueryClientProvider } from '@services/react-query/reactQueryProvider';
import { CustomNavigationClient } from '@utilities/navigationClient';
import { PageLayout } from '@widgets/layouts/pageLayout';
import { AppThemeProvider } from '@widgets/themes/appThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale, defaultLocale = 'en' } = router;
  const i18nMessages: Record<string, MessageFormatElement[]> = useMemo(() => {
    return flatten(getMessages(locale));
  }, [locale]);

  useEffect(() => {
    const navigationClient = new CustomNavigationClient(router);
    msalInstance.setNavigationClient(navigationClient);
  }, [router]);

  return (
    <MsalProvider instance={msalInstance}>
      <IntlProvider
        locale={locale || defaultLocale}
        defaultLocale={defaultLocale}
        messages={i18nMessages}
      >
        <AppThemeProvider>
          <ReactQueryClientProvider>
            <UserProvider>
              <PageLayout>
                <Component {...pageProps} />
                <UnauthenticatedTemplate>
                  <PrimaryButton
                    onClick={() =>
                      msalInstance.loginRedirect(customerLoginRequest)
                    }
                  >
                    Login
                  </PrimaryButton>
                </UnauthenticatedTemplate>
                <AuthenticatedTemplate>
                  <PrimaryButton
                    onClick={() =>
                      msalInstance.logoutRedirect(customerLoginRequest)
                    }
                  >
                    Logout
                  </PrimaryButton>
                </AuthenticatedTemplate>
              </PageLayout>
            </UserProvider>
          </ReactQueryClientProvider>
        </AppThemeProvider>
      </IntlProvider>
    </MsalProvider>
  );
}
export default MyApp;
