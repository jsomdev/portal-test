import { UrlFormatter } from '@services/i18n/formatters/entity-formatters/urlFormatter';

import { MultilingualStringFormatter } from '../multilingual-string-formatter/multilingualStringFormatter';
import { MenuItem } from './../../../portal-api/models/MenuItem';

export class MenuItemFormatter {
  urlFormatter: UrlFormatter | undefined;
  multilingualStringFormatter: MultilingualStringFormatter;
  menuItem: MenuItem;
  // You can also add the intl as a constructor prop to translate /categories in the href formatter method
  constructor(menuItem: MenuItem, locale?: string) {
    this.urlFormatter = menuItem.url
      ? new UrlFormatter(menuItem.url, locale)
      : undefined;
    this.menuItem = menuItem;
    this.multilingualStringFormatter = new MultilingualStringFormatter(locale);
  }

  private formatSlug(): string {
    return this.multilingualStringFormatter?.format(this.menuItem?.slug);
  }

  formatText(): string {
    if (this.urlFormatter === undefined) {
      console.warn(
        `Formatting text of missing url data with ID: ${this.menuItem.id}`
      );
    }
    return this.urlFormatter?.formatText() || '';
  }

  formatHref(): string {
    const slug: string = this.formatSlug();
    if (!slug) {
      return this.urlFormatter?.formatHref() || '404';
    }
    return `/categories/${this.formatSlug()}`;
  }
}
