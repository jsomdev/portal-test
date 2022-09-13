import '@styles/globals.css';
import '../public/nprogress.css';

import { useEffect, useMemo } from 'react';

import { flatten } from 'flat';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import nProgress from 'nprogress';
import { IntlProvider, MessageFormatElement } from 'react-intl';

import { MsalProvider } from '@azure/msal-react';
import { SystemOfMeasurementProvider } from '@providers/system-of-measurement/systemOfMeasurementProvider';
import { UserProvider } from '@providers/user/userProvider';
import { msalInstance } from '@services/authentication/authenticationConfiguration';
import { getMessages } from '@services/i18n/helper';
import { ReactQueryClientProvider } from '@services/react-query/reactQueryProvider';
import { AppThemeProvider } from '@widgets/themes/appThemeProvider';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const { locale, defaultLocale = 'en-US' } = router;
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
              <SystemOfMeasurementProvider>
                <Component {...pageProps} />
              </SystemOfMeasurementProvider>
            </UserProvider>
          </ReactQueryClientProvider>
        </AppThemeProvider>
      </IntlProvider>
    </MsalProvider>
  );
}
export default MyApp;
