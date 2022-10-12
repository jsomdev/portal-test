import { Product } from '@services/portal-api/models/Product';

import { MultilingualStringFormatter } from '../multilingual-string-formatter/multilingualStringFormatter';

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
