import '@styles/globals.css';
import '../public/nprogress.css';

import { useEffect, useMemo } from 'react';

import { flatten } from 'flat';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import nProgress from 'nprogress';
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
import { AppThemeProvider } from '@widgets/themes/appThemeProvider';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const { locale, defaultLocale = 'en' } = router;
  const i18nMessages: Record<string, MessageFormatElement[]> = useMemo(() => {
    return flatten(getMessages(locale));
  }, [locale]);

  useEffect(() => {
    const handleStart = () => {
      nProgress.start();
    };
    const handleStop = () => {
      nProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
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
            </UserProvider>
          </ReactQueryClientProvider>
        </AppThemeProvider>
      </IntlProvider>
    </MsalProvider>
  );
}
export default MyApp;
