/* eslint-disable no-case-declarations */
import { formatCamelCase } from '../../../utilities/formatText';
import { ExternalFilter } from '../../portal-api/base/types';
import { Json } from '../../portal-api/models/Json';
import {
  getRangeFacetUnit,
  RangeFacetMatchType
} from '../facets/range-facets/rangeFacetHelper';
import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOptionValueType } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import {
  SystemOfMeasurement,
  UnitOfMeasurement
} from '../models/facet/facetUnitOfMeasurement';
import { RangeFacetOptionKey } from '../models/range-facets/rangeFacetOptionKey';
import { RangeFacet } from '../models/range-facets/rangeProductFacet';

/**
 * Function that will combine all relevant facets to the encoded parameter value @filters required by the product finder api calls.
 * At the time of writing all relevant facets are the one with FacetCategory.Default.
 * At the time of writing relevant product finder api calls are: GroupByFacets, Find, CountBySeriesModels.
 * @param facets Array of relevant facets
 * @param systemOfMeasurement SystemOfMeasurement that is currently active in the application
 * @param sprayPortalDemoCategoryPageId Guid of the category page. Should be undefined if on irrelevant page (e.g: search, model, series);
 * @returns an encoded value string that represents the @filters parameter value
 */
export function combineFacetsToEncodedExternalFiltersString(
  facets: Facet[],
  systemOfMeasurement: SystemOfMeasurement,
  sprayPortalDemoCategoryPageId?: string | undefined
): string {
  const extraFilters: ExternalFilter[] = [];

  // If a category id was included, create an external filter that will be added to the external filters array.
  // Note: Inside the application the category filter is treated as a 'Pre-filter'. However, in the api call it needs to be part of the @filters parameter
  if (sprayPortalDemoCategoryPageId) {
    const categoryFilter: ExternalFilter = {
      key: formatCamelCase(FacetKey.SprayPortalDemoCategoryPage), // the api needs a camelCase key
      operator: 'eq',
      value: sprayPortalDemoCategoryPageId.toUpperCase() // guid must be uppercase and string value
    };
    extraFilters.push(categoryFilter);
  }

  // Map the facets to externalfilters and concatenate with the extra filters.
  const externalFilters: ExternalFilter[] = mapFacetsToExernalFilters(
    facets,
    systemOfMeasurement
  ).concat(extraFilters);

  // Encode the stringified filters
  const encodedExternalFilters: string = encodeURIComponent(
    JSON.stringify(externalFilters)
  );

  return encodedExternalFilters || '';
}

export function mapFacetsToExernalFilters(
  facets: Facet[],
  systemOfMeasurement: SystemOfMeasurement
): ExternalFilter[] {
  const externalFilters: Array<ExternalFilter | undefined> = [];

  // Map through the facets that: 1) Have FacetCategory.Default as their category; 2) Have at least a single active option
  facets
    .filter(facet => facet.configuration.category === FacetCategory.Default)
    .filter(facet => !!facet.options.find(option => !!option.isActive))
    .forEach(facet => {
      // Based on their selectType, the external filter must be built differently.
      switch (facet.configuration.selectType) {
        case FacetSelectType.SingleSelect:
          // Get the first active option.
          const activeOption = facet.options.find(option => option.isActive);
          // Map the facet with the active option to an ExternalFilter
          const singleSelectFilter: ExternalFilter =
            mapSingleSelectFacetToExternalFilter(
              facet.key,
              (activeOption && activeOption.valueId) || undefined,
              (activeOption && activeOption.value) || undefined
            );
          // Add the external filter to the array
          externalFilters.push(singleSelectFilter);
          break;
        case FacetSelectType.MultiSelect:
          // Get all active options
          const activeOptions = facet.options.filter(option => option.isActive);
          // Map the facet with all active options to an ExternalFilter
          const multiSelectFilter: ExternalFilter =
            mapMultiSelectFacetToExternalFilter(
              facet.key,
              activeOptions
                .filter(option => !!option.valueId)
                .map(option => option.valueId as string),
              activeOptions
                .filter(option => !!option.value)
                .map(option => option.value as Json)
            );
          // Add the external filter to the array
          externalFilters.push(multiSelectFilter);
          break;
        case FacetSelectType.RangeBetween:
          // Map the facet to an array of ExternalFilters (minimum and maximum)
          const rangeBetweenFilters: ExternalFilter[] =
            mapRangeBetweenFacetToExternalFilters(
              facet as unknown as RangeFacet,
              systemOfMeasurement
            );
          // Add the external fitlers to the array
          externalFilters.push(...rangeBetweenFilters);
          break;
      }
    });

  // Return all defined external filters
  return externalFilters.filter(
    filter => filter !== undefined
  ) as ExternalFilter[];
}

