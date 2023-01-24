export interface QuickFilterItem {
  query: Record<string, string | string[] | undefined>;
  isActive?: boolean;
  shallowNavigation?: boolean;
  facetAttributeTypeCode: string;
  text: string;
  image: {
    src: string;
    alt: string;
  } | null;
}
