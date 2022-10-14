import { FacetedSearchProduct } from '@services/portal-api/faceted-search/types';
import { Product } from '@services/portal-api/models/Product';

import { MultilingualStringFormatter } from '../multilingual-string-formatter/multilingualStringFormatter';
import { ResourceFormatter } from './resourceFormatter';

export class ProductFormatter {
  private product: Partial<Product> | undefined;
  private multilingualStringFormatter: MultilingualStringFormatter;
  constructor(product: Partial<Product> | undefined, locale?: string) {
    this.product = product;
    this.multilingualStringFormatter = new MultilingualStringFormatter(locale);
  }

  public formatImageCaption(): string {
    return this.multilingualStringFormatter.format(
      this.product?.image?.caption
    );
  }
  public formatName(): string {
    return this.multilingualStringFormatter.format(this.product?.name);
  }

  public formatUrl(): string | null {
    const slug = this.multilingualStringFormatter.format(this.product?.slug);
    if (!slug) {
      return null;
    }
    return `/products/${slug}`;
  }
}

export class FacetedSearchProductFormatter {
  private product: Partial<FacetedSearchProduct> | undefined;
  private multilingualStringFormatter: MultilingualStringFormatter;
  private productFormatter: ProductFormatter;
  private productImageFormatter: ResourceFormatter;
  constructor(
    product: Partial<FacetedSearchProduct> | undefined,
    locale?: string
  ) {
    this.product = product;
    this.productFormatter = new ProductFormatter(product, locale);
    this.multilingualStringFormatter = new MultilingualStringFormatter(locale);
    this.productImageFormatter = new ResourceFormatter(
      product?.image || undefined,
      locale
    );
  }

  public formatImageCaption(): string {
    return this.productImageFormatter.formatCaption();
  }
  public formatName(): string {
    return (
      this.multilingualStringFormatter.format(this.product?.name) ||
      this.product?.number ||
      ''
    );
  }
  public formatDescription(): string {
    return this.multilingualStringFormatter.format(this.product?.description);
  }
  public formatImageSrc(): string {
    return this.productImageFormatter.formatSrc();
  }
  public formatHref(): string {
    return `/products/${
      this.multilingualStringFormatter.format(this.product?.slug) || '404'
    }`;
  }
}
