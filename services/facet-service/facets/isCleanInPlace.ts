import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum IsCleanInPlaceFacetOptionKey {
  false = 'false',
  true = 'true'
}

export const isCleanInPlaceFacetOptions: FacetOption<IsCleanInPlaceFacetOptionKey>[] =
  [
    {
      key: IsCleanInPlaceFacetOptionKey.false,
      ...defaultFacetOption,
      valueId: '',
      value: 'true',
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: '', value: 'No' }],
        sortIndex: 2
      }
    },
    {
      key: IsCleanInPlaceFacetOptionKey.true,
      ...defaultFacetOption,
      valueId: '',
      value: 'false',
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: '', value: 'Yes' }],
        sortIndex: 1
      }
    }
  ];

export const isCleanInPlaceFacet: Facet<
  IsCleanInPlaceFacetOptionKey,
  FacetOption<IsCleanInPlaceFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.IsCleanInPlace,
  attributeTypeCode: 'IsCleanInPlace',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.SingleSelect,
    isFacetingEnabled: true
  },
  options: isCleanInPlaceFacetOptions
};
