import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';

export enum IsFoodContactFacetOptionKey {}

export const isFoodContactFacetOptions: FacetOption<IsFoodContactFacetOptionKey>[] =
  [];

export const isFoodContactFacet: Facet<
  IsFoodContactFacetOptionKey,
  FacetOption<IsFoodContactFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.IsFoodContact,
  attributeTypeCode: 'IsFoodContact',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.SingleSelect,
    isFacetingEnabled: true
  },
  options: isFoodContactFacetOptions
};
