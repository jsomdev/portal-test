import { RangeFacetMatchType } from '@services/facet-service/facets/range-facets/rangeFacetHelper';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';
import {
  FacetOption,
  FacetOptionValueType
} from '@services/facet-service/models/facet/facetOption';
import {
  SystemOfMeasurement,
  UnitOfMeasurement
} from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { RangeFacetOptionKey } from '@services/facet-service/models/range-facets/rangeFacetOptionKey';

export function diffOperatingConditionsFacets(
  facets: Facet<
    | FacetKey.LiquidFlowRate
    | FacetKey.LiquidSpecificGravity
    | FacetKey.LiquidPressure
    | FacetKey.SprayAngle
  >[],
  facetsToCompare: Facet<
    | FacetKey.LiquidFlowRate
    | FacetKey.LiquidSpecificGravity
    | FacetKey.LiquidPressure
    | FacetKey.SprayAngle
  >[]
): boolean {
  const modifiedResults: {
    key: FacetKey;
    isModified: boolean;
  }[] = facets.map(facet => {
    const facetToCompare = facetsToCompare.find(
      facetToCompare => facet.key === facetToCompare.key
    );

    if (!facetToCompare) {
      return {
        key: facet.key,
        isModified: false
      };
    }
    switch (facet.key) {
      case FacetKey.LiquidPressure:
        return {
          key: facet.key,
          isModified: !diffLiquidPressure(facet, facetToCompare)
        };
      case FacetKey.LiquidFlowRate:
        return {
          key: facet.key,
          isModified: !diffLiquidFlowRate(facet, facetToCompare)
        };
      case FacetKey.SprayAngle:
        return {
          key: facet.key,
          isModified: !diffLiquidSprayAngle(facet, facetToCompare)
        };
      case FacetKey.LiquidSpecificGravity:
        return {
          key: facet.key,
          isModified: !diffLiquidSpecificGravity(facet, facetToCompare)
        };
      default:
        return { key: facet.key, isModified: false };
    }
  });
  const isAnyFacetModified: boolean = !!modifiedResults.find(
    value => !!value.isModified
  );
  return isAnyFacetModified;
}

export function diffLiquidPressure(facetA: Facet, facetB: Facet): boolean {
  const valueA: FacetOptionValueType | undefined = facetA.options.find(
    option => option.key === RangeFacetOptionKey.Exact
  )?.value;
  const valueB: FacetOptionValueType | undefined = facetB.options.find(
    option => option.key === RangeFacetOptionKey.Exact
  )?.value;
  return Number(valueA) === Number(valueB);
}
export function diffLiquidFlowRate(facetA: Facet, facetB: Facet): boolean {
  const valueA: FacetOptionValueType | undefined = facetA.options.find(
    option => option.key === RangeFacetOptionKey.Nearby
  )?.value;
  const valueB: FacetOptionValueType | undefined = facetB.options.find(
    option => option.key === RangeFacetOptionKey.Nearby
  )?.value;
  return Number(valueA) === Number(valueB);
}
export function diffLiquidSpecificGravity(
  facetA: Facet,
  facetB: Facet
): boolean {
  const valueA: FacetOptionValueType | undefined = facetA.options.find(
    option => option.key === RangeFacetOptionKey.Exact
  )?.value;
  const valueB: FacetOptionValueType | undefined = facetB.options.find(
    option => option.key === RangeFacetOptionKey.Exact
  )?.value;
  return Number(valueA) === Number(valueB);
}
export function diffLiquidSprayAngle(facetA: Facet, facetB: Facet): boolean {
  const minimumValueA: FacetOptionValueType | undefined = facetA.options.find(
    option => option.key === RangeFacetOptionKey.Minimum
  )?.value;
  const minimumValueB: FacetOptionValueType | undefined = facetB.options.find(
    option => option.key === RangeFacetOptionKey.Minimum
  )?.value;
  const maximumValueA: FacetOptionValueType | undefined = facetA.options.find(
    option => option.key === RangeFacetOptionKey.Maximum
  )?.value;
  const maximumValueB: FacetOptionValueType | undefined = facetB.options.find(
    option => option.key === RangeFacetOptionKey.Maximum
  )?.value;
  return (
    Number(minimumValueA) === Number(minimumValueB) &&
    Number(maximumValueA) === Number(maximumValueB)
  );
}

export function validateSprayFinderFacets(
  facets: Facet<
    | FacetKey.LiquidFlowRate
    | FacetKey.LiquidSpecificGravity
    | FacetKey.LiquidPressure
    | FacetKey.SprayAngle
  >[]
): {
  validatedResults: {
    key: FacetKey;
    isValid: boolean;
  }[];
  validatedTheoriticalFlow: boolean;
} {
  const validatedResults: {
    key: FacetKey;
    isValid: boolean;
  }[] = facets.map(facet => {
    switch (facet.key) {
      case FacetKey.LiquidPressure:
        return { key: facet.key, isValid: validateLiquidPressure(facet) };
      case FacetKey.LiquidFlowRate:
        return { key: facet.key, isValid: validateLiquidFlowRate(facet) };
      case FacetKey.SprayAngle:
        return { key: facet.key, isValid: validateLiquidSprayAngle(facet) };
      case FacetKey.LiquidSpecificGravity:
        return {
          key: facet.key,
          isValid: validateLiquidSpecificGravity(facet)
        };
      default:
        return { key: facet.key, isValid: false };
    }
  });

  const isTheoriticalFlowRateValid: boolean = validateTheoriticalFlow(facets);
  return {
    validatedResults,
    validatedTheoriticalFlow: isTheoriticalFlowRateValid
  };
}

