import { FacetOption } from '../../models/facet/facetOption';
import {
  SystemOfMeasurement,
  UnitOfMeasurement
} from '../../models/facet/facetUnitOfMeasurement';
import { RangeFacetOptionKey } from '../../models/range-facets/rangeFacetOptionKey';
import { RangeFacet } from '../../models/range-facets/rangeProductFacet';

export enum RangeFacetMatchType {
  // Between a min and max value (or just a min or max value)
  Range = 'Range',
  // Exact match of the value
  Exact = 'Exact',
  // Value between 90% & 110% of the value
  Nearby = 'Nearby'
}
/**
 * Function that will return the UnitOfMeasurement for the facet.
 * @param facet RangeFacet for which to retrieve the facetUnit
 * @param systemOfMeasurement SystemOfMeasurement that will be used as fallback if passed
 */
export function getRangeFacetUnit(
  facet: RangeFacet,
  cookieValue: string | undefined,
  systemOfMeasurement?: SystemOfMeasurement
): UnitOfMeasurement {
  // 1. Get the active 'Unit' option if present.
  const activeUnitOption:
    | FacetOption<RangeFacetOptionKey, Record<string, unknown>>
    | undefined = facet.options.find(
    option => option.key === RangeFacetOptionKey.Unit && option.isActive
  );
  if (activeUnitOption) {
    // If the Unit option is active, check if the value is not null.
    const value: UnitOfMeasurement | null =
      activeUnitOption.value as UnitOfMeasurement | null;
    if (value) {
      // If the value is not null, return the value as the facet unit.
      return value;
    }
  }
  //2. If there's no active option but the cookieValue contains a unit symbol, check if the unit for that symbol is available in the facet
  if (cookieValue) {
    const cookieUnit: UnitOfMeasurement | undefined = [
      facet.unit,
      ...facet.alternativeUnits
    ].find(unit => unit.symbol === cookieValue);
    if (cookieUnit) {
      return cookieUnit;
    }
  }
  // 3. If there is no active option and no cookie value, check if the base unit can be found for the systemOfMeasurement that was passed.
  const baseSystemOfMeasurementUnit: UnitOfMeasurement | undefined = [
    facet.unit,
    ...facet.alternativeUnits
  ].find(unit => {
    return unit.system === systemOfMeasurement;
  });
  if (baseSystemOfMeasurementUnit) {
    // If the base unit was found, return it
    return baseSystemOfMeasurementUnit;
  }

  // 4. Return the default facet unit if none of the previous conditions apply.
  return facet.unit;
}

export function getRangeFacetMatchType(
  facet: RangeFacet,
  cookieValue: string | undefined
): RangeFacetMatchType {
  // Get the active 'Unit' option if present.
  const activeMatchTypeOption:
    | FacetOption<RangeFacetOptionKey, Record<string, unknown>>
    | undefined = facet.options.find(
    option => option.key === RangeFacetOptionKey.MatchType && option.isActive
  );

  let cookieMatchType: undefined | RangeFacetMatchType = undefined;
  // Cast the cookieValue to the RangeFacetMatchType in a typesafe manner.
  if (Object.values(RangeFacetMatchType).find(value => value === cookieValue)) {
    cookieMatchType = cookieValue as RangeFacetMatchType;
  }
  // Return either the value for the activeOption or fallback to the cookieMatchType or Range match type
  return (
    (activeMatchTypeOption?.value as RangeFacetMatchType | undefined) ||
    cookieMatchType ||
    facet.defaultMatchType
  );
}
