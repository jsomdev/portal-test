/* TODO refactor https://dev.azure.com/itssco/SSCo/_workitems/edit/14868   */
import { Range } from '@services/facet-service/models/facet/facetResult';
import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { defaultLanguage } from '@services/i18n';
import { DisplayValueType } from '@services/i18n/formatters/entity-formatters/displayFormatter';
import {
  Attribute,
  Condition,
  Display,
  MultilingualString,
  Resource
} from '@services/portal-api';
import { FlaggedEnum } from '@services/portal-api/flaggedEnum';
import { Variation } from '@services/portal-api/models/VariationFlags';
import { formatUnitSymbolSuffix } from '@utilities/formatText';
import { getSystemOfMeasurementVariation } from '@utilities/variations';

export function filterResourcesBySystemOfMeasurement(
  resources: Resource[],
  systemOfMeasurement: SystemOfMeasurement
): Resource[] {
  return resources.filter(resource => {
    const resourceVariation: Variation = FlaggedEnum.create<Variation>(
      Variation,
      resource.variation || ''
    );
    return (
      resourceVariation & getSystemOfMeasurementVariation(systemOfMeasurement)
    );
  });
}

export function getAttributeNameWithUnitText(
  attribute: Attribute | undefined | null,
  systemOfMeasurement: SystemOfMeasurement
): string {
  const display = getDisplayForSystemOfMeasurement(
    attribute?.displays,
    systemOfMeasurement
  );
  return `${attribute?.typeCode} (${display?.unitSymbol})`;
}

export function getConditionNameWithUnitText(
  condition: Condition | undefined | null,
  systemOfMeasurement: SystemOfMeasurement
): string {
  const display = getDisplayForSystemOfMeasurement(
    condition?.displays,
    systemOfMeasurement
  );

  return `${condition?.typeCode} (${display?.unitSymbol})`;
}
export function getConditionValueWithUnitText(
  condition: Condition | undefined | null,
  systemOfMeasurement: SystemOfMeasurement
): string {
  const display = getDisplayForSystemOfMeasurement(
    condition?.displays,
    systemOfMeasurement
  );
  return `${display?.value?.toString()}${formatUnitSymbolSuffix(
    display?.unitSymbol
  )}`;
}

export function getDisplayTextForRangeType(
  display: Display | undefined
): string {
  if (!!display?.value?.minimum && !!display?.value?.maximum) {
    /*TODO  return `${intl.formatNumber(display.value.minimum)} - ${intl.formatNumber(
      display.value.maximum
    )}${formatUnitSymbolSuffix(display.unitSymbol)}`; */
    return `${display.value.minimum} - ${
      display.value.maximum
    }${formatUnitSymbolSuffix(display.unitSymbol)}`;
  } else {
    /*TODO return `${intl.formatNumber(display?.value?.minimum)} - ${intl.formatNumber(
       display?.value?.maximum
     )}${formatUnitSymbolSuffix(display?.unitSymbol)}`; */
    return `${display?.value?.minimum} - ${
      display?.value?.maximum
    }${formatUnitSymbolSuffix(display?.unitSymbol)}`;
  }
}

export function getDisplayTextForNumberType(
  display: Display | undefined
): string {
  return `${
    isNaN(display?.value)
      ? display?.value
      : /*TODO intl.formatNumber(display?.value) */ display?.value
  }${formatUnitSymbolSuffix(display?.unitSymbol)}`;
}

/**
 * Function that returns the ProductSpecificationsItemType based on
 * characteristics of the value of an attribute
 * @param value value of the attribute
 */