// Function that will map the lookupValueId to an ExternalFilter for a given facet key.
// If the lookupValueId is undefined but value is not, it will map the value instead.
function mapSingleSelectFacetToExternalFilter(
  facetKey: string,
  lookupValueId?: string,
  value?: FacetOptionValueType
): ExternalFilter {
  facetKey = formatCamelCase(facetKey); //  api expects camelCase key
  const externalFilter: ExternalFilter = {
    key: facetKey,
    operator: 'eq',
    value: ''
  };

  if (lookupValueId) {
    externalFilter.value = lookupValueId.toUpperCase();
    return externalFilter;
  }
  if (value) {
    externalFilter.value = value.toString();
    return externalFilter;
  }

  throw new Error(
    'Option must have either a lookupValueId or set value that is a primitive type (not a multilingual string)'
  );
}
// Function that will map ALL lookupValueIds OR ALL values to an ExternalFilter for a given facet key.
// e.g: if passed both an array of lookupValueIds and an array of values. Only the lookupValueIds will be mapped.
function mapMultiSelectFacetToExternalFilter(
  facetKey: string,
  lookupValueIds: string[],
  values: Json[]
): ExternalFilter {
  const odataType: '#Collection(Decimal)' | '#Collection(String)' =
    facetKey === FacetKey.InletConnectionSize ||
    facetKey === FacetKey.StrainerScreenMeshSize
      ? '#Collection(Decimal)'
      : '#Collection(String)';
  facetKey = formatCamelCase(facetKey); // api requires camel case key
  const externalFilter: ExternalFilter = {
    key: facetKey,
    operator: 'in',
    'value@odata.type': odataType,
    value: []
  };

  if (lookupValueIds.length) {
    externalFilter.value = lookupValueIds.map(id => id.toUpperCase());
    return externalFilter;
  }
  if (values.length && !!values[0]) {
    externalFilter.value = values.map(value =>
      odataType === '#Collection(Decimal)' ? value : value.toString()
    ) as Array<string> | Array<number>;
    return externalFilter;
  }

  throw new Error(
    'Option must have either a lookupValueId or set value that is a primitive type (not a multilingual string)'
  );
}

function mapRangeBetweenFacetToExternalFilters(
  facet: RangeFacet,
  systemOfMeasurement: SystemOfMeasurement
): ExternalFilter[] {
  const isAnyNumericOptionActive: boolean = !!facet.options
    .filter(option =>
      [
        RangeFacetOptionKey.Minimum,
        RangeFacetOptionKey.Maximum,
        RangeFacetOptionKey.Exact,
        RangeFacetOptionKey.Nearby
      ].includes(option.key)
    )
    .find(option => !!option.isActive);

  // If none of the numeric options are active return ''.
  if (!isAnyNumericOptionActive) {
    return [];
  }
  const facetKey: string = formatCamelCase(facet.key);
  const rangeFacetUnit: UnitOfMeasurement = getRangeFacetUnit(
    facet,
    systemOfMeasurement
  );

  const matchType: RangeFacetMatchType =
    (facet.options.find(option => option.key === RangeFacetOptionKey.MatchType)
      ?.value as RangeFacetMatchType) || facet.defaultMatchType;
  switch (matchType) {
    case RangeFacetMatchType.Range:
      return matchRangeBetweenRangeToOdataWithKey(
        facet,
        facetKey,
        rangeFacetUnit
      );
    case RangeFacetMatchType.Exact:
      return matchRangeBetweenExactMatchToOdataWithKey(
        facet,
        facetKey,
        rangeFacetUnit
      );
    case RangeFacetMatchType.Nearby:
      return matchRangeBetweenNearbyMatchToOdataWithKey(
        facet,
        facetKey,
        rangeFacetUnit
      );
    default:
      return [];
  }
}

