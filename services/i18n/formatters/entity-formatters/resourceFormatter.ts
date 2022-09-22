import { Resource } from '@services/portal-api';

import { MultilingualStringFormatter } from '../multilingual-string-formatter/multilingualStringFormatter';

export class ResourceFormatter {
  multilingualStringFormatter: MultilingualStringFormatter;
  resource: Partial<Resource> | undefined;
  constructor(resource: Partial<Resource> | undefined, locale?: string) {
    this.multilingualStringFormatter = new MultilingualStringFormatter(locale);
    this.resource = resource;
  }

  formatCaption(): string {
    return this.multilingualStringFormatter.format(this.resource?.caption);
  }
  formatSrc(): string {
    return this.resource?.url || '';
  }
}
