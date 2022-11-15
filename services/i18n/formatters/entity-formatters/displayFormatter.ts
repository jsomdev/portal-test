import { Range } from '@services/facet-service/models/facet/facetResult';
import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { defaultLanguage } from '@services/i18n/helper';
import { Display, MultilingualString } from '@services/portal-api';
import { FlaggedEnum } from '@services/portal-api/flaggedEnum';
import { Variation } from '@services/portal-api/models/VariationFlags';

import { MultilingualStringFormatter } from '../multilingual-string-formatter/multilingualStringFormatter';

export enum DisplayValueType {
  Range,
  Text,
  Number,
  Multilingual,
  Url,
  Custom,
  Boolean,
  Unknown
}

export function getDisplayValueType(value: unknown): DisplayValueType {
  if (value === null || value === undefined) {
    return DisplayValueType.Unknown;
  }

  const isBoolean: boolean = typeof value === 'boolean';
  if (isBoolean) {
    return DisplayValueType.Boolean;
  }
  const isRange: boolean = !!(
    (value as Range).minimum || (value as Range).maximum
  );
  if (isRange) {
    return DisplayValueType.Range;
  }

  const isMultilingual: boolean = !!(value as MultilingualString)[
    defaultLanguage
  ];

  if (isMultilingual) {
    return DisplayValueType.Multilingual;
  }

  const isNumber: boolean = !isNaN(value as number);
  if (isNumber) {
    return DisplayValueType.Number;
  }

  const isUrl: boolean =
    typeof value === 'string' &&
    (value as string).toLowerCase().startsWith('http');
  if (isUrl) {
    return DisplayValueType.Url;
  }
  return DisplayValueType.Text;
}

export function getDisplayForSystemOfMeasurement(
  displays: Display[],
  systemOfMeasurement: SystemOfMeasurement
): Display | undefined {
  if (displays.length === 0) {
    return undefined;
  }
  const activeDisplayVariation: Variation = getVariation(systemOfMeasurement);
  const display: Display | undefined = displays.find(display => {
    const variation: Variation = FlaggedEnum.create<Variation>(
      Variation,
      display.variation || ''
    );

    return variation & activeDisplayVariation;
  });
  return display;
}

function getVariation(systemOfMeasurement: SystemOfMeasurement): Variation {
  switch (systemOfMeasurement) {
    case 'Metric':
      return Variation.Metric;
    case 'US':
      return Variation.Us;
    default:
      return Variation.Invariant;
  }
}

const DEGREES_UNIT_SYMBOL = '°';
export class DisplayFormatter {
  private multilingualStringFormatter: MultilingualStringFormatter;
  private systemOfMeasurement: SystemOfMeasurement;
  private displays: Partial<Display>[];
  private onFormatBoolean: (value: boolean) => string;
  private onFormatNumber: (value: number) => string;

  constructor(
    displays: Partial<Display>[],
    systemOfMeasurement: SystemOfMeasurement,
    onFormatBoolean: (value: boolean) => string,
    onFormatNumber: (value: number) => string,
    locale?: string
  ) {
    this.multilingualStringFormatter = new MultilingualStringFormatter(locale);
    this.systemOfMeasurement = systemOfMeasurement;
    this.displays = displays;
    this.onFormatNumber = onFormatNumber;
    this.onFormatBoolean = onFormatBoolean;
  }

  public format(includeUnitSymbol: boolean = true): string {
    const display: Display | undefined = getDisplayForSystemOfMeasurement(
      this.displays,
      this.systemOfMeasurement
    );

    if (display === undefined) {
      return '';
    }
    const type: DisplayValueType = getDisplayValueType(display.value);

    switch (type) {
      case DisplayValueType.Url:
        return this.formatUrl(display.value);
      case DisplayValueType.Text:
        return this.formatText(
          display.value,
          includeUnitSymbol ? display.unitSymbol : undefined
        );
      case DisplayValueType.Boolean:
        return this.onFormatBoolean(display.value);
      case DisplayValueType.Number:
        return this.formatNumber(
          display.value,
          includeUnitSymbol ? display.unitSymbol : undefined
        );
      case DisplayValueType.Multilingual:
        return this.formatText(
          this.multilingualStringFormatter.format(display.value),
          includeUnitSymbol ? display.unitSymbol : undefined
        );
      case DisplayValueType.Range:
        return this.formatRange(
          display.value.minimum,
          display.value.maximum,
          includeUnitSymbol ? display.unitSymbol : undefined
        );
      default:
        break;
    }

    return '';
  }

  private formatNumber(
    value: number,
    unitSymbol: string | null | undefined
  ): string {
    return `${
      isNaN(value) ? value?.toString() : this.onFormatNumber(value)
    }${formatUnitSymbol(unitSymbol)}`;
  }

  private formatText(
    value: string,
    unitSymbol: string | null | undefined
  ): string {
    const formattedValue: string = this.formatNumericValues(value);

    if (isNaN(Number(formattedValue))) {
      return `${formattedValue}${formatUnitSymbol(unitSymbol)}`;
    } else {
      return this.formatNumber(Number(value), unitSymbol);
    }
  }

  private formatNumericValues(value: string): string {
    // Characters between {} are considered numeric (by data design)
    const regexp: RegExp = new RegExp('{([^}]+)}', 'g');
    const matches = value.match(regexp);
    if (matches === null) {
      return value;
    }

    // Create a list of formattedMatches (we expect the same order and elements as the matches)
    const formattedMatches: string[] = matches.map(match => {
      const extractedValue: string = match.substring(1, match.length - 1);
      const formattedNumber: string = this.onFormatNumber(
        Number(extractedValue)
      );
      return formattedNumber;
    });

    let formattedValue: string = value;

    // Replace the matches with their formatted value
    matches.forEach((match, index) => {
      formattedValue = formattedValue.replace(match, formattedMatches[index]);
    });
    return formattedValue;
  }

  private formatUrl(value: unknown | undefined): string {
    return (value as string | undefined) || '';
  }

  private formatRange(
    minimum: number | null | undefined,
    maximum: number | null | undefined,
    unitSymbol: string | null | undefined
  ) {
    return `${this.onFormatNumber(Number(minimum))} - ${this.onFormatNumber(
      Number(maximum)
    )}${formatUnitSymbol(unitSymbol)}`;
  }
}

export function formatUnitSymbol(
  unitSymbol: string | undefined | null
): string {
  if (!unitSymbol) {
    return '';
  }
  if (unitSymbol === DEGREES_UNIT_SYMBOL) {
    return unitSymbol;
  }

  return ` ${unitSymbol}`;
}
