import { IntlShape, defineMessages } from 'react-intl';

import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { messageIds } from '@services/i18n';
import { ConditionFormatter } from '@services/i18n/formatters/entity-formatters/conditionFormatter';
import { ConditionTypeFormatter } from '@services/i18n/formatters/entity-formatters/conditionTypeFormatter';
import { getDisplayForSystemOfMeasurement } from '@services/i18n/formatters/entity-formatters/displayFormatter';
import {
  Attribute,
  AttributeType,
  Condition,
  ConditionType,
  Display
} from '@services/portal-api';
import { groupArrayByKeyGetter } from '@utilities/groupBy';

import { ChartData, ChartDataSeries } from './chart.types';

type StrokeColorVariant = {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  hex: string;
  a100?: string;
  a200?: string;
  a400?: string;
  a700?: string;
};
export const strokeColorScheme: Record<string, StrokeColorVariant> = {
  blue: {
    '50': '#e3f2fd',
    '100': '#bbdefb',
    '200': '#90caf9',
    '300': '#64b5f6',
    '400': '#42a5f5',
    '500': '#2196f3',
    '600': '#1e88e5',
    '700': '#1976d2',
    '800': '#1565c0',
    '900': '#0d47a1',
    hex: '#2196f3',
    a100: '#82b1ff',
    a200: '#448aff',
    a400: '#2979ff',
    a700: '#2962ff'
  },
  brown: {
    '50': '#efebe9',
    '100': '#d7ccc8',
    '200': '#bcaaa4',
    '300': '#a1887f',
    '400': '#8d6e63',
    '500': '#795548',
    '600': '#6d4c41',
    '700': '#5d4037',
    '800': '#4e342e',
    '900': '#3e2723',
    hex: '#795548'
  },
  deepPurple: {
    '50': '#ede7f6',
    '100': '#d1c4e9',
    '200': '#b39ddb',
    '300': '#9575cd',
    '400': '#7e57c2',
    '500': '#673ab7',
    '600': '#5e35b1',
    '700': '#512da8',
    '800': '#4527a0',
    '900': '#311b92',
    hex: '#673ab7',
    a100: '#b388ff',
    a200: '#7c4dff',
    a400: '#651fff',
    a700: '#6200ea'
  },

  teal: {
    '50': '#e0f2f1',
    '100': '#b2dfdb',
    '200': '#80cbc4',
    '300': '#4db6ac',
    '400': '#26a69a',
    '500': '#009688',
    '600': '#00897b',
    '700': '#00796b',
    '800': '#00695c',
    '900': '#004d40',
    hex: '#009688',
    a100: '#a7ffeb',
    a200: '#64ffda',
    a400: '#1de9b6',
    a700: '#00bfa5'
  },
  green: {
    '50': '#e8f5e9',
    '100': '#c8e6c9',
    '200': '#a5d6a7',
    '300': '#81c784',
    '400': '#66bb6a',
    '500': '#4caf50',
    '600': '#43a047',
    '700': '#388e3c',
    '800': '#2e7d32',
    '900': '#1b5e20',
    hex: '#4caf50',
    a100: '#b9f6ca',
    a200: '#69f0ae',
    a400: '#00e676',
    a700: '#00c853'
  },

  lime: {
    '50': '#f9fbe7',
    '100': '#f0f4c3',
    '200': '#e6ee9c',
    '300': '#dce775',
    '400': '#d4e157',
    '500': '#cddc39',
    '600': '#c0ca33',
    '700': '#afb42b',
    '800': '#9e9d24',
    '900': '#827717',
    hex: '#cddc39',
    a100: '#f4ff81',
    a200: '#eeff41',
    a400: '#c6ff00',
    a700: '#aeea00'
  },

  amber: {
    '50': '#fff8e1',
    '100': '#ffecb3',
    '200': '#ffe082',
    '300': '#ffd54f',
    '400': '#ffca28',
    '500': '#ffc107',
    '600': '#ffb300',
    '700': '#ffa000',
    '800': '#ff8f00',
    '900': '#ff6f00',
    hex: '#ffc107',
    a100: '#ffe57f',
    a200: '#ffd740',
    a400: '#ffc400',
    a700: '#ffab00'
  },

  deepOrange: {
    '50': '#fbe9e7',
    '100': '#ffccbc',
    '200': '#ffab91',
    '300': '#ff8a65',
    '400': '#ff7043',
    '500': '#ff5722',
    '600': '#f4511e',
    '700': '#e64a19',
    '800': '#d84315',
    '900': '#bf360c',
    hex: '#ff5722',
    a100: '#ff9e80',
    a200: '#ff6e40',
    a400: '#ff3d00',
    a700: '#dd2c00'
  },

  grey: {
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#eeeeee',
    '300': '#e0e0e0',
    '400': '#bdbdbd',
    '500': '#9e9e9e',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121',
    hex: '#9e9e9e'
  },
  blueGrey: {
    '50': '#eceff1',
    '100': '#cfd8dc',
    '200': '#b0bec5',
    '300': '#90a4ae',
    '400': '#78909c',
    '500': '#607d8b',
    '600': '#546e7a',
    '700': '#455a64',
    '800': '#37474f',
    '900': '#263238',
    hex: '#607d8b'
  }
};

export function generateStrokeColor(
  scheme: number = 0,
  index: number = 0
): string {
  const schemeKey = Object.keys(strokeColorScheme)[scheme] || 'blueGrey';
  const strokeScheme = strokeColorScheme[schemeKey];

  const colorKey = Object.keys(strokeScheme)[index + 3] || 'hex';
  const colorVariant = strokeScheme[colorKey as keyof StrokeColorVariant];
  return colorVariant || strokeColorScheme.grey.hex;
}

