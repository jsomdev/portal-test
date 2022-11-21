export interface QuickFilterItem {
  query: Record<string, string | string[] | undefined>;
  isActive?: boolean;
  shallowNavigation?: boolean;
  text: string;
  image: {
    src: string;
    alt: string;
  } | null;
}
