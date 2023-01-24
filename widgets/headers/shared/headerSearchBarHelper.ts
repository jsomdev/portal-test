import { FacetedSearchProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { FacetedSearchProduct } from '@services/portal-api/faceted-search/types';
import { ProductCardViewModel } from '@widgets/product-card-parts/productCardViewModel';

export type ProductSearchSuggestion = ProductCardViewModel;

export function mapFacetedSearchProductsToProductSuggestions(
  facetedSearchProducts: FacetedSearchProduct[],
  locale: string
): ProductSearchSuggestion[] {
  return facetedSearchProducts.map(product => {
    const facetedSearchProductFormatter: FacetedSearchProductFormatter =
      new FacetedSearchProductFormatter(product, locale);

    return {
      id: product.id,
      imageUrl: facetedSearchProductFormatter.formatImageSrc(),
      name: facetedSearchProductFormatter.formatName(),
      number: product.number || '',
      url: facetedSearchProductFormatter.formatUrl()
    };
  });
}

export function mapAutoCompleteStringsToViewModel(
  values: string[] | undefined,
  match: string | undefined,
  count: number = 5
): { htmlText: string; query: string }[] {
  if (match === undefined || values === undefined) {
    return [];
  }
  return values.slice(0, count).map(value => {
    // If the value does not include the full match. The whole value will be rendered in bold
    if (!value.toLowerCase().includes(match.toLowerCase())) {
      return {
        htmlText: `<strong>${value}</strong>`,
        query: value
      };
    }

    const matchStartIndex = value.toUpperCase().indexOf(match.toUpperCase());
    const matchEndIndex =
      value.toUpperCase().indexOf(match.toUpperCase()) + match.length;
    const textBefore: string = value.substring(0, matchStartIndex);
    const textAfter: string = value.substring(matchEndIndex);
    const textMatch: string = value.substring(matchStartIndex, matchEndIndex);

    return {
      htmlText: `<strong>${textBefore}</strong>${textMatch}<strong>${textAfter}</strong>`,
      query: value
    };
  });
}
