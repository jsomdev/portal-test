export type LocalePaths = {
  [Property: string]: string;
};

export type PageProps = {
  title: string;
  description: string;
  noIndex?: boolean;
  localePaths: LocalePaths | null;
};
