import { IntlShape } from 'react-intl';

import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { messageIds } from '@services/i18n/ids';
import { Variant } from '@services/portal-api';

import { DisplayFormatter } from './displayFormatter';

export class VariantFormatter {
  private displayFormatter: DisplayFormatter;
  constructor(
    variant: Partial<Variant> | undefined,
    intl: IntlShape,
    systemOfMeasurement: SystemOfMeasurement,
    locale: string
  ) {
    this.displayFormatter = new DisplayFormatter(
      variant?.displays || [],
      systemOfMeasurement,
      value => this.formatBoolean(value, intl),
      intl.formatNumber,
      locale
    );
  }

  public formatDisplayValue(): string {
    return this.displayFormatter.format();
  }
  // TODO: Implement when api is ready
  public formatHref(): string {
    return '/to-be-implemented';
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
