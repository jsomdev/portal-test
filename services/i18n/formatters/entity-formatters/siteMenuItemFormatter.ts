import { UrlFormatter } from '@services/i18n/formatters/entity-formatters/urlFormatter';
import { Url } from '@services/portal-api';

export class SiteHeaderMenuUrlFormatter {
  urlFormatter: UrlFormatter;
  url: Url;
  constructor(url: Url, locale?: string) {
    this.urlFormatter = new UrlFormatter(url, locale);
    this.url = url;
  }

  formatText(): string {
    return this.urlFormatter.formatText();
  }

  formatHref(): string | undefined {
    return this.urlFormatter.formatHref();
  }
}
