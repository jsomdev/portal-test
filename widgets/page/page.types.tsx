export type LocalePaths = {
  [Property: string]: string;
};

export type PageProps = {
  /**
   * The page title, used in the <title> tag.  The site name is appended to the title.
   */
  title: string;
  /**
   * The page description, used in the <meta name="description"> tag.
   */
  description: string;
  /**
   * Set to true if you want to prevent search engines from indexing the page
   */
  noIndex?: boolean;
  /**
   * Pass in paths for all supported locales. Used for switching between locales & SEO.
   * So always pass in the paths, even when the page is not indexed.
   */
  localePaths: LocalePaths | undefined;
};
