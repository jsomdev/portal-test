import { Model } from '@services/portal-api';
import pagePaths from '@utilities/pagePaths';

import { MultilingualStringFormatter } from '../multilingual-string-formatter/multilingualStringFormatter';
import { ResourceFormatter } from './resourceFormatter';

export class ModelFormatter {
  private model: Partial<Model> | null | undefined;
  private resourceFormatter: ResourceFormatter;
  private multilingualStringFormatter: MultilingualStringFormatter;
  constructor(model: Partial<Model> | null | undefined, locale?: string) {
    this.model = model;
    this.resourceFormatter = new ResourceFormatter(model?.image || undefined);
    this.multilingualStringFormatter = new MultilingualStringFormatter(locale);
  }

  public formatImageCaption(): string {
    return this.resourceFormatter.formatCaption();
  }
  public formatImageHref(): string {
    return this.resourceFormatter.formatSrc();
  }
  public formatName(): string {
    return this.multilingualStringFormatter.format(this.model?.name);
  }
  public formatDescription(): string {
    return this.multilingualStringFormatter.format(this.model?.description);
  }

  public formatUrl(): string | null {
    const slug = this.multilingualStringFormatter.format(this.model?.slug);
    if (!slug) {
      return null;
    }
    return pagePaths.models(slug);
  }

  public formatTitle(): string {
    const name: string | undefined = this.formatName();

    if (!name) {
      return this.model?.number || '';
    }

    return `${name}, ${this.model?.number}`;
  }
}
