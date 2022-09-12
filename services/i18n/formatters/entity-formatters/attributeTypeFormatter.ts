import { AttributeType } from '@services/portal-api';

import { MultilingualStringFormatter } from '../multilingual-string-formatter/multilingualStringFormatter';

export class AttributeTypeFormatter {
  private multilingualStringFormatter: MultilingualStringFormatter;
  private attributeType: Partial<AttributeType> | undefined;
  constructor(
    attributeType: Partial<AttributeType> | undefined,
    locale?: string
  ) {
    this.multilingualStringFormatter = new MultilingualStringFormatter(locale);
    this.attributeType = attributeType;
  }

  public formatName(): string {
    return this.multilingualStringFormatter.format(this.attributeType?.name);
  }
  public formatDescription(): string {
    return this.multilingualStringFormatter.format(
      this.attributeType?.description
    );
  }
}
