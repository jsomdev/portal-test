import React, { CSSProperties, useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

import {
  IMessageBarStyles,
  MessageBar,
  MessageBarType,
  Stack,
  useTheme
} from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { useSystemOfMeasurement } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { messageIds } from '@services/i18n';
import { filterProductPerformanceChartAttributes } from '@widgets/product-page/product-performance/productPerformanceHelper';

import {
  ChartConfiguration,
  ChartDataSeries,
  ChartProps
} from '../general/chart.types';
import { getChartConfiguration } from '../general/configuration';
import { mapFlowRateAttributesWithMultipleConditionsToChartDataList as mapAttributesWithMultipleConditionsToChartDataSeries } from '../general/mapper';

const messages = defineMessages({
  noData: {
    id: messageIds.pages.product.sections.performance.noData,
    defaultMessage: 'No chart data available.',
    description: 'Text to display when no data is available'
  }
});

interface MultiConditionsPerformanceChartStyles {
  messageBar: IMessageBarStyles;
  tooltipWrapper: CSSProperties;
}
export const MultiConditionsPerformanceChart: React.FC<ChartProps> = ({
  height = 400,
  width = '100%',
  attributes,
  attributeTypeCode
}) => {
  const { getAttributeType, getConditionType } = useGlobalData();

  const { palette } = useTheme();
  const { systemOfMeasurement } = useSystemOfMeasurement();
  const intl = useIntl();
  const { locale, formatMessage } = intl;

  const configuration = useMemo((): ChartConfiguration | null => {
    const filteredAttributes = filterProductPerformanceChartAttributes(
      attributeTypeCode,
      attributes
    );
    return getChartConfiguration(
      filteredAttributes,
      systemOfMeasurement,
      attributeTypeCode,
      getAttributeType,
      getConditionType,
      intl,
      locale
    );
  }, [
    attributeTypeCode,
    attributes,
    getAttributeType,
    getConditionType,
    intl,
    locale,
    systemOfMeasurement
  ]);

  const styles: MultiConditionsPerformanceChartStyles = {
    tooltipWrapper: {
      outline: 'none'
    },
    messageBar: {
      root: {
        marginTop: '15px'
      }
    }
  };

  const series: ChartDataSeries[] = useMemo(() => {
    if (configuration) {
      const filteredAttributes = attributes.filter(
        attribute => attribute.typeCode === attributeTypeCode
      );
      return mapAttributesWithMultipleConditionsToChartDataSeries(
        filteredAttributes,
        configuration.systemOfMeasurement,
        configuration.sortedConditionTypeCodes,
        getAttributeType,
        getConditionType,
        intl,
        locale
      );
    }
    return [];
  }, [
    configuration,
    attributes,
    getAttributeType,
    getConditionType,
    intl,
    locale,
    attributeTypeCode
  ]);

  if (configuration === null) {
    return (
      <Stack.Item>
        <MessageBar
          messageBarType={MessageBarType.info}
          styles={styles.messageBar}
        >
          {formatMessage(messages.noData)}
        </MessageBar>
      </Stack.Item>
    );
  }

  return (
    <Stack tokens={{ maxWidth: 720 }}>
      <ResponsiveContainer width={width} height={height}>
        <LineChart
          width={500}
          height={350}
          margin={{
            top: 16,
            right: 16,
            left: 0,
            bottom: 32
          }}
        >
          <Tooltip
            isAnimationActive={false}
            wrapperStyle={styles.tooltipWrapper}
          />
          <CartesianGrid />
          <XAxis
            label={{
              value: configuration.xAxisLabel,
              offset: -12,
              fill: palette.themeDark,
              position: 'insideBottom'
            }}
            type="number"
            dataKey="conditionValue"
            allowDuplicatedCategory={false}
          />
          <YAxis
            dataKey="attributeValue"
            label={{
              value: configuration.yAxisLabel,
              angle: -90,
              fill: palette.themeDark,
              position: 'insideLeft'
            }}
          />
          {series.map(s => {
            return (
              <Line
                key={s.name}
                data={s.data}
                name={s.name}
                isAnimationActive={false}
                dot={{
                  r: 3
                }}
                activeDot={{
                  r: 6
                }}
                dataKey={`attributeValue`}
                stroke={s.stroke}
              />
            );
          })}
          <Legend wrapperStyle={{ bottom: 12 }} />
        </LineChart>
      </ResponsiveContainer>
    </Stack>
  );
};
