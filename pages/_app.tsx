import { useEffect, useMemo } from 'react';

import { flatten } from 'flat';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import nProgress from 'nprogress';
import { IntlProvider, MessageFormatElement } from 'react-intl';

import { MsalProvider } from '@azure/msal-react';
import { initializeIcons } from '@fluentui/react';
import { CartProvider } from '@providers/cart/cartProvider';
import { SystemOfMeasurementProvider } from '@providers/system-of-measurement/systemOfMeasurementProvider';
import { UserProvider } from '@providers/user/userProvider';
import { msalInstance } from '@services/authentication/authenticationConfiguration';
import { getMessages } from '@services/i18n/helper';
import { ReactQueryClientProvider } from '@services/react-query/reactQueryProvider';
import '@styles/globals.css';
import { MediaContextProvider } from '@widgets/media-queries/media';
import { AppThemeProvider } from '@widgets/themes/appThemeProvider';

import '../public/nprogress.css';

// InitializeIcons
initializeIcons();

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
        <MediaContextProvider>
          <AppThemeProvider>
            <ReactQueryClientProvider>
              <UserProvider>
                <CartProvider>
                  <SystemOfMeasurementProvider>
                    <Component {...pageProps} />
                  </SystemOfMeasurementProvider>
                </CartProvider>
              </UserProvider>
            </ReactQueryClientProvider>
          </AppThemeProvider>
        </MediaContextProvider>
      </IntlProvider>
    </MsalProvider>
  );
}
export default MyApp;
