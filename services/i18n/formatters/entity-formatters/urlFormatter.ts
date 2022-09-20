import { Url } from '@services/portal-api';

import { MultilingualStringFormatter } from '../multilingual-string-formatter/multilingualStringFormatter';

export class UrlFormatter {
  multilingualStringFormatter: MultilingualStringFormatter;
  url: Url;
  constructor(url: Url, locale?: string) {
    this.multilingualStringFormatter = new MultilingualStringFormatter(locale);
    this.url = url;
  }

  formatText(): string {
    return this.multilingualStringFormatter.format(this.url.text);
  }

  formatHref(): string | undefined {
    return this.url.value || undefined;
  }
}
