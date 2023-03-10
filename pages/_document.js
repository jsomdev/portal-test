/* eslint-disable no-redeclare */
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { Stylesheet, resetIds } from '@fluentui/react';
import { mediaStyles } from '@widgets/media-queries/media';

// Fluent UI React (Fabric) 7 or earlier
// import { Stylesheet, resetIds } from 'office-ui-fabric-react';

const stylesheet = Stylesheet.getInstance();

// Now set up the document, and just reset the stylesheet.
export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static getInitialProps = ({ renderPage }) => {
    resetIds(1);

    // eslint-disable-next-line react/display-name
    const page = renderPage(App => props => <App {...props} />);

    return {
      ...page,
      styleTags: stylesheet.getRules(true),
      serializedStylesheet: stylesheet.serialize()
    };
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    return (
      <Html
        lang={locale === 'default' || locale === undefined ? 'en-us' : locale}
      >
        <Head>
          <meta charSet="UTF-8" />
          {/*
            The single-page react application registered a /service-work.js, that should be unregistered once we release(d) the nextjs version of the site.
            After a while in production, this script could be removed
           */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              if(window.localStorage && navigator.serviceWorker){
                if(window.localStorage.getItem('cleared-old-serviceworker') !== 'true'){
                  window.localStorage.setItem('cleared-old-serviceworker', 'true');
                  navigator.serviceWorker.register('service-worker.js').then(function(r){r.unregister()});
                }
              }`
            }}
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon192.png" />
          <style
            type="text/css"
            dangerouslySetInnerHTML={{ __html: mediaStyles }}
          />
          <style
            type="text/css"
            dangerouslySetInnerHTML={{ __html: this.props.styleTags }}
          />

          <link rel="preconnect" href="https://p.typekit.net" />
          <link
            rel="preload"
            as="style"
            href="https://p.typekit.net/p.css?s=1&k=ioc1xxh&ht=tk&f=139.140.171.172.173.174.175.176.25136.25137.28439.28441.28443.28447.28448.28449&a=14452214&app=typekit&e=css"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://p.typekit.net/p.css?s=1&k=ioc1xxh&ht=tk&f=139.140.171.172.173.174.175.176.25136.25137.28439.28441.28443.28447.28448.28449&a=14452214&app=typekit&e=css"
            />
          </noscript>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            window.FabricConfig = window.FabricConfig || {};
            window.FabricConfig.serializedStylesheet = ${this.props.serializedStylesheet};
`
            }}
          />
        </Head>
        <body className="list-scroll">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
