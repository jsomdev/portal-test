import React, { useEffect, useMemo } from 'react';

import { flatten } from 'flat';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import nProgress from 'nprogress';
import { IntlProvider, MessageFormatElement } from 'react-intl';

import { MsalProvider } from '@azure/msal-react';
import { AppErrorBoundary } from '@components/errors/appErrorBoundary';
import { initializeIcons } from '@fluentui/react';
import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { AddressBookProvider } from '@providers/address-book/addressBookProvider';
import { CartProvider } from '@providers/cart/cartProvider';
import { ProductBookmarksProvider } from '@providers/product-bookmarks/productBookmarksProvider';
import { RecentlyViewedProvider } from '@providers/recently-viewed/recentlyViewedProvider';
import { SystemOfMeasurementProvider } from '@providers/system-of-measurement/systemOfMeasurementProvider';
import { UserProvider } from '@providers/user/userProvider';
import { appInsightsReactPlugin } from '@services/application-insights/applicationInsights';
import { getMsalInstance } from '@services/authentication/authenticationConfiguration';
import { Consent } from '@services/consent/consent';
import { getMessages } from '@services/i18n/helper';
import { ReactQueryClientProvider } from '@services/react-query/reactQueryProvider';
import '@styles/globals.css';
import { ProductCompareProvider } from '@widgets/compare/productCompareProvider';
import { MediaContextProvider } from '@widgets/media-queries/media';
import { AppThemeProvider } from '@widgets/themes/appThemeProvider';

import '../public/nprogress.css';

initializeIcons();

const ClientSideMsalProvider: React.FC = ({ children }) => {
  const msalInstance = getMsalInstance();
  if (msalInstance) {
    return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
  }
  return <>{children}</>;
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const { locale, defaultLocale = 'en-US' } = router;
  const i18nMessages: Record<string, MessageFormatElement[]> = useMemo(() => {
    return flatten(getMessages(locale));
  }, [locale]);

  useEffect(() => {
    //used in /docs/errors to test application level error
    if (router.query['appError']) {
      throw new Error('Something went wrong');
    }
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
    <AppInsightsContext.Provider value={appInsightsReactPlugin}>
      <AppErrorBoundary>
        <Consent />
        <ClientSideMsalProvider>
          <IntlProvider
            locale={locale || defaultLocale}
            defaultLocale={defaultLocale}
            messages={i18nMessages}
          >
            <MediaContextProvider>
              <AppThemeProvider>
                <ReactQueryClientProvider>
                  <AddressBookProvider>
                    <UserProvider>
                      <CartProvider>
                        <SystemOfMeasurementProvider>
                          <ProductCompareProvider>
                            <RecentlyViewedProvider>
                              <ProductBookmarksProvider>
                                <Component {...pageProps} />
                              </ProductBookmarksProvider>
                            </RecentlyViewedProvider>
                          </ProductCompareProvider>
                        </SystemOfMeasurementProvider>
                      </CartProvider>
                    </UserProvider>
                  </AddressBookProvider>
                </ReactQueryClientProvider>
              </AppThemeProvider>
            </MediaContextProvider>
          </IntlProvider>
        </ClientSideMsalProvider>
      </AppErrorBoundary>
    </AppInsightsContext.Provider>
  );
}
export default MyApp;
