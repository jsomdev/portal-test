import { AttributeGroup } from '@services/portal-api';

import { MultilingualStringFormatter } from '../multilingual-string-formatter/multilingualStringFormatter';

export class AttributeGroupFormatter {
  private multilingualStringFormatter: MultilingualStringFormatter;
  private attributeGroup: Partial<AttributeGroup> | undefined;
  constructor(
    attributeGroup: Partial<AttributeGroup> | undefined,
    locale?: string
  ) {
    this.multilingualStringFormatter = new MultilingualStringFormatter(locale);
    this.attributeGroup = attributeGroup;
  }

  public formatName(): string {
    return this.multilingualStringFormatter.format(this.attributeGroup?.name);
  }
}
