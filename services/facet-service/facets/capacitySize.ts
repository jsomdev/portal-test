import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum CapacitySizeFacetOptionKey {
  _25 = '_25',
  _30 = '_30',
  _37 = '_37',
  _40 = '_40',
  _5 = '_5',
  _50 = '_50',
  _60 = '_60',
  _75 = '_75',
  _80 = '_80',
  _90 = '_90',
  _0_1 = '_0_1',
  _0_25 = '_0_25',
  _0_3 = '_0_3',
  _0_4 = '_0_4',
  _0_5 = '_0_5',
  _0_50_5W = '_0_50_5W',
  _0_54 = '_0_54',
  _0_6 = '_0_6',
  _0_7 = '_0_7',
  _0_75 = '_0_75',
  _0009 = '_0009',
  _0012 = '_0012',
  _0017 = '_0017',
  _0019 = '_0019',
  _0021 = '_0021',
  _0023 = '_0023',
  _0025 = '_0025',
  _0027 = '_0027',
  _0033 = '_0033',
  _0037 = '_0037',
  _0039 = '_0039',
  _0046 = '_0046',
  _0050 = '_0050',
  _0067 = '_0067',
  _0077 = '_0077',
  _01 = '_01',
  _0116 = '_0116',
  _015 = '_015',
  _0154 = '_0154',
  _02 = '_02',
  _0231 = '_0231',
  _025 = '_025',
  _03 = '_03',
  _0308 = '_0308',
  _035 = '_035',
  _0385 = '_0385',
  _04 = '_04',
  _045 = '_045',
  _0462 = '_0462',
  _05 = '_05',
  _055 = '_055',
  _06 = '_06',
  _0616 = '_0616',
  _065 = '_065',
  _07 = '_07',
  _075 = '_075',
  _0770 = '_0770',
  _08 = '_08',
  _085 = '_085',
  _09 = '_09',
  _0924 = '_0924',
  _095 = '_095',
  _1 = '_1',
  _1_25 = '_1_25',
  _1_3 = '_1_3',
  _1_5 = '_1_5',
  _1_5W = '_1_5W',
  _1_8 = '_1_8',
  _10 = '_10',
  _100 = '_100',
  _1000 = '_1000',
  _10045 = '_10045',
  _1010W = '_1010W',
  _1015 = '_1015',
  _1015W = '_1015W',
  _102 = '_102',
  _1020 = '_1020',
  _1020W = '_1020W',
  _1030W = '_1030W',
  _1045 = '_1045',
  _105 = '_105',
  _105W = '_105W',
  _106SQ = '_106SQ',
  _1070WSQ = '_1070WSQ',
  _108 = '_108',
  _108W = '_108W',
  _10SQ = '_10SQ',
  _10W = '_10W',
  _11 = '_11',
  _110 = '_110',
  _1100 = '_1100',
  _110W = '_110W',
  _115 = '_115',
  _115W = '_115W',
  _11W = '_11W',
  _11W_ = '_11W_',
  _12 = '_12',
  _12_5 = '_12_5',
  _120 = '_120',
  _1200 = '_1200',
  _12045 = '_12045',
  _1245 = '_1245',
  _125 = '_125',
  _12SQ = '_12SQ',
  _12W = '_12W',
  _13 = '_13',
  _13_6 = '_13_6',
  _1300 = '_1300',
  _130WSQ = '_130WSQ',
  _135 = '_135',
  _14 = '_14',
  _14_5SQ = '_14_5SQ',
  _140 = '_140',
  _1400 = '_1400',
  _14045 = '_14045',
  _1445 = '_1445',
  _14W = '_14W',
  _14WSQ = '_14WSQ',
  _15 = '_15',
  _150 = '_150',
  _1500 = '_1500',
  _15045 = '_15045',
  _1507 = '_1507',
  _1510 = '_1510',
  _1510W = '_1510W',
  _151150 = '_151150',
  _1514 = '_1514',
  _15150 = '_15150',
  _1515W = '_1515W',
  _1515W_ = '_1515W_',
  _151750 = '_151750',
  _1520 = '_1520',
  _1520W = '_1520W',
  _152500 = '_152500',
  _1525W = '_1525W',
  _15280 = '_15280',
  _1530 = '_1530',
  _1530W = '_1530W',
  _15430 = '_15430',
  _154500 = '_154500',
  _155 = '_155',
  _1550 = '_1550',
  _155W = '_155W',
  _15630 = '_15630',
  _157000 = '_157000',
  _158 = '_158',
  _158W = '_158W',
  _1590 = '_1590',
  _15W = '_15W',
  _16 = '_16',
  _160 = '_160',
  _1600 = '_1600',
  _164 = '_164',
  _1645 = '_1645',
  _165 = '_165',
  _16W = '_16W',
  _17 = '_17',
  _170 = '_170',
  _1700 = '_1700',
  _175 = '_175',
  _17545 = '_17545',
  _177SQ = '_177SQ',
  _1780 = '_1780',
  _17W = '_17W',
  _17WSQ = '_17WSQ',
  _18 = '_18',
  _180 = '_180',
  _1800 = '_1800',
  _188W = '_188W',
  _18SQ = '_18SQ',
  _19 = '_19',
  _190 = '_190',
  _190WSQ = '_190WSQ',
  _2 = '_2',
  _2_5 = '_2_5',
  _2_8W = '_2_8W',
  _20 = '_20',
  _20_5 = '_20_5',
  _200 = '_200',
  _2000 = '_2000',
  _20045 = '_20045',
  _2010 = '_2010',
  _2010W = '_2010W',
  _2015 = '_2015',
  _2015W = '_2015W',
  _2020W = '_2020W',
  _2025 = '_2025',
  _2025W = '_2025W',
  _2030W = '_2030W',
  _2040 = '_2040',
  _2040W = '_2040W',
  _2045 = '_2045',
  _205 = '_205',
  _2050 = '_2050',
  _2050W = '_2050W',
  _2060 = '_2060',
  _208 = '_208',
  _208W = '_208W',
  _20W = '_20W',
  _20WSQ = '_20WSQ',
  _21 = '_21',
  _21_ = '_21_',
  _210 = '_210',
  _210_ = '_210_',
  _210W = '_210W',
  _215 = '_215',
  _215W = '_215W',
  _22 = '_22',
  _220 = '_220',
  _220_ = '_220_',
  _2200 = '_2200',
  _220W = '_220W',
  _225 = '_225',
  _22545 = '_22545',
  _23 = '_23',
  _23_ = '_23_',
  _230SQ = '_230SQ',
  _23W = '_23W',
  _24 = '_24',
  _240 = '_240',
  _2400 = '_2400',
  _24W = '_24W',
  _24WSQ = '_24WSQ',
  _25_ = '_25_',
  _25__ = '_25__',
  _250 = '_250',
  _25045 = '_25045',
  _2510 = '_2510',
  _2510W = '_2510W',
  _2515 = '_2515',
  _2515W = '_2515W',
  _2520 = '_2520',
  _2520W = '_2520W',
  _2525W = '_2525W',
  _2530W = '_2530W',
  _2540 = '_2540',
  _2540W = '_2540W',
  _2550 = '_2550',
  _2550W = '_2550W',
  _2560 = '_2560',
  _2560_ = '_2560_',
  _258 = '_258',
  _258W = '_258W',
  _25W = '_25W',
  _26 = '_26',
  _260 = '_260',
  _27 = '_27',
  _27_5 = '_27_5',
  _275 = '_275',
  _27W = '_27W',
  _27WSQ = '_27WSQ',
  _28 = '_28',
  _28_ = '_28_',
  _280 = '_280',
  _28W = '_28W',
  _29 = '_29',
  _290SQ = '_290SQ',
  _290WSQ = '_290WSQ',
  _2980SQ = '_2980SQ',
  _29SQ = '_29SQ',
  _2W = '_2W',
  _3 = '_3',
  _3_2 = '_3_2',
  _3_4 = '_3_4',
  _3_5 = '_3_5',
  _3_6SQ = '_3_6SQ',
  _3_9 = '_3_9',
  _30_ = '_30_',
  _30__ = '_30__',
  _300 = '_300',
  _3001_4 = '_3001_4',
  _3002_5 = '_3002_5',
  _3004 = '_3004',
  _3007 = '_3007',
  _3009 = '_3009',
  _30100 = '_30100',
  _301000 = '_301000',
  _301100 = '_301100',
  _301200 = '_301200',
  _3014 = '_3014',
  _30150 = '_30150',
  _30200 = '_30200',
  _30250 = '_30250',
  _3030 = '_3030',
  _30300 = '_30300',
  _30350 = '_30350',
  _30400 = '_30400',
  _3045 = '_3045',
  _3050 = '_3050',
  _30500 = '_30500',
  _30600 = '_30600',
  _3070 = '_3070',
  _30700 = '_30700',
  _30W = '_30W',
  _30WSQ = '_30WSQ',
  _31 = '_31',
  _310 = '_310',
  _310W = '_310W',
  _315 = '_315',
  _315W = '_315W',
  _32 = '_32',
  _32_ = '_32_',
  _320 = '_320',
  _320_ = '_320_',
  _320W = '_320W',
  _32W = '_32W',
  _33 = '_33',
  _330 = '_330',
  _3360 = '_3360',
  _33W = '_33W',
  _340 = '_340',
  _35 = '_35',
  _35_ = '_35_',
  _350 = '_350',
  _3500 = '_3500',
  _3545 = '_3545',
  _35W = '_35W',
  _35W_ = '_35W_',
  _35WSQ = '_35WSQ',
  _360 = '_360',
  _360SQ = '_360SQ',
  _36SQ = '_36SQ',
  _38 = '_38',
  _380 = '_380',
  _38W = '_38W',
  _3W = '_3W',
  _4 = '_4',
  _4_1 = '_4_1',
  _4_2 = '_4_2',
  _4_3W = '_4_3W',
  _4_5 = '_4_5',
  _4_8 = '_4_8',
  _4_8SQ = '_4_8SQ',
  _4_9VL = '_4_9VL',
  _40_ = '_40_',
  _400 = '_400',
  _4010 = '_4010',
  _4010W = '_4010W',
  _4015 = '_4015',
  _4015W = '_4015W',
  _4020 = '_4020',
  _4020W = '_4020W',
  _4025 = '_4025',
  _4025W = '_4025W',
  _4040W = '_4040W',
  _4045 = '_4045',
  _4050 = '_4050',
  _4050_1 = '_4050_1',
  _4050W = '_4050W',
  _4060 = '_4060',
  _408 = '_408',
  _40W = '_40W',
  _40WSQ = '_40WSQ',
  _42 = '_42',
  _44065 = '_44065',
  _45 = '_45',
  _450 = '_450',
  _4545 = '_4545',
  _45W = '_45W',
  _45WSQ = '_45WSQ',
  _46 = '_46',
  _470 = '_470',
  _47W = '_47W',
  _48 = '_48',
  _480 = '_480',
  _480SQ = '_480SQ',
  _490SQ = '_490SQ',
  _4W = '_4W',
  _5_ = '_5_',
  _5_6W = '_5_6W',
  _5_8 = '_5_8',
  _50_ = '_50_',
  _50__ = '_50__',
  _500 = '_500',
  _5045 = '_5045',
  _5050_3 = '_5050_3',
  _5050W = '_5050W',
  _50SQ = '_50SQ',
  _50W = '_50W',
  _50WSQ = '_50WSQ',
  _51 = '_51',
  _510 = '_510',
  _510W = '_510W',
  _515 = '_515',
  _515W = '_515W',
  _52 = '_52',
  _520 = '_520',
  _520W = '_520W',
  _5250 = '_5250',
  _53 = '_53',
  _53_ = '_53_',
  _53W = '_53W',
  _550 = '_550',
  _55065 = '_55065',
  _5545 = '_5545',
  _55W = '_55W',
  _56 = '_56',
  _560 = '_560',
  _560WSQ = '_560WSQ',
  _5690SQ = '_5690SQ',
  _57 = '_57',
  _570 = '_570',
  _58 = '_58',
  _58_ = '_58_',
  _580 = '_580',
  _58W = '_58W',
  _590SQ = '_590SQ',
  _5W = '_5W',
  _6 = '_6',
  _6_1 = '_6_1',
  _6_5 = '_6_5',
  _6_5VL = '_6_5VL',
  _60_ = '_60_',
  _60__ = '_60__',
  _600 = '_600',
  _625 = '_625',
  _62565 = '_62565',
  _64 = '_64',
  _640 = '_640',
  _650 = '_650',
  _6SQ = '_6SQ',
  _6W = '_6W',
  _7 = '_7',
  _7_5 = '_7_5',
  _70 = '_70',
  _700 = '_700',
  _7045 = '_7045',
  _70W = '_70W',
  _71WSQ = '_71WSQ',
  _72 = '_72',
  _750 = '_750',
  _8 = '_8',
  _8_1VL = '_8_1VL',
  _8_5 = '_8_5',
  _80_ = '_80_',
  _800 = '_800',
  _810 = '_810',
  _810W = '_810W',
  _815 = '_815',
  _815W = '_815W',
  _82 = '_82',
  _820 = '_820',
  _820_ = '_820_',
  _820W = '_820W',
  _825W = '_825W',
  _830WSQ = '_830WSQ',
  _84 = '_84',
  _85 = '_85',
  _85_ = '_85_',
  _850 = '_850',
  _8545 = '_8545',
  _85W = '_85W',
  _88W = '_88W',
  _8SQ = '_8SQ',
  _8W = '_8W',
  _9 = '_9',
  _9_2VL = '_9_2VL',
  _9_5 = '_9_5',
  _9_9 = '_9_9',
  _90_ = '_90_',
  _900 = '_900',
  _950SQ = '_950SQ',
  _95W = '_95W',
  _960 = '_960',
  D1_513 = 'D1_513',
  D1_523 = 'D1_523',
  D1_525 = 'D1_525',
  D1_531 = 'D1_531',
  D1_533 = 'D1_533',
  D1_535 = 'D1_535',
  D1_545 = 'D1_545',
  D1_546 = 'D1_546',
  D1_556 = 'D1_556',
  D1025 = 'D1025',
  D1045 = 'D1045',
  D1046 = 'D1046',
  D1056 = 'D1056',
  D113 = 'D113',
  D1225 = 'D1225',
  D123 = 'D123',
  D1245 = 'D1245',
  D125 = 'D125',
  D131 = 'D131',
  D133 = 'D133',
  D135 = 'D135',
  D1425 = 'D1425',
  D1445 = 'D1445',
  D145 = 'D145',
  D146 = 'D146',
  D156 = 'D156',
  D1645 = 'D1645',
  D213 = 'D213',
  D223 = 'D223',
  D225 = 'D225',
  D231 = 'D231',
  D233 = 'D233',
  D235 = 'D235',
  D245 = 'D245',
  D246 = 'D246',
  D256 = 'D256',
  D313 = 'D313',
  D323 = 'D323',
  D325 = 'D325',
  D331 = 'D331',
  D333 = 'D333',
  D335 = 'D335',
  D345 = 'D345',
  D346 = 'D346',
  D356 = 'D356',
  D413 = 'D413',
  D423 = 'D423',
  D425 = 'D425',
  D433 = 'D433',
  D435 = 'D435',
  D445 = 'D445',
  D446 = 'D446',
  D456 = 'D456',
  D523 = 'D523',
  D525 = 'D525',
  D535 = 'D535',
  D545 = 'D545',
  D546 = 'D546',
  D556 = 'D556',
  D623 = 'D623',
  D625 = 'D625',
  D645 = 'D645',
  D646 = 'D646',
  D656 = 'D656',
  D725 = 'D725',
  D745 = 'D745',
  D746 = 'D746',
  D756 = 'D756',
  D825 = 'D825',
  D845 = 'D845',
  D846 = 'D846',
  D856 = 'D856'
}