export function getDisplayValueType(value: unknown): DisplayValueType {
  // TODO remove duplicate code by creating a product formatter using DisplayFormatter
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

export function getDisplayText(
  displays: (Display | null)[],
  systemOfMeasurement: SystemOfMeasurement
): string {
  const display: Display | undefined = getDisplayForSystemOfMeasurement(
    displays,
    systemOfMeasurement
  );
  const type: DisplayValueType = getDisplayValueType(display?.value);
  switch (type) {
    case DisplayValueType.Url:
      return display?.value?.toString() || '';
    case DisplayValueType.Boolean:
      return display?.value ? 'Yes' : 'No';
    //CASE FOR NUMBERS
    case DisplayValueType.Number:
      return getDisplayTextForNumberType(display);
    //CASE FOR TEXT
    case DisplayValueType.Text: {
      const formattedTextValue: string = findAndReplaceFormattedNumbers(
        display?.value
      );
      if (isNaN(Number(formattedTextValue))) {
        return `${formattedTextValue}${formatUnitSymbolSuffix(
          display?.unitSymbol
        )}`;
      } else {
        /*TODO return `${intl.formatNumber(
          Number(formattedTextValue)
        )}${formatUnitSymbolSuffix(display?.unitSymbol)}`; */
        return `${Number(formattedTextValue)}${formatUnitSymbolSuffix(
          display?.unitSymbol
        )}`;
      }
    }
    //CASE FOR MULTILINGUAL
    case DisplayValueType.Multilingual: {
      const formattedMultilingualValue: string = findAndReplaceFormattedNumbers(
        display?.value
      );
      return `${formattedMultilingualValue}${formatUnitSymbolSuffix(
        display?.unitSymbol
      )}`;
    }
    //CASE FOR RANGE
    case DisplayValueType.Range:
      return getDisplayTextForRangeType(display).trim();
    case DisplayValueType.Unknown:
      return '-';
    default:
      return JSON.stringify(display?.value);
  }
}

export function findAndReplaceFormattedNumbers(
  value: string | MultilingualString | undefined
): string {
  let textValue: string = '';
  if (typeof value === 'string') {
    textValue = value;
  }
  if ((value as MultilingualString)?.[defaultLanguage]) {
    textValue = (value as MultilingualString)?.[defaultLanguage];
  }
  const regexp: RegExp = new RegExp('{([^}]+)}', 'g');
  const matches = textValue.match(regexp);
  if (matches === null) {
    return textValue;
  }
  const formattedMatches: string[] = matches.map(match => {
    const value: string = match.substring(1, match.length - 1);
    const formattedNumber: string =
      value; /*TODO intl.formatNumber(Number(value))*/
    return formattedNumber;
  });
  let formattedValue: string = textValue;

  matches.forEach((match, index) => {
    formattedValue = formattedValue.replace(match, formattedMatches[index]);
  });
  return formattedValue;
}
/**
 * Function that will, based on the type of the attribute's value,
 * format and return that value as a string.
 * @param attribute attribute of a product
 * @param systemOfMeasurement
 */
export function getAttributeText(
  attribute: Attribute,
  systemOfMeasurement: SystemOfMeasurement
): string {
  return getDisplayText(attribute.displays || [], systemOfMeasurement);
}

export function getAttributeTextWithConditions(
  attribute: Attribute,
  systemOfMeasurement: SystemOfMeasurement
): string {
  return `${getAttributeText(attribute, systemOfMeasurement)}${
    attribute.conditions?.length
      ? ` @ ${attribute.conditions
          ?.map(condition =>
            getConditionValueWithUnitText(condition, systemOfMeasurement)
          )
          .join(' & ')}`
      : ''
  }`;
}

export function getDisplayForSystemOfMeasurement(
  displays: Array<Display | null> | undefined,
  systemOfMeasurement?: SystemOfMeasurement
): Display | undefined {
  if (!displays?.length) {
    return undefined;
  }

  const activeVariation = getSystemOfMeasurementVariation(systemOfMeasurement);

  const display: Display | null | undefined = displays
    .filter(display => !!display)
    .find(display => {
      const variation: Variation = FlaggedEnum.create<Variation>(
        Variation,
        display?.variation || ''
      );
      if (variation & activeVariation) {
        return true;
      }
      return false;
    });

  return display || undefined;
}
