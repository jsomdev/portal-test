import { useCallback, useContext, useMemo, useReducer } from 'react';

import { useIntl } from 'react-intl';

import { SystemOfMeasurementContext } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { combineFacetsToEncodedExternalFiltersString } from '@services/facet-service/facet-helpers/facetCombiner';
import { combineFacetsToEncodedOperatingConditionsParameter } from '@services/facet-service/facet-helpers/operatingConditionsCombiner';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetCategory } from '@services/facet-service/models/facet/facetCategory';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';
import { getAudience } from '@services/i18n';

import { FacetsContext, FacetsPreFilters, FacetsState } from './facetsContext';
import { facetsReducer } from './facetsReducer';

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
  const { locale } = useIntl();
  const { systemOfMeasurement } = useContext(SystemOfMeasurementContext);

  // Facets with the Main FacetCategory
  const mainFacets: FacetsState = useMemo(() => {
    const mainFacetKeys: string[] = Object.values(facets)
      .filter(facet => {
        return facet.configuration.category === FacetCategory.Main;
      })
      .map(facet => facet.key);
    const filteredFacets = { ...facets };
    Object.keys(filteredFacets)
      .filter(key => !mainFacetKeys.includes(key))
      .forEach(key => delete filteredFacets[key]);
    return filteredFacets;
  }, [facets]);

  // Facets with the OperatingConditions FacetCategory
  const operatingCondtionsFacets: FacetsState = useMemo(() => {
    const operatingConditonsFacetKeys: string[] = Object.values(facets)
      .filter(
        facet =>
          facet.configuration.category === FacetCategory.OperatingConditions
      )
      .map(facet => facet.key);
    const filteredFacets = { ...facets };
    Object.keys(filteredFacets)
      .filter(key => !operatingConditonsFacetKeys.includes(key))
      .forEach(key => delete filteredFacets[key]);
    return filteredFacets;
  }, [facets]);

  // The @operatingConditions parameter to be used in the api call
  const combinedOperatingConditionsApiParameter: string = useMemo(() => {
    const value = combineFacetsToEncodedOperatingConditionsParameter(
      Object.values(operatingCondtionsFacets)
    );
    return value;
  }, [operatingCondtionsFacets]);

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
      return Object.values(facets).find(facet => facet.key === key);
    },
    [facets]
  );

  // The @filters parameter to be used in the api call (may replace to finder)
  const combinedFiltersApiParameter: string = useMemo(() => {
    const value = combineFacetsToEncodedExternalFiltersString(
      Object.values(mainFacets),
      systemOfMeasurement,
      preFilters.categoryId,
      getAudience(locale)
    );
    return value;
  }, [locale, mainFacets, preFilters.categoryId, systemOfMeasurement]);

  // Persists the facet to the current state
  function storeFacet(facet: Facet) {
    dispatch({
      type: 'storeFacet',
      facet
    });
  }
  // Persists multiple facets to the current state
  function storeFacets(facets: FacetsState) {
    dispatch({
      type: 'storeFacets',
      facets
    });
  }

  return (
    <FacetsContext.Provider
      value={{
        mainFacets,
        operatingConditionsFacets: operatingCondtionsFacets,
        combinedFiltersApiParameter,
        combinedOperatingConditionsApiParameter,
        activeFacetKeys,
        activeFacets,
        preFilters,
        getFacet,
        storeFacet,
        storeFacets
      }}
    >
      {children}
    </FacetsContext.Provider>
  );
};
