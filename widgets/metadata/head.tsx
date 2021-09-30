import NextHead from 'next/head';
import { supportedLocales } from '../../services/i18n/helper';

export interface IHeadProps {
  title: string;
  pathname: string;
  description: string;
  icon?: {
    href: string;
  };
}

/**
 * Function that renders alternate links for SEO purposes.
 * These should be added to the <Head>.
 * @param pathname name of the path that the links are generated for (e.g. /docs/i18n)
 * @returns an Array of alternate <link> components
 */
function renderAlternateLinks(pathname: string) {
  return (supportedLocales || []).map((locale) => (
    <link
      key={locale}
      rel="alternate"
      hrefLang={locale}
      href={`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}${pathname}`}
    />
  ));
}
export const Head: React.FC<IHeadProps> = (props) => {
  const { title, pathname, description, icon = { href: '/favicon.ico' } } = props;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="icon" href={icon.href} />
      {renderAlternateLinks(pathname || '')}
    </NextHead>
  );
};
