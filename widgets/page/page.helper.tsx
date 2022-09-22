import { supportedLocales } from '@services/i18n';
import { MultilingualStringFormatter } from '@services/i18n/formatters/multilingual-string-formatter/multilingualStringFormatter';
import { MultilingualString } from '@services/portal-api';
import { LocalePaths } from '@widgets/page/page.types';

export const getCanonicalUrl = (
  currentLocale: string,
  defaultLocale: string,
  paths: LocalePaths
): string => {
  if (currentLocale === defaultLocale) {
    return `${process.env.NEXT_PUBLIC_BASE_URL}/${paths[currentLocale]}`;
  }
  return `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLocale}${
    paths[currentLocale] ? '/' + paths[currentLocale] : ''
  }`;
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

export const getLocalePaths = (path: string): LocalePaths => {
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
): LocalePaths | null => {
  if (!multilingualString) {
    return null;
  }
  return (
    supportedLocales?.reduce<LocalePaths>((acc, locale) => {
      acc[locale] = getPath(routePath, locale, multilingualString);
      return acc;
    }, {}) || {}
  );
};
