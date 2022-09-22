import { Category } from '@services/portal-api';

import { MultilingualStringFormatter } from '../multilingual-string-formatter/multilingualStringFormatter';
import { ResourceFormatter } from './resourceFormatter';

export class CategoryFormatter {
  private multilingualStringFormatter: MultilingualStringFormatter;
  private resourceFormatter: ResourceFormatter;
  private category: Partial<Category> | undefined;
  constructor(category: Partial<Category> | undefined, locale?: string) {
    this.multilingualStringFormatter = new MultilingualStringFormatter(locale);
    this.resourceFormatter = new ResourceFormatter(
      category?.image || undefined,
      locale
    );
    this.category = category;
  }

  public formatName(): string {
    return this.multilingualStringFormatter.format(this.category?.name);
  }

  public formatDescription(): string {
    return this.multilingualStringFormatter.format(this.category?.description);
  }

  public formatSlug(): string {
    return this.multilingualStringFormatter.format(this.category?.slug);
  }

  public formatImageCaption(): string {
    return this.resourceFormatter.formatCaption();
  }

  public formatImageSrc(): string {
    return this.resourceFormatter.formatSrc();
  }
  public formatHref(): string {
    return `/categories/${this.formatSlug()}`;
  }
}
