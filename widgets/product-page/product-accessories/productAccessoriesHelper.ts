import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { Product, ProductAccessory } from '@services/portal-api';

import { ProductAccessoryGalleryItem } from './productAccessories.types';

export function mapProductAccessoriesToProductAccessoriesGalleryItems(
  accessories: ProductAccessory[],
  locale: string
): ProductAccessoryGalleryItem[] {
  return accessories
    .map(accessory =>
      mapProductAccessoryToProductAccessoryGalleryItem(accessory, locale)
    )
    .filter(accessory => !!accessory) as ProductAccessoryGalleryItem[];
}

function mapProductAccessoryToProductAccessoryGalleryItem(
  accessory: ProductAccessory,
  locale: string
): ProductAccessoryGalleryItem | undefined {
  const product: Product | null | undefined = accessory.accessory;

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
