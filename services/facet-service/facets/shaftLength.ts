import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';

export enum ShaftLengthFacetOptionKey {}

export const shaftLengthFacetOptions: FacetOption<ShaftLengthFacetOptionKey>[] =
  [];

export const shaftLengthFacet: Facet<
  ShaftLengthFacetOptionKey,
  FacetOption<ShaftLengthFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.ShaftLength,
  attributeTypeCode: 'ShaftLength',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: shaftLengthFacetOptions
};