export const capacitySizeFacetOptions: FacetOption<CapacitySizeFacetOptionKey>[] =
  [
    {
      key: CapacitySizeFacetOptionKey._25,
      ...defaultFacetOption,
      valueId: '',
      value: '.25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '.25'
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: CapacitySizeFacetOptionKey._30,
      ...defaultFacetOption,
      valueId: '',
      value: '.30',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '.30'
          }
        ],
        sortIndex: 2
      }
    },
    {
      key: CapacitySizeFacetOptionKey._37,
      ...defaultFacetOption,
      valueId: '',
      value: '.37',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '.37'
          }
        ],
        sortIndex: 3
      }
    },
    {
      key: CapacitySizeFacetOptionKey._40,
      ...defaultFacetOption,
      valueId: '',
      value: '.40',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '.40'
          }
        ],
        sortIndex: 4
      }
    },
    {
      key: CapacitySizeFacetOptionKey._5,
      ...defaultFacetOption,
      valueId: '',
      value: '.5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '.5'
          }
        ],
        sortIndex: 5
      }
    },
    {
      key: CapacitySizeFacetOptionKey._50,
      ...defaultFacetOption,
      valueId: '',
      value: '.50',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '.50'
          }
        ],
        sortIndex: 6
      }
    },
    {
      key: CapacitySizeFacetOptionKey._60,
      ...defaultFacetOption,
      valueId: '',
      value: '.60',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '.60'
          }
        ],
        sortIndex: 7
      }
    },
    {
      key: CapacitySizeFacetOptionKey._75,
      ...defaultFacetOption,
      valueId: '',
      value: '.75',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '.75'
          }
        ],
        sortIndex: 8
      }
    },
    {
      key: CapacitySizeFacetOptionKey._80,
      ...defaultFacetOption,
      valueId: '',
      value: '.80',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '.80'
          }
        ],
        sortIndex: 9
      }
    },
    {
      key: CapacitySizeFacetOptionKey._90,
      ...defaultFacetOption,
      valueId: '',
      value: '.90',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '.90'
          }
        ],
        sortIndex: 10
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0_1,
      ...defaultFacetOption,
      valueId: '',
      value: '0.1',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0.1'
          }
        ],
        sortIndex: 11
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0_25,
      ...defaultFacetOption,
      valueId: '',
      value: '0.25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0.25'
          }
        ],
        sortIndex: 12
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0_3,
      ...defaultFacetOption,
      valueId: '',
      value: '0.3',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0.3'
          }
        ],
        sortIndex: 13
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0_4,
      ...defaultFacetOption,
      valueId: '',
      value: '0.4',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0.4'
          }
        ],
        sortIndex: 14
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0_5,
      ...defaultFacetOption,
      valueId: '',
      value: '0.5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0.5'
          }
        ],
        sortIndex: 15
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0_50_5W,
      ...defaultFacetOption,
      valueId: '',
      value: '0.5-0.5W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0.5-0.5W'
          }
        ],
        sortIndex: 16
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0_54,
      ...defaultFacetOption,
      valueId: '',
      value: '0.54',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0.54'
          }
        ],
        sortIndex: 17
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0_6,
      ...defaultFacetOption,
      valueId: '',
      value: '0.6',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0.6'
          }
        ],
        sortIndex: 18
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0_7,
      ...defaultFacetOption,
      valueId: '',
      value: '0.7',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0.7'
          }
        ],
        sortIndex: 19
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0_75,
      ...defaultFacetOption,
      valueId: '',
      value: '0.75',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0.75'
          }
        ],
        sortIndex: 20
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0009,
      ...defaultFacetOption,
      valueId: '',
      value: '0009',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0009'
          }
        ],
        sortIndex: 21
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0012,
      ...defaultFacetOption,
      valueId: '',
      value: '0012',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0012'
          }
        ],
        sortIndex: 22
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0017,
      ...defaultFacetOption,
      valueId: '',
      value: '0017',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0017'
          }
        ],
        sortIndex: 23
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0019,
      ...defaultFacetOption,
      valueId: '',
      value: '0019',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0019'
          }
        ],
        sortIndex: 24
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0021,
      ...defaultFacetOption,
      valueId: '',
      value: '0021',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0021'
          }
        ],
        sortIndex: 25
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0023,
      ...defaultFacetOption,
      valueId: '',
      value: '0023',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0023'
          }
        ],
        sortIndex: 26
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0025,
      ...defaultFacetOption,
      valueId: '',
      value: '0025',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0025'
          }
        ],
        sortIndex: 27
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0027,
      ...defaultFacetOption,
      valueId: '',
      value: '0027',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '4.5 gpm @ 40 psi'
          }
        ],
        sortIndex: 28
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0033,
      ...defaultFacetOption,
      valueId: '',
      value: '0033',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0033'
          }
        ],
        sortIndex: 29
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0037,
      ...defaultFacetOption,
      valueId: '',
      value: '0037',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '9.9 gpm @ 40 psi'
          }
        ],
        sortIndex: 30
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0039,
      ...defaultFacetOption,
      valueId: '',
      value: '0039',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0039'
          }
        ],
        sortIndex: 31
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0046,
      ...defaultFacetOption,
      valueId: '',
      value: '0046',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '13.6 gpm @ 40 psi'
          }
        ],
        sortIndex: 32
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0050,
      ...defaultFacetOption,
      valueId: '',
      value: '0050',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0050'
          }
        ],
        sortIndex: 33
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0067,
      ...defaultFacetOption,
      valueId: '',
      value: '0067',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0067'
          }
        ],
        sortIndex: 34
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0077,
      ...defaultFacetOption,
      valueId: '',
      value: '0077',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0077'
          }
        ],
        sortIndex: 35
      }
    },
    {
      key: CapacitySizeFacetOptionKey._01,
      ...defaultFacetOption,
      valueId: '',
      value: '01',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '01'
          }
        ],
        sortIndex: 36
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0116,
      ...defaultFacetOption,
      valueId: '',
      value: '0116',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0116'
          }
        ],
        sortIndex: 37
      }
    },
    {
      key: CapacitySizeFacetOptionKey._015,
      ...defaultFacetOption,
      valueId: '',
      value: '015',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '015'
          }
        ],
        sortIndex: 38
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0154,
      ...defaultFacetOption,
      valueId: '',
      value: '0154',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0154'
          }
        ],
        sortIndex: 39
      }
    },
    {
      key: CapacitySizeFacetOptionKey._02,
      ...defaultFacetOption,
      valueId: '',
      value: '02',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '02'
          }
        ],
        sortIndex: 40
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0231,
      ...defaultFacetOption,
      valueId: '',
      value: '0231',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0231'
          }
        ],
        sortIndex: 41
      }
    },
    {
      key: CapacitySizeFacetOptionKey._025,
      ...defaultFacetOption,
      valueId: '',
      value: '025',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '025'
          }
        ],
        sortIndex: 42
      }
    },
    {
      key: CapacitySizeFacetOptionKey._03,
      ...defaultFacetOption,
      valueId: '',
      value: '03',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '03'
          }
        ],
        sortIndex: 43
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0308,
      ...defaultFacetOption,
      valueId: '',
      value: '0308',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0308'
          }
        ],
        sortIndex: 44
      }
    },
    {
      key: CapacitySizeFacetOptionKey._035,
      ...defaultFacetOption,
      valueId: '',
      value: '035',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '035'
          }
        ],
        sortIndex: 45
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0385,
      ...defaultFacetOption,
      valueId: '',
      value: '0385',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0385'
          }
        ],
        sortIndex: 46
      }
    },
    {
      key: CapacitySizeFacetOptionKey._04,
      ...defaultFacetOption,
      valueId: '',
      value: '04',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '04'
          }
        ],
        sortIndex: 47
      }
    },
    {
      key: CapacitySizeFacetOptionKey._045,
      ...defaultFacetOption,
      valueId: '',
      value: '045',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '045'
          }
        ],
        sortIndex: 48
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0462,
      ...defaultFacetOption,
      valueId: '',
      value: '0462',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0462'
          }
        ],
        sortIndex: 49
      }
    },
    {
      key: CapacitySizeFacetOptionKey._05,
      ...defaultFacetOption,
      valueId: '',
      value: '05',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '05'
          }
        ],
        sortIndex: 50
      }
    },
    {
      key: CapacitySizeFacetOptionKey._055,
      ...defaultFacetOption,
      valueId: '',
      value: '055',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '055'
          }
        ],
        sortIndex: 51
      }
    },
    {
      key: CapacitySizeFacetOptionKey._06,
      ...defaultFacetOption,
      valueId: '',
      value: '06',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '06'
          }
        ],
        sortIndex: 52
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0616,
      ...defaultFacetOption,
      valueId: '',
      value: '0616',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0616'
          }
        ],
        sortIndex: 53
      }
    },
    {
      key: CapacitySizeFacetOptionKey._065,
      ...defaultFacetOption,
      valueId: '',
      value: '065',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '065'
          }
        ],
        sortIndex: 54
      }
    },
    {
      key: CapacitySizeFacetOptionKey._07,
      ...defaultFacetOption,
      valueId: '',
      value: '07',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '07'
          }
        ],
        sortIndex: 55
      }
    },
    {
      key: CapacitySizeFacetOptionKey._075,
      ...defaultFacetOption,
      valueId: '',
      value: '075',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '075'
          }
        ],
        sortIndex: 56
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0770,
      ...defaultFacetOption,
      valueId: '',
      value: '0770',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0770'
          }
        ],
        sortIndex: 57
      }
    },
    {
      key: CapacitySizeFacetOptionKey._08,
      ...defaultFacetOption,
      valueId: '',
      value: '08',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '08'
          }
        ],
        sortIndex: 58
      }
    },
    {
      key: CapacitySizeFacetOptionKey._085,
      ...defaultFacetOption,
      valueId: '',
      value: '085',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '085'
          }
        ],
        sortIndex: 59
      }
    },
    {
      key: CapacitySizeFacetOptionKey._09,
      ...defaultFacetOption,
      valueId: '',
      value: '09',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '09'
          }
        ],
        sortIndex: 60
      }
    },
    {
      key: CapacitySizeFacetOptionKey._0924,
      ...defaultFacetOption,
      valueId: '',
      value: '0924',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '0924'
          }
        ],
        sortIndex: 61
      }
    },
    {
      key: CapacitySizeFacetOptionKey._095,
      ...defaultFacetOption,
      valueId: '',
      value: '095',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '095'
          }
        ],
        sortIndex: 62
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1,
      ...defaultFacetOption,
      valueId: '',
      value: '1',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1'
          }
        ],
        sortIndex: 63
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1_25,
      ...defaultFacetOption,
      valueId: '',
      value: '1.25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1.25'
          }
        ],
        sortIndex: 64
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1_3,
      ...defaultFacetOption,
      valueId: '',
      value: '1.3',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1.3'
          }
        ],
        sortIndex: 65
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1_5,
      ...defaultFacetOption,
      valueId: '',
      value: '1.5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1.5'
          }
        ],
        sortIndex: 66
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1_5W,
      ...defaultFacetOption,
      valueId: '',
      value: '1.5W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1.5W'
          }
        ],
        sortIndex: 67
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1_8,
      ...defaultFacetOption,
      valueId: '',
      value: '1.8',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1.8'
          }
        ],
        sortIndex: 68
      }
    },
    {
      key: CapacitySizeFacetOptionKey._10,
      ...defaultFacetOption,
      valueId: '',
      value: '10',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '10'
          }
        ],
        sortIndex: 69
      }
    },
    {
      key: CapacitySizeFacetOptionKey._100,
      ...defaultFacetOption,
      valueId: '',
      value: '100',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '100'
          }
        ],
        sortIndex: 70
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1000,
      ...defaultFacetOption,
      valueId: '',
      value: '1000',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1000'
          }
        ],
        sortIndex: 71
      }
    },
    {
      key: CapacitySizeFacetOptionKey._10045,
      ...defaultFacetOption,
      valueId: '',
      value: '100-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '100-45'
          }
        ],
        sortIndex: 72
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1010W,
      ...defaultFacetOption,
      valueId: '',
      value: '10-10W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '10-10W'
          }
        ],
        sortIndex: 73
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1015,
      ...defaultFacetOption,
      valueId: '',
      value: '10-15',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '10-15'
          }
        ],
        sortIndex: 74
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1015W,
      ...defaultFacetOption,
      valueId: '',
      value: '10-15W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '10-15W'
          }
        ],
        sortIndex: 75
      }
    },
    {
      key: CapacitySizeFacetOptionKey._102,
      ...defaultFacetOption,
      valueId: '',
      value: '10-2',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '10-2'
          }
        ],
        sortIndex: 76
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1020,
      ...defaultFacetOption,
      valueId: '',
      value: '10-20',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '10-20'
          }
        ],
        sortIndex: 77
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1020W,
      ...defaultFacetOption,
      valueId: '',
      value: '10-20W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '10-20W'
          }
        ],
        sortIndex: 78
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1030W,
      ...defaultFacetOption,
      valueId: '',
      value: '10-30W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '10-30W'
          }
        ],
        sortIndex: 79
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1045,
      ...defaultFacetOption,
      valueId: '',
      value: '10-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '10-45'
          }
        ],
        sortIndex: 80
      }
    },
    {
      key: CapacitySizeFacetOptionKey._105,
      ...defaultFacetOption,
      valueId: '',
      value: '10-5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '10-5'
          }
        ],
        sortIndex: 81
      }
    },
    {
      key: CapacitySizeFacetOptionKey._105W,
      ...defaultFacetOption,
      valueId: '',
      value: '10-5W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '10-5W'
          }
        ],
        sortIndex: 82
      }
    },
    {
      key: CapacitySizeFacetOptionKey._106SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '106SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '106SQ'
          }
        ],
        sortIndex: 83
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1070WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '1070WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1070WSQ'
          }
        ],
        sortIndex: 84
      }
    },
    {
      key: CapacitySizeFacetOptionKey._108,
      ...defaultFacetOption,
      valueId: '',
      value: '10-8',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '10-8'
          }
        ],
        sortIndex: 85
      }
    },
    {
      key: CapacitySizeFacetOptionKey._108W,
      ...defaultFacetOption,
      valueId: '',
      value: '10-8W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '10-8W'
          }
        ],
        sortIndex: 86
      }
    },
    {
      key: CapacitySizeFacetOptionKey._10SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '10SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '10SQ'
          }
        ],
        sortIndex: 87
      }
    },
    {
      key: CapacitySizeFacetOptionKey._10W,
      ...defaultFacetOption,
      valueId: '',
      value: '10W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '10W'
          }
        ],
        sortIndex: 88
      }
    },
    {
      key: CapacitySizeFacetOptionKey._11,
      ...defaultFacetOption,
      valueId: '',
      value: '11',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '11'
          }
        ],
        sortIndex: 89
      }
    },
    {
      key: CapacitySizeFacetOptionKey._110,
      ...defaultFacetOption,
      valueId: '',
      value: '110',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '110'
          }
        ],
        sortIndex: 90
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1100,
      ...defaultFacetOption,
      valueId: '',
      value: '1100',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1100'
          }
        ],
        sortIndex: 91
      }
    },
    {
      key: CapacitySizeFacetOptionKey._110W,
      ...defaultFacetOption,
      valueId: '',
      value: '1-10W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1-10W'
          }
        ],
        sortIndex: 92
      }
    },
    {
      key: CapacitySizeFacetOptionKey._115,
      ...defaultFacetOption,
      valueId: '',
      value: '115',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '115'
          }
        ],
        sortIndex: 93
      }
    },
    {
      key: CapacitySizeFacetOptionKey._115W,
      ...defaultFacetOption,
      valueId: '',
      value: '1-15W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1-15W'
          }
        ],
        sortIndex: 94
      }
    },
    {
      key: CapacitySizeFacetOptionKey._11W,
      ...defaultFacetOption,
      valueId: '',
      value: '11W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '11W'
          }
        ],
        sortIndex: 95
      }
    },
    {
      key: CapacitySizeFacetOptionKey._11W_,
      ...defaultFacetOption,
      valueId: '',
      value: '1-1W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1-1W'
          }
        ],
        sortIndex: 96
      }
    },
    {
      key: CapacitySizeFacetOptionKey._12,
      ...defaultFacetOption,
      valueId: '',
      value: '12',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '12'
          }
        ],
        sortIndex: 97
      }
    },
    {
      key: CapacitySizeFacetOptionKey._12_5,
      ...defaultFacetOption,
      valueId: '',
      value: '12.5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '12.5'
          }
        ],
        sortIndex: 98
      }
    },
    {
      key: CapacitySizeFacetOptionKey._120,
      ...defaultFacetOption,
      valueId: '',
      value: '120',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '120'
          }
        ],
        sortIndex: 99
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1200,
      ...defaultFacetOption,
      valueId: '',
      value: '1200',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1200'
          }
        ],
        sortIndex: 100
      }
    },
    {
      key: CapacitySizeFacetOptionKey._12045,
      ...defaultFacetOption,
      valueId: '',
      value: '120-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '120-45'
          }
        ],
        sortIndex: 101
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1245,
      ...defaultFacetOption,
      valueId: '',
      value: '12-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '12-45'
          }
        ],
        sortIndex: 102
      }
    },
    {
      key: CapacitySizeFacetOptionKey._125,
      ...defaultFacetOption,
      valueId: '',
      value: '125',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '125'
          }
        ],
        sortIndex: 103
      }
    },
    {
      key: CapacitySizeFacetOptionKey._12SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '12SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '12SQ'
          }
        ],
        sortIndex: 104
      }
    },
    {
      key: CapacitySizeFacetOptionKey._12W,
      ...defaultFacetOption,
      valueId: '',
      value: '12W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '12W'
          }
        ],
        sortIndex: 105
      }
    },
    {
      key: CapacitySizeFacetOptionKey._13,
      ...defaultFacetOption,
      valueId: '',
      value: '13',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '13'
          }
        ],
        sortIndex: 106
      }
    },
    {
      key: CapacitySizeFacetOptionKey._13_6,
      ...defaultFacetOption,
      valueId: '',
      value: '13.6',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '13.6'
          }
        ],
        sortIndex: 107
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1300,
      ...defaultFacetOption,
      valueId: '',
      value: '1300',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1300'
          }
        ],
        sortIndex: 108
      }
    },
    {
      key: CapacitySizeFacetOptionKey._130WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '130WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '130WSQ'
          }
        ],
        sortIndex: 109
      }
    },
    {
      key: CapacitySizeFacetOptionKey._135,
      ...defaultFacetOption,
      valueId: '',
      value: '135',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '135'
          }
        ],
        sortIndex: 110
      }
    },
    {
      key: CapacitySizeFacetOptionKey._14,
      ...defaultFacetOption,
      valueId: '',
      value: '14',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '14'
          }
        ],
        sortIndex: 111
      }
    },
    {
      key: CapacitySizeFacetOptionKey._14_5SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '14.5SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '14.5SQ'
          }
        ],
        sortIndex: 112
      }
    },
    {
      key: CapacitySizeFacetOptionKey._140,
      ...defaultFacetOption,
      valueId: '',
      value: '140',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '140'
          }
        ],
        sortIndex: 113
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1400,
      ...defaultFacetOption,
      valueId: '',
      value: '1400',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1400'
          }
        ],
        sortIndex: 114
      }
    },
    {
      key: CapacitySizeFacetOptionKey._14045,
      ...defaultFacetOption,
      valueId: '',
      value: '140-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '140-45'
          }
        ],
        sortIndex: 115
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1445,
      ...defaultFacetOption,
      valueId: '',
      value: '14-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '14-45'
          }
        ],
        sortIndex: 116
      }
    },
    {
      key: CapacitySizeFacetOptionKey._14W,
      ...defaultFacetOption,
      valueId: '',
      value: '14W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '14W'
          }
        ],
        sortIndex: 117
      }
    },
    {
      key: CapacitySizeFacetOptionKey._14WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '14WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '14WSQ'
          }
        ],
        sortIndex: 118
      }
    },
    {
      key: CapacitySizeFacetOptionKey._15,
      ...defaultFacetOption,
      valueId: '',
      value: '15',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15'
          }
        ],
        sortIndex: 119
      }
    },
    {
      key: CapacitySizeFacetOptionKey._150,
      ...defaultFacetOption,
      valueId: '',
      value: '150',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '150'
          }
        ],
        sortIndex: 120
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1500,
      ...defaultFacetOption,
      valueId: '',
      value: '1500',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1500'
          }
        ],
        sortIndex: 121
      }
    },
    {
      key: CapacitySizeFacetOptionKey._15045,
      ...defaultFacetOption,
      valueId: '',
      value: '150-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '150-45'
          }
        ],
        sortIndex: 122
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1507,
      ...defaultFacetOption,
      valueId: '',
      value: '1507',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1507'
          }
        ],
        sortIndex: 123
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1510,
      ...defaultFacetOption,
      valueId: '',
      value: '15-10',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15-10'
          }
        ],
        sortIndex: 124
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1510W,
      ...defaultFacetOption,
      valueId: '',
      value: '15-10W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15-10W'
          }
        ],
        sortIndex: 125
      }
    },
    {
      key: CapacitySizeFacetOptionKey._151150,
      ...defaultFacetOption,
      valueId: '',
      value: '151150',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '151150'
          }
        ],
        sortIndex: 126
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1514,
      ...defaultFacetOption,
      valueId: '',
      value: '1514',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1514'
          }
        ],
        sortIndex: 127
      }
    },
    {
      key: CapacitySizeFacetOptionKey._15150,
      ...defaultFacetOption,
      valueId: '',
      value: '15150',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15150'
          }
        ],
        sortIndex: 128
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1515W,
      ...defaultFacetOption,
      valueId: '',
      value: '15-15W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15-15W'
          }
        ],
        sortIndex: 129
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1515W_,
      ...defaultFacetOption,
      valueId: '',
      value: '15-15W*',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15-15W*'
          }
        ],
        sortIndex: 130
      }
    },
    {
      key: CapacitySizeFacetOptionKey._151750,
      ...defaultFacetOption,
      valueId: '',
      value: '151750',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '151750'
          }
        ],
        sortIndex: 131
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1520,
      ...defaultFacetOption,
      valueId: '',
      value: '15-20',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15-20'
          }
        ],
        sortIndex: 132
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1520W,
      ...defaultFacetOption,
      valueId: '',
      value: '15-20W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15-20W'
          }
        ],
        sortIndex: 133
      }
    },
    {
      key: CapacitySizeFacetOptionKey._152500,
      ...defaultFacetOption,
      valueId: '',
      value: '152500',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '152500'
          }
        ],
        sortIndex: 134
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1525W,
      ...defaultFacetOption,
      valueId: '',
      value: '15-25W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15-25W'
          }
        ],
        sortIndex: 135
      }
    },
    {
      key: CapacitySizeFacetOptionKey._15280,
      ...defaultFacetOption,
      valueId: '',
      value: '15280',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15280'
          }
        ],
        sortIndex: 136
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1530,
      ...defaultFacetOption,
      valueId: '',
      value: '1530',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1530'
          }
        ],
        sortIndex: 137
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1530W,
      ...defaultFacetOption,
      valueId: '',
      value: '15-30W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15-30W'
          }
        ],
        sortIndex: 138
      }
    },
    {
      key: CapacitySizeFacetOptionKey._15430,
      ...defaultFacetOption,
      valueId: '',
      value: '15430',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15430'
          }
        ],
        sortIndex: 139
      }
    },
    {
      key: CapacitySizeFacetOptionKey._154500,
      ...defaultFacetOption,
      valueId: '',
      value: '154500',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '154500'
          }
        ],
        sortIndex: 140
      }
    },
    {
      key: CapacitySizeFacetOptionKey._155,
      ...defaultFacetOption,
      valueId: '',
      value: '15-5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15-5'
          }
        ],
        sortIndex: 141
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1550,
      ...defaultFacetOption,
      valueId: '',
      value: '1550',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1550'
          }
        ],
        sortIndex: 142
      }
    },
    {
      key: CapacitySizeFacetOptionKey._155W,
      ...defaultFacetOption,
      valueId: '',
      value: '15-5W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15-5W'
          }
        ],
        sortIndex: 143
      }
    },
    {
      key: CapacitySizeFacetOptionKey._15630,
      ...defaultFacetOption,
      valueId: '',
      value: '15630',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15630'
          }
        ],
        sortIndex: 144
      }
    },
    {
      key: CapacitySizeFacetOptionKey._157000,
      ...defaultFacetOption,
      valueId: '',
      value: '157000',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '157000'
          }
        ],
        sortIndex: 145
      }
    },
    {
      key: CapacitySizeFacetOptionKey._158,
      ...defaultFacetOption,
      valueId: '',
      value: '15-8',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15-8'
          }
        ],
        sortIndex: 146
      }
    },
    {
      key: CapacitySizeFacetOptionKey._158W,
      ...defaultFacetOption,
      valueId: '',
      value: '15-8W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '15-8W'
          }
        ],
        sortIndex: 147
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1590,
      ...defaultFacetOption,
      valueId: '',
      value: '1590',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1590'
          }
        ],
        sortIndex: 148
      }
    },
    {
      key: CapacitySizeFacetOptionKey._15W,
      ...defaultFacetOption,
      valueId: '',
      value: '1-5W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1-5W'
          }
        ],
        sortIndex: 149
      }
    },
    {
      key: CapacitySizeFacetOptionKey._16,
      ...defaultFacetOption,
      valueId: '',
      value: '16',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '16'
          }
        ],
        sortIndex: 150
      }
    },
    {
      key: CapacitySizeFacetOptionKey._160,
      ...defaultFacetOption,
      valueId: '',
      value: '160',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '160'
          }
        ],
        sortIndex: 151
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1600,
      ...defaultFacetOption,
      valueId: '',
      value: '1600',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1600'
          }
        ],
        sortIndex: 152
      }
    },
    {
      key: CapacitySizeFacetOptionKey._164,
      ...defaultFacetOption,
      valueId: '',
      value: '164',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '164'
          }
        ],
        sortIndex: 153
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1645,
      ...defaultFacetOption,
      valueId: '',
      value: '16-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '16-45'
          }
        ],
        sortIndex: 154
      }
    },
    {
      key: CapacitySizeFacetOptionKey._165,
      ...defaultFacetOption,
      valueId: '',
      value: '165',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '165'
          }
        ],
        sortIndex: 155
      }
    },
    {
      key: CapacitySizeFacetOptionKey._16W,
      ...defaultFacetOption,
      valueId: '',
      value: '16W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '16W'
          }
        ],
        sortIndex: 156
      }
    },
    {
      key: CapacitySizeFacetOptionKey._17,
      ...defaultFacetOption,
      valueId: '',
      value: '17',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '17'
          }
        ],
        sortIndex: 157
      }
    },
    {
      key: CapacitySizeFacetOptionKey._170,
      ...defaultFacetOption,
      valueId: '',
      value: '170',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '170'
          }
        ],
        sortIndex: 158
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1700,
      ...defaultFacetOption,
      valueId: '',
      value: '1700',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1700'
          }
        ],
        sortIndex: 159
      }
    },
    {
      key: CapacitySizeFacetOptionKey._175,
      ...defaultFacetOption,
      valueId: '',
      value: '175',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '175'
          }
        ],
        sortIndex: 160
      }
    },
    {
      key: CapacitySizeFacetOptionKey._17545,
      ...defaultFacetOption,
      valueId: '',
      value: '175-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '175-45'
          }
        ],
        sortIndex: 161
      }
    },
    {
      key: CapacitySizeFacetOptionKey._177SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '177SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '177SQ'
          }
        ],
        sortIndex: 162
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1780,
      ...defaultFacetOption,
      valueId: '',
      value: '1780',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1780'
          }
        ],
        sortIndex: 163
      }
    },
    {
      key: CapacitySizeFacetOptionKey._17W,
      ...defaultFacetOption,
      valueId: '',
      value: '17W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '17W'
          }
        ],
        sortIndex: 164
      }
    },
    {
      key: CapacitySizeFacetOptionKey._17WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '17WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '17WSQ'
          }
        ],
        sortIndex: 165
      }
    },
    {
      key: CapacitySizeFacetOptionKey._18,
      ...defaultFacetOption,
      valueId: '',
      value: '18',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '18'
          }
        ],
        sortIndex: 166
      }
    },
    {
      key: CapacitySizeFacetOptionKey._180,
      ...defaultFacetOption,
      valueId: '',
      value: '180',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '180'
          }
        ],
        sortIndex: 167
      }
    },
    {
      key: CapacitySizeFacetOptionKey._1800,
      ...defaultFacetOption,
      valueId: '',
      value: '1800',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '1800'
          }
        ],
        sortIndex: 168
      }
    },
    {
      key: CapacitySizeFacetOptionKey._188W,
      ...defaultFacetOption,
      valueId: '',
      value: '188W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '188W'
          }
        ],
        sortIndex: 169
      }
    },
    {
      key: CapacitySizeFacetOptionKey._18SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '18SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '18SQ'
          }
        ],
        sortIndex: 170
      }
    },
    {
      key: CapacitySizeFacetOptionKey._19,
      ...defaultFacetOption,
      valueId: '',
      value: '19',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '19'
          }
        ],
        sortIndex: 171
      }
    },
    {
      key: CapacitySizeFacetOptionKey._190,
      ...defaultFacetOption,
      valueId: '',
      value: '190',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '190'
          }
        ],
        sortIndex: 172
      }
    },
    {
      key: CapacitySizeFacetOptionKey._190WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '190WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '190WSQ'
          }
        ],
        sortIndex: 173
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2,
      ...defaultFacetOption,
      valueId: '',
      value: '2',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2'
          }
        ],
        sortIndex: 174
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2_5,
      ...defaultFacetOption,
      valueId: '',
      value: '2.5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2.5'
          }
        ],
        sortIndex: 175
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2_8W,
      ...defaultFacetOption,
      valueId: '',
      value: '2.8W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2.8W'
          }
        ],
        sortIndex: 176
      }
    },
    {
      key: CapacitySizeFacetOptionKey._20,
      ...defaultFacetOption,
      valueId: '',
      value: '20',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20'
          }
        ],
        sortIndex: 177
      }
    },
    {
      key: CapacitySizeFacetOptionKey._20_5,
      ...defaultFacetOption,
      valueId: '',
      value: '2-0.5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2-0.5'
          }
        ],
        sortIndex: 178
      }
    },
    {
      key: CapacitySizeFacetOptionKey._200,
      ...defaultFacetOption,
      valueId: '',
      value: '200',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '200'
          }
        ],
        sortIndex: 179
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2000,
      ...defaultFacetOption,
      valueId: '',
      value: '2000',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2000'
          }
        ],
        sortIndex: 180
      }
    },
    {
      key: CapacitySizeFacetOptionKey._20045,
      ...defaultFacetOption,
      valueId: '',
      value: '200-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '200-45'
          }
        ],
        sortIndex: 181
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2010,
      ...defaultFacetOption,
      valueId: '',
      value: '20-10',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-10'
          }
        ],
        sortIndex: 182
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2010W,
      ...defaultFacetOption,
      valueId: '',
      value: '20-10W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-10W'
          }
        ],
        sortIndex: 183
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2015,
      ...defaultFacetOption,
      valueId: '',
      value: '20-15',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-15'
          }
        ],
        sortIndex: 184
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2015W,
      ...defaultFacetOption,
      valueId: '',
      value: '20-15W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-15W'
          }
        ],
        sortIndex: 185
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2020W,
      ...defaultFacetOption,
      valueId: '',
      value: '20-20W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-20W'
          }
        ],
        sortIndex: 186
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2025,
      ...defaultFacetOption,
      valueId: '',
      value: '20-25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-25'
          }
        ],
        sortIndex: 187
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2025W,
      ...defaultFacetOption,
      valueId: '',
      value: '20-25W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-25W'
          }
        ],
        sortIndex: 188
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2030W,
      ...defaultFacetOption,
      valueId: '',
      value: '20-30W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-30W'
          }
        ],
        sortIndex: 189
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2040,
      ...defaultFacetOption,
      valueId: '',
      value: '20-40',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-40'
          }
        ],
        sortIndex: 190
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2040W,
      ...defaultFacetOption,
      valueId: '',
      value: '20-40W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-40W'
          }
        ],
        sortIndex: 191
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2045,
      ...defaultFacetOption,
      valueId: '',
      value: '20-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-45'
          }
        ],
        sortIndex: 192
      }
    },
    {
      key: CapacitySizeFacetOptionKey._205,
      ...defaultFacetOption,
      valueId: '',
      value: '20-5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-5'
          }
        ],
        sortIndex: 193
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2050,
      ...defaultFacetOption,
      valueId: '',
      value: '20-50',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-50'
          }
        ],
        sortIndex: 194
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2050W,
      ...defaultFacetOption,
      valueId: '',
      value: '20-50W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-50W'
          }
        ],
        sortIndex: 195
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2060,
      ...defaultFacetOption,
      valueId: '',
      value: '20-60',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-60'
          }
        ],
        sortIndex: 196
      }
    },
    {
      key: CapacitySizeFacetOptionKey._208,
      ...defaultFacetOption,
      valueId: '',
      value: '20-8',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-8'
          }
        ],
        sortIndex: 197
      }
    },
    {
      key: CapacitySizeFacetOptionKey._208W,
      ...defaultFacetOption,
      valueId: '',
      value: '20-8W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20-8W'
          }
        ],
        sortIndex: 198
      }
    },
    {
      key: CapacitySizeFacetOptionKey._20W,
      ...defaultFacetOption,
      valueId: '',
      value: '20W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20W'
          }
        ],
        sortIndex: 199
      }
    },
    {
      key: CapacitySizeFacetOptionKey._20WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '20WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '20WSQ'
          }
        ],
        sortIndex: 200
      }
    },
    {
      key: CapacitySizeFacetOptionKey._21,
      ...defaultFacetOption,
      valueId: '',
      value: '21',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '21'
          }
        ],
        sortIndex: 201
      }
    },
    {
      key: CapacitySizeFacetOptionKey._21_,
      ...defaultFacetOption,
      valueId: '',
      value: '2-1',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2-1'
          }
        ],
        sortIndex: 202
      }
    },
    {
      key: CapacitySizeFacetOptionKey._210,
      ...defaultFacetOption,
      valueId: '',
      value: '210',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '210'
          }
        ],
        sortIndex: 203
      }
    },
    {
      key: CapacitySizeFacetOptionKey._210_,
      ...defaultFacetOption,
      valueId: '',
      value: '2-10',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2-10'
          }
        ],
        sortIndex: 204
      }
    },
    {
      key: CapacitySizeFacetOptionKey._210W,
      ...defaultFacetOption,
      valueId: '',
      value: '2-10W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2-10W'
          }
        ],
        sortIndex: 205
      }
    },
    {
      key: CapacitySizeFacetOptionKey._215,
      ...defaultFacetOption,
      valueId: '',
      value: '2-15',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2-15'
          }
        ],
        sortIndex: 206
      }
    },
    {
      key: CapacitySizeFacetOptionKey._215W,
      ...defaultFacetOption,
      valueId: '',
      value: '2-15W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2-15W'
          }
        ],
        sortIndex: 207
      }
    },
    {
      key: CapacitySizeFacetOptionKey._22,
      ...defaultFacetOption,
      valueId: '',
      value: '22',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '22'
          }
        ],
        sortIndex: 208
      }
    },
    {
      key: CapacitySizeFacetOptionKey._220,
      ...defaultFacetOption,
      valueId: '',
      value: '220',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '220'
          }
        ],
        sortIndex: 209
      }
    },
    {
      key: CapacitySizeFacetOptionKey._220_,
      ...defaultFacetOption,
      valueId: '',
      value: '2-20',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2-20'
          }
        ],
        sortIndex: 210
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2200,
      ...defaultFacetOption,
      valueId: '',
      value: '2200',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2200'
          }
        ],
        sortIndex: 211
      }
    },
    {
      key: CapacitySizeFacetOptionKey._220W,
      ...defaultFacetOption,
      valueId: '',
      value: '2-20W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2-20W'
          }
        ],
        sortIndex: 212
      }
    },
    {
      key: CapacitySizeFacetOptionKey._225,
      ...defaultFacetOption,
      valueId: '',
      value: '225',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '225'
          }
        ],
        sortIndex: 213
      }
    },
    {
      key: CapacitySizeFacetOptionKey._22545,
      ...defaultFacetOption,
      valueId: '',
      value: '225-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '225-45'
          }
        ],
        sortIndex: 214
      }
    },
    {
      key: CapacitySizeFacetOptionKey._23,
      ...defaultFacetOption,
      valueId: '',
      value: '23',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '23'
          }
        ],
        sortIndex: 215
      }
    },
    {
      key: CapacitySizeFacetOptionKey._23_,
      ...defaultFacetOption,
      valueId: '',
      value: '2-3',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2-3'
          }
        ],
        sortIndex: 216
      }
    },
    {
      key: CapacitySizeFacetOptionKey._230SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '230SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '230SQ'
          }
        ],
        sortIndex: 217
      }
    },
    {
      key: CapacitySizeFacetOptionKey._23W,
      ...defaultFacetOption,
      valueId: '',
      value: '2-3W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2-3W'
          }
        ],
        sortIndex: 218
      }
    },
    {
      key: CapacitySizeFacetOptionKey._24,
      ...defaultFacetOption,
      valueId: '',
      value: '24',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '24'
          }
        ],
        sortIndex: 219
      }
    },
    {
      key: CapacitySizeFacetOptionKey._240,
      ...defaultFacetOption,
      valueId: '',
      value: '240',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '240'
          }
        ],
        sortIndex: 220
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2400,
      ...defaultFacetOption,
      valueId: '',
      value: '2400',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2400'
          }
        ],
        sortIndex: 221
      }
    },
    {
      key: CapacitySizeFacetOptionKey._24W,
      ...defaultFacetOption,
      valueId: '',
      value: '24W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '24W'
          }
        ],
        sortIndex: 222
      }
    },
    {
      key: CapacitySizeFacetOptionKey._24WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '24WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '24WSQ'
          }
        ],
        sortIndex: 223
      }
    },
    {
      key: CapacitySizeFacetOptionKey._25_,
      ...defaultFacetOption,
      valueId: '',
      value: '25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '25'
          }
        ],
        sortIndex: 224
      }
    },
    {
      key: CapacitySizeFacetOptionKey._25__,
      ...defaultFacetOption,
      valueId: '',
      value: '2-5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2-5'
          }
        ],
        sortIndex: 225
      }
    },
    {
      key: CapacitySizeFacetOptionKey._250,
      ...defaultFacetOption,
      valueId: '',
      value: '250',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '250'
          }
        ],
        sortIndex: 226
      }
    },
    {
      key: CapacitySizeFacetOptionKey._25045,
      ...defaultFacetOption,
      valueId: '',
      value: '250-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '250-45'
          }
        ],
        sortIndex: 227
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2510,
      ...defaultFacetOption,
      valueId: '',
      value: '25-10',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '25-10'
          }
        ],
        sortIndex: 228
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2510W,
      ...defaultFacetOption,
      valueId: '',
      value: '25-10W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '25-10W'
          }
        ],
        sortIndex: 229
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2515,
      ...defaultFacetOption,
      valueId: '',
      value: '25-15',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '25-15'
          }
        ],
        sortIndex: 230
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2515W,
      ...defaultFacetOption,
      valueId: '',
      value: '25-15W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '25-15W'
          }
        ],
        sortIndex: 231
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2520,
      ...defaultFacetOption,
      valueId: '',
      value: '25-20',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '25-20'
          }
        ],
        sortIndex: 232
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2520W,
      ...defaultFacetOption,
      valueId: '',
      value: '25-20W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '25-20W'
          }
        ],
        sortIndex: 233
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2525W,
      ...defaultFacetOption,
      valueId: '',
      value: '25-25W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '25-25W'
          }
        ],
        sortIndex: 234
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2530W,
      ...defaultFacetOption,
      valueId: '',
      value: '25-30W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '25-30W'
          }
        ],
        sortIndex: 235
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2540,
      ...defaultFacetOption,
      valueId: '',
      value: '25-40',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '25-40'
          }
        ],
        sortIndex: 236
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2540W,
      ...defaultFacetOption,
      valueId: '',
      value: '25-40W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '25-40W'
          }
        ],
        sortIndex: 237
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2550,
      ...defaultFacetOption,
      valueId: '',
      value: '25-50',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '25-50'
          }
        ],
        sortIndex: 238
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2550W,
      ...defaultFacetOption,
      valueId: '',
      value: '25-50W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '25-50W'
          }
        ],
        sortIndex: 239
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2560,
      ...defaultFacetOption,
      valueId: '',
      value: '2560',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2560'
          }
        ],
        sortIndex: 240
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2560_,
      ...defaultFacetOption,
      valueId: '',
      value: '25-60',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '25-60'
          }
        ],
        sortIndex: 241
      }
    },
    {
      key: CapacitySizeFacetOptionKey._258,
      ...defaultFacetOption,
      valueId: '',
      value: '25-8',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '25-8'
          }
        ],
        sortIndex: 242
      }
    },
    {
      key: CapacitySizeFacetOptionKey._258W,
      ...defaultFacetOption,
      valueId: '',
      value: '25-8W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '25-8W'
          }
        ],
        sortIndex: 243
      }
    },
    {
      key: CapacitySizeFacetOptionKey._25W,
      ...defaultFacetOption,
      valueId: '',
      value: '2-5W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2-5W'
          }
        ],
        sortIndex: 244
      }
    },
    {
      key: CapacitySizeFacetOptionKey._26,
      ...defaultFacetOption,
      valueId: '',
      value: '26',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '26'
          }
        ],
        sortIndex: 245
      }
    },
    {
      key: CapacitySizeFacetOptionKey._260,
      ...defaultFacetOption,
      valueId: '',
      value: '260',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '260'
          }
        ],
        sortIndex: 246
      }
    },
    {
      key: CapacitySizeFacetOptionKey._27,
      ...defaultFacetOption,
      valueId: '',
      value: '27',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '27'
          }
        ],
        sortIndex: 247
      }
    },
    {
      key: CapacitySizeFacetOptionKey._27_5,
      ...defaultFacetOption,
      valueId: '',
      value: '27.5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '27.5'
          }
        ],
        sortIndex: 248
      }
    },
    {
      key: CapacitySizeFacetOptionKey._275,
      ...defaultFacetOption,
      valueId: '',
      value: '275',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '275'
          }
        ],
        sortIndex: 249
      }
    },
    {
      key: CapacitySizeFacetOptionKey._27W,
      ...defaultFacetOption,
      valueId: '',
      value: '27W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '27W'
          }
        ],
        sortIndex: 250
      }
    },
    {
      key: CapacitySizeFacetOptionKey._27WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '27WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '27WSQ'
          }
        ],
        sortIndex: 251
      }
    },
    {
      key: CapacitySizeFacetOptionKey._28,
      ...defaultFacetOption,
      valueId: '',
      value: '28',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '28'
          }
        ],
        sortIndex: 252
      }
    },
    {
      key: CapacitySizeFacetOptionKey._28_,
      ...defaultFacetOption,
      valueId: '',
      value: '2-8',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2-8'
          }
        ],
        sortIndex: 253
      }
    },
    {
      key: CapacitySizeFacetOptionKey._280,
      ...defaultFacetOption,
      valueId: '',
      value: '280',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '280'
          }
        ],
        sortIndex: 254
      }
    },
    {
      key: CapacitySizeFacetOptionKey._28W,
      ...defaultFacetOption,
      valueId: '',
      value: '2-8W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2-8W'
          }
        ],
        sortIndex: 255
      }
    },
    {
      key: CapacitySizeFacetOptionKey._29,
      ...defaultFacetOption,
      valueId: '',
      value: '29',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '29'
          }
        ],
        sortIndex: 256
      }
    },
    {
      key: CapacitySizeFacetOptionKey._290SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '290SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '290SQ'
          }
        ],
        sortIndex: 257
      }
    },
    {
      key: CapacitySizeFacetOptionKey._290WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '290WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '290WSQ'
          }
        ],
        sortIndex: 258
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2980SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '2980SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2980SQ'
          }
        ],
        sortIndex: 259
      }
    },
    {
      key: CapacitySizeFacetOptionKey._29SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '29SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '29SQ'
          }
        ],
        sortIndex: 260
      }
    },
    {
      key: CapacitySizeFacetOptionKey._2W,
      ...defaultFacetOption,
      valueId: '',
      value: '2W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '2W'
          }
        ],
        sortIndex: 261
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3,
      ...defaultFacetOption,
      valueId: '',
      value: '3',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3'
          }
        ],
        sortIndex: 262
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3_2,
      ...defaultFacetOption,
      valueId: '',
      value: '3.2',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3.2'
          }
        ],
        sortIndex: 263
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3_4,
      ...defaultFacetOption,
      valueId: '',
      value: '3.4',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3.4'
          }
        ],
        sortIndex: 264
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3_5,
      ...defaultFacetOption,
      valueId: '',
      value: '3.5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3.5'
          }
        ],
        sortIndex: 265
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3_6SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '3.6SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3.6SQ'
          }
        ],
        sortIndex: 266
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3_9,
      ...defaultFacetOption,
      valueId: '',
      value: '3.9',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3.9'
          }
        ],
        sortIndex: 267
      }
    },
    {
      key: CapacitySizeFacetOptionKey._30_,
      ...defaultFacetOption,
      valueId: '',
      value: '30',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '30'
          }
        ],
        sortIndex: 268
      }
    },
    {
      key: CapacitySizeFacetOptionKey._30__,
      ...defaultFacetOption,
      valueId: '',
      value: '30*',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '30*'
          }
        ],
        sortIndex: 269
      }
    },
    {
      key: CapacitySizeFacetOptionKey._300,
      ...defaultFacetOption,
      valueId: '',
      value: '300',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '300'
          }
        ],
        sortIndex: 270
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3001_4,
      ...defaultFacetOption,
      valueId: '',
      value: '3001.4',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3001.4'
          }
        ],
        sortIndex: 271
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3002_5,
      ...defaultFacetOption,
      valueId: '',
      value: '3002.5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3002.5'
          }
        ],
        sortIndex: 272
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3004,
      ...defaultFacetOption,
      valueId: '',
      value: '3004',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3004'
          }
        ],
        sortIndex: 273
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3007,
      ...defaultFacetOption,
      valueId: '',
      value: '3007',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3007'
          }
        ],
        sortIndex: 274
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3009,
      ...defaultFacetOption,
      valueId: '',
      value: '3009',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3009'
          }
        ],
        sortIndex: 275
      }
    },
    {
      key: CapacitySizeFacetOptionKey._30100,
      ...defaultFacetOption,
      valueId: '',
      value: '30100',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '30100'
          }
        ],
        sortIndex: 276
      }
    },
    {
      key: CapacitySizeFacetOptionKey._301000,
      ...defaultFacetOption,
      valueId: '',
      value: '301000',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '301000'
          }
        ],
        sortIndex: 277
      }
    },
    {
      key: CapacitySizeFacetOptionKey._301100,
      ...defaultFacetOption,
      valueId: '',
      value: '301100',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '301100'
          }
        ],
        sortIndex: 278
      }
    },
    {
      key: CapacitySizeFacetOptionKey._301200,
      ...defaultFacetOption,
      valueId: '',
      value: '301200',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '301200'
          }
        ],
        sortIndex: 279
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3014,
      ...defaultFacetOption,
      valueId: '',
      value: '3014',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3014'
          }
        ],
        sortIndex: 280
      }
    },
    {
      key: CapacitySizeFacetOptionKey._30150,
      ...defaultFacetOption,
      valueId: '',
      value: '30150',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '30150'
          }
        ],
        sortIndex: 281
      }
    },
    {
      key: CapacitySizeFacetOptionKey._30200,
      ...defaultFacetOption,
      valueId: '',
      value: '30200',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '30200'
          }
        ],
        sortIndex: 282
      }
    },
    {
      key: CapacitySizeFacetOptionKey._30250,
      ...defaultFacetOption,
      valueId: '',
      value: '30250',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '30250'
          }
        ],
        sortIndex: 283
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3030,
      ...defaultFacetOption,
      valueId: '',
      value: '3030',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3030'
          }
        ],
        sortIndex: 284
      }
    },
    {
      key: CapacitySizeFacetOptionKey._30300,
      ...defaultFacetOption,
      valueId: '',
      value: '30300',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '30300'
          }
        ],
        sortIndex: 285
      }
    },
    {
      key: CapacitySizeFacetOptionKey._30350,
      ...defaultFacetOption,
      valueId: '',
      value: '30350',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '30350'
          }
        ],
        sortIndex: 286
      }
    },
    {
      key: CapacitySizeFacetOptionKey._30400,
      ...defaultFacetOption,
      valueId: '',
      value: '30400',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '30400'
          }
        ],
        sortIndex: 287
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3045,
      ...defaultFacetOption,
      valueId: '',
      value: '30-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '30-45'
          }
        ],
        sortIndex: 288
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3050,
      ...defaultFacetOption,
      valueId: '',
      value: '3050',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3050'
          }
        ],
        sortIndex: 289
      }
    },
    {
      key: CapacitySizeFacetOptionKey._30500,
      ...defaultFacetOption,
      valueId: '',
      value: '30500',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '30500'
          }
        ],
        sortIndex: 290
      }
    },
    {
      key: CapacitySizeFacetOptionKey._30600,
      ...defaultFacetOption,
      valueId: '',
      value: '30600',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '30600'
          }
        ],
        sortIndex: 291
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3070,
      ...defaultFacetOption,
      valueId: '',
      value: '3070',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3070'
          }
        ],
        sortIndex: 292
      }
    },
    {
      key: CapacitySizeFacetOptionKey._30700,
      ...defaultFacetOption,
      valueId: '',
      value: '30700',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '30700'
          }
        ],
        sortIndex: 293
      }
    },
    {
      key: CapacitySizeFacetOptionKey._30W,
      ...defaultFacetOption,
      valueId: '',
      value: '30W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '30W'
          }
        ],
        sortIndex: 294
      }
    },
    {
      key: CapacitySizeFacetOptionKey._30WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '30WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '30WSQ'
          }
        ],
        sortIndex: 295
      }
    },
    {
      key: CapacitySizeFacetOptionKey._31,
      ...defaultFacetOption,
      valueId: '',
      value: '31',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '31'
          }
        ],
        sortIndex: 296
      }
    },
    {
      key: CapacitySizeFacetOptionKey._310,
      ...defaultFacetOption,
      valueId: '',
      value: '3-10',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3-10'
          }
        ],
        sortIndex: 297
      }
    },
    {
      key: CapacitySizeFacetOptionKey._310W,
      ...defaultFacetOption,
      valueId: '',
      value: '3-10W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3-10W'
          }
        ],
        sortIndex: 298
      }
    },
    {
      key: CapacitySizeFacetOptionKey._315,
      ...defaultFacetOption,
      valueId: '',
      value: '3-15',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3-15'
          }
        ],
        sortIndex: 299
      }
    },
    {
      key: CapacitySizeFacetOptionKey._315W,
      ...defaultFacetOption,
      valueId: '',
      value: '3-15W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3-15W'
          }
        ],
        sortIndex: 300
      }
    },
    {
      key: CapacitySizeFacetOptionKey._32,
      ...defaultFacetOption,
      valueId: '',
      value: '32',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '32'
          }
        ],
        sortIndex: 301
      }
    },
    {
      key: CapacitySizeFacetOptionKey._32_,
      ...defaultFacetOption,
      valueId: '',
      value: '3-2',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3-2'
          }
        ],
        sortIndex: 302
      }
    },
    {
      key: CapacitySizeFacetOptionKey._320,
      ...defaultFacetOption,
      valueId: '',
      value: '320',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '320'
          }
        ],
        sortIndex: 303
      }
    },
    {
      key: CapacitySizeFacetOptionKey._320_,
      ...defaultFacetOption,
      valueId: '',
      value: '3-20',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3-20'
          }
        ],
        sortIndex: 304
      }
    },
    {
      key: CapacitySizeFacetOptionKey._320W,
      ...defaultFacetOption,
      valueId: '',
      value: '3-20W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3-20W'
          }
        ],
        sortIndex: 305
      }
    },
    {
      key: CapacitySizeFacetOptionKey._32W,
      ...defaultFacetOption,
      valueId: '',
      value: '3-2W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3-2W'
          }
        ],
        sortIndex: 306
      }
    },
    {
      key: CapacitySizeFacetOptionKey._33,
      ...defaultFacetOption,
      valueId: '',
      value: '33',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '33'
          }
        ],
        sortIndex: 307
      }
    },
    {
      key: CapacitySizeFacetOptionKey._330,
      ...defaultFacetOption,
      valueId: '',
      value: '330',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '330'
          }
        ],
        sortIndex: 308
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3360,
      ...defaultFacetOption,
      valueId: '',
      value: '3360',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3360'
          }
        ],
        sortIndex: 309
      }
    },
    {
      key: CapacitySizeFacetOptionKey._33W,
      ...defaultFacetOption,
      valueId: '',
      value: '3-3W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3-3W'
          }
        ],
        sortIndex: 310
      }
    },
    {
      key: CapacitySizeFacetOptionKey._340,
      ...defaultFacetOption,
      valueId: '',
      value: '340',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '340'
          }
        ],
        sortIndex: 311
      }
    },
    {
      key: CapacitySizeFacetOptionKey._35,
      ...defaultFacetOption,
      valueId: '',
      value: '35',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '35'
          }
        ],
        sortIndex: 312
      }
    },
    {
      key: CapacitySizeFacetOptionKey._35_,
      ...defaultFacetOption,
      valueId: '',
      value: '3-5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3-5'
          }
        ],
        sortIndex: 313
      }
    },
    {
      key: CapacitySizeFacetOptionKey._350,
      ...defaultFacetOption,
      valueId: '',
      value: '350',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '350'
          }
        ],
        sortIndex: 314
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3500,
      ...defaultFacetOption,
      valueId: '',
      value: '3500',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3500'
          }
        ],
        sortIndex: 315
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3545,
      ...defaultFacetOption,
      valueId: '',
      value: '35-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '35-45'
          }
        ],
        sortIndex: 316
      }
    },
    {
      key: CapacitySizeFacetOptionKey._35W,
      ...defaultFacetOption,
      valueId: '',
      value: '35W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '35W'
          }
        ],
        sortIndex: 317
      }
    },
    {
      key: CapacitySizeFacetOptionKey._35W_,
      ...defaultFacetOption,
      valueId: '',
      value: '3-5W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3-5W'
          }
        ],
        sortIndex: 318
      }
    },
    {
      key: CapacitySizeFacetOptionKey._35WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '35WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '35WSQ'
          }
        ],
        sortIndex: 319
      }
    },
    {
      key: CapacitySizeFacetOptionKey._360,
      ...defaultFacetOption,
      valueId: '',
      value: '360',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '360'
          }
        ],
        sortIndex: 320
      }
    },
    {
      key: CapacitySizeFacetOptionKey._360SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '360SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '360SQ'
          }
        ],
        sortIndex: 321
      }
    },
    {
      key: CapacitySizeFacetOptionKey._36SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '36SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '36SQ'
          }
        ],
        sortIndex: 322
      }
    },
    {
      key: CapacitySizeFacetOptionKey._38,
      ...defaultFacetOption,
      valueId: '',
      value: '3-8',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3-8'
          }
        ],
        sortIndex: 323
      }
    },
    {
      key: CapacitySizeFacetOptionKey._380,
      ...defaultFacetOption,
      valueId: '',
      value: '380',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '380'
          }
        ],
        sortIndex: 324
      }
    },
    {
      key: CapacitySizeFacetOptionKey._38W,
      ...defaultFacetOption,
      valueId: '',
      value: '3-8W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3-8W'
          }
        ],
        sortIndex: 325
      }
    },
    {
      key: CapacitySizeFacetOptionKey._3W,
      ...defaultFacetOption,
      valueId: '',
      value: '3W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '3W'
          }
        ],
        sortIndex: 326
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4,
      ...defaultFacetOption,
      valueId: '',
      value: '4',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '4'
          }
        ],
        sortIndex: 327
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4_1,
      ...defaultFacetOption,
      valueId: '',
      value: '4.1',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '4.1'
          }
        ],
        sortIndex: 328
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4_2,
      ...defaultFacetOption,
      valueId: '',
      value: '4.2',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '4.2'
          }
        ],
        sortIndex: 329
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4_3W,
      ...defaultFacetOption,
      valueId: '',
      value: '4.3W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '4.3W'
          }
        ],
        sortIndex: 330
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4_5,
      ...defaultFacetOption,
      valueId: '',
      value: '4.5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '4.5'
          }
        ],
        sortIndex: 331
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4_8,
      ...defaultFacetOption,
      valueId: '',
      value: '4.8',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '4.8'
          }
        ],
        sortIndex: 332
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4_8SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '4.8SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '4.8SQ'
          }
        ],
        sortIndex: 333
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4_9VL,
      ...defaultFacetOption,
      valueId: '',
      value: '4.9VL',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '4.9VL'
          }
        ],
        sortIndex: 334
      }
    },
    {
      key: CapacitySizeFacetOptionKey._40_,
      ...defaultFacetOption,
      valueId: '',
      value: '40',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40'
          }
        ],
        sortIndex: 335
      }
    },
    {
      key: CapacitySizeFacetOptionKey._400,
      ...defaultFacetOption,
      valueId: '',
      value: '400',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '400'
          }
        ],
        sortIndex: 336
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4010,
      ...defaultFacetOption,
      valueId: '',
      value: '40-10',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40-10'
          }
        ],
        sortIndex: 337
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4010W,
      ...defaultFacetOption,
      valueId: '',
      value: '40-10W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40-10W'
          }
        ],
        sortIndex: 338
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4015,
      ...defaultFacetOption,
      valueId: '',
      value: '40-15',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40-15'
          }
        ],
        sortIndex: 339
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4015W,
      ...defaultFacetOption,
      valueId: '',
      value: '40-15W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40-15W'
          }
        ],
        sortIndex: 340
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4020,
      ...defaultFacetOption,
      valueId: '',
      value: '40-20',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40-20'
          }
        ],
        sortIndex: 341
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4020W,
      ...defaultFacetOption,
      valueId: '',
      value: '40-20W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40-20W'
          }
        ],
        sortIndex: 342
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4025,
      ...defaultFacetOption,
      valueId: '',
      value: '40-25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40-25'
          }
        ],
        sortIndex: 343
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4025W,
      ...defaultFacetOption,
      valueId: '',
      value: '40-25W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40-25W'
          }
        ],
        sortIndex: 344
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4040W,
      ...defaultFacetOption,
      valueId: '',
      value: '40-40W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40-40W'
          }
        ],
        sortIndex: 345
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4045,
      ...defaultFacetOption,
      valueId: '',
      value: '40-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40-45'
          }
        ],
        sortIndex: 346
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4050,
      ...defaultFacetOption,
      valueId: '',
      value: '40-50',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40-50'
          }
        ],
        sortIndex: 347
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4050_1,
      ...defaultFacetOption,
      valueId: '',
      value: '40-50.1',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40-50.1'
          }
        ],
        sortIndex: 348
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4050W,
      ...defaultFacetOption,
      valueId: '',
      value: '40-50W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40-50W'
          }
        ],
        sortIndex: 349
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4060,
      ...defaultFacetOption,
      valueId: '',
      value: '40-60',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40-60'
          }
        ],
        sortIndex: 350
      }
    },
    {
      key: CapacitySizeFacetOptionKey._408,
      ...defaultFacetOption,
      valueId: '',
      value: '40-8',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40-8'
          }
        ],
        sortIndex: 351
      }
    },
    {
      key: CapacitySizeFacetOptionKey._40W,
      ...defaultFacetOption,
      valueId: '',
      value: '40W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40W'
          }
        ],
        sortIndex: 352
      }
    },
    {
      key: CapacitySizeFacetOptionKey._40WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '40WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '40WSQ'
          }
        ],
        sortIndex: 353
      }
    },
    {
      key: CapacitySizeFacetOptionKey._42,
      ...defaultFacetOption,
      valueId: '',
      value: '42',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '42'
          }
        ],
        sortIndex: 354
      }
    },
    {
      key: CapacitySizeFacetOptionKey._44065,
      ...defaultFacetOption,
      valueId: '',
      value: '440-65',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '440-65'
          }
        ],
        sortIndex: 355
      }
    },
    {
      key: CapacitySizeFacetOptionKey._45,
      ...defaultFacetOption,
      valueId: '',
      value: '45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '45'
          }
        ],
        sortIndex: 356
      }
    },
    {
      key: CapacitySizeFacetOptionKey._450,
      ...defaultFacetOption,
      valueId: '',
      value: '450',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '450'
          }
        ],
        sortIndex: 357
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4545,
      ...defaultFacetOption,
      valueId: '',
      value: '45-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '45-45'
          }
        ],
        sortIndex: 358
      }
    },
    {
      key: CapacitySizeFacetOptionKey._45W,
      ...defaultFacetOption,
      valueId: '',
      value: '45W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '45W'
          }
        ],
        sortIndex: 359
      }
    },
    {
      key: CapacitySizeFacetOptionKey._45WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '45WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '45WSQ'
          }
        ],
        sortIndex: 360
      }
    },
    {
      key: CapacitySizeFacetOptionKey._46,
      ...defaultFacetOption,
      valueId: '',
      value: '46',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '46'
          }
        ],
        sortIndex: 361
      }
    },
    {
      key: CapacitySizeFacetOptionKey._470,
      ...defaultFacetOption,
      valueId: '',
      value: '470',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '470'
          }
        ],
        sortIndex: 362
      }
    },
    {
      key: CapacitySizeFacetOptionKey._47W,
      ...defaultFacetOption,
      valueId: '',
      value: '47W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '47W'
          }
        ],
        sortIndex: 363
      }
    },
    {
      key: CapacitySizeFacetOptionKey._48,
      ...defaultFacetOption,
      valueId: '',
      value: '48',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '48'
          }
        ],
        sortIndex: 364
      }
    },
    {
      key: CapacitySizeFacetOptionKey._480,
      ...defaultFacetOption,
      valueId: '',
      value: '480',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '480'
          }
        ],
        sortIndex: 365
      }
    },
    {
      key: CapacitySizeFacetOptionKey._480SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '480SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '480SQ'
          }
        ],
        sortIndex: 366
      }
    },
    {
      key: CapacitySizeFacetOptionKey._490SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '490SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '490SQ'
          }
        ],
        sortIndex: 367
      }
    },
    {
      key: CapacitySizeFacetOptionKey._4W,
      ...defaultFacetOption,
      valueId: '',
      value: '4W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '4W'
          }
        ],
        sortIndex: 368
      }
    },
    {
      key: CapacitySizeFacetOptionKey._5_,
      ...defaultFacetOption,
      valueId: '',
      value: '5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5'
          }
        ],
        sortIndex: 369
      }
    },
    {
      key: CapacitySizeFacetOptionKey._5_6W,
      ...defaultFacetOption,
      valueId: '',
      value: '5.6W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5.6W'
          }
        ],
        sortIndex: 370
      }
    },
    {
      key: CapacitySizeFacetOptionKey._5_8,
      ...defaultFacetOption,
      valueId: '',
      value: '5.8',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5.8'
          }
        ],
        sortIndex: 371
      }
    },
    {
      key: CapacitySizeFacetOptionKey._50_,
      ...defaultFacetOption,
      valueId: '',
      value: '50',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '50'
          }
        ],
        sortIndex: 372
      }
    },
    {
      key: CapacitySizeFacetOptionKey._50__,
      ...defaultFacetOption,
      valueId: '',
      value: '50*',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '50*'
          }
        ],
        sortIndex: 373
      }
    },
    {
      key: CapacitySizeFacetOptionKey._500,
      ...defaultFacetOption,
      valueId: '',
      value: '500',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '500'
          }
        ],
        sortIndex: 374
      }
    },
    {
      key: CapacitySizeFacetOptionKey._5045,
      ...defaultFacetOption,
      valueId: '',
      value: '50-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '50-45'
          }
        ],
        sortIndex: 375
      }
    },
    {
      key: CapacitySizeFacetOptionKey._5050_3,
      ...defaultFacetOption,
      valueId: '',
      value: '50-50.3',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '50-50.3'
          }
        ],
        sortIndex: 376
      }
    },
    {
      key: CapacitySizeFacetOptionKey._5050W,
      ...defaultFacetOption,
      valueId: '',
      value: '50-50W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '50-50W'
          }
        ],
        sortIndex: 377
      }
    },
    {
      key: CapacitySizeFacetOptionKey._50SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '50SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '50SQ'
          }
        ],
        sortIndex: 378
      }
    },
    {
      key: CapacitySizeFacetOptionKey._50W,
      ...defaultFacetOption,
      valueId: '',
      value: '50W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '50W'
          }
        ],
        sortIndex: 379
      }
    },
    {
      key: CapacitySizeFacetOptionKey._50WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '50WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '50WSQ'
          }
        ],
        sortIndex: 380
      }
    },
    {
      key: CapacitySizeFacetOptionKey._51,
      ...defaultFacetOption,
      valueId: '',
      value: '51',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '51'
          }
        ],
        sortIndex: 381
      }
    },
    {
      key: CapacitySizeFacetOptionKey._510,
      ...defaultFacetOption,
      valueId: '',
      value: '5-10',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5-10'
          }
        ],
        sortIndex: 382
      }
    },
    {
      key: CapacitySizeFacetOptionKey._510W,
      ...defaultFacetOption,
      valueId: '',
      value: '5-10W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5-10W'
          }
        ],
        sortIndex: 383
      }
    },
    {
      key: CapacitySizeFacetOptionKey._515,
      ...defaultFacetOption,
      valueId: '',
      value: '5-15',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5-15'
          }
        ],
        sortIndex: 384
      }
    },
    {
      key: CapacitySizeFacetOptionKey._515W,
      ...defaultFacetOption,
      valueId: '',
      value: '5-15W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5-15W'
          }
        ],
        sortIndex: 385
      }
    },
    {
      key: CapacitySizeFacetOptionKey._52,
      ...defaultFacetOption,
      valueId: '',
      value: '5-2',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5-2'
          }
        ],
        sortIndex: 386
      }
    },
    {
      key: CapacitySizeFacetOptionKey._520,
      ...defaultFacetOption,
      valueId: '',
      value: '5-20',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5-20'
          }
        ],
        sortIndex: 387
      }
    },
    {
      key: CapacitySizeFacetOptionKey._520W,
      ...defaultFacetOption,
      valueId: '',
      value: '5-20W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5-20W'
          }
        ],
        sortIndex: 388
      }
    },
    {
      key: CapacitySizeFacetOptionKey._5250,
      ...defaultFacetOption,
      valueId: '',
      value: '5250',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5250'
          }
        ],
        sortIndex: 389
      }
    },
    {
      key: CapacitySizeFacetOptionKey._53,
      ...defaultFacetOption,
      valueId: '',
      value: '53',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '53'
          }
        ],
        sortIndex: 390
      }
    },
    {
      key: CapacitySizeFacetOptionKey._53_,
      ...defaultFacetOption,
      valueId: '',
      value: '5-3',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5-3'
          }
        ],
        sortIndex: 391
      }
    },
    {
      key: CapacitySizeFacetOptionKey._53W,
      ...defaultFacetOption,
      valueId: '',
      value: '5-3W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5-3W'
          }
        ],
        sortIndex: 392
      }
    },
    {
      key: CapacitySizeFacetOptionKey._550,
      ...defaultFacetOption,
      valueId: '',
      value: '550',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '550'
          }
        ],
        sortIndex: 393
      }
    },
    {
      key: CapacitySizeFacetOptionKey._55065,
      ...defaultFacetOption,
      valueId: '',
      value: '550-65',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '550-65'
          }
        ],
        sortIndex: 394
      }
    },
    {
      key: CapacitySizeFacetOptionKey._5545,
      ...defaultFacetOption,
      valueId: '',
      value: '55-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '55-45'
          }
        ],
        sortIndex: 395
      }
    },
    {
      key: CapacitySizeFacetOptionKey._55W,
      ...defaultFacetOption,
      valueId: '',
      value: '5-5W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5-5W'
          }
        ],
        sortIndex: 396
      }
    },
    {
      key: CapacitySizeFacetOptionKey._56,
      ...defaultFacetOption,
      valueId: '',
      value: '56',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '56'
          }
        ],
        sortIndex: 397
      }
    },
    {
      key: CapacitySizeFacetOptionKey._560,
      ...defaultFacetOption,
      valueId: '',
      value: '560',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '560'
          }
        ],
        sortIndex: 398
      }
    },
    {
      key: CapacitySizeFacetOptionKey._560WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '560WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '560WSQ'
          }
        ],
        sortIndex: 399
      }
    },
    {
      key: CapacitySizeFacetOptionKey._5690SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '5690SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5690SQ'
          }
        ],
        sortIndex: 400
      }
    },
    {
      key: CapacitySizeFacetOptionKey._57,
      ...defaultFacetOption,
      valueId: '',
      value: '57',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '57'
          }
        ],
        sortIndex: 401
      }
    },
    {
      key: CapacitySizeFacetOptionKey._570,
      ...defaultFacetOption,
      valueId: '',
      value: '570',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '570'
          }
        ],
        sortIndex: 402
      }
    },
    {
      key: CapacitySizeFacetOptionKey._58,
      ...defaultFacetOption,
      valueId: '',
      value: '58',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '58'
          }
        ],
        sortIndex: 403
      }
    },
    {
      key: CapacitySizeFacetOptionKey._58_,
      ...defaultFacetOption,
      valueId: '',
      value: '5-8',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5-8'
          }
        ],
        sortIndex: 404
      }
    },
    {
      key: CapacitySizeFacetOptionKey._580,
      ...defaultFacetOption,
      valueId: '',
      value: '580',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '580'
          }
        ],
        sortIndex: 405
      }
    },
    {
      key: CapacitySizeFacetOptionKey._58W,
      ...defaultFacetOption,
      valueId: '',
      value: '5-8W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5-8W'
          }
        ],
        sortIndex: 406
      }
    },
    {
      key: CapacitySizeFacetOptionKey._590SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '590SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '590SQ'
          }
        ],
        sortIndex: 407
      }
    },
    {
      key: CapacitySizeFacetOptionKey._5W,
      ...defaultFacetOption,
      valueId: '',
      value: '5W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '5W'
          }
        ],
        sortIndex: 408
      }
    },
    {
      key: CapacitySizeFacetOptionKey._6,
      ...defaultFacetOption,
      valueId: '',
      value: '6',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '6'
          }
        ],
        sortIndex: 409
      }
    },
    {
      key: CapacitySizeFacetOptionKey._6_1,
      ...defaultFacetOption,
      valueId: '',
      value: '6.1',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '6.1'
          }
        ],
        sortIndex: 410
      }
    },
    {
      key: CapacitySizeFacetOptionKey._6_5,
      ...defaultFacetOption,
      valueId: '',
      value: '6.5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '6.5'
          }
        ],
        sortIndex: 411
      }
    },
    {
      key: CapacitySizeFacetOptionKey._6_5VL,
      ...defaultFacetOption,
      valueId: '',
      value: '6.5VL',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '6.5VL'
          }
        ],
        sortIndex: 412
      }
    },
    {
      key: CapacitySizeFacetOptionKey._60_,
      ...defaultFacetOption,
      valueId: '',
      value: '60',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '60'
          }
        ],
        sortIndex: 413
      }
    },
    {
      key: CapacitySizeFacetOptionKey._60__,
      ...defaultFacetOption,
      valueId: '',
      value: '60*',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '60*'
          }
        ],
        sortIndex: 414
      }
    },
    {
      key: CapacitySizeFacetOptionKey._600,
      ...defaultFacetOption,
      valueId: '',
      value: '600',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '600'
          }
        ],
        sortIndex: 415
      }
    },
    {
      key: CapacitySizeFacetOptionKey._625,
      ...defaultFacetOption,
      valueId: '',
      value: '625',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '625'
          }
        ],
        sortIndex: 416
      }
    },
    {
      key: CapacitySizeFacetOptionKey._62565,
      ...defaultFacetOption,
      valueId: '',
      value: '625-65',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '625-65'
          }
        ],
        sortIndex: 417
      }
    },
    {
      key: CapacitySizeFacetOptionKey._64,
      ...defaultFacetOption,
      valueId: '',
      value: '64',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '64'
          }
        ],
        sortIndex: 418
      }
    },
    {
      key: CapacitySizeFacetOptionKey._640,
      ...defaultFacetOption,
      valueId: '',
      value: '640',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '640'
          }
        ],
        sortIndex: 419
      }
    },
    {
      key: CapacitySizeFacetOptionKey._650,
      ...defaultFacetOption,
      valueId: '',
      value: '650',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '650'
          }
        ],
        sortIndex: 420
      }
    },
    {
      key: CapacitySizeFacetOptionKey._6SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '6SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '6SQ'
          }
        ],
        sortIndex: 421
      }
    },
    {
      key: CapacitySizeFacetOptionKey._6W,
      ...defaultFacetOption,
      valueId: '',
      value: '6W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '6W'
          }
        ],
        sortIndex: 422
      }
    },
    {
      key: CapacitySizeFacetOptionKey._7,
      ...defaultFacetOption,
      valueId: '',
      value: '7',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '7'
          }
        ],
        sortIndex: 423
      }
    },
    {
      key: CapacitySizeFacetOptionKey._7_5,
      ...defaultFacetOption,
      valueId: '',
      value: '7.5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '7.5'
          }
        ],
        sortIndex: 424
      }
    },
    {
      key: CapacitySizeFacetOptionKey._70,
      ...defaultFacetOption,
      valueId: '',
      value: '70',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '70'
          }
        ],
        sortIndex: 425
      }
    },
    {
      key: CapacitySizeFacetOptionKey._700,
      ...defaultFacetOption,
      valueId: '',
      value: '700',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '700'
          }
        ],
        sortIndex: 426
      }
    },
    {
      key: CapacitySizeFacetOptionKey._7045,
      ...defaultFacetOption,
      valueId: '',
      value: '70-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '70-45'
          }
        ],
        sortIndex: 427
      }
    },
    {
      key: CapacitySizeFacetOptionKey._70W,
      ...defaultFacetOption,
      valueId: '',
      value: '70W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '70W'
          }
        ],
        sortIndex: 428
      }
    },
    {
      key: CapacitySizeFacetOptionKey._71WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '71WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '71WSQ'
          }
        ],
        sortIndex: 429
      }
    },
    {
      key: CapacitySizeFacetOptionKey._72,
      ...defaultFacetOption,
      valueId: '',
      value: '72',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '72'
          }
        ],
        sortIndex: 430
      }
    },
    {
      key: CapacitySizeFacetOptionKey._750,
      ...defaultFacetOption,
      valueId: '',
      value: '750',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '750'
          }
        ],
        sortIndex: 431
      }
    },
    {
      key: CapacitySizeFacetOptionKey._8,
      ...defaultFacetOption,
      valueId: '',
      value: '8',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '8'
          }
        ],
        sortIndex: 432
      }
    },
    {
      key: CapacitySizeFacetOptionKey._8_1VL,
      ...defaultFacetOption,
      valueId: '',
      value: '8.1VL',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '8.1VL'
          }
        ],
        sortIndex: 433
      }
    },
    {
      key: CapacitySizeFacetOptionKey._8_5,
      ...defaultFacetOption,
      valueId: '',
      value: '8.5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '8.5'
          }
        ],
        sortIndex: 434
      }
    },
    {
      key: CapacitySizeFacetOptionKey._80_,
      ...defaultFacetOption,
      valueId: '',
      value: '80',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '80'
          }
        ],
        sortIndex: 435
      }
    },
    {
      key: CapacitySizeFacetOptionKey._800,
      ...defaultFacetOption,
      valueId: '',
      value: '800',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '800'
          }
        ],
        sortIndex: 436
      }
    },
    {
      key: CapacitySizeFacetOptionKey._810,
      ...defaultFacetOption,
      valueId: '',
      value: '8-10',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '8-10'
          }
        ],
        sortIndex: 437
      }
    },
    {
      key: CapacitySizeFacetOptionKey._810W,
      ...defaultFacetOption,
      valueId: '',
      value: '8-10W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '8-10W'
          }
        ],
        sortIndex: 438
      }
    },
    {
      key: CapacitySizeFacetOptionKey._815,
      ...defaultFacetOption,
      valueId: '',
      value: '8-15',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '8-15'
          }
        ],
        sortIndex: 439
      }
    },
    {
      key: CapacitySizeFacetOptionKey._815W,
      ...defaultFacetOption,
      valueId: '',
      value: '8-15W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '8-15W'
          }
        ],
        sortIndex: 440
      }
    },
    {
      key: CapacitySizeFacetOptionKey._82,
      ...defaultFacetOption,
      valueId: '',
      value: '82',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '82'
          }
        ],
        sortIndex: 441
      }
    },
    {
      key: CapacitySizeFacetOptionKey._820,
      ...defaultFacetOption,
      valueId: '',
      value: '820',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '820'
          }
        ],
        sortIndex: 442
      }
    },
    {
      key: CapacitySizeFacetOptionKey._820_,
      ...defaultFacetOption,
      valueId: '',
      value: '8-20',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '8-20'
          }
        ],
        sortIndex: 443
      }
    },
    {
      key: CapacitySizeFacetOptionKey._820W,
      ...defaultFacetOption,
      valueId: '',
      value: '8-20W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '8-20W'
          }
        ],
        sortIndex: 444
      }
    },
    {
      key: CapacitySizeFacetOptionKey._825W,
      ...defaultFacetOption,
      valueId: '',
      value: '8-25W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '8-25W'
          }
        ],
        sortIndex: 445
      }
    },
    {
      key: CapacitySizeFacetOptionKey._830WSQ,
      ...defaultFacetOption,
      valueId: '',
      value: '830WSQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '830WSQ'
          }
        ],
        sortIndex: 446
      }
    },
    {
      key: CapacitySizeFacetOptionKey._84,
      ...defaultFacetOption,
      valueId: '',
      value: '84',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '84'
          }
        ],
        sortIndex: 447
      }
    },
    {
      key: CapacitySizeFacetOptionKey._85,
      ...defaultFacetOption,
      valueId: '',
      value: '85',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '85'
          }
        ],
        sortIndex: 448
      }
    },
    {
      key: CapacitySizeFacetOptionKey._85_,
      ...defaultFacetOption,
      valueId: '',
      value: '8-5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '8-5'
          }
        ],
        sortIndex: 449
      }
    },
    {
      key: CapacitySizeFacetOptionKey._850,
      ...defaultFacetOption,
      valueId: '',
      value: '850',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '850'
          }
        ],
        sortIndex: 450
      }
    },
    {
      key: CapacitySizeFacetOptionKey._8545,
      ...defaultFacetOption,
      valueId: '',
      value: '85-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '85-45'
          }
        ],
        sortIndex: 451
      }
    },
    {
      key: CapacitySizeFacetOptionKey._85W,
      ...defaultFacetOption,
      valueId: '',
      value: '8-5W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '8-5W'
          }
        ],
        sortIndex: 452
      }
    },
    {
      key: CapacitySizeFacetOptionKey._88W,
      ...defaultFacetOption,
      valueId: '',
      value: '8-8W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '8-8W'
          }
        ],
        sortIndex: 453
      }
    },
    {
      key: CapacitySizeFacetOptionKey._8SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '8SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '8SQ'
          }
        ],
        sortIndex: 454
      }
    },
    {
      key: CapacitySizeFacetOptionKey._8W,
      ...defaultFacetOption,
      valueId: '',
      value: '8W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '8W'
          }
        ],
        sortIndex: 455
      }
    },
    {
      key: CapacitySizeFacetOptionKey._9,
      ...defaultFacetOption,
      valueId: '',
      value: '9',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '9'
          }
        ],
        sortIndex: 456
      }
    },
    {
      key: CapacitySizeFacetOptionKey._9_2VL,
      ...defaultFacetOption,
      valueId: '',
      value: '9.2VL',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '9.2VL'
          }
        ],
        sortIndex: 457
      }
    },
    {
      key: CapacitySizeFacetOptionKey._9_5,
      ...defaultFacetOption,
      valueId: '',
      value: '9.5',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '9.5'
          }
        ],
        sortIndex: 458
      }
    },
    {
      key: CapacitySizeFacetOptionKey._9_9,
      ...defaultFacetOption,
      valueId: '',
      value: '9.9',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '9.9'
          }
        ],
        sortIndex: 459
      }
    },
    {
      key: CapacitySizeFacetOptionKey._90_,
      ...defaultFacetOption,
      valueId: '',
      value: '90',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '90'
          }
        ],
        sortIndex: 460
      }
    },
    {
      key: CapacitySizeFacetOptionKey._900,
      ...defaultFacetOption,
      valueId: '',
      value: '900',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '900'
          }
        ],
        sortIndex: 461
      }
    },
    {
      key: CapacitySizeFacetOptionKey._950SQ,
      ...defaultFacetOption,
      valueId: '',
      value: '950SQ',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '950SQ'
          }
        ],
        sortIndex: 462
      }
    },
    {
      key: CapacitySizeFacetOptionKey._95W,
      ...defaultFacetOption,
      valueId: '',
      value: '95W',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '95W'
          }
        ],
        sortIndex: 463
      }
    },
    {
      key: CapacitySizeFacetOptionKey._960,
      ...defaultFacetOption,
      valueId: '',
      value: '960',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: '960'
          }
        ],
        sortIndex: 464
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1_513,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1.5-13',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1.5-13'
          }
        ],
        sortIndex: 465
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1_523,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1.5-23',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1.5-23'
          }
        ],
        sortIndex: 466
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1_525,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1.5-25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1.5-25'
          }
        ],
        sortIndex: 467
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1_531,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1.5-31',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1.5-31'
          }
        ],
        sortIndex: 468
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1_533,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1.5-33',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1.5-33'
          }
        ],
        sortIndex: 469
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1_535,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1.5-35',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1.5-35'
          }
        ],
        sortIndex: 470
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1_545,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1.5-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1.5-45'
          }
        ],
        sortIndex: 471
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1_546,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1.5-46',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1.5-46'
          }
        ],
        sortIndex: 472
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1_556,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1.5-56',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1.5-56'
          }
        ],
        sortIndex: 473
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1025,
      ...defaultFacetOption,
      valueId: '',
      value: 'D10-25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D10-25'
          }
        ],
        sortIndex: 474
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1045,
      ...defaultFacetOption,
      valueId: '',
      value: 'D10-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D10-45'
          }
        ],
        sortIndex: 475
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1046,
      ...defaultFacetOption,
      valueId: '',
      value: 'D10-46',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D10-46'
          }
        ],
        sortIndex: 476
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1056,
      ...defaultFacetOption,
      valueId: '',
      value: 'D10-56',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D10-56'
          }
        ],
        sortIndex: 477
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D113,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1-13',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1-13'
          }
        ],
        sortIndex: 478
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1225,
      ...defaultFacetOption,
      valueId: '',
      value: 'D12-25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D12-25'
          }
        ],
        sortIndex: 479
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D123,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1-23',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1-23'
          }
        ],
        sortIndex: 480
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1245,
      ...defaultFacetOption,
      valueId: '',
      value: 'D12-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D12-45'
          }
        ],
        sortIndex: 481
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D125,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1-25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1-25'
          }
        ],
        sortIndex: 482
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D131,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1-31',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1-31'
          }
        ],
        sortIndex: 483
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D133,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1-33',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1-33'
          }
        ],
        sortIndex: 484
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D135,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1-35',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1-35'
          }
        ],
        sortIndex: 485
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1425,
      ...defaultFacetOption,
      valueId: '',
      value: 'D14-25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D14-25'
          }
        ],
        sortIndex: 486
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1445,
      ...defaultFacetOption,
      valueId: '',
      value: 'D14-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D14-45'
          }
        ],
        sortIndex: 487
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D145,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1-45'
          }
        ],
        sortIndex: 488
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D146,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1-46',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1-46'
          }
        ],
        sortIndex: 489
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D156,
      ...defaultFacetOption,
      valueId: '',
      value: 'D1-56',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D1-56'
          }
        ],
        sortIndex: 490
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D1645,
      ...defaultFacetOption,
      valueId: '',
      value: 'D16-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D16-45'
          }
        ],
        sortIndex: 491
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D213,
      ...defaultFacetOption,
      valueId: '',
      value: 'D2-13',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D2-13'
          }
        ],
        sortIndex: 492
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D223,
      ...defaultFacetOption,
      valueId: '',
      value: 'D2-23',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D2-23'
          }
        ],
        sortIndex: 493
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D225,
      ...defaultFacetOption,
      valueId: '',
      value: 'D2-25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D2-25'
          }
        ],
        sortIndex: 494
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D231,
      ...defaultFacetOption,
      valueId: '',
      value: 'D2-31',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D2-31'
          }
        ],
        sortIndex: 495
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D233,
      ...defaultFacetOption,
      valueId: '',
      value: 'D2-33',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D2-33'
          }
        ],
        sortIndex: 496
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D235,
      ...defaultFacetOption,
      valueId: '',
      value: 'D2-35',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D2-35'
          }
        ],
        sortIndex: 497
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D245,
      ...defaultFacetOption,
      valueId: '',
      value: 'D2-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D2-45'
          }
        ],
        sortIndex: 498
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D246,
      ...defaultFacetOption,
      valueId: '',
      value: 'D2-46',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D2-46'
          }
        ],
        sortIndex: 499
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D256,
      ...defaultFacetOption,
      valueId: '',
      value: 'D2-56',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D2-56'
          }
        ],
        sortIndex: 500
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D313,
      ...defaultFacetOption,
      valueId: '',
      value: 'D3-13',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D3-13'
          }
        ],
        sortIndex: 501
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D323,
      ...defaultFacetOption,
      valueId: '',
      value: 'D3-23',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D3-23'
          }
        ],
        sortIndex: 502
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D325,
      ...defaultFacetOption,
      valueId: '',
      value: 'D3-25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D3-25'
          }
        ],
        sortIndex: 503
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D331,
      ...defaultFacetOption,
      valueId: '',
      value: 'D3-31',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D3-31'
          }
        ],
        sortIndex: 504
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D333,
      ...defaultFacetOption,
      valueId: '',
      value: 'D3-33',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D3-33'
          }
        ],
        sortIndex: 505
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D335,
      ...defaultFacetOption,
      valueId: '',
      value: 'D3-35',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D3-35'
          }
        ],
        sortIndex: 506
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D345,
      ...defaultFacetOption,
      valueId: '',
      value: 'D3-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D3-45'
          }
        ],
        sortIndex: 507
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D346,
      ...defaultFacetOption,
      valueId: '',
      value: 'D3-46',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D3-46'
          }
        ],
        sortIndex: 508
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D356,
      ...defaultFacetOption,
      valueId: '',
      value: 'D3-56',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D3-56'
          }
        ],
        sortIndex: 509
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D413,
      ...defaultFacetOption,
      valueId: '',
      value: 'D4-13',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D4-13'
          }
        ],
        sortIndex: 510
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D423,
      ...defaultFacetOption,
      valueId: '',
      value: 'D4-23',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D4-23'
          }
        ],
        sortIndex: 511
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D425,
      ...defaultFacetOption,
      valueId: '',
      value: 'D4-25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D4-25'
          }
        ],
        sortIndex: 512
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D433,
      ...defaultFacetOption,
      valueId: '',
      value: 'D4-33',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D4-33'
          }
        ],
        sortIndex: 513
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D435,
      ...defaultFacetOption,
      valueId: '',
      value: 'D4-35',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D4-35'
          }
        ],
        sortIndex: 514
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D445,
      ...defaultFacetOption,
      valueId: '',
      value: 'D4-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D4-45'
          }
        ],
        sortIndex: 515
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D446,
      ...defaultFacetOption,
      valueId: '',
      value: 'D4-46',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D4-46'
          }
        ],
        sortIndex: 516
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D456,
      ...defaultFacetOption,
      valueId: '',
      value: 'D4-56',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D4-56'
          }
        ],
        sortIndex: 517
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D523,
      ...defaultFacetOption,
      valueId: '',
      value: 'D5-23',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D5-23'
          }
        ],
        sortIndex: 518
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D525,
      ...defaultFacetOption,
      valueId: '',
      value: 'D5-25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D5-25'
          }
        ],
        sortIndex: 519
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D535,
      ...defaultFacetOption,
      valueId: '',
      value: 'D5-35',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D5-35'
          }
        ],
        sortIndex: 520
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D545,
      ...defaultFacetOption,
      valueId: '',
      value: 'D5-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D5-45'
          }
        ],
        sortIndex: 521
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D546,
      ...defaultFacetOption,
      valueId: '',
      value: 'D5-46',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D5-46'
          }
        ],
        sortIndex: 522
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D556,
      ...defaultFacetOption,
      valueId: '',
      value: 'D5-56',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D5-56'
          }
        ],
        sortIndex: 523
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D623,
      ...defaultFacetOption,
      valueId: '',
      value: 'D6-23',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D6-23'
          }
        ],
        sortIndex: 524
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D625,
      ...defaultFacetOption,
      valueId: '',
      value: 'D6-25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D6-25'
          }
        ],
        sortIndex: 525
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D645,
      ...defaultFacetOption,
      valueId: '',
      value: 'D6-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D6-45'
          }
        ],
        sortIndex: 526
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D646,
      ...defaultFacetOption,
      valueId: '',
      value: 'D6-46',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D6-46'
          }
        ],
        sortIndex: 527
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D656,
      ...defaultFacetOption,
      valueId: '',
      value: 'D6-56',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D6-56'
          }
        ],
        sortIndex: 528
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D725,
      ...defaultFacetOption,
      valueId: '',
      value: 'D7-25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D7-25'
          }
        ],
        sortIndex: 529
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D745,
      ...defaultFacetOption,
      valueId: '',
      value: 'D7-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D7-45'
          }
        ],
        sortIndex: 530
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D746,
      ...defaultFacetOption,
      valueId: '',
      value: 'D7-46',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D7-46'
          }
        ],
        sortIndex: 531
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D756,
      ...defaultFacetOption,
      valueId: '',
      value: 'D7-56',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D7-56'
          }
        ],
        sortIndex: 532
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D825,
      ...defaultFacetOption,
      valueId: '',
      value: 'D8-25',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D8-25'
          }
        ],
        sortIndex: 533
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D845,
      ...defaultFacetOption,
      valueId: '',
      value: 'D8-45',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D8-45'
          }
        ],
        sortIndex: 534
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D846,
      ...defaultFacetOption,
      valueId: '',
      value: 'D8-46',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D8-46'
          }
        ],
        sortIndex: 535
      }
    },
    {
      key: CapacitySizeFacetOptionKey.D856,
      ...defaultFacetOption,
      valueId: '',
      value: 'D8-56',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: 'D8-56'
          }
        ],
        sortIndex: 536
      }
    }
  ];

export const capacitySizeFacet: Facet<
  CapacitySizeFacetOptionKey,
  FacetOption<CapacitySizeFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.CapacitySize,
  attributeTypeCode: 'CapacitySize',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: capacitySizeFacetOptions
};
