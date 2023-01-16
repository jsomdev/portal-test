import { useContext, useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis
} from 'recharts';

import { PortalMessageBar } from '@components/messages/portalMessageBar';
import { MessageBarType, Stack, useTheme } from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { SystemOfMeasurementContext } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { messageIds } from '@services/i18n';
import { filterProductPerformanceChartAttributes } from '@widgets/product-page/product-performance/productPerformanceHelper';

import {
  ChartConfiguration,
  ChartData,
  ChartProps,
  ChartStyles
} from '../general/chart.types';
import { getChartConfiguration } from '../general/configuration';
import { mapAttributesToChartData } from '../general/mapper';
import { formatTooltip } from './performanceChartHelper';

const messages = defineMessages({
  noData: {
    id: messageIds.pages.product.sections.performance.noData,
    defaultMessage: 'No chart data available.',
    description: 'Text to display when no data is available'
  }
});

/**
 * A component that builds a chart configuration based on a list of attributes, systemOfMeasurement and an attributeTypeId.
 * To build the configuration we assume that all the attributes and conditions share the same ID.
 * This configuration is used to render a LineChart from recharts
 * @param width an optional paramter to assign a width to the chart. Default = 100%
 * @param height an optional parameter to assign a height to the chart. Default = 400px
 */
export const PerformanceChart: React.FC<ChartProps> = ({
  height = 400,
  width = '100%',
  attributes,
  attributeTypeCode
}) => {
  const { getAttributeType, getConditionType } = useGlobalData();
  const { palette, spacing } = useTheme();
  const { systemOfMeasurement } = useContext(SystemOfMeasurementContext);
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

  const styles: ChartStyles = {
    tooltip: {
      root: {
        backgroundColor: palette.white,
        border: `1px solid ${palette.themePrimary}`,
        padding: spacing.s1
      }
    },
    tooltipWrapper: {
      outline: 'none'
    },
    messageBarContainer: {
      root: {
        marginTop: spacing.l1
      }
    }
  };

  const dataSet: ChartData[] = useMemo(() => {
    if (configuration) {
      const filteredAttributes = attributes.filter(
        attribute => attribute.typeCode === attributeTypeCode
      );
      return mapAttributesToChartData(
        filteredAttributes,
        configuration.conditionUnitSymbol,
        configuration.systemOfMeasurement,
        intl,
        locale
      );
    }
    return [];
  }, [configuration, attributes, intl, locale, attributeTypeCode]);

  if (configuration === null) {
    return (
      <Stack.Item styles={styles.messageBarContainer}>
        <PortalMessageBar messageBarType={MessageBarType.info}>
          {formatMessage(messages.noData)}
        </PortalMessageBar>
      </Stack.Item>
    );
  }

  const CustomTooltip = (props: TooltipProps<number, string>) => {
    return (
      <Stack
        styles={styles.tooltip}
        horizontal
        wrap={false}
        tokens={{ childrenGap: spacing.s2 }}
      >
        {formatTooltip(
          props.payload?.[0]?.payload?.attributeValue,
          props.payload?.[0]?.payload?.conditionValue,
          configuration
        )}
      </Stack>
    );
  };

  return (
    <Stack tokens={{ maxWidth: 720 }}>
      <ResponsiveContainer width={width} height={height}>
        <LineChart
          width={500}
          height={350}
          throttleDelay={400}
          data={dataSet}
          margin={{
            top: 16,
            right: 16,
            left: 0,
            bottom: 32
          }}
        >
          <Tooltip
            wrapperStyle={styles.tooltipWrapper}
            content={(props: TooltipProps<number, string>) =>
              CustomTooltip(props)
            }
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
          />
          <YAxis
            label={{
              value: configuration.yAxisLabel,
              angle: -90,
              fill: palette.themeDark,
              position: 'insideLeft'
            }}
          />
          <Line
            type="monotone"
            activeDot={{
              r: 6
            }}
            dot={{
              r: 3
            }}
            isAnimationActive={false}
            name={configuration.lineLabel}
            dataKey="attributeValue"
            stroke={palette.themePrimary}
          />
        </LineChart>
      </ResponsiveContainer>
    </Stack>
  );
};
