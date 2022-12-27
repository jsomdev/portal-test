import { ParsedUrlQuery } from 'querystring';

import { FacetsState } from '@providers/facets/facetsContext';
import { getInitialFacetsFromFiles } from '@providers/facets/facetsHelper';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';
import { FacetOption } from '@services/facet-service/models/facet/facetOption';
import { UnitOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { RangeFacetOptionKey } from '@services/facet-service/models/range-facets/rangeFacetOptionKey';
import { getFacetUnitOfMeasurementBySymbol } from '@widgets/finder/helper';

export class FinderQueryHelper {
  static getValuesForKeyInUrlQuery(
    facetKey: FacetKey,
    query: ParsedUrlQuery
  ): string | undefined {
    // We assert that the query values for a facet are allways string or undefined.
    const values: string | undefined = Object.entries(query).find(
      ([key]) => key === facetKey
    )?.[1] as string | undefined;

    return values;
  }

  static removeAllValuesInUrlQuery(query: ParsedUrlQuery): ParsedUrlQuery {
    const facets = FinderQueryHelper.getFacetsFromQuery(query);

    const newQuery: ParsedUrlQuery = { ...query };

    Object.keys(facets).forEach(key => delete newQuery[key]);

    return newQuery;
  }

  static removeValuesForKeysInUrlQuery(
    facetKeys: FacetKey[],
    query: ParsedUrlQuery
  ): ParsedUrlQuery {
    const newQuery: ParsedUrlQuery = { ...query };

    facetKeys.forEach(key => {
      delete newQuery[key];
    });

    return newQuery;
  }

  static removeValuesForKeyInUrlQuery(
    facetKey: FacetKey,
    query: ParsedUrlQuery
  ): ParsedUrlQuery {
    return this.removeValuesForKeysInUrlQuery([facetKey], query);
  }
  static removeSearchInUrlQuery(query: ParsedUrlQuery): ParsedUrlQuery {
    const newQuery: ParsedUrlQuery = { ...query };

    delete newQuery['query'];

    return newQuery;
  }

  static updateOperatingConditionsInUrlQuery(
    operatingConditions: Facet[],
    query: ParsedUrlQuery
  ): ParsedUrlQuery {
    const newQuery: ParsedUrlQuery = { ...query };

    operatingConditions.forEach((operatingCondition: Facet) => {
      const newOperatingConditionValue: string | undefined =
        FinderQueryHelper.parseOperatingConditionToQueryParameter(
          operatingCondition
        );
      if (!newOperatingConditionValue) {
        delete newQuery[operatingCondition.key];
      } else {
        newQuery[operatingCondition.key] = newOperatingConditionValue;
      }
    });
    return newQuery;
  }

  static toggleValueInUrlQuery(
    facetKey: FacetKey,
    facetOptionKey: string,
    query: ParsedUrlQuery
  ): ParsedUrlQuery {
    // Get the option values for the facet in the query
    const facetValues: string | undefined =
      FinderQueryHelper.getValuesForKeyInUrlQuery(facetKey, query);

    // Define a new array to store the values in
    let newFacetValues: string[] = facetValues?.split(',') || [];

    // If the values already include the value
    if (newFacetValues?.includes(facetOptionKey)) {
      // Filter it out
      newFacetValues = newFacetValues.filter(value => value !== facetOptionKey);
    } else {
      // Otherwise , append it to the array
      newFacetValues = [...newFacetValues, facetOptionKey];
    }

    // Create a new query object
    const newQuery: ParsedUrlQuery = {
      ...query,
      [facetKey]: newFacetValues.join(',')
    };

    // If there's no actual value anymore for the facet, let's remove the property.
    if (!newQuery[facetKey]) {
      delete newQuery[facetKey];
    }

    return newQuery;
  }

  static getFacetsFromQuery(query: ParsedUrlQuery): FacetsState {
    // We will get the product facets and filter them based on our excluded keys
    return getInitialFacetsFromFiles([], query);
  }

  private static parseLiquidFlowRateToQueryParameter(
    facet: Facet
  ): string | undefined {
    const valueOption: FacetOption | undefined = facet.options.find(
      option => option.key === RangeFacetOptionKey.Nearby
    );
    const value: number | null =
      valueOption === undefined ? null : Number(valueOption.value);

    if (!value) {
      return undefined;
    }

    const unitOption: FacetOption | undefined = facet.options.find(
      option => option.key === RangeFacetOptionKey.Unit
    );
    const unit: string =
      (unitOption?.value as UnitOfMeasurement | undefined)?.symbol.toString() ||
      '';

    return [value, unit].join(',');
  }
  private static parseLiquidPressureToQueryParameter(
    facet: Facet
  ): string | undefined {
    const valueOption: FacetOption | undefined = facet.options.find(
      option => option.key === RangeFacetOptionKey.Exact
    );
    const value: number | null =
      valueOption === undefined ? null : Number(valueOption.value);

    if (!value) {
      return undefined;
    }
    const unitOption: FacetOption | undefined = facet.options.find(
      option => option.key === RangeFacetOptionKey.Unit
    );
    const unit: string =
      (unitOption?.value as UnitOfMeasurement | undefined)?.symbol.toString() ||
      '';

    return [value, unit].join(',');
  }
  private static parseLiquidSprayAngleToQueryParameter(
    facet: Facet
  ): string | undefined {
    const minimumValueOption: FacetOption | undefined = facet.options.find(
      option => option.key === RangeFacetOptionKey.Minimum
    );
    const minimumValue: number | null =
      minimumValueOption === undefined ? 0 : Number(minimumValueOption.value);
    const maximumValueOption: FacetOption | undefined = facet.options.find(
      option => option.key === RangeFacetOptionKey.Maximum
    );
    const maximumValue: number | null =
      maximumValueOption === undefined ? 180 : Number(maximumValueOption.value);

    if (
      (minimumValue === 0 || minimumValue === null) &&
      (maximumValue === 180 || maximumValue === null)
    ) {
      return undefined;
    }

    const unitOption: FacetOption | undefined = facet.options.find(
      option => option.key === RangeFacetOptionKey.Unit
    );
    const unit: string =
      (unitOption?.value as UnitOfMeasurement | undefined)?.symbol.toString() ||
      '';

    return [minimumValue, maximumValue, unit].join(',');
  }
  private static parseLiquidSpecificGravityToQueryParameter(
    facet: Facet
  ): string | undefined {
    const valueOption: FacetOption | undefined = facet.options.find(
      option => option.key === RangeFacetOptionKey.Exact
    );
    const value: number | null =
      valueOption === undefined ? null : Number(valueOption.value);

    if (!value) {
      return undefined;
    }
    const unitOption: FacetOption | undefined = facet.options.find(
      option => option.key === RangeFacetOptionKey.Unit
    );
    const unit: string =
      (unitOption?.value as UnitOfMeasurement | undefined)?.symbol.toString() ||
      '';

    return [value, unit].join(',');
  }

  private static parseOperatingConditionToQueryParameter(
    operatingCondition: Facet
  ): string | undefined {
    switch (operatingCondition.key) {
      case FacetKey.LiquidFlowRate:
        return FinderQueryHelper.parseLiquidFlowRateToQueryParameter(
          operatingCondition
        );
      case FacetKey.LiquidPressure:
        return FinderQueryHelper.parseLiquidPressureToQueryParameter(
          operatingCondition
        );
      case FacetKey.LiquidSpecificGravity:
        return FinderQueryHelper.parseLiquidSpecificGravityToQueryParameter(
          operatingCondition
        );
      case FacetKey.SprayAngle:
        return FinderQueryHelper.parseLiquidSprayAngleToQueryParameter(
          operatingCondition
        );

      default:
        return '';
    }
  }

  public static mapQueryValuesToOperatingConditionOption(
    operatingCondition: Facet,
    queryValues: string[],
    currentOption: FacetOption
  ): FacetOption {
    switch (operatingCondition.key) {
      case FacetKey.LiquidFlowRate:
        return FinderQueryHelper.mapQueryValuesToLiquidFlowRateOption(
          operatingCondition,
          queryValues,
          currentOption
        );
      case FacetKey.LiquidPressure:
        return FinderQueryHelper.mapQueryValuesToLiquidPressureOption(
          operatingCondition,
          queryValues,
          currentOption
        );
      case FacetKey.LiquidSpecificGravity:
        return FinderQueryHelper.mapQueryValuesToLiquidSpecificGravityOption(
          operatingCondition,
          queryValues,
          currentOption
        );
      case FacetKey.SprayAngle:
        return FinderQueryHelper.mapQueryValuesToLiquidSprayAngleOption(
          operatingCondition,
          queryValues,
          currentOption
        );

      default:
        return { ...currentOption };
    }
  }

  private static mapQueryValuesToLiquidFlowRateOption(
    facet: Facet,
    queryValues: string[],
    currentOption: FacetOption
  ): FacetOption {
    // Expected queryValues: '22,gpm'
    // First key is expected to be the nearby value
    if (currentOption.key === RangeFacetOptionKey.Nearby) {
      const nearbyKey: string | null | undefined = queryValues[0];
      const nearbyValue: number | null =
        (nearbyKey && parseFloat(nearbyKey)) || null;
      const isActive: boolean = nearbyValue !== null && !isNaN(nearbyValue);
      return {
        ...currentOption,
        isActive,
        value: nearbyValue
      };
    }
    // Second key is expected to be the unit value
    if (currentOption.key === RangeFacetOptionKey.Unit) {
      const unitValue: string | null = queryValues[1] || null;
      const unitOfMeasurement: UnitOfMeasurement | null =
        getFacetUnitOfMeasurementBySymbol(facet, unitValue);
      const isActive: boolean = !!unitOfMeasurement;
      return {
        ...currentOption,
        isActive,
        value: unitOfMeasurement
      };
    }
    return {
      ...currentOption
    };
  }
  private static mapQueryValuesToLiquidPressureOption(
    facet: Facet,
    queryValues: string[],
    currentOption: FacetOption
  ): FacetOption {
    // Expected queryValues: '5 psi'
    // First key is expected to be the exact value
    if (currentOption.key === RangeFacetOptionKey.Exact) {
      const exactKey: string | null | undefined = queryValues[0];
      const exactValue: number | null =
        (exactKey && parseFloat(exactKey)) || null;
      const isActive: boolean = exactValue !== null && !isNaN(exactValue);
      return {
        ...currentOption,
        isActive,
        value: exactValue
      };
    }
    // Second key is expected to be the unit value
    if (currentOption.key === RangeFacetOptionKey.Unit) {
      const unitValue: string | null = queryValues[1] || null;
      const unitOfMeasurement: UnitOfMeasurement | null =
        getFacetUnitOfMeasurementBySymbol(facet, unitValue);
      const isActive: boolean = !!unitOfMeasurement;
      return {
        ...currentOption,
        isActive,
        value: unitOfMeasurement
      };
    }
    return {
      ...currentOption
    };
  }
  private static mapQueryValuesToLiquidSpecificGravityOption(
    facet: Facet,
    queryValues: string[],
    currentOption: FacetOption
  ): FacetOption {
    // Expected queryValues: '1 sg'
    // First key is expected to be the exact value
    if (currentOption.key === RangeFacetOptionKey.Exact) {
      const exactKey: string | null | undefined = queryValues[0];
      const exactValue: number | null = (exactKey && parseFloat(exactKey)) || 1;
      const isActive: boolean = exactValue !== null && !isNaN(exactValue);

      return {
        ...currentOption,
        isActive,
        value: exactValue
      };
    }
    // Second key is expected to be the unit value
    if (currentOption.key === RangeFacetOptionKey.Unit) {
      const unitValue: string | null = queryValues[1] || null;

      if (unitValue === null) {
        return { ...currentOption };
      }
      const unitOfMeasurement: UnitOfMeasurement | null =
        getFacetUnitOfMeasurementBySymbol(facet, unitValue);
      const isActive: boolean = !!unitOfMeasurement;
      return {
        ...currentOption,
        isActive,
        value: unitOfMeasurement
      };
    }
    return {
      ...currentOption
    };
  }
  private static mapQueryValuesToLiquidSprayAngleOption(
    facet: Facet,
    queryValues: string[],
    currentOption: FacetOption
  ): FacetOption {
    // Expected queryValues: '10,100,°'
    // First key is expected to be the minimum value
    if (currentOption.key === RangeFacetOptionKey.Minimum) {
      const minKey: string | null | undefined = queryValues[0];
      const minValue: number | null = (minKey && parseFloat(minKey)) || 0;
      const isActive: boolean = minValue !== null && !isNaN(minValue);
      return {
        ...currentOption,
        isActive,
        value: minValue
      };
    }
    // Second key is expected to be the maximum value
    if (currentOption.key === RangeFacetOptionKey.Maximum) {
      const maxKey: string | null | undefined = queryValues[1];
      const maxValue: number | null = (maxKey && parseFloat(maxKey)) || 180;
      const isActive: boolean = maxValue !== null && !isNaN(maxValue);
      return {
        ...currentOption,
        isActive,
        value: maxValue
      };
    }
    // Third key is expected to be the unit value
    if (currentOption.key === RangeFacetOptionKey.Unit) {
      const unitValue: string | null = queryValues[2] || null;
      const unitOfMeasurement: UnitOfMeasurement | null =
        getFacetUnitOfMeasurementBySymbol(facet, unitValue);
      const isActive: boolean = !!unitOfMeasurement;
      return {
        ...currentOption,
        isActive,
        value: unitOfMeasurement
      };
    }
    return {
      ...currentOption
    };
  }
}
