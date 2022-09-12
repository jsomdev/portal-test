import { useContext, useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  ActionButton,
  DefaultButton,
  FontWeights,
  IButtonProps,
  IButtonStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { useFinder } from '@providers/finder/finderContext';
import { SystemOfMeasurementContext } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';
import { messageIds } from '@services/i18n';

import {
  mapMainFacetsToActiveFilterChipProps,
  mapOperatingConditionsToActiveFilterChipProps,
  mapSearchQueryToActiveFilterChipProps
} from './activeFiltersHelper';

export type ActiveFilterChipProps = Pick<IButtonProps, 'onClick' | 'text'>;

const messages = defineMessages({
  clearAll: {
    id: messageIds.finder.filters.clearAll,
    defaultMessage: 'Clear All',
    description: 'Text for the clear all button'
  },
  searchFilter: {
    id: messageIds.finder.filters.search,
    defaultMessage: 'Search: value',
    description: 'Text for the active search query filter'
  }
});

export const ActiveFilters: React.FC = () => {
  const { systemOfMeasurement } = useContext(SystemOfMeasurementContext);
  const intl = useIntl();
  const {
    clearSearch,
    clearTheoreticalFlow,
    clearFacetOptions,
    clearAllFacets,
    searchQuery,
    visibleMainFacets,
    visibleOperatingConditionsFacets
  } = useFinder();
  const activeFilterChips: ActiveFilterChipProps[] = useMemo(() => {
    const searchFilterChip: ActiveFilterChipProps | undefined = searchQuery
      ? mapSearchQueryToActiveFilterChipProps(
          intl.formatMessage(messages.searchFilter, { value: searchQuery }),
          clearSearch
        )
      : undefined;

    const searchFilterChips = searchFilterChip ? [searchFilterChip] : [];

    const operatingConditionsChips: ActiveFilterChipProps[] =
      mapOperatingConditionsToActiveFilterChipProps(
        Object.values(visibleOperatingConditionsFacets),
        clearTheoreticalFlow,
        () => clearFacetOptions(FacetKey.SprayAngle)
      );

    const mainFacetsChips: ActiveFilterChipProps[] =
      mapMainFacetsToActiveFilterChipProps(
        visibleMainFacets,
        systemOfMeasurement,
        intl,
        clearFacetOptions
      );

    return [
      ...searchFilterChips,
      ...operatingConditionsChips,
      ...mainFacetsChips
    ];
  }, [
    clearFacetOptions,
    clearSearch,
    clearTheoreticalFlow,
    intl,
    searchQuery,
    systemOfMeasurement,
    visibleMainFacets,
    visibleOperatingConditionsFacets
  ]);

  const buttonStyles: Partial<IButtonStyles> = {
    root: {
      height: 32
    }
  };
  return (
    <Stack horizontal verticalAlign="center" wrap tokens={{ childrenGap: 8 }}>
      {activeFilterChips.map(activeFilterChip => (
        <ActiveFilterChip key={activeFilterChip.text} {...activeFilterChip} />
      ))}
      {activeFilterChips.length > 1 && (
        <ActionButton
          onClick={clearAllFacets}
          styles={buttonStyles}
          iconProps={{ iconName: 'ClearFilter' }}
        >
          {intl.formatMessage(messages.clearAll)}
        </ActionButton>
      )}
    </Stack>
  );
};

const ActiveFilterChip: React.FC<ActiveFilterChipProps> = props => {
  const { palette } = useTheme();
  const buttonStyles: IButtonStyles = {
    flexContainer: {
      flexDirection: 'row-reverse'
    },
    root: {
      border: 0,
      background: palette.neutralLighter
    },
    rootHovered: {
      background: palette.neutralLight
    },
    label: {
      fontWeight: FontWeights.regular
    }
  };
  return (
    <DefaultButton
      {...props}
      styles={buttonStyles}
      iconProps={{ iconName: 'Cancel' }}
    />
  );
};
