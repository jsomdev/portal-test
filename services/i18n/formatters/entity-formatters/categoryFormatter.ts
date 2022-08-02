import { Category } from '@services/portal-api';

import { MultilingualStringFormatter } from '../multilingual-string-formatter/multilingualStringFormatter';

export class CategoryFormatter {
  multilingualStringFormatter: MultilingualStringFormatter;
  category: Partial<Category>;
  constructor(category: Partial<Category>, locale?: string) {
    this.multilingualStringFormatter = new MultilingualStringFormatter(locale);
    this.category = category;
  }

  formatName(): string {
    return this.multilingualStringFormatter.format(this.category.name);
  }

  formatDescription(): string {
    return this.multilingualStringFormatter.format(this.category.description);
  }

  formatSlug(): string {
    return this.multilingualStringFormatter.format(this.category.slug);
  }
}
