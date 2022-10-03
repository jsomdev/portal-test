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
  system: 'common',
  isBase: true,
  symbol: '°',
  fromDefault: value => value,
  toDefault: value => value
};

const defaultMatchType: RangeFacetMatchType = RangeFacetMatchType.Range;

export const sprayAngleFacet: RangeFacet = {
  ...defaultFacet,
  key: FacetKey.SprayAngle,
  attributeTypeCode: ATTRIBUTETYPECODES.sprayAngle,
  configuration: {
    category: FacetCategory.OperatingConditions,
    controlType: FacetControlType.Range,
    selectType: FacetSelectType.RangeBetween,
    isFacetingEnabled: false
  },
  defaultMatchType: defaultMatchType,
  unit: defaultUnit,
  alternativeUnits: [],
  // This is a Range facet, so instead of it having individual options, it will have fixed rangeBetweenFacetOptions.
  // This allows us to control the behaviour and implementation throughout all range facets.
  options: rangeFacetOptions(defaultMatchType)
};
