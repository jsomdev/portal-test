/* eslint-disable no-case-declarations */
import { TextFormatter } from '@services/i18n/formatters/entity-formatters/textFormatter';
import { FlaggedEnum } from '@services/portal-api/flaggedEnum';
import { Audience } from '@services/portal-api/models/AudienceFlags';

import {
  RangeFacetMatchType,
  getRangeFacetUnit
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

export function mapCategoryIdToExternalFilter(id: string): string {
  return `categoryId/any(c: c eq '${id}')`;
}

export function mapAudienceToExternalFilter(audience: Audience): string {
  const audienceFlag = FlaggedEnum.toString<Audience>(Audience, audience);
  return `audience has SSCo.DigitalHighway.Portal.Data.Enumerations'${audienceFlag}'`;
}
/**
 * Function that will combine all relevant facets to the encoded parameter value @filters required by the product finder api calls.
 * At the time of writing all relevant facets are the one with FacetCategory.Main.
 * At the time of writing relevant product finder api calls are: GroupByFacets, Find, CountBySeriesModels.
 * @param facets Array of relevant facets
 * @param systemOfMeasurement SystemOfMeasurement that is currently active in the application
 * @param categoryId Guid of the category page. Should be undefined if on irrelevant page (e.g: search, model, series);
 * @returns an encoded value string that represents the @filters parameter value
 */
export function combineFacetsToEncodedExternalFiltersString(
  facets: Facet[],
  systemOfMeasurement: SystemOfMeasurement,
  categoryId?: string | undefined,
  audience?: Audience | undefined
): string {
  const extraFilters: string[] = [];

  // If a category id was included, create an external filter that will be added to the external filters array.
  // Note: Inside the application the category filter is treated as a 'Pre-filter'. However, in the api call it needs to be part of the @filters parameter
  if (categoryId) {
    extraFilters.push(mapCategoryIdToExternalFilter(categoryId));
  }

  if (audience !== undefined) {
    extraFilters.push(mapAudienceToExternalFilter(audience));
  }

  // Map the facets to externalfilters and concatenate with the extra filters.
  const externalFilters: string[] = mapFacetsToExernalFilters(
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
): string[] {
  const externalFilters: Array<string | undefined> = [];

  // Map through the facets that: 1) Have FacetCategory.Main as their category; 2) Have at least a single active option
  facets
    .filter(facet => facet.configuration.category === FacetCategory.Main)
    .filter(facet => !!facet.options.find(option => !!option.isActive))
    .forEach(facet => {
      const type: 'string' | 'number' =
        facet.key === FacetKey.InletConnectionSize ||
        facet.key === FacetKey.NozzleCount ||
        facet.key === FacetKey.StrainerScreenMeshSize
          ? 'number'
          : 'string';
      // Based on their selectType, the external filter must be built differently.
      switch (facet.configuration.selectType) {
        case FacetSelectType.SingleSelect:
          // Get the first active option.
          const activeOption = facet.options.find(option => option.isActive);
          // Map the facet with the active option to an ExternalFilter
          const singleSelectFilter: string =
            mapSingleSelectFacetToExternalFilter(
              facet.key,
              type,
              (activeOption && activeOption.value) || undefined
            );
          // Add the external filter to the array
          externalFilters.push(singleSelectFilter);
          break;
        case FacetSelectType.MultiSelect:
          // Get all active options
          const activeOptions = facet.options.filter(option => option.isActive);
          // Map the facet with all active options to an ExternalFilter
          const multiSelectFilter: string = mapMultiSelectFacetToExternalFilter(
            facet.key,
            type,
            activeOptions
              .filter(option => !!option.value)
              .map(option => option.value as string | number)
          );
          // Add the external filter to the array
          externalFilters.push(multiSelectFilter);
          break;
        case FacetSelectType.RangeBetween:
          // Map the facet to an array of ExternalFilters (minimum and maximum)
          const rangeBetweenFilters: string[] =
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
  return externalFilters.filter(filter => filter !== undefined) as string[];
}

// Function that will map the value to an ExternalFilter for a given facet key.
function mapSingleSelectFacetToExternalFilter(
  facetKey: string,
  type: 'string' | 'number',
  value?: FacetOptionValueType
): string {
  const typeQuotes: string = type === 'string' ? `'` : '';
  const textFormatter = new TextFormatter();
  if (value) {
    return `${textFormatter.formatCamelCase(
      facetKey
    )}/any(f: f eq ${typeQuotes}${value.toString()}${typeQuotes})`;
  }

  throw new Error(
    'Option must have a set value that is a primitive type (not a multilingual string)'
  );
}
// Function that will map ALL  values to an ExternalFilter for a given facet key.
function mapMultiSelectFacetToExternalFilter(
  facetKey: string,
  type: 'string' | 'number',
  values: FacetOptionValueType[]
): string {
  let filters: string[] = [];
  const separator: string = ', ';
  const typeQuotes: string = type === 'string' ? `'` : '';

  if (values.length && !!values[0]) {
    filters = values.map(
      value => `${typeQuotes}${value?.toString()}${typeQuotes}`
    );
    const textFormatter = new TextFormatter();
    return `${textFormatter.formatCamelCase(
      facetKey
    )}/any(f: f in (${filters.join(separator)}))`;
  }

  throw new Error(
    'Option must have a set value that is a primitive type (not a multilingual string)'
  );
}

function mapRangeBetweenFacetToExternalFilters(
  facet: RangeFacet,
  systemOfMeasurement: SystemOfMeasurement
): string[] {
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
  const textFormatter = new TextFormatter();
  const facetKey: string = textFormatter.formatCamelCase(facet.key);
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
): string[] {
  const rangeFilters: string[] = [];

  const minimum: number | null | undefined = facet.options.find(
    option => option.key === RangeFacetOptionKey.Nearby
  )?.value as number | null | undefined;
  const maximum: number | null | undefined = facet.options.find(
    option => option.key === RangeFacetOptionKey.Nearby
  )?.value as number | null | undefined;

  if (minimum !== undefined && minimum !== null) {
    const maximuFilterValue: number = unit.toDefault(+minimum - +minimum / 10);
    const maximumFilter: string = `${facetKey}/maximum ge ${maximuFilterValue}`;

    rangeFilters.push(maximumFilter);
  }
  if (maximum !== undefined && maximum !== null) {
    const minimumFilterValue: number = unit.toDefault(+maximum + +maximum / 10);
    const minimumFilter: string = `${facetKey}/minimum le ${minimumFilterValue}`;

    rangeFilters.push(minimumFilter);
  }
  return rangeFilters;
}
function matchRangeBetweenExactMatchToOdataWithKey(
  facet: RangeFacet,
  facetKey: string,
  unit: UnitOfMeasurement
): string[] {
  const rangeFilters: string[] = [];

  const minimum: number | null | undefined = facet.options.find(
    option => option.key === RangeFacetOptionKey.Exact
  )?.value as number | null | undefined;
  const maximum: number | null | undefined = facet.options.find(
    option => option.key === RangeFacetOptionKey.Exact
  )?.value as number | null | undefined;
  if (minimum !== undefined && minimum !== null) {
    const maximuFilterValue: number = unit.toDefault(minimum);
    const maximumFilter: string = `${facetKey}/maximum ge ${maximuFilterValue}`;
    rangeFilters.push(maximumFilter);
  }
  if (maximum !== undefined && maximum !== null) {
    const minimumFilterValue: number = unit.toDefault(maximum);
    const minimumFilter: string = `${facetKey}/minimum le ${minimumFilterValue}`;
    rangeFilters.push(minimumFilter);
  }
  return rangeFilters;
}
function matchRangeBetweenRangeToOdataWithKey(
  facet: RangeFacet,
  facetKey: string,
  unit: UnitOfMeasurement
): string[] {
  const rangeFilters: string[] = [];
  const minimum: number | null | undefined = facet.options.find(
    option => option.key === RangeFacetOptionKey.Minimum
  )?.value as number | null | undefined;
  const maximum: number | null | undefined = facet.options.find(
    option => option.key === RangeFacetOptionKey.Maximum
  )?.value as number | null | undefined;
  if (minimum !== undefined && minimum !== null) {
    const maximuFilterValue: number = unit.toDefault(minimum);
    const maximumFilter: string = `${facetKey}/maximum ge ${maximuFilterValue}`;

    rangeFilters.push(maximumFilter);
  }
  if (maximum !== undefined && maximum !== null) {
    const minimumFilterValue: number = unit.toDefault(maximum);
    const minimumFilter: string = `${facetKey}/minimum le ${minimumFilterValue}`;
    rangeFilters.push(minimumFilter);
  }
  return rangeFilters;
}
