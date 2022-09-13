import { IntlShape } from 'react-intl';

import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';
import { FacetOption } from '@services/facet-service/models/facet/facetOption';
import {
  SystemOfMeasurement,
  UnitOfMeasurement
} from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { RangeFacetOptionKey } from '@services/facet-service/models/range-facets/rangeFacetOptionKey';
import { FacetOptionFormatter } from '@services/i18n/formatters/facetFormatter';

import { ActiveFilterChipProps } from './activeFilters';

export function mapSearchQueryToActiveFilterChipProps(
  text: string,
  onClear: () => void
): ActiveFilterChipProps | undefined {
  return {
    text,
    onClick: onClear
  };
}

export function mapOperatingConditionsToActiveFilterChipProps(
  sprayFinderFacets: Facet[],
  onClearTheoriticalFlow: () => void,
  onClearSprayAngle: () => void
): ActiveFilterChipProps[] {
  const activeFilterChips: ActiveFilterChipProps[] = [];
  // Flow Rate
  const flowRateFacet: Facet | undefined = sprayFinderFacets.find(
    facet => facet.key === FacetKey.LiquidFlowRate
  );
  const flowRateNearbyOption: FacetOption | undefined =
    flowRateFacet?.options.find(
      option => option.key === RangeFacetOptionKey.Nearby
    );
  const flowRateUnitOption: FacetOption | undefined =
    flowRateFacet?.options.find(
      option => option.key === RangeFacetOptionKey.Unit
    );
  const flowRateValue: number = parseFloat(
    flowRateNearbyOption?.value?.toString() || ''
  );
  const flowRateUnitSymbol: string | undefined = (
    flowRateUnitOption?.value as UnitOfMeasurement | undefined
  )?.symbol;

  const flowRateText: string | undefined =
    (flowRateValue > 0 && `≈${flowRateValue} ${flowRateUnitSymbol}`) ||
    undefined;
  if (flowRateText) {
    // Liquid Pressure
    const liquidPressureFacet: Facet | undefined = sprayFinderFacets.find(
      facet => facet.key === FacetKey.LiquidPressure
    );
    const liquidPressureNearbyOption: FacetOption | undefined =
      liquidPressureFacet?.options.find(
        option => option.key === RangeFacetOptionKey.Exact
      );
    const liquidPressureUnitOption: FacetOption | undefined =
      liquidPressureFacet?.options.find(
        option => option.key === RangeFacetOptionKey.Unit
      );
    const liquidPressureValue: number = parseFloat(
      liquidPressureNearbyOption?.value?.toString() || ''
    );
    const liquidPressureUnitSymbol: string | undefined = (
      liquidPressureUnitOption?.value as UnitOfMeasurement | undefined
    )?.symbol;

    const liquidPressureText: string | undefined =
      (liquidPressureValue > 0 &&
        `${liquidPressureValue} ${liquidPressureUnitSymbol}`) ||
      undefined;
    // Liquid Specific Gravity
    const specificGravityFacet: Facet | undefined = sprayFinderFacets.find(
      facet => facet.key === FacetKey.LiquidSpecificGravity
    );
    const specificGravityNearbyOption: FacetOption | undefined =
      specificGravityFacet?.options.find(
        option => option.key === RangeFacetOptionKey.Exact
      );
    const specificGravityUnitOption: FacetOption | undefined =
      specificGravityFacet?.options.find(
        option => option.key === RangeFacetOptionKey.Unit
      );
    const specificGravityValue: number = parseFloat(
      specificGravityNearbyOption?.value?.toString() || ''
    );
    const specificGravityUnitSymbol: string | undefined = (
      specificGravityUnitOption?.value as UnitOfMeasurement | undefined
    )?.symbol;

    const specificGravityText: string | undefined =
      (specificGravityValue > 0 &&
        specificGravityValue !== 1 &&
        `${specificGravityValue} ${specificGravityUnitSymbol}`) ||
      undefined;

    let theoriticalFlowText: string = flowRateText;

    if (liquidPressureText) {
      theoriticalFlowText = theoriticalFlowText.concat(
        ` @ ${liquidPressureText}`
      );
    }

    if (specificGravityText) {
      theoriticalFlowText = theoriticalFlowText.concat(
        liquidPressureText
          ? `, ${specificGravityText}`
          : ` @ ${specificGravityText}`
      );
    }
    const theoriticalFlowActiveFilterChip: ActiveFilterChipProps = {
      text: theoriticalFlowText,
      onClick: onClearTheoriticalFlow
    };
    activeFilterChips.push(theoriticalFlowActiveFilterChip);
  }

  //Spray Angle
  const sprayAngleFacet: Facet | undefined = sprayFinderFacets.find(
    facet => facet.key === FacetKey.SprayAngle
  );
  const sprayAngleMinimumOption: FacetOption | undefined =
    sprayAngleFacet?.options.find(
      option => option.key === RangeFacetOptionKey.Minimum && option.isActive
    );

  const sprayAngleMaximumOption: FacetOption | undefined =
    sprayAngleFacet?.options.find(
      option => option.key === RangeFacetOptionKey.Maximum && option.isActive
    );

  const sprayAngleUnitOption: FacetOption | undefined =
    sprayAngleFacet?.options.find(
      option => option.key === RangeFacetOptionKey.Unit
    );
  const sprayAngleMinimumValue: number = parseFloat(
    sprayAngleMinimumOption?.value?.toString() || ''
  );
  const sprayAngleMaximumValue: number = parseFloat(
    sprayAngleMaximumOption?.value?.toString() || ''
  );

  if (
    !!sprayAngleMaximumOption &&
    !!sprayAngleMinimumOption &&
    !(sprayAngleMaximumValue === 180 && sprayAngleMinimumValue === 0)
  ) {
    const sprayAngleUnitSymbol: string | undefined = (
      sprayAngleUnitOption?.value as UnitOfMeasurement | undefined
    )?.symbol;

    const sprayAngleText: string = `${sprayAngleMinimumValue}${sprayAngleUnitSymbol} - ${sprayAngleMaximumValue}${sprayAngleUnitSymbol}`;

    const sprayAngleActiveFilterChip: ActiveFilterChipProps = {
      text: sprayAngleText,
      onClick: onClearSprayAngle
    };
    activeFilterChips.push(sprayAngleActiveFilterChip);
  }
  return activeFilterChips;
}

export function mapMainFacetsToActiveFilterChipProps(
  facets: Facet[],
  systemOfMeasurement: SystemOfMeasurement,
  intl: IntlShape,
  onClear: (facetKey: FacetKey, optionKey: string) => void
): ActiveFilterChipProps[] {
  const mainFacetActiveFilterChips: ActiveFilterChipProps[] = [];

  const isModelActive: boolean = !!facets
    .find(facet => facet.key === FacetKey.ProductModel)
    ?.options.find(option => option.isActive);
  facets.forEach(facet => {
    // Don't show the series active filter if a model filter is active
    if (facet.key === FacetKey.ProductSeries && isModelActive) {
      return;
    }
    facet.options
      .filter(option => option.isActive)
      .forEach(activeOption => {
        const facetOptionFormatter = new FacetOptionFormatter(
          activeOption,
          undefined,
          intl,
          systemOfMeasurement,
          intl.locale
        );
        const activeFilterChip: ActiveFilterChipProps = {
          text: facetOptionFormatter.formatDisplayValue(),
          onClick: () => onClear(facet.key, activeOption.key)
        };
        mainFacetActiveFilterChips.push(activeFilterChip);
      });
  });
  return mainFacetActiveFilterChips;
}
