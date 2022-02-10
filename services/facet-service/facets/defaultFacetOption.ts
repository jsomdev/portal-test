import { FacetOption } from '../models/facet/facetOption';

export const defaultFacetOption: Pick<
  FacetOption<Record<string, unknown>>,
  'isActive' | 'children' | 'parentId' | 'valueId' | 'value'
> = {
  isActive: false,
  children: undefined,
  parentId: undefined,
  valueId: null,
  value: null
};
