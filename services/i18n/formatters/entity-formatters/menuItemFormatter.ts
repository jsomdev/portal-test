import { UrlFormatter } from '@services/i18n/formatters/entity-formatters/urlFormatter';
import { MenuItem } from './../../../portal-api/models/MenuItem';

export class MenuItemFormatter {
  urlFormatter: UrlFormatter | undefined;
  menuItem: MenuItem;
  constructor(menuItem: MenuItem, locale?: string) {
    this.urlFormatter = menuItem.url
      ? new UrlFormatter(menuItem.url, locale)
      : undefined;
    this.menuItem = menuItem;
  }

  formatText(): string {
    if (this.urlFormatter === undefined) {
      console.warn('Formatting text of missing url data');
    }
    return this.urlFormatter?.formatText() || '';
  }

  formatHref(): string | undefined {
    return this.urlFormatter?.formatHref();
  }
}
