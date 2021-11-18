import '@styles/globals.css';

import { useMemo } from 'react';

import { flatten } from 'flat';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import {
  IntlProvider,
  MessageFormatElement,
} from 'react-intl';

import { getMessages } from '@services/i18n/helper';
import { PageLayout } from '@widgets/layouts/pageLayout';
import { AppThemeProvider } from '@widgets/themes/appThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const { locale, defaultLocale = 'en' } = useRouter();
  const messages: Record<string, MessageFormatElement[]> = useMemo(() => {
    return flatten(getMessages(locale));
  }, [locale]);

  return (
    <IntlProvider locale={locale || defaultLocale} defaultLocale={defaultLocale} messages={messages}>
      <AppThemeProvider>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </AppThemeProvider>
    </IntlProvider>
  );
}
export default MyApp;
