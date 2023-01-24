import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum FlowExponentFacetOptionKey {
  _0_44 = '_0_44',
  _0_46 = '_0_46',
  _0_5_ = '_0_5_'
}

export const flowExponentFacetOptions: FacetOption<FlowExponentFacetOptionKey>[] =
  [
    {
      key: FlowExponentFacetOptionKey._0_44,
      ...defaultFacetOption,
      valueId: '',
      value: 0.44,
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 0.44
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: FlowExponentFacetOptionKey._0_46,
      ...defaultFacetOption,
      valueId: '',
      value: 0.46,
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 0.46
          }
        ],
        sortIndex: 2
      }
    },
    {
      key: FlowExponentFacetOptionKey._0_5_,
      ...defaultFacetOption,
      valueId: '',
      value: 0.5,
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 0.5
          }
        ],
        sortIndex: 3
      }
    }
  ];

export const flowExponentFacet: Facet<
  FlowExponentFacetOptionKey,
  FacetOption<FlowExponentFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.FlowExponent,
  attributeTypeCode: 'FlowExponent',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: flowExponentFacetOptions
};
