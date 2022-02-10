import { UnitOfMeasurement } from '../../../../utilities/measurement';
import { FacetCategory } from '../../models/facet/facetCategory';
import { FacetControlType } from '../../models/facet/facetControlType';
import { FacetKey } from '../../models/facet/facetKey';
import { FacetSelectType } from '../../models/facet/facetSelectType';
import { RangeFacet } from '../../models/range-facets/rangeProductFacet';
import { defaultFacet } from '../defaultFacet';
import { RangeFacetMatchType } from './rangeFacetHelper';
import { rangeFacetOptions } from './rangeOptions';

const defaultUnit: UnitOfMeasurement = {
  symbol: '',
  isBase: true,
  system: 'common',
  fromDefault: value => value,
  toDefault: value => value
};

const defaultMatchType: RangeFacetMatchType = RangeFacetMatchType.Exact;
export const liquidSpecificGravityFacet: RangeFacet = {
  ...defaultFacet,
  key: FacetKey.LiquidSpecificGravity,
  attributeTypeCode: 'specificGravity',
  configuration: {
    category: FacetCategory.SprayFinder,
    controlType: FacetControlType.Range,
    selectType: FacetSelectType.RangeBetween,
    displayName: 'Specific Gravity',
    description: `Specific gravity is the ratio of the density of a fluid compared to the density of water. It must be considered to properly calculate flow rate. \n\n **Alternatively**, if you don't know the specific gravity you may select the **Liquid Type** from a list of commonly-sprayed liquids and temperatures.\n\n### Liquid Type\n\n The type of liquid sprayed and its temperature affects the specific gravity of the liquid and in turn affects the flow rate. The default liquid is water, with a specific gravity of 1. \n\n> _For more information on how specific gravity and other characteristics such as temperature, viscosity and surface tension affect spray performance, download our [technical reference document](http://spray.widen.net/download/spray/oeafrrites/cat75HYD_us_Tech-Reference_A.pdf) or contact your [local Spraying Systems Co. sales rep](https://www.spray.com/contact/find-a-representative)._`,
    isFacetingEnabled: false
  },
  defaultMatchType: RangeFacetMatchType.Exact,
  unit: defaultUnit,
  alternativeUnits: [],
  // This is a Range facet, so instead of it having individual options, it will have fixed rangeBetweenFacetOptions.
  // This allows us to control the behaviour and implementation throughout all range facets.
  options: rangeFacetOptions(defaultMatchType)
};
