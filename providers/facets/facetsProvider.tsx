import { useCallback, useContext, useMemo, useReducer } from 'react';

import { SystemOfMeasurementContext } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { combineFacetsToEncodedExternalFiltersString } from '@services/facet-service/facet-helpers/facetCombiner';
import { combineFacetsToEncodedOperatingConditionsParameter } from '@services/facet-service/facet-helpers/operatingConditionsCombiner';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetCategory } from '@services/facet-service/models/facet/facetCategory';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';

import { FacetsContext, FacetsState } from './facetsContext';
import { facetsReducer } from './facetsReducer';
import { FacetsPreFilters } from './models';

export interface FacetsProviderProps {
  preFilters: FacetsPreFilters;
  initialFacets: FacetsState;
}

export const FacetsProvider: React.FC<FacetsProviderProps> = ({
  children,
  preFilters,
  initialFacets
}) => {
  const [facets, dispatch] = useReducer(facetsReducer, {
    ...initialFacets
  });
  const { systemOfMeasurement } = useContext(SystemOfMeasurementContext);

  const mainFacets: FacetsState = useMemo(() => {
    const mainFacetKeys: string[] = Object.values(facets)
      .filter(facet => facet.configuration.category === FacetCategory.Main)
      .map(facet => facet.key);
    const filteredFacets = { ...facets };
    Object.keys(filteredFacets)
      .filter(key => !mainFacetKeys.includes(key))
      .forEach(key => delete filteredFacets[key]);
    return filteredFacets;
  }, [facets]);

  const sprayFinderFacets: FacetsState = useMemo(() => {
    const sprayFinderFacetKeys: string[] = Object.values(facets)
      .filter(
        facet => facet.configuration.category === FacetCategory.SprayFinder
      )
      .map(facet => facet.key);
    const filteredFacets = { ...facets };
    Object.keys(filteredFacets)
      .filter(key => !sprayFinderFacetKeys.includes(key))
      .forEach(key => delete filteredFacets[key]);
    return filteredFacets;
  }, [facets]);

  const combinedMainFiltersParameter: string = useMemo(() => {
    const value = combineFacetsToEncodedExternalFiltersString(
      Object.values(mainFacets),
      systemOfMeasurement,
      preFilters.categoryId
    );
    return value;
  }, [mainFacets, preFilters.categoryId, systemOfMeasurement]);

  const combinedSprayFinderFiltersParameter: string = useMemo(() => {
    const value = combineFacetsToEncodedOperatingConditionsParameter(
      Object.values(sprayFinderFacets)
    );
    return value;
  }, [sprayFinderFacets]);

  const activeFacets: Facet[] = useMemo(() => {
    const activeFacets = Object.values(mainFacets).filter(facet => {
      return !!facet.options.find(option => !!option.isActive);
    });
    return activeFacets;
  }, [mainFacets]);

  const activeFacetKeys: FacetKey[] = useMemo(() => {
    return activeFacets.map(facet => facet.key);
  }, [activeFacets]);

  const getFacet = useCallback(
    (key: FacetKey) => {
      return Object.values(mainFacets).find(facet => facet.key === key);
    },
    [mainFacets]
  );

  function updateFacet(updatedFacet: Facet) {
    dispatch({
      type: 'updateFacet',
      updatedFacet
    });
  }
  function updateFacets(updatedFacets: { [key: string]: Facet }) {
    dispatch({
      type: 'updateFacets',
      updatedFacets
    });
  }

  function clearFacetActiveOptions(facetKey: FacetKey) {
    dispatch({
      type: 'clearFacetActiveOptions',
      facetKey
    });
  }
  function clearAllFacetsActiveOptions() {
    dispatch({
      type: 'clearAllFacetsActiveOptions'
    });
  }

  return (
    <FacetsContext.Provider
      value={{
        mainFacets,
        sprayFinderFacets,
        combinedMainFiltersParameter,
        combinedSprayFinderFiltersParameter,
        activeFacetKeys,
        activeFacets,
        preFilters,
        getFacet,
        clearAllFacetsActiveOptions,
        clearFacetActiveOptions,
        updateFacet,
        updateFacets
      }}
    >
      {children}
    </FacetsContext.Provider>
  );
};
