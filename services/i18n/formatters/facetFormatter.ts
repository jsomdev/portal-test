import { IntlShape } from 'react-intl';

import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetOption } from '@services/facet-service/models/facet/facetOption';
import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { messageIds } from '@services/i18n/ids';
import { AttributeType } from '@services/portal-api';

import { AttributeTypeFormatter } from './entity-formatters/attributeTypeFormatter';
import { DisplayFormatter } from './entity-formatters/displayFormatter';

export class FacetFormatter {
  private facet: Partial<Facet>;
  private attributeTypeFormatter: AttributeTypeFormatter;
  constructor(
    facet: Partial<Facet>,
    attributeType: Partial<AttributeType> | undefined,
    locale: string
  ) {
    this.attributeTypeFormatter = new AttributeTypeFormatter(
      attributeType,
      locale
    );
    this.facet = facet;
  }

  public formatTitle(): string {
    return (
      this.attributeTypeFormatter.formatName() ||
      // TODO Make Facet DisplayName multilingual
      (this.facet.configuration?.displayName as string | undefined) ||
      ''
    );
  }
}

export class FacetOptionFormatter {
  private displayFormatter: DisplayFormatter;
  private facetOption: Partial<FacetOption>;
  private result: number | undefined;
  private intl: IntlShape;
  constructor(
    facetOption: Partial<FacetOption>,
    result: number | undefined,
    intl: IntlShape,
    systemOfMeasurement: SystemOfMeasurement,
    locale: string
  ) {
    this.displayFormatter = new DisplayFormatter(
      facetOption.configuration?.displays || [],
      systemOfMeasurement,
      (value: boolean) => this.formatBoolean(value, intl),
      intl.formatNumber,
      locale
    );
    this.intl = intl;
    this.result = result;
    this.facetOption = facetOption;
  }

  public formatDisplayValue(): string {
    return this.displayFormatter.format();
  }

  public formatPredictedResult(): string {
    return ` (${this.intl.formatNumber(this.result || 0)})`;
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
