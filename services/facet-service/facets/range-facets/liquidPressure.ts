import { ATTRIBUTETYPECODES } from '../../../portal-api/constants';
import { FacetCategory } from '../../models/facet/facetCategory';
import { FacetControlType } from '../../models/facet/facetControlType';
import { FacetKey } from '../../models/facet/facetKey';
import { FacetSelectType } from '../../models/facet/facetSelectType';
import { UnitOfMeasurement } from '../../models/facet/facetUnitOfMeasurement';
import { RangeFacet } from '../../models/range-facets/rangeProductFacet';
import { defaultFacet } from '../defaultFacet';
import { RangeFacetMatchType } from './rangeFacetHelper';
import { rangeFacetOptions } from './rangeOptions';

const defaultUnit: UnitOfMeasurement = {
  symbol: 'psi',
  isBase: true,
  system: 'US',
  fromDefault: value => value,
  toDefault: value => value
};

const alternativeUnits: UnitOfMeasurement[] = [
  {
    symbol: 'bar',
    system: 'Metric',
    isBase: true,
    fromDefault: (value: number) => value * 0.06894757,
    toDefault: (value: number) => value * 14.5037738
  }
];

const defaultMatchType: RangeFacetMatchType = RangeFacetMatchType.Exact;

export const liquidPressureFacet: RangeFacet = {
  ...defaultFacet,
  key: FacetKey.LiquidPressure,
  attributeTypeCode: ATTRIBUTETYPECODES.liquidPressure,
  configuration: {
    category: FacetCategory.OperatingConditions,
    controlType: FacetControlType.Range,
    selectType: FacetSelectType.RangeBetween,
    isFacetingEnabled: false
  },
  defaultMatchType: defaultMatchType,
  unit: defaultUnit,
  alternativeUnits,
  // This is a Range facet, so instead of it having individual options, it will have fixed rangeBetweenFacetOptions.
  // This allows us to control the behaviour and implementation throughout all range facets.
  options: rangeFacetOptions(defaultMatchType)
};