export function validateLiquidFlowRate(flowRateFacet: Facet): boolean {
  const nearbyFlowValue: FacetOptionValueType | undefined =
    flowRateFacet.options.find(
      option => option.key === RangeFacetOptionKey.Nearby
    )?.value;
  if (
    Number(nearbyFlowValue) > 0 ||
    nearbyFlowValue === null ||
    nearbyFlowValue === ''
  ) {
    return true;
  }
  return false;
}
export function validateLiquidPressure(facet: Facet): boolean {
  const liquidPressureValue: FacetOptionValueType | undefined =
    facet.options.find(
      option => option.key === RangeFacetOptionKey.Exact
    )?.value;
  if (
    Number(liquidPressureValue) > 0 ||
    liquidPressureValue === null ||
    liquidPressureValue === ''
  ) {
    return true;
  }
  return false;
}
export function validateLiquidSpecificGravity(facet: Facet): boolean {
  const liquidSpecificGravityValue: FacetOptionValueType | undefined =
    facet.options.find(
      option => option.key === RangeFacetOptionKey.Exact
    )?.value;
  if (Number(liquidSpecificGravityValue) > 0) {
    return true;
  }
  return false;
}
export function validateLiquidSprayAngle(facet: Facet): boolean {
  const sprayAngleMinimumValue: FacetOptionValueType | undefined =
    facet.options.find(
      option => option.key === RangeFacetOptionKey.Minimum
    )?.value;
  const isMinimumValid: boolean = Number(sprayAngleMinimumValue) >= 0;
  const sprayAngleMaximumValue: FacetOptionValueType | undefined =
    facet.options.find(
      option => option.key === RangeFacetOptionKey.Minimum
    )?.value;
  const isMaximumValid: boolean = Number(sprayAngleMaximumValue) <= 180;
  return isMinimumValid && isMaximumValid;
}

export function validateTheoriticalFlow(facets: Facet[]): boolean {
  const liquidFlowRateValue: FacetOptionValueType | undefined = facets
    .find(facet => facet.key === FacetKey.LiquidFlowRate)
    ?.options.find(option => option.key === RangeFacetOptionKey.Nearby)?.value;
  const liquidSpecificGravityValue: FacetOptionValueType | undefined = facets
    .find(facet => facet.key === FacetKey.LiquidSpecificGravity)
    ?.options.find(option => option.key === RangeFacetOptionKey.Exact)?.value;

  const liquidPressureValue: FacetOptionValueType | undefined = facets
    .find(facet => facet.key === FacetKey.LiquidPressure)
    ?.options.find(option => option.key === RangeFacetOptionKey.Exact)?.value;

  if (
    liquidFlowRateValue === null ||
    liquidFlowRateValue === '' ||
    liquidFlowRateValue === undefined
  ) {
    return (
      (liquidPressureValue === null ||
        liquidPressureValue === '' ||
        liquidPressureValue === undefined) &&
      liquidSpecificGravityValue === 1
    );
  }
  return (
    Number(liquidFlowRateValue) > 0 &&
    Number(liquidSpecificGravityValue) > 0 &&
    (Number(liquidPressureValue) > 0 ||
      liquidPressureValue === null ||
      liquidPressureValue === '' ||
      liquidPressureValue === undefined)
  );
}

export function getOperatingConditionMatchType(
  options: FacetOption[]
): RangeFacetMatchType | undefined {
  const matchTypeOption: FacetOption | undefined = options.find(
    option => option.key === RangeFacetOptionKey.MatchType
  );
  return matchTypeOption?.value as RangeFacetMatchType | undefined;
}

export function getOperatingConditionUnitOfMeasurement(
  facet: Facet,
  systemOfMeasurement: SystemOfMeasurement
): UnitOfMeasurement | undefined {
  // 1. If there's a unit set in the facet, return that unit
  const unitOption: FacetOption | undefined = facet.options.find(
    option => option.key === RangeFacetOptionKey.Unit
  );
  if (unitOption?.isActive && !!unitOption?.value) {
    return unitOption.value as UnitOfMeasurement;
  }

  if (!facet.unit || !facet.alternativeUnits) {
    return undefined;
  }
  // 2. If there's a base unit for the systemOfMeasurement, return that unit.
  const baseSystemOfMeasurementUnit: UnitOfMeasurement | undefined = [
    facet.unit as UnitOfMeasurement,
    ...(facet.alternativeUnits as UnitOfMeasurement[])
  ].find(unit => {
    return unit.system === systemOfMeasurement && unit.isBase;
  });
  if (baseSystemOfMeasurementUnit) {
    // If the base unit was found, return it
    return baseSystemOfMeasurementUnit;
  }

  // 3. Return the default unit.
  return facet.unit as UnitOfMeasurement;
}
