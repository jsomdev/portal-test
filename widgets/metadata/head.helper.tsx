import { supportedLocales } from '@services/i18n';

/**
 * Function that renders alternate links for SEO purposes.
 * These should be added to the <Head>.
 * @param pathname name of the path that the links are generated for (e.g. /docs/i18n)
 * @returns an Array of alternate <link> components
 */
export function getHeadAlternateLinks(pathname: string) {
  return (supportedLocales || []).map((locale) => (
    <link
      key={locale}
      rel="alternate"
      hrefLang={locale}
      href={`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}${pathname}`}
    />
  ));
}
