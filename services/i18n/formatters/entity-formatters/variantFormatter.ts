import { IntlShape } from 'react-intl';

import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { messageIds } from '@services/i18n/ids';
import { Variant } from '@services/portal-api';
import pagePaths from '@utilities/pagePaths';

import { MultilingualStringFormatter } from '../multilingual-string-formatter/multilingualStringFormatter';
import { DisplayFormatter } from './displayFormatter';

export class VariantFormatter {
  private displayFormatter: DisplayFormatter;
  private multilingualStringFormatter: MultilingualStringFormatter;
  private variant: Partial<Variant> | undefined;
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
    this.multilingualStringFormatter = new MultilingualStringFormatter(locale);
    this.variant = variant;
  }

  public formatDisplayValue(): string {
    return this.displayFormatter.format();
  }

  public formatHref(): string {
    return pagePaths.products(
      this.multilingualStringFormatter.format(this.variant?.productSlug)
    );
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
