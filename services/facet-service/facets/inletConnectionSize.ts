import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum InletConnectionSizeFacetOptionKey {
  _00625 = '_00625',
  _0125 = '_0125',
  _025 = '_025',
  _0375 = '_0375',
  _05 = '_05',
  _075 = '_075',
  _1 = '_1',
  _125 = '_125',
  _15 = '_15',
  _10 = '_10',
  _12 = '_12',
  _2 = '_2',
  _25 = '_25',
  _3 = '_3',
  _4 = '_4',
  _5 = '_5',
  _6 = '_6',
  _8 = '_8'
}

export const inletConnectionSizeFacetOptions: FacetOption<InletConnectionSizeFacetOptionKey>[] =
  [
    {
      key: InletConnectionSizeFacetOptionKey._00625,
      ...defaultFacetOption,
      valueId: '',
      value: 0.0625,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '1/16' }],
        sortIndex: 1
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._0125,
      ...defaultFacetOption,
      valueId: '',
      value: 0.125,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '1/8' }],
        sortIndex: 2
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._025,
      ...defaultFacetOption,
      valueId: '',
      value: 0.25,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '1/4' }],
        sortIndex: 3
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._0375,
      ...defaultFacetOption,
      valueId: '',
      value: 0.375,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '3/8' }],
        sortIndex: 4
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._05,
      ...defaultFacetOption,
      valueId: '',
      value: 0.5,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '1/2' }],
        sortIndex: 5
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._075,
      ...defaultFacetOption,
      valueId: '',
      value: 0.75,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '3/4' }],
        sortIndex: 6
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._1,
      ...defaultFacetOption,
      valueId: '',
      value: 1,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '1' }],
        sortIndex: 7
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._125,
      ...defaultFacetOption,
      valueId: '',
      value: 1.25,
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: 'in', value: '1-1/4' }
        ],
        sortIndex: 8
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._15,
      ...defaultFacetOption,
      valueId: '',
      value: 1.5,
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: 'in', value: '1-1/2' }
        ],
        sortIndex: 9
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._10,
      ...defaultFacetOption,
      valueId: '',
      value: 10,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '10' }],
        sortIndex: 10
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._12,
      ...defaultFacetOption,
      valueId: '',
      value: 12,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '12' }],
        sortIndex: 11
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._2,
      ...defaultFacetOption,
      valueId: '',
      value: 2,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '2' }],
        sortIndex: 12
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._25,
      ...defaultFacetOption,
      valueId: '',
      value: 2.5,
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: 'in', value: '2-1/2' }
        ],
        sortIndex: 13
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._3,
      ...defaultFacetOption,
      valueId: '',
      value: 3,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '3' }],
        sortIndex: 14
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._4,
      ...defaultFacetOption,
      valueId: '',
      value: 4,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '4' }],
        sortIndex: 15
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._5,
      ...defaultFacetOption,
      valueId: '',
      value: 5,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '5' }],
        sortIndex: 16
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._6,
      ...defaultFacetOption,
      valueId: '',
      value: 6,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '6' }],
        sortIndex: 17
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._8,
      ...defaultFacetOption,
      valueId: '',
      value: 8,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '8' }],
        sortIndex: 18
      }
    }
  ];

export const inletConnectionSizeFacet: Facet<
  InletConnectionSizeFacetOptionKey,
  FacetOption<InletConnectionSizeFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.InletConnectionSize,
  attributeTypeCode: 'InletConnectionSize',
  configuration: {
    category: FacetCategory.Default,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: inletConnectionSizeFacetOptions
};
