import { formatUnitSymbol } from '@services/i18n/formatters/entity-formatters/displayFormatter';

import { ChartConfiguration } from '../general/chart.types';

export function formatTooltip(
  attributeValue: string | undefined,
  conditionValue: string | undefined,
  configuration: ChartConfiguration | null
): string {
  return `${
    attributeValue !== undefined ? attributeValue : ''
  }${formatUnitSymbol(configuration?.attributeUnitSymbol)} @ ${
    conditionValue !== undefined ? conditionValue : ''
  }${formatUnitSymbol(configuration?.conditionUnitSymbol)}`;
}
