import React from 'react';

import { useIntl } from 'react-intl';

import { Stack, useTheme } from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { useProductPage } from '@providers/product-page/productPageContext';
import { AttributeTypeFormatter } from '@services/i18n/formatters/entity-formatters/attributeTypeFormatter';
import { AttributeType } from '@services/portal-api';
import { ATTRIBUTETYPECODES } from '@services/portal-api/constants';
import { rem } from '@utilities/rem';
import { MultiConditionsPerformanceChart } from '@widgets/charts/performance-chart/multiConditionsPerformanceChart';
import { PerformanceChart } from '@widgets/charts/performance-chart/performanceChart';
import { mediaQueryFrom } from '@widgets/media-queries';

import { ProductSubsectionHeader } from '../product-sections/productSubSectionHeader';
import { ProductPerformanceStyles } from './productPerformance.types';

function formatTitle(attributeType: AttributeType | undefined, locale: string) {
  const attributeTypeFormatter = new AttributeTypeFormatter(
    attributeType,
    locale
  );
  return attributeTypeFormatter.formatName();
}

export const ProductPerformance: React.FC = () => {
  const { spacing } = useTheme();
  const { locale } = useIntl();
  const { getAttributeType } = useGlobalData();
  const { performanceAttributes } = useProductPage();

  const styles: ProductPerformanceStyles = {
    container: {
      root: {
        width: '100%',
        ...mediaQueryFrom('tablet', {
          width: `calc(50% - ${spacing.m})`,
          minWidth: rem(320)
        })
      }
    }
  };

  if (!performanceAttributes) {
    return null;
  }

  return (
    <Stack horizontal wrap tokens={{ childrenGap: spacing.m }}>
      {performanceAttributes.liquidFlowRateAttributes.length > 1 && (
        <Stack.Item styles={styles.container}>
          <Stack>
            <ProductSubsectionHeader
              title={formatTitle(
                getAttributeType(ATTRIBUTETYPECODES.liquidFlowRate),
                locale
              )}
            />
            {performanceAttributes.liquidFlowRateAttributes[0].conditions
              ?.length === 2 ? (
              <MultiConditionsPerformanceChart
                attributes={performanceAttributes.liquidFlowRateAttributes}
                attributeTypeCode={ATTRIBUTETYPECODES.liquidFlowRate}
              />
            ) : (
              <PerformanceChart
                attributes={performanceAttributes.liquidFlowRateAttributes}
                attributeTypeCode={ATTRIBUTETYPECODES.liquidFlowRate}
              />
            )}
          </Stack>
        </Stack.Item>
      )}
      {performanceAttributes.sprayAngleAttributes.length > 1 && (
        <Stack.Item styles={styles.container}>
          <Stack>
            <ProductSubsectionHeader
              title={formatTitle(
                getAttributeType(ATTRIBUTETYPECODES.sprayAngle),
                locale
              )}
            />
            <PerformanceChart
              attributes={performanceAttributes.sprayAngleAttributes || []}
              attributeTypeCode={ATTRIBUTETYPECODES.sprayAngle}
            />
          </Stack>
        </Stack.Item>
      )}
      {performanceAttributes.airFlowRateAttributes.length > 1 && (
        <Stack.Item styles={styles.container}>
          <Stack>
            <ProductSubsectionHeader
              title={formatTitle(
                getAttributeType(ATTRIBUTETYPECODES.airFlowRate),
                locale
              )}
            />
            {performanceAttributes.airFlowRateAttributes?.[0].conditions
              ?.length === 2 ? (
              <MultiConditionsPerformanceChart
                attributes={performanceAttributes.airFlowRateAttributes}
                attributeTypeCode={ATTRIBUTETYPECODES.airFlowRate}
              />
            ) : (
              <PerformanceChart
                attributes={performanceAttributes.airFlowRateAttributes || []}
                attributeTypeCode={ATTRIBUTETYPECODES.airFlowRate}
              />
            )}
          </Stack>
        </Stack.Item>
      )}
      {performanceAttributes.atomizingAirFlowRateAttributes.length > 1 && (
        <Stack.Item styles={styles.container}>
          <Stack>
            <ProductSubsectionHeader
              title={formatTitle(
                getAttributeType(ATTRIBUTETYPECODES.atomizingAirFlowRate),
                locale
              )}
            />
            {performanceAttributes.atomizingAirFlowRateAttributes?.[0]
              .conditions?.length === 2 ? (
              <MultiConditionsPerformanceChart
                attributes={
                  performanceAttributes.atomizingAirFlowRateAttributes
                }
                attributeTypeCode={ATTRIBUTETYPECODES.atomizingAirFlowRate}
              />
            ) : (
              <PerformanceChart
                attributes={
                  performanceAttributes.atomizingAirFlowRateAttributes || []
                }
                attributeTypeCode={ATTRIBUTETYPECODES.atomizingAirFlowRate}
              />
            )}
          </Stack>
        </Stack.Item>
      )}
      {performanceAttributes.fanAirFlowRateAttributes.length > 1 && (
        <Stack.Item styles={styles.container}>
          <Stack>
            <ProductSubsectionHeader
              title={formatTitle(
                getAttributeType(ATTRIBUTETYPECODES.fanAirFlowRate),
                locale
              )}
            />
            {performanceAttributes.fanAirFlowRateAttributes?.[0].conditions
              ?.length === 2 ? (
              <MultiConditionsPerformanceChart
                attributes={performanceAttributes.fanAirFlowRateAttributes}
                attributeTypeCode={ATTRIBUTETYPECODES.fanAirFlowRate}
              />
            ) : (
              <PerformanceChart
                attributes={
                  performanceAttributes.fanAirFlowRateAttributes || []
                }
                attributeTypeCode={ATTRIBUTETYPECODES.fanAirFlowRate}
              />
            )}
          </Stack>
        </Stack.Item>
      )}
    </Stack>
  );
};
