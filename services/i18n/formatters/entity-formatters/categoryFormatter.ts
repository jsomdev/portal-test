import { Category } from '@services/portal-api';

import { MultilingualStringFormatter } from '../multilingual-string-formatter/multilingualStringFormatter';

export class CategoryFormatter {
  private multilingualStringFormatter: MultilingualStringFormatter;
  private category: Partial<Category> | undefined;
  constructor(category: Partial<Category> | undefined, locale?: string) {
    this.multilingualStringFormatter = new MultilingualStringFormatter(locale);
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
}
