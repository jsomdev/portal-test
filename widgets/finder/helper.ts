import { ParsedUrlQuery } from 'querystring';

import { RangeFacetMatchType } from '@services/facet-service/facets/range-facets/rangeFacetHelper';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetControlType } from '@services/facet-service/models/facet/facetControlType';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';
import {
  FacetOption,
  FacetOptionValueType
} from '@services/facet-service/models/facet/facetOption';
import { UnitOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { RangeFacetOptionKey } from '@services/facet-service/models/range-facets/rangeFacetOptionKey';
import { RangeFacetExtraAttributes } from '@services/facet-service/models/range-facets/rangeProductFacet';
import { FacetedSearchFacetResult } from '@services/portal-api/faceted-search/types';
import { ModelSeriesGrouping } from '@services/portal-api/models/ModelSeriesGrouping';

import { ModelGroupingResult, SeriesGroupingResult } from './types';

export function mapModelsSeriesGroupingToSeriesGroupingResult(
  modelSeriesGrouping: ModelSeriesGrouping[]
): SeriesGroupingResult[] {
  const seriesGroupingResult: SeriesGroupingResult[] = [];

  modelSeriesGrouping.forEach(modelsSeriesGroup => {
    let existingSeriesGroupingResult: SeriesGroupingResult | undefined =
      seriesGroupingResult.find(s => s.id === modelsSeriesGroup.seriesId);

    if (!existingSeriesGroupingResult) {
      const newSeriesGroupingResult: SeriesGroupingResult = {
        productCount: 0,
        models: [],
        id: modelsSeriesGroup.seriesId || ''
      };
      existingSeriesGroupingResult = { ...newSeriesGroupingResult };
      seriesGroupingResult.push(existingSeriesGroupingResult);
    }
    const newModelGroupingResult: ModelGroupingResult = {
      id: modelsSeriesGroup.modelId || '',
      seriesId: modelsSeriesGroup.seriesId || '',
      productCount: modelsSeriesGroup.count || 0
    };
    const index: number = seriesGroupingResult.findIndex(
      s => s.id === newModelGroupingResult.seriesId
    );

    if (index >= 0) {
      seriesGroupingResult[index].productCount =
        seriesGroupingResult[index].productCount +
        newModelGroupingResult.productCount;
      seriesGroupingResult[index].models = [
        ...seriesGroupingResult[index].models,
        newModelGroupingResult
      ];
    }
  });
  return seriesGroupingResult;
}

export function getFacetUnitOfMeasurementBySymbol(
  facet: Facet,
  symbol: string | null
): UnitOfMeasurement | null {
  if (facet.configuration.controlType === FacetControlType.Range) {
    const rangeFacet = facet as unknown as Facet<
      RangeFacetOptionKey,
      FacetOption<RangeFacetOptionKey>,
      RangeFacetExtraAttributes
    >;

    return getUnitOfMeasurementBySymbol(
      [rangeFacet.unit, ...rangeFacet.alternativeUnits],
      symbol
    );
  }

  return null;
}

export function getUnitOfMeasurementBySymbol(
  units: UnitOfMeasurement[],
  selectedSymbol: string | null
): UnitOfMeasurement | null {
  return units.find(unit => unit.symbol === selectedSymbol) || null;
}

export const getUpdatedParsedUrlQuery = (
  currentQuery: ParsedUrlQuery,
  updatedFacet: Facet<FacetKey, FacetOption>
): ParsedUrlQuery => {
  switch (updatedFacet.configuration.controlType) {
    case FacetControlType.Checkbox:
      return getUpdatedParsedUrlQueryForCheckbox(currentQuery, updatedFacet);
    case FacetControlType.Range:
      return getUpdatedFinderQuery(currentQuery, updatedFacet);

    default:
      return { ...currentQuery };
  }
};

export const getUpdatedParsedUrlQueryForCheckbox = (
  currentQuery: ParsedUrlQuery,
  updatedFacet: Facet<FacetKey, FacetOption>
): ParsedUrlQuery => {
  // Get the active options by key
  const activeOptions: string[] = updatedFacet.options
    .filter(option => option.isActive)
    .map(option => option.key);

  const parsedQuery = { ...currentQuery };
  // Delete any (possible) values for the facet
  parsedQuery[updatedFacet.key] = undefined;
  // Append the values for the facets
  if (activeOptions.length) {
    parsedQuery[updatedFacet.key] = activeOptions;
  }
  return parsedQuery;
};

export const getUpdatedFinderQuery = (
  currentQuery: ParsedUrlQuery,
  updatedFacet: Facet<FacetKey, FacetOption>
): ParsedUrlQuery => {
  const matchType: RangeFacetMatchType =
    (updatedFacet.options.find(
      option => option.key === RangeFacetOptionKey.MatchType
    )?.value as RangeFacetMatchType) ||
    undefined ||
    RangeFacetMatchType.Range;

  const matchTypeValue: string = matchType.toString();

  const unit: UnitOfMeasurement =
    (updatedFacet.options.find(
      option => option.key === RangeFacetOptionKey.Unit
    )?.value as UnitOfMeasurement) ||
    undefined ||
    null;
  const unitValue: string | null = unit?.symbol || null;
  let minimumValue: number | null = null;
  let maximumValue: number | null = null;

  switch (matchType) {
    case RangeFacetMatchType.Range:
      {
        const minimumOption = updatedFacet.options.find(
          option => option.key === RangeFacetOptionKey.Minimum
        );
        const maximumOption = updatedFacet.options.find(
          option => option.key === RangeFacetOptionKey.Maximum
        );
        minimumValue =
          (minimumOption?.value as number | null | undefined) || null;
        maximumValue =
          (maximumOption?.value as number | null | undefined) || null;
      }
      break;
    case RangeFacetMatchType.Nearby:
      {
        const option = updatedFacet.options.find(
          option => option.key === RangeFacetOptionKey.Nearby
        );
        minimumValue = (option?.value as number | null | undefined) || null;
        if (minimumValue) {
          minimumValue = +minimumValue - +minimumValue / 10;
        }
        maximumValue = (option?.value as number | null | undefined) || null;
        if (maximumValue) {
          maximumValue = +maximumValue + +maximumValue / 10;
        }
      }
      break;
    case RangeFacetMatchType.Exact:
      {
        const option = updatedFacet.options.find(
          option => option.key === RangeFacetOptionKey.Exact
        );
        minimumValue = (option?.value as number | null | undefined) || null;
        maximumValue = (option?.value as number | null | undefined) || null;
      }
      break;
    default:
      break;
  }
  const parsedQuery = { ...currentQuery };
  // Delete any (possible) values for the facet
  parsedQuery[updatedFacet.key] = undefined;
  // Append the values for the facets

  if (minimumValue !== null && maximumValue !== null) {
    parsedQuery[updatedFacet.key] = [
      minimumValue.toString(),
      maximumValue.toString(),
      matchTypeValue,
      unitValue?.toString() || 'null'
    ];
  }
  return parsedQuery;
};

export function filterActiveCheckboxFacetOption(option: FacetOption): boolean {
  // If the option is active, return true
  if (option.isActive) {
    return true;
  }
  return false;
}

export function filterFacetOptionWithResults(
  option: FacetOption,
  predictedResults: FacetedSearchFacetResult[] | undefined
): boolean {
  if (predictedResults === undefined) {
    return false;
  }
  const predictedResultCount: number | undefined = getPredictedCountForOption(
    predictedResults,
    option.valueId,
    option.value
  );
  if (predictedResultCount) {
    return true;
  }
  return false;
}

/**
 * Function that will look for the productFacetResult matching the parameters that were passed and returns
 * the count of that result or undefined if no result was found.
 * @param predictedResults Object that holds the predictedResultValues for a specific facet
 * @param valueId Id that identifies the option inside the FacetResults
 * @param value FallbackValue that identifies the option in case the lookupValueId isn't passed or no option has been found
 */
export function getPredictedCountForOption(
  predictedResults: FacetedSearchFacetResult[],
  valueId?: string | null,
  value?: FacetOptionValueType
): number | undefined {
  if (predictedResults.length) {
    if (valueId) {
      const result = predictedResults.find(
        res => res.value?.toString().toLowerCase() === valueId?.toLowerCase()
      );
      if (result) {
        return result.count;
      }
    }

    if (value) {
      const result = predictedResults.find(res => {
        return JSON.stringify(res.value) === JSON.stringify(value);
      });
      if (result) {
        return result.count;
      }
    }
  }

  return undefined;
}

export function sortFacetOptions(
  a: FacetOption & { formattedValue: string },
  b: FacetOption & { formattedValue: string }
): number {
  const sortIndexA: number = a.configuration.sortIndex || 0;
  const sortIndexB: number = b.configuration.sortIndex || 0;
  return (
    sortIndexA - sortIndexB ||
    a.formattedValue.localeCompare(b.formattedValue, 'en', {
      sensitivity: 'base'
    })
  );
}
