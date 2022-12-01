import React, { useCallback, useState } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import NextHead from 'next/head';
import { defineMessages, useIntl } from 'react-intl';

import { messageIds } from '@services/i18n';
import { getAlternateLinks, getCanonicalUrl } from '@widgets/page/page.helper';
import {
  DefaultMetaTags,
  OpenGraphMetaTags,
  PageProps,
  TwitterMetaTags
} from '@widgets/page/page.types';

import { PageContext } from './pageContext';

const messages = defineMessages({
  headTitle: {
    id: messageIds.pages.default.headTitle
  },
  pageLoading: {
    id: messageIds.loading.default,
    description: 'Page is loading',
    defaultMessage: 'Loading...'
  }
});

const Page: NextPage<PageProps> = ({ metaProps, i18nProps, children }) => {
  const router = useRouter();
  const { formatMessage } = useIntl();
  const [showPageOverlay, setShowPageOverlay] = useState<boolean>(false);
  const togglePageOverlay = useCallback((on: boolean) => {
    setShowPageOverlay(on);
  }, []);

  const { defaultLocale } = router;
  const { description, keywords, image, imageAlt, noIndex } = metaProps;
  const title = metaProps.title
    ? formatMessage(messages.headTitle, {
        title: metaProps.title
      })
    : formatMessage(messages.pageLoading);

  const alternateLinks =
    i18nProps.localePaths && defaultLocale
      ? getAlternateLinks(i18nProps.localePaths, defaultLocale)
      : undefined;

  const canonicalUrl =
    i18nProps.localePaths && defaultLocale && router.locale
      ? getCanonicalUrl(router.locale, defaultLocale, i18nProps.localePaths)
      : undefined;

  return (
    <PageContext.Provider
      value={{
        showPageOverlay,
        togglePageOverlay: togglePageOverlay,
        localePaths: i18nProps.localePaths || {}
      }}
    >
      <NextHead>
        <title>{title}</title>
        <meta name={TwitterMetaTags.Title} content={title} />
        <meta property={OpenGraphMetaTags.Title} content={title} />
        {description && (
          <meta name={DefaultMetaTags.Description} content={description} />
        )}
        {description && (
          <meta
            property={OpenGraphMetaTags.Description}
            content={description}
          />
        )}
        {description && (
          <meta name={TwitterMetaTags.Description} content={description} />
        )}
        {keywords && (
          <meta name={DefaultMetaTags.Keywords} content={keywords} />
        )}
        {image && <meta property={OpenGraphMetaTags.Image} content={image} />}
        {imageAlt && (
          <meta property={OpenGraphMetaTags.ImageAlt} content={imageAlt} />
        )}
        {image && <meta name={TwitterMetaTags.Image} content={image} />}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        {alternateLinks &&
          alternateLinks.map(link => (
            <link
              key={link.hrefLang}
              rel="alternate"
              hrefLang={link.hrefLang}
              href={link.path}
            />
          ))}
        {noIndex && <meta name="robots" content="noindex" />}
      </NextHead>
      {children}
    </PageContext.Provider>
  );
};
export default Page;