function matchRangeBetweenNearbyMatchToOdataWithKey(
  facet: RangeFacet,
  facetKey: string,
  unit: UnitOfMeasurement
): ExternalFilter[] {
  const rangeFilters: ExternalFilter[] = [];
  const minimumFilter: ExternalFilter = {
    key: `${facetKey}/minimum`,
    operator: 'le',
    value: 0
  };
  const maximumFilter: ExternalFilter = {
    key: `${facetKey}/maximum`,
    operator: 'ge',
    value: 0
  };
  const minimum: number | null | undefined = facet.options.find(
    option => option.key === RangeFacetOptionKey.Nearby
  )?.value as number | null | undefined;
  const maximum: number | null | undefined = facet.options.find(
    option => option.key === RangeFacetOptionKey.Nearby
  )?.value as number | null | undefined;

  if (minimum !== undefined && minimum !== null) {
    maximumFilter.value = unit.toDefault(+minimum - +minimum / 10);
    rangeFilters.push(maximumFilter);
  }
  if (maximum !== undefined && maximum !== null) {
    minimumFilter.value = unit.toDefault(+maximum + +maximum / 10);
    rangeFilters.push(minimumFilter);
  }
  return rangeFilters;
}
function matchRangeBetweenExactMatchToOdataWithKey(
  facet: RangeFacet,
  facetKey: string,
  unit: UnitOfMeasurement
): ExternalFilter[] {
  const rangeFilters: ExternalFilter[] = [];
  const minimumFilter: ExternalFilter = {
    key: `${facetKey}/minimum`,
    operator: 'le',
    value: 0
  };
  const maximumFilter: ExternalFilter = {
    key: `${facetKey}/maximum`,
    operator: 'ge',
    value: 0
  };
  const minimum: number | null | undefined = facet.options.find(
    option => option.key === RangeFacetOptionKey.Exact
  )?.value as number | null | undefined;
  const maximum: number | null | undefined = facet.options.find(
    option => option.key === RangeFacetOptionKey.Exact
  )?.value as number | null | undefined;
  if (minimum !== undefined && minimum !== null) {
    maximumFilter.value = unit.toDefault(minimum);
    rangeFilters.push(maximumFilter);
  }
  if (maximum !== undefined && maximum !== null) {
    minimumFilter.value = unit.toDefault(maximum);
    rangeFilters.push(minimumFilter);
  }
  return rangeFilters;
}
function matchRangeBetweenRangeToOdataWithKey(
  facet: RangeFacet,
  facetKey: string,
  unit: UnitOfMeasurement
): ExternalFilter[] {
  const rangeFilters: ExternalFilter[] = [];
  const minimumFilter: ExternalFilter = {
    key: `${facetKey}/minimum`,
    operator: 'le',
    value: 0
  };
  const maximumFilter: ExternalFilter = {
    key: `${facetKey}/maximum`,
    operator: 'ge',
    value: 0
  };
  const minimum: number | null | undefined = facet.options.find(
    option => option.key === RangeFacetOptionKey.Minimum
  )?.value as number | null | undefined;
  const maximum: number | null | undefined = facet.options.find(
    option => option.key === RangeFacetOptionKey.Maximum
  )?.value as number | null | undefined;
  if (minimum !== undefined && minimum !== null) {
    maximumFilter.value = unit.toDefault(minimum);
    rangeFilters.push(maximumFilter);
  }
  if (maximum !== undefined && maximum !== null) {
    minimumFilter.value = unit.toDefault(maximum);
    rangeFilters.push(minimumFilter);
  }
  return rangeFilters;
}
