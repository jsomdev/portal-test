import { IntlShape } from 'react-intl';

import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { messageIds } from '@services/i18n/ids';
import { Attribute } from '@services/portal-api';

import { ConditionFormatter } from './conditionFormatter';
import { DisplayFormatter } from './displayFormatter';

export class AttributeFormatter {
  private displayFormatter: DisplayFormatter;
  private attribute: Partial<Attribute> | undefined;
  private systemOfMeasurement: SystemOfMeasurement;
  private intl: IntlShape;
  private locale: string | undefined;
  constructor(
    attribute: Partial<Attribute> | undefined,
    intl: IntlShape,
    systemOfMeasurement: SystemOfMeasurement,
    locale?: string
  ) {
    this.displayFormatter = new DisplayFormatter(
      attribute?.displays || [],
      systemOfMeasurement,
      value => this.formatBoolean(value, intl),
      intl.formatNumber,
      locale
    );
    this.intl = intl;
    this.locale = locale;
    this.systemOfMeasurement = systemOfMeasurement;
    this.attribute = attribute;
  }

  public formatDisplayValue(includeUnitSymbol: boolean = true): string {
    return this.displayFormatter.format(includeUnitSymbol);
  }

  public formatDisplayValueWithConditions(
    systemOfMeasurement: SystemOfMeasurement
  ): string {
    let attributeDisplayValue: string = this.formatDisplayValue();

    if (this.systemOfMeasurement !== systemOfMeasurement) {
      const oppositeDisplayFormatter: DisplayFormatter = new DisplayFormatter(
        this.attribute?.displays || [],
        systemOfMeasurement,
        value => this.formatBoolean(value, this.intl),
        this.intl.formatNumber,
        this.locale
      );
      attributeDisplayValue = oppositeDisplayFormatter.format();
    }
    const conditionsDisplayValue: string =
      this.attribute && this.attribute.conditions?.length
        ? ` @ ${this.attribute.conditions
            .map(condition => {
              const conditionFormatter: ConditionFormatter =
                new ConditionFormatter(
                  condition,
                  this.intl,
                  systemOfMeasurement,
                  this.locale
                );
              return conditionFormatter.formatDisplayValue();
            })
            .join(' & ')}`
        : '';
    return `${attributeDisplayValue}${conditionsDisplayValue}`;
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
