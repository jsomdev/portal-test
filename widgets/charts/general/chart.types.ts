import { CSSProperties } from 'react';

import { IMessageBarStyles, IStackStyles } from '@fluentui/react';
import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { Attribute } from '@services/portal-api';

export interface ChartProps {
  height?: number | string;
  width?: number | string;
  attributes: Attribute[];
  attributeTypeCode: string;
}

export interface ChartConfiguration {
  systemOfMeasurement: SystemOfMeasurement;
  attributeTypeCode: string;
  sortedConditionTypeCodes: string[];
  xAxisLabel: string;
  yAxisLabel: string;
  lineLabel: string;
  conditionUnitSymbol: string;
  attributeUnitSymbol: string;
}

export interface ChartData {
  name: string;
  attributeValue: number;
  conditionValue: number;
}

export type ChartDataSeries = {
  name: string;
  stroke: string;
  extraConditionTypeName: string;
  extraConditionValue: number;
  data: Pick<ChartData, 'attributeValue' | 'conditionValue'>[];
};
export interface ChartStyles {
  tooltip: IStackStyles;
  tooltipWrapper: CSSProperties;
  messageBar: IMessageBarStyles;
}
