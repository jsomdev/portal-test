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

const defaultMatchType: RangeFacetMatchType = RangeFacetMatchType.Exact;
export const liquidPressureRangeFacet: RangeFacet = {
  ...defaultFacet,
  key: FacetKey.LiquidPressure,
  attributeTypeCode: ATTRIBUTETYPECODES.liquidPressureRange,
  configuration: {
    category: FacetCategory.SprayFinder,
    controlType: FacetControlType.Range,
    selectType: FacetSelectType.RangeBetween,
    displayName: 'Liquid Pressure',
    description: `Enter the operating pressure for the nozzle.\n\n> _For more information on how liquid pressure affects spray performance, download our [technical reference document](http://spray.widen.net/download/spray/oeafrrites/cat75HYD_us_Tech-Reference_A.pdf) or contact your [local Spraying Systems Co. sales rep](https://www.spray.com/contact/find-a-representative)._`,
    isFacetingEnabled: false
  },
  defaultMatchType: defaultMatchType,
  unit: defaultUnit,
  alternativeUnits: [
    {
      symbol: 'bar',
      system: 'Metric',
      isBase: true,
      fromDefault: (value: number) => value * 0.06894757,
      toDefault: (value: number) => value * 14.5037738
    }
  ],
  // This is a Range facet, so instead of it having individual options, it will have fixed rangeBetweenFacetOptions.
  // This allows us to control the behaviour and implementation throughout all range facets.
  options: rangeFacetOptions(defaultMatchType)
};
