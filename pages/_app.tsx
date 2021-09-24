import { flatten } from "flat";
import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import { IntlProvider, MessageFormatElement } from "react-intl";
import { getMessages } from "../services/i18n/helper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale, defaultLocale = "en" } = useRouter();
  const messages: Record<string, MessageFormatElement[]> = flatten(
    getMessages(locale)
  );

  return (
    <IntlProvider
      locale={locale || defaultLocale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}
export default MyApp;
