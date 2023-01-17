import { useCallback, useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/dist/client/router';
import { ParsedUrlQuery } from 'querystring';
import { useQuery } from 'react-query';

import { useFacets } from '@providers/facets/facetsContext';
import { categoryIdFacet } from '@services/facet-service/facets/categoryId';
import { RangeFacetMatchType } from '@services/facet-service/facets/range-facets/rangeFacetHelper';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetControlType } from '@services/facet-service/models/facet/facetControlType';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';
import { FacetOption } from '@services/facet-service/models/facet/facetOption';
import { Range } from '@services/facet-service/models/facet/facetResult';
import {
  SystemOfMeasurement,
  UnitOfMeasurement
} from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { RangeFacetOptionKey } from '@services/facet-service/models/range-facets/rangeFacetOptionKey';
import { TextFormatter } from '@services/i18n/formatters/entity-formatters/textFormatter';
import {
  FacetedSearchFacetResult,
  FacetedSearchOdataCollection
} from '@services/portal-api/faceted-search/types';
import { fetchFacetedSearchResults } from '@services/portal-api/finder';
import { QUERYKEYS } from '@services/react-query/constants';
import { getTotalPages } from '@widgets/finder/result-view/product-result-view-pagination/resultViewPaginationHelper';

import { FinderContext } from './finderContext';
import { FinderQueryHelper } from './finderQueryHelper';

interface FinderProviderProps {
  initialData: FacetedSearchOdataCollection | undefined;
}
/**
 * Context Provider for the Finder Functionality throughout the application.
 * Filters: Operating Conditions; Main Facets
 * Results: Products
 * @param initialData to cache inside the queryClient
 */

