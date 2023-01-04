import { UrlObject } from 'url';
import * as url from 'url';

import { supportedLocales } from '@services/i18n';
import { MultilingualStringFormatter } from '@services/i18n/formatters/multilingual-string-formatter/multilingualStringFormatter';
import { MultilingualString } from '@services/portal-api';
import { LocalePaths } from '@widgets/page/page.types';

export const getPathWithLocale = (
  locale: string,
  defaultLocale: string,
  localePaths: LocalePaths
): UrlObject => {
  console.log('WARD0', localePaths, locale);
  const path = localePaths[locale];
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

export const getCanonicalUrl = (
  currentLocale: string,
  defaultLocale: string,
  localePaths: LocalePaths
): string => {
  const path = getPathWithLocale(currentLocale, defaultLocale, localePaths);
  return url.format(
    Object.assign(
      new URL(path.pathname || '/', process.env.NEXT_PUBLIC_BASE_URL),
      path
    )
  );
};

export const getAlternateLinks = (
  paths: LocalePaths,
  defaultLocale: string
): { hrefLang: string; path: string }[] => {
  return (Object.keys(paths) as Array<string>)
    .filter(locale => (supportedLocales || []).includes(locale))
    .map(locale => {
      return {
        hrefLang: locale,
        path: getCanonicalUrl(locale, defaultLocale, paths)
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
