import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { Product } from '@services/portal-api';

interface ProductStructuredData {
  '@type': 'Product';
  '@context': 'https://schema.org/';
  name: string;
  sku: string;
  image: string;
  description: string;
}

export function generateProductStructuredData(
  product: Product,
  locale?: string
): ProductStructuredData {
  const productFormatter = new ProductFormatter(product, locale);
  const data: ProductStructuredData = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: productFormatter.formatName(),
    description: productFormatter.formatDescription(),
    image: productFormatter.formatImageHref(),
    sku: product.number || ''
  };
  return data;
}
