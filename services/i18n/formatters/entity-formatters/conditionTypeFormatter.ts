import { ConditionType } from '@services/portal-api';

import { MultilingualStringFormatter } from '../multilingual-string-formatter/multilingualStringFormatter';

export class ConditionTypeFormatter {
  private multilingualStringFormatter: MultilingualStringFormatter;
  private conditionType: Partial<ConditionType> | undefined;
  constructor(
    conditionType: Partial<ConditionType> | undefined,
    locale?: string
  ) {
    this.multilingualStringFormatter = new MultilingualStringFormatter(locale);
    this.conditionType = conditionType;
  }

  public formatName(): string {
    return this.multilingualStringFormatter.format(this.conditionType?.name);
  }
}
