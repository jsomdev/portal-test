import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum NozzleCountFacetOptionKey {
  _2______ = '_2______',
  _3______ = '_3______',
  _4______ = '_4______',
  _6______ = '_6______'
}

export const nozzleCountFacetOptions: FacetOption<NozzleCountFacetOptionKey>[] =
  [
    {
      key: NozzleCountFacetOptionKey._2______,
      ...defaultFacetOption,
      valueId: '',
      value: 2,
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 2
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: NozzleCountFacetOptionKey._3______,
      ...defaultFacetOption,
      valueId: '',
      value: 3,
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 3
          }
        ],
        sortIndex: 2
      }
    },
    {
      key: NozzleCountFacetOptionKey._4______,
      ...defaultFacetOption,
      valueId: '',
      value: 4,
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 4
          }
        ],
        sortIndex: 3
      }
    },
    {
      key: NozzleCountFacetOptionKey._6______,
      ...defaultFacetOption,
      valueId: '',
      value: 6,
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 6
          }
        ],
        sortIndex: 4
      }
    }
  ];

export const nozzleCountFacet: Facet<
  NozzleCountFacetOptionKey,
  FacetOption<NozzleCountFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.NozzleCount,
  attributeTypeCode: 'NozzleCount',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: nozzleCountFacetOptions
};
