import React from 'react';

import { IStackStyles, Stack, Text, useTheme } from '@fluentui/react';
import { useFinder } from '@providers/finder/finderContext';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { FacetControlType } from '@services/facet-service/models/facet/facetControlType';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';

import { CategoryLinkFacet } from '../facet-item/categoryLinkFacet';
import { CheckboxFacet } from '../facet-item/checkboxFacet';
import { OperatingConditions } from '../operating-conditions/operatingConditions';

export const FinderPanel: React.FC = () => {
  return (
    <React.Fragment>
      <TabletAndDesktop>
        <DesktopFinderPanel />
      </TabletAndDesktop>
      <Mobile>
        <MobileFinderPanel />
      </Mobile>
    </React.Fragment>
  );
};

interface DesktopFinderPanelStyles {
  root: IStackStyles;
}

const DesktopFinderPanel: React.FC = () => {
  const { category } = useGlobalData();
  const { palette, spacing } = useTheme();
  const {
    toggleFacetOption,
    getFacetResult,
    isFacetActive,
    visibleMainFacets,
    showSprayAngle,
    showTheoreticalFlow
  } = useFinder();

  const styles: DesktopFinderPanelStyles = {
    root: {
      root: {
        width: 360,
        maxWidth: '100%'
      }
    }
  };

  return (
    <Stack styles={styles.root} tokens={{ childrenGap: spacing.s1 }}>
      {/* TODO: Check if we can replace the current image with this text */}
      <Text
        as="h1"
        styles={{ root: { marginTop: 0, marginBottom: spacing.s1 } }}
      >
        <Text variant="xxLarge">Spray</Text>
        <Text
          variant="xxLarge"
          styles={{ root: { color: palette.themePrimary } }}
        >
          Finder
        </Text>
      </Text>
      {showSprayAngle || showTheoreticalFlow ? <OperatingConditions /> : null}

      {visibleMainFacets.map(facet => {
        if (facet.key === FacetKey.CategoryId) {
          return (
            <CategoryLinkFacet
              key={facet.key}
              facet={facet}
              predictedResults={getFacetResult(facet)}
              categoryId={category?.id}
            />
          );
        }
        if (facet.configuration.controlType === FacetControlType.Checkbox) {
          return (
            <CheckboxFacet
              key={facet.key}
              isActive={isFacetActive(facet.key)}
              facet={facet}
              predictedResults={getFacetResult(facet)}
              onSelect={optionKey => toggleFacetOption(facet.key, optionKey)}
            />
          );
        }
      })}
    </Stack>
  );
};
const MobileFinderPanel: React.FC = () => {
  const { category } = useGlobalData();
  const {
    toggleFacetOption,
    getFacetResult,
    isFacetActive,
    visibleMainFacets,
    showSprayAngle,
    showTheoreticalFlow
  } = useFinder();
  return (
    <Stack>
      {showSprayAngle || showTheoreticalFlow ? <OperatingConditions /> : null}
      {visibleMainFacets.map(facet => {
        if (facet.key === FacetKey.CategoryId) {
          return (
            <CategoryLinkFacet
              key={facet.key}
              facet={facet}
              predictedResults={getFacetResult(facet)}
              categoryId={category?.id}
            />
          );
        }
        if (facet.configuration.controlType === FacetControlType.Checkbox) {
          return (
            <CheckboxFacet
              isActive={isFacetActive(facet.key)}
              key={facet.key}
              facet={facet}
              predictedResults={getFacetResult(facet)}
              onSelect={optionKey => toggleFacetOption(facet.key, optionKey)}
            />
          );
        }
      })}
    </Stack>
  );
};
