import { FacetedSearchProduct } from '@services/portal-api/faceted-search/types';
import { Product } from '@services/portal-api/models/Product';
import pagePaths from '@utilities/pagePaths';

import { MultilingualStringFormatter } from '../multilingual-string-formatter/multilingualStringFormatter';
import { ResourceFormatter } from './resourceFormatter';

export class ProductFormatter {
  private product: Partial<Product> | undefined;
  private resourceFormatter: ResourceFormatter;
  private multilingualStringFormatter: MultilingualStringFormatter;
  constructor(product: Partial<Product> | undefined, locale?: string) {
    this.product = product;
    this.resourceFormatter = new ResourceFormatter(product?.image || undefined);
    this.multilingualStringFormatter = new MultilingualStringFormatter(locale);
  }

  public formatImageCaption(): string {
    return this.resourceFormatter.formatCaption();
  }
  public formatImageHref(): string {
    return this.resourceFormatter.formatSrc();
  }
  public formatName(): string {
    return this.multilingualStringFormatter.format(this.product?.name);
  }
  public formatDescription(): string {
    return this.multilingualStringFormatter.format(this.product?.description);
  }

  public formatUrl(): string | null {
    const slug = this.multilingualStringFormatter.format(this.product?.slug);
    if (!slug) {
      return null;
    }
    return pagePaths.products(slug);
  }

  public formatTitle(): string {
    const name: string | undefined = this.formatName();

    if (!name) {
      return this.product?.number || '';
    }

    return `${name}, ${this.product?.number}`;
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
  public formatUrl(): string {
    const slug = this.multilingualStringFormatter.format(this.product?.slug);
    return pagePaths.products(slug);
  }
}
