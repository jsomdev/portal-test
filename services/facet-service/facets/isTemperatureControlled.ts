import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';

export enum IsTemperatureControlledFacetOptionKey {}

export const isTemperatureControlledFacetOptions: FacetOption<IsTemperatureControlledFacetOptionKey>[] =
  [];

export const isTemperatureControlledFacet: Facet<
  IsTemperatureControlledFacetOptionKey,
  FacetOption<IsTemperatureControlledFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.IsTemperatureControlled,
  attributeTypeCode: 'IsTemperatureControlled',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: isTemperatureControlledFacetOptions
};
