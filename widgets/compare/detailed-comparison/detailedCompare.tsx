import React, { useEffect, useMemo } from 'react';

import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { LoadingOverlay } from '@components/overlays/loadingOverlay';
import {
  FontSizes,
  FontWeights,
  IButtonStyles,
  ILabelStyles,
  IStackItemStyles,
  IStackStyles,
  IToggleStyles,
  IconButton,
  MessageBar,
  MessageBarType,
  Stack,
  Text,
  Toggle,
  useTheme
} from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { SystemOfMeasurementContext } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { messageIds } from '@services/i18n';
import { Attribute } from '@services/portal-api';
import { ATTRIBUTETYPECODES } from '@services/portal-api/constants';
import { rem } from '@utilities/rem';
import { MultiConditionsPerformanceChart } from '@widgets/charts/performance-chart/multiConditionsPerformanceChart';
import { PerformanceChart } from '@widgets/charts/performance-chart/performanceChart';
import { ErrorPage } from '@widgets/error-boundaries/errorPage';
import { PagesHeader } from '@widgets/headers/page-header/pageHeader';
import {
  mediaQueryFrom,
  useBetweenMobileAndTablet
} from '@widgets/media-queries';
import { filterProductPerformanceChartAttributes } from '@widgets/product-page/product-performance/productPerformanceHelper';

import { useProductCompare } from '../productCompareContext';
import { CompareGroup } from './detailedCompare.types';
import {
  mapProductToCompareProductCardViewModel,
  mapProductsWithAttributesToCompareGroups,
  showMultiPerformanceChart
} from './detailedCompareHelpers';
import { DetailedCompareList } from './detailedCompareList';
import { DetailedCompareProductCard } from './detailedCompareProductCard';

export interface ProductCompareStyles {
  contentColumn: IStackItemStyles;
  firstColumn: IStackStyles;
  contentColumnsContainer: IStackStyles;
  chevronButtonContainer: IStackItemStyles;
  chevronButton: (isDisplayed: boolean) => Partial<IButtonStyles>;
  label: ILabelStyles;
  toggle: Partial<IToggleStyles>;
}

const messages = defineMessages({
  title: {
    id: messageIds.pages.compare.title,
    defaultMessage: 'Product Compare',
    description: 'Title for the product compare page'
  },
  loadingCompare: {
    id: messageIds.pages.compare.loading,
    defaultMessage: 'Loading comparison...',
    description: 'Loading text for when the products are loading'
  },
  noResults: {
    id: messageIds.pages.compare.noResults,
    defaultMessage:
      'There are no products to compare. On the finder or product page, you can add products to the comparison.',
    description: 'Text to display when there are no products to compare'
  },

  differencesView: {
    id: messageIds.pages.compare.differencesView,
    defaultMessage: 'Show only differences'
  },
  publicView: {
    id: messageIds.pages.compare.publicView,
    defaultMessage: 'Show only public info'
  },
  internalView: {
    id: messageIds.pages.compare.internalView,
    defaultMessage: 'Show all info'
  },
  specifications: {
    id: messageIds.pages.product.sections.specifications.title,
    defaultMessage: 'Product Specifications'
  }
});

