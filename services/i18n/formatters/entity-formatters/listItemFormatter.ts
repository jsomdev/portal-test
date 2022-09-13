import { IntlShape } from 'react-intl';

import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { messageIds } from '@services/i18n/ids';
import { ListItem } from '@services/portal-api';

import { DisplayFormatter } from './displayFormatter';

export class ListItemFormatter {
  private displayFormatter: DisplayFormatter;
  private listItem: Partial<ListItem> | undefined;
  constructor(
    listItem: Partial<ListItem> | undefined,
    intl: IntlShape,
    systemOfMeasurement: SystemOfMeasurement,
    locale: string
  ) {
    this.displayFormatter = new DisplayFormatter(
      listItem?.displays || [],
      systemOfMeasurement,
      value => this.formatBoolean(value, intl),
      intl.formatNumber,
      locale
    );
    this.listItem = listItem;
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
