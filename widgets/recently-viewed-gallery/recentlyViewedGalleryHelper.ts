import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { Product } from '@services/portal-api';

import { RecentlyViewedProductGalleryItem } from './recentlyViewedGallery.types';

export function mapProductsToRecentlyViewedProductGalleryItems(
  products: Product[],
  locale: string
): RecentlyViewedProductGalleryItem[] {
  return products
    .map(product =>
      mapProductToRecentlyViewedProductGalleryItem(product, locale)
    )
    .filter(product => !!product) as RecentlyViewedProductGalleryItem[];
}

function mapProductToRecentlyViewedProductGalleryItem(
  product: Product,
  locale: string
): RecentlyViewedProductGalleryItem | undefined {
  if (!product || !product.number) {
    return undefined;
  }

  const productFormatter: ProductFormatter = new ProductFormatter(
    product,
    locale
  );

  return {
    id: product.id || undefined,
    number: product.number,
    imageUrl: productFormatter.formatImageHref(),
    name: productFormatter.formatName(),
    url: productFormatter.formatUrl() || undefined
  };
}
