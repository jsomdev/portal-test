import { Facet } from '../models/facet/facet';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { UnitOfMeasurement } from '../models/facet/facetUnitOfMeasurement';
import { RangeFacetOptionKey } from '../models/range-facets/rangeFacetOptionKey';

/**
 * Function that will combine all relevant facets to the encoded parameter value @operatingConditions required by the product finder api calls.
 * At the time of writing relevant facets are: LiquidFlowRate,SpecificGravity,LiquidPressure,LiquidSprayAngle.
 * All of the above should have a FacetCategory of FacetCategory.SprayFinder
 * At the time of writing relevant product finder api calls are: GroupByFacets, Find, CountBySeriesModels.
 * IMPORTANT NOTE: This is custom code that is tightly coupled to the SprayFinder filters feature in the application.
 * @param facets Array of Facets with relevant facets included
 * @returns an encoded value string that represents the @operatingConditions parameter value
 */
export function combineFacetsToEncodedOperatingConditionsParameter(
  facets: Facet[]
): string {
  // Get the parameter value for each relevant facet
  const flow: {
    minimumFlow: number | null;
    maximumFlow: number | null;
  } = getOperatingConditionsFlowParameterValue(facets);
  const specificGravity: {
    specificGravity: number;
  } = getOperatingConditionsSpecificGravityParameterValue(facets);
  const liquidPressure: {
    pressure: number | null;
  } = getOperatingConditionsLiquidPressureParameterValue(facets);
  const sprayAngle: {
    minimumSprayAngle: number;
    maximumSprayAngle: number;
  } = getOperatingConditionsSprayAngleParameterValue(facets);

  // Destructure all relevant values into the operating conditions object required by the api call
  const operatingConditions: {
    minimumSprayAngle: number;
    maximumSprayAngle: number;
    pressure: number | null;
    specificGravity: number;
    minimumFlow: number | null;
    maximumFlow: number | null;
  } = {
    ...flow,
    ...specificGravity,
    ...liquidPressure,
    ...sprayAngle
  };

  // If all subsets of the operating conditions are their default value, the encoded string will be null
  const isDefaultValue: boolean =
    operatingConditions.minimumSprayAngle === 0 &&
    operatingConditions.maximumSprayAngle === 180 &&
    operatingConditions.pressure === null &&
    operatingConditions.maximumFlow === null &&
    operatingConditions.minimumFlow === null &&
    operatingConditions.specificGravity === 1;

  // Return the  encoded operating conditions parameter.
  return !isDefaultValue
    ? encodeURIComponent(JSON.stringify(operatingConditions))
    : null || '';
}

function getOperatingConditionsSpecificGravityParameterValue(facets: Facet[]): {
  specificGravity: number;
} {
  const defaultSpecificGravity: number = 1;

  // Find the facet
  const liquidSpecificGravityFacet: Facet | undefined = facets.find(
    facet => facet.key === FacetKey.LiquidSpecificGravity
  );

  // If facet was not found, return default value
  if (!liquidSpecificGravityFacet) {
    return { specificGravity: defaultSpecificGravity };
  }

  // Get the option for the 'Exact' value
  const specificGravityOption: FacetOption | undefined =
    liquidSpecificGravityFacet.options.find(
      option => option.key === RangeFacetOptionKey.Exact
    );

  // If option was not found return default value
  if (!specificGravityOption) {
    return { specificGravity: defaultSpecificGravity };
  }

  // Parse the value to a float or null if not valid
  const value: number | null =
    (specificGravityOption.value &&
      parseFloat(specificGravityOption.value.toString())) ||
    null;

  // If value is a valid number return the mapped value
  if (value !== null && !isNaN(value)) {
    return { specificGravity: value };
  }

  // Return default value
  return { specificGravity: defaultSpecificGravity };
}

