import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum StrainerScreenMeshSizeFacetOptionKey {
  _100______ = '_100______',
  _50______ = '_50______'
}

export const strainerScreenMeshSizeFacetOptions: FacetOption<StrainerScreenMeshSizeFacetOptionKey>[] =
  [
    {
      key: StrainerScreenMeshSizeFacetOptionKey._100______,
      ...defaultFacetOption,
      valueId: '',
      value: 100,
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 100
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: StrainerScreenMeshSizeFacetOptionKey._50______,
      ...defaultFacetOption,
      valueId: '',
      value: 50,
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 50
          }
        ],
        sortIndex: 2
      }
    }
  ];

export const strainerScreenMeshSizeFacet: Facet<
  StrainerScreenMeshSizeFacetOptionKey,
  FacetOption<StrainerScreenMeshSizeFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.StrainerScreenMeshSize,
  attributeTypeCode: 'StrainerScreenMeshSize',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: strainerScreenMeshSizeFacetOptions
};
