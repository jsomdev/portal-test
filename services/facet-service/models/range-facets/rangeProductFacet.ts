import { RangeFacetMatchType } from '@services/facet-service/facets/range-facets/rangeFacetHelper';

import { UnitOfMeasurement } from '../../models/facet/facetUnitOfMeasurement';
import { Facet } from '../facet/facet';
import { FacetOption } from '../facet/facetOption';
import { RangeFacetOptionKey } from './rangeFacetOptionKey';

export type RangeFacetExtraAttributes = {
  // The Default Unit for the attributeType the facet is linked with. (in the api)
  // Also the unit for which values are returned from the GroupByFacet api function
  unit: UnitOfMeasurement;
  // Alternative units the facet can be displayed in, including a base unit for the metric system
  alternativeUnits: Array<UnitOfMeasurement>;
  defaultMatchType: RangeFacetMatchType;
};
export type RangeFacet = Facet<
  RangeFacetOptionKey,
  FacetOption<RangeFacetOptionKey>,
  RangeFacetExtraAttributes
>;
