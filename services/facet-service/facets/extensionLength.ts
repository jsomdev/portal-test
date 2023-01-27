import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum ExtensionLengthFacetOptionKey {
  _0_33 = '_0_33',
  _0_66 = '_0_66',
  _0_76 = '_0_76',
  _0_83 = '_0_83',
  _0_9 = '_0_9',
  _1 = '_1',
  _1_33 = '_1_33',
  _1_5 = '_1_5',
  _10 = '_10',
  _2 = '_2',
  _2_5 = '_2_5',
  _2_8 = '_2_8',
  _3 = '_3',
  _3_3 = '_3_3',
  _3_5 = '_3_5',
  _3_9 = '_3_9',
  _4 = '_4',
  _4_1 = '_4_1',
  _4_5 = '_4_5',
  _4_9 = '_4_9',
  _5 = '_5',
  _5_7 = '_5_7',
  _5_9 = '_5_9',
  _6 = '_6',
  _6_6 = '_6_6',
  _7 = '_7',
  _7_4 = '_7_4',
  _7_5 = '_7_5',
  _8 = '_8',
  _8_2 = '_8_2',
  _9 = '_9'
}

export const extensionLengthFacetOptions: FacetOption<ExtensionLengthFacetOptionKey>[] =
  [
    {
      key: ExtensionLengthFacetOptionKey._0_33,
      ...defaultFacetOption,
      valueId: '',
      value: 0.33,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 0.33
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 101
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._0_66,
      ...defaultFacetOption,
      valueId: '',
      value: 0.66,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 0.66
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 201
          }
        ],
        sortIndex: 2
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._0_76,
      ...defaultFacetOption,
      valueId: '',
      value: 0.76,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 0.76
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 232
          }
        ],
        sortIndex: 3
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._0_83,
      ...defaultFacetOption,
      valueId: '',
      value: 0.83,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 0.83
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 253
          }
        ],
        sortIndex: 4
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._0_9,
      ...defaultFacetOption,
      valueId: '',
      value: 0.9,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 0.9
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 274
          }
        ],
        sortIndex: 5
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._1,
      ...defaultFacetOption,
      valueId: '',
      value: 1,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 1
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 305
          }
        ],
        sortIndex: 6
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._1_33,
      ...defaultFacetOption,
      valueId: '',
      value: 1.33,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 1.33
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 405
          }
        ],
        sortIndex: 7
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._1_5,
      ...defaultFacetOption,
      valueId: '',
      value: 1.5,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 1.5
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 457
          }
        ],
        sortIndex: 8
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._10,
      ...defaultFacetOption,
      valueId: '',
      value: 10,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 10
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 3048
          }
        ],
        sortIndex: 9
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._2,
      ...defaultFacetOption,
      valueId: '',
      value: 2,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 2
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 610
          }
        ],
        sortIndex: 10
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._2_5,
      ...defaultFacetOption,
      valueId: '',
      value: 2.5,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 2.5
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 762
          }
        ],
        sortIndex: 11
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._2_8,
      ...defaultFacetOption,
      valueId: '',
      value: 2.8,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 2.8
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 853
          }
        ],
        sortIndex: 12
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._3,
      ...defaultFacetOption,
      valueId: '',
      value: 3,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 3
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 914
          }
        ],
        sortIndex: 13
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._3_3,
      ...defaultFacetOption,
      valueId: '',
      value: 3.3,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 3.3
          },
          {
            variation: 'Metric',
            unitSymbol: 'm',
            value: 1
          }
        ],
        sortIndex: 14
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._3_5,
      ...defaultFacetOption,
      valueId: '',
      value: 3.5,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 3.5
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 1067
          }
        ],
        sortIndex: 15
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._3_9,
      ...defaultFacetOption,
      valueId: '',
      value: 3.9,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 3.9
          },
          {
            variation: 'Metric',
            unitSymbol: 'm',
            value: 1.2
          }
        ],
        sortIndex: 16
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._4,
      ...defaultFacetOption,
      valueId: '',
      value: 4,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 4
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 1219
          }
        ],
        sortIndex: 17
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._4_1,
      ...defaultFacetOption,
      valueId: '',
      value: 4.1,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 4.1
          },
          {
            variation: 'Metric',
            unitSymbol: 'm',
            value: 1.25
          }
        ],
        sortIndex: 18
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._4_5,
      ...defaultFacetOption,
      valueId: '',
      value: 4.5,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 4.5
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 1372
          }
        ],
        sortIndex: 19
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._4_9,
      ...defaultFacetOption,
      valueId: '',
      value: 4.9,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 4.9
          },
          {
            variation: 'Metric',
            unitSymbol: 'm',
            value: 1.5
          }
        ],
        sortIndex: 20
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._5,
      ...defaultFacetOption,
      valueId: '',
      value: 5,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 5
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 1524
          }
        ],
        sortIndex: 21
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._5_7,
      ...defaultFacetOption,
      valueId: '',
      value: 5.7,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 5.7
          },
          {
            variation: 'Metric',
            unitSymbol: 'm',
            value: 1.75
          }
        ],
        sortIndex: 22
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._5_9,
      ...defaultFacetOption,
      valueId: '',
      value: 5.9,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 5.9
          },
          {
            variation: 'Metric',
            unitSymbol: 'm',
            value: 1.8
          }
        ],
        sortIndex: 23
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._6,
      ...defaultFacetOption,
      valueId: '',
      value: 6,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 6
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 1829
          }
        ],
        sortIndex: 24
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._6_6,
      ...defaultFacetOption,
      valueId: '',
      value: 6.6,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 6.6
          },
          {
            variation: 'Metric',
            unitSymbol: 'm',
            value: 2
          }
        ],
        sortIndex: 25
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._7,
      ...defaultFacetOption,
      valueId: '',
      value: 7,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 7
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 2134
          }
        ],
        sortIndex: 26
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._7_4,
      ...defaultFacetOption,
      valueId: '',
      value: 7.4,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 7.4
          },
          {
            variation: 'Metric',
            unitSymbol: 'm',
            value: 2.25
          }
        ],
        sortIndex: 27
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._7_5,
      ...defaultFacetOption,
      valueId: '',
      value: 7.5,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 7.5
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 2286
          }
        ],
        sortIndex: 28
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._8,
      ...defaultFacetOption,
      valueId: '',
      value: 8,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 8
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 2438
          }
        ],
        sortIndex: 29
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._8_2,
      ...defaultFacetOption,
      valueId: '',
      value: 8.2,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 8.2
          },
          {
            variation: 'Metric',
            unitSymbol: 'm',
            value: 2.5
          }
        ],
        sortIndex: 30
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._9,
      ...defaultFacetOption,
      valueId: '',
      value: 9,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 9
          },
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 2743
          }
        ],
        sortIndex: 31
      }
    }
  ];

export const extensionLengthFacet: Facet<
  ExtensionLengthFacetOptionKey,
  FacetOption<ExtensionLengthFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.ExtensionLength,
  attributeTypeCode: 'ExtensionLength',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: extensionLengthFacetOptions
};
