import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum InletConnectionSizeFacetOptionKey {
  _0_0625 = '_0_0625',
  _0_125 = '_0_125',
  _0_139 = '_0_139',
  _0_25 = '_0_25',
  _0_375 = '_0_375',
  _0_5 = '_0_5',
  _0_716 = '_0_716',
  _0_75 = '_0_75',
  _0_756 = '_0_756',
  _0_992 = '_0_992',
  _1 = '_1',
  _1_012 = '_1_012',
  _1_25 = '_1_25',
  _1_5 = '_1_5',
  _10 = '_10',
  _12 = '_12',
  _2 = '_2',
  _2_5 = '_2_5',
  _3 = '_3',
  _4 = '_4',
  _5 = '_5',
  _6 = '_6',
  _8 = '_8'
}

export const inletConnectionSizeFacetOptions: FacetOption<InletConnectionSizeFacetOptionKey>[] =
  [
    {
      key: InletConnectionSizeFacetOptionKey._0_0625,
      ...defaultFacetOption,
      valueId: '',
      value: 0.0625,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '1/16' }],
        sortIndex: 1
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._0_125,
      ...defaultFacetOption,
      valueId: '',
      value: 0.125,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '1/8' }],
        sortIndex: 2
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._0_139,
      ...defaultFacetOption,
      valueId: '',
      value: 0.139,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '5/32' }],
        sortIndex: 3
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._0_25,
      ...defaultFacetOption,
      valueId: '',
      value: 0.25,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '1/4' }],
        sortIndex: 4
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._0_375,
      ...defaultFacetOption,
      valueId: '',
      value: 0.375,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '3/8' }],
        sortIndex: 5
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._0_5,
      ...defaultFacetOption,
      valueId: '',
      value: 0.5,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '1/2' }],
        sortIndex: 6
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._0_716,
      ...defaultFacetOption,
      valueId: '',
      value: 0.716,
      configuration: {
        displays: [
          { variation: 'Metric', unitSymbol: 'mm', value: 18.2 },
          { variation: 'Us', unitSymbol: 'in', value: 0.716 }
        ],
        sortIndex: 7
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._0_75,
      ...defaultFacetOption,
      valueId: '',
      value: 0.75,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: '3/4' }],
        sortIndex: 8
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._0_756,
      ...defaultFacetOption,
      valueId: '',
      value: 0.756,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'in', value: 0.756 },
          { variation: 'Metric', unitSymbol: 'mm', value: 19.2 }
        ],
        sortIndex: 9
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._0_992,
      ...defaultFacetOption,
      valueId: '',
      value: 0.992,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'in', value: 0.992 },
          { variation: 'Metric', unitSymbol: 'mm', value: 25.2 }
        ],
        sortIndex: 10
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._1,
      ...defaultFacetOption,
      valueId: '',
      value: 1,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: 1 }],
        sortIndex: 11
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._1_012,
      ...defaultFacetOption,
      valueId: '',
      value: 1.012,
      configuration: {
        displays: [
          { variation: 'Metric', unitSymbol: 'mm', value: 25.7 },
          { variation: 'Us', unitSymbol: 'in', value: 1.012 }
        ],
        sortIndex: 12
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._1_25,
      ...defaultFacetOption,
      valueId: '',
      value: 1.25,
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: 'in', value: '1-1/4' }
        ],
        sortIndex: 13
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._1_5,
      ...defaultFacetOption,
      valueId: '',
      value: 1.5,
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: 'in', value: '1-1/2' }
        ],
        sortIndex: 14
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._10,
      ...defaultFacetOption,
      valueId: '',
      value: 10,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: 10 }],
        sortIndex: 15
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._12,
      ...defaultFacetOption,
      valueId: '',
      value: 12,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: 12 }],
        sortIndex: 16
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._2,
      ...defaultFacetOption,
      valueId: '',
      value: 2,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: 2 }],
        sortIndex: 17
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._2_5,
      ...defaultFacetOption,
      valueId: '',
      value: 2.5,
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: 'in', value: '2-1/2' }
        ],
        sortIndex: 18
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._3,
      ...defaultFacetOption,
      valueId: '',
      value: 3,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: 3 }],
        sortIndex: 19
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._4,
      ...defaultFacetOption,
      valueId: '',
      value: 4,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: 4 }],
        sortIndex: 20
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._5,
      ...defaultFacetOption,
      valueId: '',
      value: 5,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: 5 }],
        sortIndex: 21
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._6,
      ...defaultFacetOption,
      valueId: '',
      value: 6,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: 6 }],
        sortIndex: 22
      }
    },
    {
      key: InletConnectionSizeFacetOptionKey._8,
      ...defaultFacetOption,
      valueId: '',
      value: 8,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'in', value: 8 }],
        sortIndex: 23
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
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: inletConnectionSizeFacetOptions
};
