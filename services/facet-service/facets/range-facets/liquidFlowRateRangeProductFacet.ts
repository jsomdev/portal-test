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

const defaultMatchType: RangeFacetMatchType = RangeFacetMatchType.Nearby;
export const liquidFlowRateRangeFacet: RangeFacet = {
  ...defaultFacet,
  key: FacetKey.LiquidFlowRate,
  attributeTypeCode: ATTRIBUTETYPECODES.liquidFlowRate,
  configuration: {
    category: FacetCategory.SprayFinder,
    controlType: FacetControlType.Range,
    selectType: FacetSelectType.RangeBetween,
    displayName: 'Liquid Flow Rate',
    description:
      'Enter the desired flow rate for the nozzle. Flow rate is affected by liquid pressure and the density of the liquid being sprayed.\n\n> _For more information on how the flow rate varies based on spraying pressure and density, download our [technical reference document](http://spray.widen.net/download/spray/oeafrrites/cat75HYD_us_Tech-Reference_A.pdf) or contact your [local Spraying Systems Co. sales rep](https://www.spray.com/contact/find-a-representative)._',
    isFacetingEnabled: false
  },
  defaultMatchType: defaultMatchType,
  unit: defaultUnit,
  alternativeUnits: [
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
  ],
  // This is a Range facet, so instead of it having individual options, it will have fixed rangeBetweenFacetOptions.
  // This allows us to control the behaviour and implementation throughout all range facets.
  options: rangeFacetOptions(defaultMatchType)
};
