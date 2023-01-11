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
  _1_ = '_1_',
  _1__ = '_1__',
  _1_33 = '_1_33',
  _1_5_ = '_1_5_',
  _1_5__ = '_1_5__',
  _10_ = '_10_',
  _10__ = '_10__',
  _2_ = '_2_',
  _2__ = '_2__',
  _2_5_ = '_2_5_',
  _2_5__ = '_2_5__',
  _2_8 = '_2_8',
  _3_ = '_3_',
  _3__ = '_3__',
  _3_3 = '_3_3',
  _3_5_ = '_3_5_',
  _3_5__ = '_3_5__',
  _3_9_ = '_3_9_',
  _3_9__ = '_3_9__',
  _4_ = '_4_',
  _4__ = '_4__',
  _4_1_ = '_4_1_',
  _4_1__ = '_4_1__',
  _4_5_ = '_4_5_',
  _4_5__ = '_4_5__',
  _4_9 = '_4_9',
  _5__ = '_5__',
  _5___ = '_5___',
  _5_7 = '_5_7',
  _5_9 = '_5_9',
  _6_ = '_6_',
  _6__ = '_6__',
  _6_6 = '_6_6',
  _7_ = '_7_',
  _7__ = '_7__',
  _7_4 = '_7_4',
  _7_5_ = '_7_5_',
  _7_5__ = '_7_5__',
  _8_ = '_8_',
  _8__ = '_8__',
  _8_2 = '_8_2',
  _9_ = '_9_',
  _9__ = '_9__'
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
      key: ExtensionLengthFacetOptionKey._1_,
      ...defaultFacetOption,
      valueId: '',
      value: 1,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 1
          }
        ],
        sortIndex: 6
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._1__,
      ...defaultFacetOption,
      valueId: '',
      value: 1,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 305
          }
        ],
        sortIndex: 7
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
        sortIndex: 8
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._1_5_,
      ...defaultFacetOption,
      valueId: '',
      value: 1.5,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 1.5
          }
        ],
        sortIndex: 9
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._1_5__,
      ...defaultFacetOption,
      valueId: '',
      value: 1.5,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 457
          }
        ],
        sortIndex: 10
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._10_,
      ...defaultFacetOption,
      valueId: '',
      value: 10,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 10
          }
        ],
        sortIndex: 11
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._10__,
      ...defaultFacetOption,
      valueId: '',
      value: 10,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 3048
          }
        ],
        sortIndex: 12
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._2_,
      ...defaultFacetOption,
      valueId: '',
      value: 2,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 2
          }
        ],
        sortIndex: 13
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._2__,
      ...defaultFacetOption,
      valueId: '',
      value: 2,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 610
          }
        ],
        sortIndex: 14
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._2_5_,
      ...defaultFacetOption,
      valueId: '',
      value: 2.5,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 2.5
          }
        ],
        sortIndex: 15
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._2_5__,
      ...defaultFacetOption,
      valueId: '',
      value: 2.5,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 762
          }
        ],
        sortIndex: 16
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
        sortIndex: 17
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._3_,
      ...defaultFacetOption,
      valueId: '',
      value: 3,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 3
          }
        ],
        sortIndex: 18
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._3__,
      ...defaultFacetOption,
      valueId: '',
      value: 3,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 914
          }
        ],
        sortIndex: 19
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
        sortIndex: 20
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._3_5_,
      ...defaultFacetOption,
      valueId: '',
      value: 3.5,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 3.5
          }
        ],
        sortIndex: 21
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._3_5__,
      ...defaultFacetOption,
      valueId: '',
      value: 3.5,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 1067
          }
        ],
        sortIndex: 22
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._3_9_,
      ...defaultFacetOption,
      valueId: '',
      value: 3.9,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 3.9
          }
        ],
        sortIndex: 23
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._3_9__,
      ...defaultFacetOption,
      valueId: '',
      value: 3.9,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'm',
            value: 1.2
          }
        ],
        sortIndex: 24
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._4_,
      ...defaultFacetOption,
      valueId: '',
      value: 4,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 4
          }
        ],
        sortIndex: 25
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._4__,
      ...defaultFacetOption,
      valueId: '',
      value: 4,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 1219
          }
        ],
        sortIndex: 26
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._4_1_,
      ...defaultFacetOption,
      valueId: '',
      value: 4.1,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 4.1
          }
        ],
        sortIndex: 27
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._4_1__,
      ...defaultFacetOption,
      valueId: '',
      value: 4.1,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'm',
            value: 1.25
          }
        ],
        sortIndex: 28
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._4_5_,
      ...defaultFacetOption,
      valueId: '',
      value: 4.5,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 4.5
          }
        ],
        sortIndex: 29
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._4_5__,
      ...defaultFacetOption,
      valueId: '',
      value: 4.5,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 1372
          }
        ],
        sortIndex: 30
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
        sortIndex: 31
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._5__,
      ...defaultFacetOption,
      valueId: '',
      value: 5,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 5
          }
        ],
        sortIndex: 32
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._5___,
      ...defaultFacetOption,
      valueId: '',
      value: 5,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 1524
          }
        ],
        sortIndex: 33
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
        sortIndex: 34
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
        sortIndex: 35
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._6_,
      ...defaultFacetOption,
      valueId: '',
      value: 6,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 6
          }
        ],
        sortIndex: 36
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._6__,
      ...defaultFacetOption,
      valueId: '',
      value: 6,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 1829
          }
        ],
        sortIndex: 37
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
        sortIndex: 38
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._7_,
      ...defaultFacetOption,
      valueId: '',
      value: 7,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 7
          }
        ],
        sortIndex: 39
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._7__,
      ...defaultFacetOption,
      valueId: '',
      value: 7,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 2134
          }
        ],
        sortIndex: 40
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
        sortIndex: 41
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._7_5_,
      ...defaultFacetOption,
      valueId: '',
      value: 7.5,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 7.5
          }
        ],
        sortIndex: 42
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._7_5__,
      ...defaultFacetOption,
      valueId: '',
      value: 7.5,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 2286
          }
        ],
        sortIndex: 43
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._8_,
      ...defaultFacetOption,
      valueId: '',
      value: 8,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 8
          }
        ],
        sortIndex: 44
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._8__,
      ...defaultFacetOption,
      valueId: '',
      value: 8,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 2438
          }
        ],
        sortIndex: 45
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
        sortIndex: 46
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._9_,
      ...defaultFacetOption,
      valueId: '',
      value: 9,
      configuration: {
        displays: [
          {
            variation: 'Us',
            unitSymbol: 'ft',
            value: 9
          }
        ],
        sortIndex: 47
      }
    },
    {
      key: ExtensionLengthFacetOptionKey._9__,
      ...defaultFacetOption,
      valueId: '',
      value: 9,
      configuration: {
        displays: [
          {
            variation: 'Metric',
            unitSymbol: 'mm',
            value: 2743
          }
        ],
        sortIndex: 48
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
