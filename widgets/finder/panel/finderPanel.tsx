import { Stack, Text, useTheme } from '@fluentui/react';
import { useFinder } from '@providers/finder/finderContext';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { FacetControlType } from '@services/facet-service/models/facet/facetControlType';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';
import { rem } from '@utilities/rem';
import React from 'react';
import { CategoryLinkFacet } from '../facet-item/categoryLinkFacet';

import { Mobile, TabletAndDesktop } from '@widgets/media-queries';
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

const DesktopFinderPanel: React.FC = () => {
  const { category } = useGlobalData();
  const { palette } = useTheme();
  const {
    toggleFacetOption,
    getFacetResult,
    visibleMainFacets: visibleFacets
  } = useFinder();
  return (
    <Stack>
      <Text as="h1" styles={{ root: { marginTop: 0, marginBottom: 8 } }}>
        <Text variant="xxLarge">Spray</Text>
        <Text
          variant="xxLarge"
          styles={{ root: { color: palette.themePrimary } }}
        >
          Finder
        </Text>
      </Text>
      <OperatingConditions />

      {visibleFacets.map(facet => {
        if (facet.key === FacetKey.CategoryId) {
          return (
            <CategoryLinkFacet
              facet={facet}
              predictedResults={getFacetResult(facet)}
              categoryId={category?.id}
            />
          );
        }
        if (facet.configuration.controlType === FacetControlType.Checkbox) {
          return (
            <CheckboxFacet
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
  const { spacing } = useTheme();
  const { palette } = useTheme();
  const { category } = useGlobalData();
  const {
    toggleFacetOption,
    getFacetResult,
    visibleMainFacets: visibleFacets
  } = useFinder();
  return (
    <Stack tokens={{ padding: `${rem(spacing.m)} 0` }}>
      <Text as="h1" styles={{ root: { marginTop: 0, marginBottom: 8 } }}>
        <Text variant="xxLarge">Spray</Text>
        <Text
          variant="xxLarge"
          styles={{ root: { color: palette.themePrimary } }}
        >
          Finder
        </Text>
      </Text>
      <OperatingConditions />
      {visibleFacets.map(facet => {
        if (facet.key === FacetKey.CategoryId) {
          return (
            <CategoryLinkFacet
              facet={facet}
              predictedResults={getFacetResult(facet)}
              categoryId={category?.id}
            />
          );
        }
        if (facet.configuration.controlType === FacetControlType.Checkbox) {
          return (
            <CheckboxFacet
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
