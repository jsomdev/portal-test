import { IntlShape } from 'react-intl';

import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { AttributeFormatter } from '@services/i18n/formatters/entity-formatters/attributeFormatter';
import { AttributeTypeFormatter } from '@services/i18n/formatters/entity-formatters/attributeTypeFormatter';
import { ConditionTypeFormatter } from '@services/i18n/formatters/entity-formatters/conditionTypeFormatter';
import { getDisplayForSystemOfMeasurement } from '@services/i18n/formatters/entity-formatters/displayFormatter';

import {
  Attribute,
  AttributeType,
  ConditionType,
  Display
} from '../../../services/portal-api';
import { ChartConfiguration } from './chart.types';

// To build the configuration we can safely assume that all
// the attributes and conditions share the same ID.
export const getChartConfiguration = (
  attributes: Attribute[],
  systemOfMeasurement: SystemOfMeasurement,
  attributeTypeCode: string,
  getAttributeType: (code: string) => AttributeType | undefined,
  getConditionType: (code: string) => ConditionType | undefined,
  intl: IntlShape,
  locale: string
): ChartConfiguration | null => {
  if (
    attributes.length === 0 ||
    attributes[0].conditions === undefined ||
    attributes[0].conditions.length === 0
  ) {
    return null;
  }
  const attribute = attributes[0];
  const xAxisCondition = attributes[0].conditions[0];
  const conditionTypeCodes: Set<string> = new Set(
    new Array(
      ...(attributes
        .map(att => att.conditions?.map(condition => condition?.typeCode))
        .flat()
        .filter(condition => !!condition) as string[])
    )
  );

  const conditionTypeFormatter: ConditionTypeFormatter =
    new ConditionTypeFormatter(
      getConditionType(xAxisCondition.typeCode || ''),
      locale
    );
  const conditionUnitSymbol: string | null = getUnitSymbol(
    xAxisCondition?.displays || [],
    systemOfMeasurement
  );
  const attributeFormatter: AttributeFormatter = new AttributeFormatter(
    attribute,
    intl,
    systemOfMeasurement,
    locale
  );
  const attributeTypeFormatter: AttributeTypeFormatter =
    new AttributeTypeFormatter(
      getAttributeType(attribute.typeCode || ''),
      locale
    );
  const attributeUnitSymbol: string | null = getUnitSymbol(
    attribute.displays || [],
    systemOfMeasurement
  );
  return {
    attributeTypeCode,
    sortedConditionTypeCodes: Array.from(conditionTypeCodes),
    systemOfMeasurement: systemOfMeasurement,
    xAxisLabel: `${conditionTypeFormatter.formatName()}${
      conditionUnitSymbol ? ` (${conditionUnitSymbol})` : ''
    }`,
    yAxisLabel: `${attributeTypeFormatter.formatName()}${
      attributeUnitSymbol ? ` (${attributeUnitSymbol})` : ''
    }`,
    lineLabel: attributeFormatter.formatDisplayValue(),
    conditionUnitSymbol: conditionUnitSymbol || '',
    attributeUnitSymbol: attributeUnitSymbol || ''
  };
};

function getUnitSymbol(
  displays: Display[],
  systemOfMeasurement: SystemOfMeasurement
): string | null {
  const display: Display | undefined = getDisplayForSystemOfMeasurement(
    displays,
    systemOfMeasurement
  );

  return display?.unitSymbol || null;
}