function getOperatingConditionsFlowParameterValue(facets: Facet[]): {
  minimumFlow: number | null;
  maximumFlow: number | null;
} {
  const defaultFlow: {
    minimumFlow: number | null;
    maximumFlow: number | null;
  } = {
    minimumFlow: null,
    maximumFlow: null
  };

  // Find the facet
  const liquidFlowRateRangeFacet: Facet | undefined = facets.find(
    facet => facet.key === FacetKey.LiquidFlowRate
  );

  // If the facet was not found, return default value
  if (!liquidFlowRateRangeFacet) {
    return defaultFlow;
  }

  // Get the option for the 'Nearby' value
  const liquidFlowRateNearbyOption: FacetOption | undefined =
    liquidFlowRateRangeFacet?.options.find(
      option => option.key === RangeFacetOptionKey.Nearby
    );

  // If the option was not found, return default value
  if (!liquidFlowRateNearbyOption) {
    return defaultFlow;
  }

  // Parse the value to a float or null if not valid
  const nearbyValue: number | null =
    (liquidFlowRateNearbyOption.value &&
      parseFloat(liquidFlowRateNearbyOption.value.toString())) ||
    null;

  // If the value is null or not a number, return the default flow.
  if (nearbyValue === null || isNaN(nearbyValue)) {
    return defaultFlow;
  }

  // Find the option with the 'Unit' value.
  const unit: UnitOfMeasurement | undefined =
    liquidFlowRateRangeFacet?.options.find(
      option => option.key === RangeFacetOptionKey.Unit
    )?.value as UnitOfMeasurement | undefined;

  // Convert the value to the default value or null if not valid.
  const convertedNearbyValue =
    (nearbyValue && unit?.toDefault(nearbyValue)) || null;

  // Calculate the minimum value based on the converted value. (90%)
  // Note: this can cause floating point digits in the result (e.g: 3.0000001)
  const minimumFlow: number | null =
    (convertedNearbyValue &&
      !isNaN(convertedNearbyValue) &&
      convertedNearbyValue * 0.8) ||
    null;

  // Calculate the maximum value based on the converted value. (110%)
  // Note: this can cause floating point digits in the result (e.g: 3.0000001)
  const maximumFlow: number | null =
    (convertedNearbyValue &&
      !isNaN(convertedNearbyValue) &&
      convertedNearbyValue * 1.2) ||
    null;

  // If the minimum value and maximum value are not null, return the mapped values
  if (minimumFlow !== null && maximumFlow !== null) {
    return {
      minimumFlow,
      maximumFlow
    };
  }

  return defaultFlow;
}

function getOperatingConditionsSprayAngleParameterValue(facets: Facet[]): {
  minimumSprayAngle: number;
  maximumSprayAngle: number;
} {
  const defaultMinimumSprayAngle: number = 0;
  const defaultMaximumSprayAngle: number = 180;

  // Find the facet
  const liquidSprayAngleFacet: Facet | undefined = facets.find(
    facet => facet.key === FacetKey.SprayAngle
  );

  // If the facet was not found return the default value
  if (!liquidSprayAngleFacet) {
    return {
      minimumSprayAngle: defaultMinimumSprayAngle,
      maximumSprayAngle: defaultMaximumSprayAngle
    };
  }

  // Find the option for the 'Minimum Value'
  const liquidSprayAngleMinimumOption: FacetOption | undefined =
    liquidSprayAngleFacet?.options.find(
      option => option.key === RangeFacetOptionKey.Minimum
    );

  // Find the option for the 'Maximum Value'
  const liquidSprayAngleMaxmimumOption: FacetOption | undefined =
    liquidSprayAngleFacet?.options.find(
      option => option.key === RangeFacetOptionKey.Maximum
    );

  // Parse the minimum value to a float or default value if not valid.
  let minimumValue: number =
    (liquidSprayAngleMinimumOption?.value &&
      parseFloat(liquidSprayAngleMinimumOption.value.toString())) ||
    defaultMinimumSprayAngle;

  // Parse the maximum value to a float or default value if not valid.
  let maximumValue: number =
    (liquidSprayAngleMaxmimumOption?.value &&
      parseFloat(liquidSprayAngleMaxmimumOption.value.toString())) ||
    defaultMaximumSprayAngle;

  // If the minimum value is not a number, set to default value.
  if (isNaN(minimumValue)) {
    minimumValue = defaultMinimumSprayAngle;
  }

  // If the maximum value is not a number, set to default value.
  if (isNaN(maximumValue)) {
    maximumValue = defaultMaximumSprayAngle;
  }
  // Return the mapped value
  return {
    maximumSprayAngle: maximumValue,
    minimumSprayAngle: minimumValue
  };
}

function getOperatingConditionsLiquidPressureParameterValue(facets: Facet[]): {
  pressure: number | null;
} {
  const defaultPressure: number | null = null;

  // Find the facet
  const liquidPressureRangeFacet: Facet | undefined = facets.find(
    facet => facet.key === FacetKey.LiquidPressure
  );

  // If facet was not found, return default value
  if (!liquidPressureRangeFacet) {
    return { pressure: defaultPressure };
  }

  // Find the option for the 'Exact value'
  const liquidPressureExactOption: FacetOption | undefined =
    liquidPressureRangeFacet?.options.find(
      option => option.key === RangeFacetOptionKey.Exact
    );

  // If option was not found ,return default value
  if (!liquidPressureExactOption) {
    return { pressure: defaultPressure };
  }

  // Parse to float value or null if not valid
  const exactValue: number | null =
    (liquidPressureExactOption.value &&
      parseFloat(liquidPressureExactOption.value.toString())) ||
    null;

  if (exactValue === null || isNaN(exactValue)) {
    return { pressure: defaultPressure };
  }

  // Find the option for the 'Unit' value
  const unit: UnitOfMeasurement | undefined =
    liquidPressureRangeFacet?.options.find(
      option => option.key === RangeFacetOptionKey.Unit
    )?.value as UnitOfMeasurement | undefined;

  // Convert the value to the default value based on the unit
  const convertedExactValue =
    (exactValue && unit?.toDefault(exactValue)) || null;

  // If value is not null, return mapped value
  if (convertedExactValue !== null) {
    return { pressure: convertedExactValue };
  }

  return { pressure: defaultPressure };
}
