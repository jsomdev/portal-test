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
      url: facetedSearchProductFormatter.formatHref()
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
    const textBefore: string = value.substring(0, value.indexOf(match));
    const textAfter: string = value.substring(
      value.indexOf(match) + match.length
    );
    return {
      htmlText: `<strong>${textBefore}</strong>${match}<strong>${textAfter}</strong>`,
      query: value
    };
  });
}