export function mapAttributesToChartData(
  attributes: Attribute[],
  conditionUnitSymbol: string,
  systemOfMeasurement: SystemOfMeasurement,
  intl: IntlShape,
  locale: string
): ChartData[] {
  const attributesWithConditions: Attribute[] = attributes.filter(attribute => {
    const hasCondition: boolean =
      (attribute.conditions && !!attribute.conditions.length) || false;
    return hasCondition;
  });

  const chartData: ChartData[] = attributesWithConditions.map(attribute => {
    const condition: Condition | null | undefined = attribute.conditions?.find(
      condition =>
        condition?.displays?.find(
          display => display?.unitSymbol === conditionUnitSymbol
        )
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getValue = (displays: Display[]) => {
      const display: Display | undefined = getDisplayForSystemOfMeasurement(
        displays || [],
        systemOfMeasurement
      );
      return Number(display?.value);
    };
    const conditionFormatter: ConditionFormatter = new ConditionFormatter(
      condition,
      intl,
      systemOfMeasurement,
      locale
    );
    return {
      attributeValue: getValue(attribute.displays || []),
      conditionValue: getValue(condition?.displays || []),
      name: conditionFormatter.formatDisplayValue()
    };
  });

  return chartData.sort((a, b) => a.conditionValue - b.conditionValue);
}

const messages = defineMessages({
  seriesLabel: {
    id: messageIds.pages.product.sections.performance.multiChart.seriesLabel,
    defaultMessage: 'Series Label',
    description: 'Label for the Multi Chart Series'
  }
});

export function mapFlowRateAttributesWithMultipleConditionsToChartDataList(
  attributes: Attribute[],
  systemOfMeasurement: SystemOfMeasurement,
  // First condition is expected to be x-axis, other conditions will be used to group attributes
  sortedConditionTypeCodes: string[],
  getAttributeType: (code: string) => AttributeType | undefined,
  getConditionType: (code: string) => ConditionType | undefined,
  intl: IntlShape,
  locale: string
): ChartDataSeries[] {
  const attributesWithConditions: Attribute[] = attributes.filter(attribute => {
    const hasCondition: boolean =
      (attribute.conditions && !!attribute.conditions.length) || false;
    return hasCondition;
  });

  const attributesGroupedPerExtraCondition: Attribute[][] =
    sortedConditionTypeCodes.slice(1).map(conditionTypeCode => {
      const attributesWithCondition = attributesWithConditions.filter(
        attribute =>
          attribute.conditions?.find(
            condition => condition?.typeCode === conditionTypeCode
          )
      );
      const attributesWithXAxisConditionAndExtraCondition =
        attributesWithCondition.map(attribute => {
          const xAxisCondition = attribute.conditions?.find(
            condition => condition?.typeCode === sortedConditionTypeCodes[0]
          );
          const extraCondition = attribute.conditions?.find(
            condition => condition?.typeCode === conditionTypeCode
          );
          return {
            ...attribute,
            conditions: [xAxisCondition, extraCondition] as Condition[]
          };
        });
      return attributesWithXAxisConditionAndExtraCondition;
    });

  const attributesGroupedPerExtraConditionValue =
    attributesGroupedPerExtraCondition.map(attributes => {
      return groupArrayByKeyGetter<number, Attribute>(
        attributes,
        attribute => attribute.conditions?.[1]?.value
      );
    });

  const groupedFlowRateSeries: ChartDataSeries[][] =
    attributesGroupedPerExtraConditionValue.map(
      (groupedAttributes, groupedAttributesIndex) => {
        return Array.from(groupedAttributes, ([key, attributes], index) => {
          const flowRateChartData: Pick<
            ChartData,
            'attributeValue' | 'conditionValue'
          >[] = attributes.map(attribute => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const getValue = (displays: Display[]) => {
              const display: Display | undefined =
                getDisplayForSystemOfMeasurement(
                  displays || [],
                  systemOfMeasurement
                );
              return Number(display?.value);
            };
            return {
              attributeValue: getValue(attribute.displays || []),
              conditionValue: getValue(
                attribute?.conditions?.[0]?.displays || []
              )
            };
          });
          const extraConditionType: ConditionType | undefined =
            getConditionType(attributes?.[0]?.conditions?.[1]?.typeCode || '');
          const conditionTypeFormatter: ConditionTypeFormatter =
            new ConditionTypeFormatter(extraConditionType, locale);

          const extraCondition: Condition | undefined =
            attributes?.[0]?.conditions?.[1];
          const conditionFormatter: ConditionFormatter = new ConditionFormatter(
            extraCondition,
            intl,
            systemOfMeasurement,
            locale
          );
          return {
            name: intl.formatMessage(messages.seriesLabel, {
              value: conditionFormatter.formatDisplayValue(),
              type: conditionTypeFormatter.formatName()
            }),
            extraConditionTypeName: conditionTypeFormatter.formatName(),
            extraConditionValue: key,
            stroke: generateStrokeColor(groupedAttributesIndex, index),
            data: flowRateChartData.sort(
              (a, b) => a.conditionValue - b.conditionValue
            )
          };
        });
      }
    );

  return groupedFlowRateSeries
    .flat()
    .sort(
      (a, b) =>
        a.extraConditionTypeName.localeCompare(b.extraConditionTypeName) ||
        a.extraConditionValue - b.extraConditionValue
    );
}
