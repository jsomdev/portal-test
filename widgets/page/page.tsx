import React from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import NextHead from 'next/head';
import { defineMessages, useIntl } from 'react-intl';

import { messageIds } from '@services/i18n';
import { getAlternateLinks, getCanonicalUrl } from '@widgets/page/page.helper';
import { PageProps } from '@widgets/page/page.types';

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

const Page: NextPage<PageProps> = ({
  title,
  description,
  localePaths,
  noIndex = false,
  children
}) => {
  const router = useRouter();
  const { formatMessage } = useIntl();

  const { defaultLocale } = router;
  title = title || formatMessage(messages.pageLoading);

  const alternateLinks =
    localePaths && defaultLocale
      ? getAlternateLinks(localePaths, defaultLocale)
      : undefined;

  const canonicalUrl =
    localePaths && defaultLocale && router.locale
      ? getCanonicalUrl(router.locale, defaultLocale, localePaths)
      : undefined;

  return (
    <React.Fragment>
      <NextHead>
        <title>
          {formatMessage(messages.headTitle, {
            title: title
          })}
        </title>
        <meta name="description" content={description} />
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
    </React.Fragment>
  );
};
export default Page;
