import NextHead from 'next/head';

import { getHeadAlternateLinks } from './head.helper';

export interface IHeadProps {
  title: string;
  pathname: string;
  description: string;
  icon?: {
    href: string;
  };
}

/**
 * Wrapper Component for the NextHead component.
 * Adds metadata and SEO specific information to the 'head' of the html page.
 */
export const Head: React.FC<IHeadProps> = (props) => {
  const { title, pathname, description, icon = { href: '/favicon.ico' } } = props;

  return (
    <NextHead>
      <title>{title}</title>
      <meta httpEquiv="Accept-CH" content="Viewport-Width, Width, Downlink" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="icon" href={icon.href} />
      {getHeadAlternateLinks(pathname || '')}
    </NextHead>
  );
};
