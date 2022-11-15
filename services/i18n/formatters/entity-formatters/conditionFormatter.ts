import { IntlShape } from 'react-intl';

import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { messageIds } from '@services/i18n/ids';
import { Condition } from '@services/portal-api';

import { DisplayFormatter } from './displayFormatter';

export class ConditionFormatter {
  private displayFormatter: DisplayFormatter;
  private condition: Partial<Condition> | undefined;

  constructor(
    condition: Partial<Condition> | undefined,
    intl: IntlShape,
    systemOfMeasurement: SystemOfMeasurement,
    locale?: string
  ) {
    this.displayFormatter = new DisplayFormatter(
      condition?.displays || [],
      systemOfMeasurement,
      value => this.formatBoolean(value, intl),
      intl.formatNumber,
      locale
    );

    this.condition = condition;
  }

  public formatDisplayValue(): string {
    return this.displayFormatter.format();
  }

  private formatBoolean(value: boolean, intl: IntlShape): string {
    const id: string = value
      ? messageIds.data.boolean.true
      : messageIds.data.boolean.false;
    return intl.formatMessage({
      id,
      defaultMessage: value ? 'Yes' : 'No',
      description: 'Boolean text for a facet option'
    });
  }
}
