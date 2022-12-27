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
  symbol: 'gpm',
  system: 'US',
  isBase: true,
  fromDefault: value => value,
  toDefault: value => value
};
const alternativeUnits: UnitOfMeasurement[] = [
  {
    symbol: 'gph',
    system: 'US',
    isBase: false,
    fromDefault: value => value * 60,
    toDefault: value => value / 60
  },
  {
    symbol: 'l/min',
    system: 'Metric',
    isBase: true,

    fromDefault: (value: number) => value * 3.7854,
    toDefault: (value: number) => value / 3.7854
  },
  {
    symbol: 'l/hour',
    system: 'Metric',
    isBase: false,

    fromDefault: (value: number) => value * 227.12470704,
    toDefault: (value: number) => value / 227.12470704
  }
];
const defaultMatchType: RangeFacetMatchType = RangeFacetMatchType.Nearby;

export const liquidFlowRateFacet: RangeFacet = {
  ...defaultFacet,
  key: FacetKey.LiquidFlowRate,
  attributeTypeCode: ATTRIBUTETYPECODES.liquidFlowRate,
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
