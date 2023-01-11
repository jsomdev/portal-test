import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum InletConnectionThreadTypeFacetOptionKey {
  BSPT = 'BSPT',
  NPS = 'NPS',
  NPT = 'NPT'
}

export const inletConnectionThreadTypeFacetOptions: FacetOption<InletConnectionThreadTypeFacetOptionKey>[] =
  [
    {
      key: InletConnectionThreadTypeFacetOptionKey.BSPT,
      ...defaultFacetOption,
      valueId: 'ee4fc67d-143c-43c2-8675-62f11424b2a7',
      value: 'BSPT',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'BSPT' }
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: InletConnectionThreadTypeFacetOptionKey.NPS,
      ...defaultFacetOption,
      valueId: '27d6065a-394a-45d4-893f-c3afa853fed4',
      value: 'NPS',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'NPS' }
          }
        ],
        sortIndex: 2
      }
    },
    {
      key: InletConnectionThreadTypeFacetOptionKey.NPT,
      ...defaultFacetOption,
      valueId: '30ac01e3-54e5-4f8f-9ff7-8098bb4b9247',
      value: 'NPT',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'NPT' }
          }
        ],
        sortIndex: 3
      }
    }
  ];

export const inletConnectionThreadTypeFacet: Facet<
  InletConnectionThreadTypeFacetOptionKey,
  FacetOption<InletConnectionThreadTypeFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.InletConnectionThreadType,
  attributeTypeCode: 'InletConnectionThreadType',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: inletConnectionThreadTypeFacetOptions
};