export const FINDER_PAGE_SIZE = 10;
const textFormatter = new TextFormatter();
export const FinderProvider: React.FC<FinderProviderProps> = ({
  children
  // TODO: initialData may be used. Don't want to remove just yet
  // initialData
}) => {
  const { query, pathname, push } = useRouter();

  // TODO: initialData may be used. Don't want to remove just yet
  // const queryClient = useQueryClient();
  const [productCount, setProductCount] = useState<number | undefined>(
    undefined
  );
  const {
    storeFacets,
    mainFacets,
    operatingConditionsFacets: visibleOperatingConditionsFacets,
    combinedFiltersApiParameter,
    combinedOperatingConditionsApiParameter,
    preFilters
  } = useFacets();

  const page = useMemo(() => {
    const pageValue: number = Number(query.page || '1');
    const isValidPage: boolean =
      pageValue > 0 &&
      pageValue <= getTotalPages(productCount || 0, FINDER_PAGE_SIZE);
    return isValidPage ? pageValue : 1;
  }, [productCount, query.page]);

  // QueryResult for the FacetedSearch api call
  // Dependencies are the @filters and @operatingConditions parameter calculated in the FacetsContext,
  // and the searchQuery that has been passed as prefilter
  const {
    data: facetedSearchResults,
    status: facetedSearchStatus,
    error: facetedSearchError,
    isFetching
  } = useQuery(
    [
      QUERYKEYS.productFinderResults,
      combinedFiltersApiParameter,
      preFilters.searchQuery,
      combinedOperatingConditionsApiParameter,
      page
    ],
    () =>
      fetchFacetedSearchResults(
        combinedFiltersApiParameter,
        combinedOperatingConditionsApiParameter,
        preFilters.searchQuery,
        FINDER_PAGE_SIZE,
        FINDER_PAGE_SIZE * (page - 1)
      ),
    {
      onSuccess: data => setProductCount(data['@odata.count']),
      keepPreviousData: true
    }
  );

  /**
   * Function that returns all FacetedSearchFacetResults for the facet
   */
  const getFacetResult = useCallback(
    (facet: Facet) => {
      const results: FacetedSearchFacetResult[] | undefined =
        facetedSearchResults?.['@search.facets']?.[
          textFormatter.formatCamelCase(facet.attributeTypeCode)
        ];
      return results;
    },
    [facetedSearchResults]
  );

  /**
   * Function that checks if the query has a value for the facet
   */
  const isFacetActive = useCallback(
    (facetKey: FacetKey) => {
      return !!query[facetKey];
    },
    [query]
  );

  /**
   * Wrapper function that will push the route with query
   */
  const pushQuery = useCallback(
    (value: ParsedUrlQuery) => {
      push(
        {
          pathname,
          query: value
        },
        undefined,
        {
          shallow: true
        }
      );
    },
    [pathname, push]
  );

  /**
   * Function that will create a new query without the facet
   * Afterwards it will push the new query
   */
  const clearFacetOptions = useCallback(
    (facetKey: FacetKey) => {
      const newQuery: ParsedUrlQuery =
        FinderQueryHelper.removeValuesForKeyInUrlQuery(facetKey, query);

      pushQuery(newQuery);
    },
    [pushQuery, query]
  );
  /**
   * Function that will create a new query without the search query
   * Afterwards it will push the new query
   */
  const clearSearch = useCallback(() => {
    const newQuery: ParsedUrlQuery =
      FinderQueryHelper.removeSearchInUrlQuery(query);

    pushQuery(newQuery);
  }, [pushQuery, query]);
  /**
   * Function that will create a new query without the theoretical flow (operating conditions excluding spray angle)
   * Afterwards it will push the new query
   */
  const clearTheoreticalFlow = useCallback(() => {
    const theoreticalFlowKeys: FacetKey[] = [
      FacetKey.LiquidFlowRate,
      FacetKey.LiquidPressure,
      FacetKey.LiquidSpecificGravity
    ];
    const newQuery: ParsedUrlQuery =
      FinderQueryHelper.removeValuesForKeysInUrlQuery(
        theoreticalFlowKeys,
        query
      );

    pushQuery(newQuery);
  }, [pushQuery, query]);
  /**
   * Function that will create a new query without any facet
   * Afterwards it will push the new query
   */
  const clearAllFacets = useCallback(() => {
    const newQuery: ParsedUrlQuery =
      FinderQueryHelper.removeAllValuesInUrlQuery(query);

    pushQuery(newQuery);
  }, [pushQuery, query]);

  /**
   * Function that will toggle the value for the option in a new query.
   * Afterwards it will push the new query.
   * (This is functionality used by the checkbox facets)
   */
  const toggleFacetOption = useCallback(
    (facetKey: FacetKey, facetOptionKey: string) => {
      const newQuery: ParsedUrlQuery = FinderQueryHelper.toggleValueInUrlQuery(
        facetKey,
        facetOptionKey,
        query // { categorySlug: ['full-cone-nozzles'], materials=}
      );

      pushQuery(newQuery);
    },
    [query, pushQuery]
  );

  /**
   * Function that will apply the operating conditions to the query.
   * Afterwards it will push the new query
   */
  const applyOperatingConditions = useCallback(
    (operatingConditons: Facet[]) => {
      const newQuery: ParsedUrlQuery =
        FinderQueryHelper.updateOperatingConditionsInUrlQuery(
          operatingConditons,
          query
        );
      pushQuery(newQuery);
    },
    [pushQuery, query]
  );

  /**
   * Function that will determine, based on different dependencies, whether to show a facet in
   * in the panel.
   * Reasons why a facet is not visible in the panel:
   * - By Configuration
   * - By Hierarchy: (Category > Series > Model)
   * - By Results: (No active options and no options with results)
   */
  const showFacetInPanel = useCallback(
    (facet: Facet) => {
      const isHiddenByConfiguration: boolean =
        !!facet.configuration.hideInProductFinderPanel;

      if (isHiddenByConfiguration) {
        return false;
      }
      let isHiddenByHierarchy: boolean = false;

      if (facet.key === FacetKey.ModelId) {
        const subCategoriesForCurrentCategory: number =
          categoryIdFacet.options.find(
            option => option.valueId === preFilters.categoryId
          )?.children?.length || 0;
        isHiddenByHierarchy = subCategoriesForCurrentCategory > 1;
      }

      if (isHiddenByHierarchy) {
        return false;
      }

      const facetResults: FacetedSearchFacetResult[] | undefined =
        getFacetResult(facet);

      const isFacetWithMoreThan1Result: boolean = !!(
        facetResults && facetResults.length > 1
      );
      if (isFacetWithMoreThan1Result) {
        return true;
      }
      const isActiveCheckboxFacet: boolean =
        facet.configuration.controlType === FacetControlType.Checkbox
          ? isFacetActive(facet.key)
          : false;

      return isActiveCheckboxFacet;
    },
    [getFacetResult, isFacetActive, preFilters.categoryId]
  );

  /**
   * Facets that can be shown in the panel
   */
  const visibleMainFacets: Facet[] = useMemo(() => {
    return Object.values(mainFacets).filter(facet => showFacetInPanel(facet));
  }, [mainFacets, showFacetInPanel]);

  const modelCount: number | undefined = useMemo(() => {
    if (isFacetActive(FacetKey.ModelId)) {
      return FinderQueryHelper.getValuesForKeyInUrlQuery(
        FacetKey.ModelId,
        query
      )?.split(',').length;
    }
    return facetedSearchResults?.['@search.facets']?.modelId?.length;
  }, [facetedSearchResults, isFacetActive, query]);
  /**
   * Function that will return the value of the matchtype for an operating condition facet.
   * @param operatingCondition Facet to get the matchtype for
   * @returns RangeFacetMatchType | undefined
   */
  function getOperatingConditionMatchType(
    operatingCondition: Facet
  ): RangeFacetMatchType | undefined {
    const matchTypeOption: FacetOption | undefined =
      operatingCondition.options.find(
        option => option.key === RangeFacetOptionKey.MatchType
      );
    return matchTypeOption?.value as RangeFacetMatchType | undefined;
  }

  /**
   * Function that will return the value for the active unit for an operating condition facet.
   * It will fallback to the base unit based on the SystemOfMeasurement if no value is active.
   * It will fallback to the base unit if no base unit is present for the SystemOfMeasurement and if no value is active.
   * @param operatingCondition Facet to get the unit for
   * @param systemOfMeasurement SystemOfMeasurement used to get the base unit
   * @returns UnitOfMeasurement | undefined
   */
  function getOperatingConditionUnit(
    operatingCondition: Facet,
    systemOfMeasurement: SystemOfMeasurement
  ): UnitOfMeasurement | undefined {
    // 1. If there's a unit set in the facet, return that unit
    const unitOption: FacetOption | undefined = operatingCondition.options.find(
      option => option.key === RangeFacetOptionKey.Unit
    );
    if (unitOption?.isActive && !!unitOption?.value) {
      return unitOption.value as UnitOfMeasurement;
    }

    if (!operatingCondition.unit || !operatingCondition.alternativeUnits) {
      return undefined;
    }
    // 2. If there's a base unit for the systemOfMeasurement, return that unit.
    const baseSystemOfMeasurementUnit: UnitOfMeasurement | undefined = [
      operatingCondition.unit as UnitOfMeasurement,
      ...(operatingCondition.alternativeUnits as UnitOfMeasurement[])
    ].find(unit => {
      return unit.system === systemOfMeasurement && unit.isBase;
    });
    if (baseSystemOfMeasurementUnit) {
      // If the base unit was found, return it
      return baseSystemOfMeasurementUnit;
    }

    // 3. Return the default unit.
    return operatingCondition.unit as UnitOfMeasurement;
  }

  /**
   * Function that will return the value of the corresponding facetOption based on the operating condition that was passed.
   * - LiquidFlowRate will return the value inside the NearBy facetOption.
   * - LiquidPressure will return the value inside the Exact facetOption.
   * - LiquidSpecificGravity will return the value inside the Exact facetOption.
   * - SprayAngle will return the Range inside the Minimum and Maximum facetOption.
   * @param operatingCondition Facet to get the value for
   * @returns Range | number | string | null value
   */
  function getOperatingConditionValue(
    operatingCondition: Facet
  ): Range | number | string | null {
    switch (operatingCondition.key) {
      case FacetKey.LiquidFlowRate:
        return operatingCondition.options.find(
          (option: FacetOption<RangeFacetOptionKey>) =>
            option.key === RangeFacetOptionKey.Nearby
        )?.value as number | string | null;
      case FacetKey.LiquidPressure:
        return operatingCondition.options.find(
          (option: FacetOption<RangeFacetOptionKey>) =>
            option.key === RangeFacetOptionKey.Exact
        )?.value as number | string | null;
      case FacetKey.LiquidSpecificGravity:
        return operatingCondition.options.find(
          (option: FacetOption<RangeFacetOptionKey>) =>
            option.key === RangeFacetOptionKey.Exact
        )?.value as number | string | null;
      case FacetKey.SprayAngle: {
        const minimum = operatingCondition.options.find(
          (option: FacetOption<RangeFacetOptionKey>) =>
            option.key === RangeFacetOptionKey.Minimum
        )?.value;
        const maximum = operatingCondition.options.find(
          (option: FacetOption<RangeFacetOptionKey>) =>
            option.key === RangeFacetOptionKey.Maximum
        )?.value;
        const range: Range = {
          minimum: minimum as number | null | undefined,
          maximum: maximum as number | null | undefined
        };
        return range;
      }
      default:
        return null;
    }
  }
  // TODO: May be implemented later on
  // useEffect(() => {
  //   // Manually set the initial data for the category without any additional filters
  //   if (preFilters.categoryId) {
  //     const categoryFilter: string | undefined = mapCategoryIdToExternalFilter(
  //       preFilters.categoryId
  //     );
  //     const encodedCategoryFilter: string = encodeURIComponent(
  //       JSON.stringify([categoryFilter])
  //     );

  //     queryClient.setQueryData(
  //       [
  //         QUERYKEYS.productFinderResults,
  //         encodedCategoryFilter,
  //         undefined,
  //         'null'
  //       ],
  //       initialData
  //     );
  //   }
  // }, [initialData, preFilters.categoryId, queryClient]);

  useEffect(() => {
    // When the query changes we want to store the updated facets to the FacetsContext
    storeFacets(FinderQueryHelper.getFacetsFromQuery(query));
    // WE DO NOT WANT ANY DEPENDENCY ON THE FACETS PROVIDER. This will cause an endless loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <FinderContext.Provider
      value={{
        showFacetInPanel,
        isFacetActive,
        visibleMainFacets,
        visibleOperatingConditionsFacets,
        applyOperatingConditions,
        toggleFacetOption,
        clearAllFacets,
        clearSearch,
        clearTheoreticalFlow,
        clearFacetOptions,
        productCount: facetedSearchResults?.['@odata.count'],
        modelCount,
        getFacetResult,
        getOperatingConditionUnit,
        getOperatingConditionMatchType,
        getOperatingConditionValue,
        facetedSearchError: facetedSearchError as Error | undefined,
        facetedSearchStatus,
        isFetching,
        searchQuery: preFilters.searchQuery,
        products: facetedSearchResults?.value || []
      }}
    >
      {children}
    </FinderContext.Provider>
  );
};
