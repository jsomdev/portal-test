import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';

export enum SprayCoverageDiameterFacetOptionKey {}

export const sprayCoverageDiameterFacetOptions: FacetOption<SprayCoverageDiameterFacetOptionKey>[] =
  [];

export const sprayCoverageDiameterFacet: Facet<
  SprayCoverageDiameterFacetOptionKey,
  FacetOption<SprayCoverageDiameterFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.SprayCoverageDiameter,
  attributeTypeCode: 'SprayCoverageDiameter',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: sprayCoverageDiameterFacetOptions
};
