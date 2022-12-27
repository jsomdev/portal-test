export type LocalePaths = {
  [Property: string]: string;
};

export type PageMetaProps = {
  title: string;
  description?: string;
  keywords?: string;
  image?: string | null;
  imageAlt?: string;
  noIndex?: boolean;
};

export enum DefaultMetaTags {
  Description = 'description',
  Title = 'title',
  Image = 'image',
  Keywords = 'keywords'
}

export enum TwitterMetaTags {
  Title = 'twitter:title',
  Description = 'twitter:description',
  Image = 'twitter:image',
  Card = 'twitter:card'
}

export enum OpenGraphMetaTags {
  Title = 'og:title',
  Description = 'og:description',
  Image = 'og:image',
  ImageAlt = 'og:image:alt',
  Url = 'og:url',
  Type = 'og:type'
}

export type PageI18nProps = {
  /**
   * Pass in paths for all supported locales. Used for switching between locales & SEO.
   * So always pass in the paths, even when the page is not indexed.
   */
  localePaths?: LocalePaths;
  /**
   * Pass structured data for search engine optimization
   */
  structuredData?: unknown;
};

export type PageProps = {
  metaProps: PageMetaProps;
  i18nProps: PageI18nProps;
};
