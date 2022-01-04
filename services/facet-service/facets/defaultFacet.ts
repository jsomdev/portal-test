import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetSelectType } from '../models/facet/facetSelectType';

export const defaultFacet: Pick<
  Facet<never, never>,
  'options' | 'configuration'
> = {
  options: [],
  configuration: {
    category: FacetCategory.Default,
    controlType: FacetControlType.Checkbox,
    isFacetingEnabled: false,
    displayName: '',
    selectType: FacetSelectType.Default
  }
};
