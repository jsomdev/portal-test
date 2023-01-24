import { UrlObject } from 'url';
import * as url from 'url';

import { supportedLocales } from '@services/i18n';
import { MultilingualStringFormatter } from '@services/i18n/formatters/multilingual-string-formatter/multilingualStringFormatter';
import { MultilingualString } from '@services/portal-api';
import { LocalePaths } from '@widgets/page/page.types';

const getPathWithLocale = (
  locale: string,
  defaultLocale: string,
  localePaths: LocalePaths
): UrlObject | undefined => {
  const path: string | undefined | UrlObject = localePaths[locale];

  if (path === undefined) {
    return {
      pathname: locale
    };
  }
  if (locale === defaultLocale) {
    if (typeof path === 'string') {
      return {
        pathname: path
      };
    }
    return path;
  }
  if (typeof path === 'string') {
    return {
      pathname: `/${locale}${path.startsWith('/') ? '' : '/'}${path}`
    };
  }

  if (!path) {
    return {
      pathname: `/${locale}`
    };
  }
  return {
    ...path,
    pathname: `/${locale}${path.pathname?.startsWith('/') ? '' : '/'}${
      path.pathname
    }`
  };
};

export type UrlType = 'relative' | 'absolute';

export const getCanonicalUrl = (
  currentLocale: string,
  defaultLocale: string,
  localePaths: LocalePaths,
  urlType: UrlType
): string => {
  const path: UrlObject | undefined = getPathWithLocale(
    currentLocale,
    defaultLocale,
    localePaths
  );
  const fullUrl = url.format(
    Object.assign(
      new URL(path?.pathname || '/', process.env.NEXT_PUBLIC_BASE_URL),
      path
    )
  );

  if (urlType === 'relative') {
    return fullUrl.replace(process.env.NEXT_PUBLIC_BASE_URL as string, '');
  }

  return fullUrl;
};

export const getAlternateLinks = (
  paths: LocalePaths,
  defaultLocale: string,
  urlType: UrlType
): { hrefLang: string; path: string }[] => {
  return (Object.keys(paths) as Array<string>)
    .filter(
      locale =>
        (supportedLocales || []).includes(locale) && locale !== 'default'
    )
    .map(locale => {
      return {
        hrefLang: locale,
        path: getCanonicalUrl(locale, defaultLocale, paths, urlType)
      };
    });
};

export const getLocalePaths = (path: string | UrlObject): LocalePaths => {
  return (
    supportedLocales?.reduce<LocalePaths>((acc, locale) => {
      acc[locale] = path;
      return acc;
    }, {}) || {}
  );
};

const getPath = (
  pathname: string,
  locale: string,
  multilingualString: MultilingualString
) => {
  const multilingualStringFormatter = new MultilingualStringFormatter(locale);
  return `${pathname}/${multilingualStringFormatter.format(
    multilingualString
  )}`;
};

export const getLocalePathsFromMultilingual = (
  routePath: string,
  multilingualString?: MultilingualString
): LocalePaths => {
  if (!multilingualString) {
    return {};
  }
  return (
    supportedLocales?.reduce<LocalePaths>((acc, locale) => {
      acc[locale] = getPath(routePath, locale, multilingualString);
      return acc;
    }, {}) || {}
  );
};