export const DetailedCompare: React.FC = () => {
  const { formatMessage } = useIntl();
  const { spacing, palette } = useTheme();
  const { getAttributeType, getAttributeGroup } = useGlobalData();
  const { query } = useRouter();
  const intl = useIntl();
  const { systemOfMeasurement } = React.useContext(SystemOfMeasurementContext);
  const {
    showIdenticalValues,
    visibleProducts,
    visibleIndex,
    setVisibleIndex,
    toggleIdenticalValues,
    setBaseProduct,
    removeProduct,
    loadDetails,
    isFetchingDetails,
    baseProductNumber,
    productsDetailsError,
    productsDetailsStatus,
    showPrivateValues,
    products
  } = useProductCompare();

  const productNumbers: string[] = useMemo(() => {
    return (query.products as string)?.split(',') || [];
  }, [query.products]);

  const productCompareGroups: CompareGroup[] = useMemo(() => {
    return mapProductsWithAttributesToCompareGroups(
      products || [],
      !showPrivateValues,
      getAttributeGroup,
      getAttributeType,
      systemOfMeasurement,
      intl,
      intl.locale
    );
  }, [
    products,
    showPrivateValues,
    getAttributeGroup,
    getAttributeType,
    systemOfMeasurement,
    intl
  ]);
  // We want to validate each product and check if a performance chart will be rendered based on the attributeTypeId
  const validatePerformanceChartData = React.useCallback(
    (typeCode: string) => {
      if (!products) {
        return false;
      }
      // For each product, we will check if it will render a performance chart and return true / false
      const productAttributeTypeValidations: boolean[] = products.map(
        (product): boolean => {
          // eslint-disable-next-line max-len
          const attributes: Attribute[] =
            filterProductPerformanceChartAttributes(
              typeCode,
              product.attributes
            );
          if (attributes.length > 0) {
            return true;
          }
          return false;
        }
      );
      // If at least 1 product returns a performance chart based on the attributeTypeId, we want to show that chart for each product.
      // Products without a chart being compared to products with a chart will display a notification that no data is available
      // If none of the products will render a chart, we don't want to render a chart at all (also no notifcations that no data is available)
      if (productAttributeTypeValidations.includes(true)) {
        return true;
      }
      return false;
    },
    [products]
  );

  const showLiquidFlowRateCharts: boolean = useMemo(() => {
    return validatePerformanceChartData(ATTRIBUTETYPECODES.liquidFlowRate);
  }, [validatePerformanceChartData]);
  const showAirFlowRateCharts: boolean = useMemo(() => {
    return validatePerformanceChartData(ATTRIBUTETYPECODES.airFlowRate);
  }, [validatePerformanceChartData]);

  const showSprayAngleCharts: boolean = useMemo(() => {
    return validatePerformanceChartData(ATTRIBUTETYPECODES.sprayAngle);
  }, [validatePerformanceChartData]);
  const showFanAirFlowRateCharts: boolean = useMemo(() => {
    return validatePerformanceChartData(ATTRIBUTETYPECODES.fanAirFlowRate);
  }, [validatePerformanceChartData]);
  const showAtomizingAirFlowRateChars: boolean = useMemo(() => {
    return validatePerformanceChartData(
      ATTRIBUTETYPECODES.atomizingAirFlowRate
    );
  }, [validatePerformanceChartData]);

  const hideCharts: boolean =
    !showLiquidFlowRateCharts &&
    !showSprayAngleCharts &&
    !showAtomizingAirFlowRateChars &&
    !showFanAirFlowRateCharts &&
    !showAirFlowRateCharts;

  useEffect(() => {
    loadDetails(productNumbers);
  }, [loadDetails, productNumbers]);

  const styles: ProductCompareStyles = {
    firstColumn: {
      root: {
        flex: 0,
        width: 0,
        ...mediaQueryFrom('tablet', {
          paddingRight: spacing.m,
          flex: 1,
          maxWidth: rem(240)
        })
      }
    },
    contentColumnsContainer: {
      root: {
        flex: 1,
        position: 'relative',
        background: palette.white
      }
    },
    chevronButtonContainer: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        width: 40,
        background: 'white'
      }
    },
    chevronButton: (isDisplayed: boolean) => ({
      root: {
        display: isDisplayed ? 'block' : 'none'
      }
    }),
    contentColumn: {
      root: {
        flex: 1,
        minWidth: rem(180)
      }
    },
    label: {
      root: {
        fontWeight: FontWeights.bold,
        marginBottom: spacing.s1,
        fontSize: FontSizes.large
      }
    },
    toggle: {
      root: {
        marginTop: 0
      }
    }
  };

  if (isFetchingDetails || productsDetailsStatus === 'loading') {
    return (
      <LoadingOverlay spinnerText={formatMessage(messages.loadingCompare)} />
    );
  }

  if (productsDetailsStatus === 'error') {
    return <ErrorPage error={productsDetailsError as Error} page={'compare'} />;
  }

  if (!products.length && productsDetailsStatus === 'success') {
    return (
      <Stack tokens={{ childrenGap: spacing.s1, padding: `${spacing.l1} 0` }}>
        <MessageBar messageBarType={MessageBarType.info}>
          {formatMessage(messages.noResults)}
        </MessageBar>
      </Stack>
    );
  }

  if (productsDetailsStatus === 'idle') {
    return null;
  }

  return (
    <Stack
      horizontalAlign="stretch"
      tokens={{ padding: `${spacing.l1} 0`, childrenGap: spacing.l1 }}
    >
      <PagesHeader title={formatMessage(messages.title)} />

      <Stack horizontal>
        <Stack styles={styles.firstColumn}></Stack>
        <Stack
          styles={styles.contentColumnsContainer}
          horizontal
          tokens={{ childrenGap: spacing.m }}
        >
          <Stack.Item styles={styles.chevronButtonContainer}>
            <IconButton
              styles={styles.chevronButton(visibleIndex > 0)}
              iconProps={{
                iconName: 'ChevronLeft'
              }}
              onClick={() => setVisibleIndex(visibleIndex - 1)}
            />
          </Stack.Item>

          {products
            .slice(visibleIndex, visibleIndex + visibleProducts)
            .map((product, index) => {
              return (
                <Stack.Item styles={styles.contentColumn} key={product.number}>
                  <DetailedCompareProductCard
                    onRemoveClick={() => removeProduct(product)}
                    onBaseClick={() => setBaseProduct(product.number || '')}
                    isBase={
                      baseProductNumber
                        ? product.number === baseProductNumber
                        : index === 0
                    }
                    product={mapProductToCompareProductCardViewModel(
                      product,
                      intl.locale
                    )}
                  />
                </Stack.Item>
              );
            })}
          <Stack.Item styles={styles.chevronButtonContainer}>
            <IconButton
              styles={styles.chevronButton(
                visibleIndex + visibleProducts < products.length
              )}
              iconProps={{
                iconName: 'ChevronRight'
              }}
              onClick={() => setVisibleIndex(visibleIndex + 1)}
            />
          </Stack.Item>
        </Stack>
      </Stack>
      <Stack
        horizontal
        wrap
        horizontalAlign="space-between"
        verticalAlign="center"
      >
        <Stack.Item>
          <Text variant="xLarge" as="h2">
            {formatMessage(messages.specifications)}
          </Text>
        </Stack.Item>
        <Stack
          horizontal
          wrap
          tokens={{ childrenGap: spacing.l1, padding: spacing.m }}
        >
          <Stack.Item>
            <Toggle
              styles={styles.toggle}
              onText={formatMessage(messages.differencesView)}
              offText={formatMessage(messages.differencesView)}
              checked={showIdenticalValues}
              disabled={products.length === 1}
              inlineLabel
              onChange={() => toggleIdenticalValues()}
            />
          </Stack.Item>
        </Stack>
      </Stack>
      {productCompareGroups.map(group => {
        return (
          <Stack.Item key={group.groupName}>
            <DetailedCompareList {...group} />
          </Stack.Item>
        );
      })}
      <Stack
        horizontal
        tokens={{
          childrenGap: spacing.s1
        }}
      >
        <Stack styles={styles.firstColumn}></Stack>
        {!hideCharts &&
          products
            .slice(visibleIndex, visibleIndex + visibleProducts)
            .map(product => {
              return (
                <Stack.Item styles={styles.contentColumn} key={product.id}>
                  <Stack>
                    {showLiquidFlowRateCharts &&
                    showMultiPerformanceChart(
                      product,
                      ATTRIBUTETYPECODES.liquidFlowRate
                    ) ? (
                      <MultiConditionsPerformanceChart
                        height={600}
                        attributes={
                          product.attributes?.filter(
                            attribute =>
                              attribute.typeCode ===
                              ATTRIBUTETYPECODES.liquidFlowRate
                          ) || []
                        }
                        attributeTypeCode={ATTRIBUTETYPECODES.liquidFlowRate}
                      />
                    ) : (
                      <PerformanceChart
                        height={600}
                        attributes={product.attributes || []}
                        attributeTypeCode={ATTRIBUTETYPECODES.liquidFlowRate}
                      />
                    )}
                    {showAirFlowRateCharts &&
                    showMultiPerformanceChart(
                      product,
                      ATTRIBUTETYPECODES.airFlowRate
                    ) ? (
                      <MultiConditionsPerformanceChart
                        height={600}
                        attributes={
                          product.attributes?.filter(
                            attribute =>
                              attribute.typeCode ===
                              ATTRIBUTETYPECODES.airFlowRate
                          ) || []
                        }
                        attributeTypeCode={ATTRIBUTETYPECODES.airFlowRate}
                      />
                    ) : (
                      <PerformanceChart
                        height={600}
                        attributes={product.attributes || []}
                        attributeTypeCode={ATTRIBUTETYPECODES.airFlowRate}
                      />
                    )}
                    {showSprayAngleCharts && (
                      <PerformanceChart
                        height={600}
                        attributes={product.attributes || []}
                        attributeTypeCode={ATTRIBUTETYPECODES.sprayAngle}
                      />
                    )}
                    {showAtomizingAirFlowRateChars && (
                      <PerformanceChart
                        height={600}
                        attributes={product.attributes || []}
                        attributeTypeCode={
                          ATTRIBUTETYPECODES.atomizingAirFlowRate
                        }
                      />
                    )}
                    {showFanAirFlowRateCharts && (
                      <PerformanceChart
                        height={600}
                        attributes={product.attributes || []}
                        attributeTypeCode={ATTRIBUTETYPECODES.fanAirFlowRate}
                      />
                    )}
                  </Stack>
                </Stack.Item>
              );
            })}
      </Stack>
    </Stack>
  );
};
