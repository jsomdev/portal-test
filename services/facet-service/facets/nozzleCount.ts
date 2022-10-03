import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum NozzleCountFacetOptionKey {
  _2 = '_2',
  _3 = '_3',
  _4 = '_4',
  _6 = '_6'
}

export const nozzleCountFacetOptions: FacetOption<NozzleCountFacetOptionKey>[] =
  [
    {
      key: NozzleCountFacetOptionKey._2,
      ...defaultFacetOption,
      valueId: '',
      value: 2,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: '', value: 2 }],
        sortIndex: 1
      }
    },
    {
      key: NozzleCountFacetOptionKey._3,
      ...defaultFacetOption,
      valueId: '',
      value: 3,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: '', value: 3 }],
        sortIndex: 4
      }
    },
    {
      key: NozzleCountFacetOptionKey._4,
      ...defaultFacetOption,
      valueId: '',
      value: 4,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: '', value: 4 }],
        sortIndex: 5
      }
    },
    {
      key: NozzleCountFacetOptionKey._6,
      ...defaultFacetOption,
      valueId: '',
      value: 6,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: '', value: 6 }],
        sortIndex: 7
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
    displayName: '',
    description: '',
    isFacetingEnabled: true
  },
  options: nozzleCountFacetOptions
};
