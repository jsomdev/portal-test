import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum OrificeDiscNumberAndCoreNumberFacetOptionKey {
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

export const orificeDiscNumberAndCoreNumberFacetOptions: FacetOption<OrificeDiscNumberAndCoreNumberFacetOptionKey>[] =
  [
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1_513,
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
        sortIndex: 1
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1_523,
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
        sortIndex: 2
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1_525,
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
        sortIndex: 3
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1_531,
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
        sortIndex: 4
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1_533,
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
        sortIndex: 5
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1_535,
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
        sortIndex: 6
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1_545,
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
        sortIndex: 7
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1_546,
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
        sortIndex: 8
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1_556,
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
        sortIndex: 9
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1025,
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
        sortIndex: 10
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1045,
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
        sortIndex: 11
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1046,
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
        sortIndex: 12
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1056,
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
        sortIndex: 13
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D113,
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
        sortIndex: 14
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1225,
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
        sortIndex: 15
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D123,
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
        sortIndex: 16
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1245,
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
        sortIndex: 17
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D125,
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
        sortIndex: 18
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D131,
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
        sortIndex: 19
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D133,
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
        sortIndex: 20
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D135,
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
        sortIndex: 21
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1425,
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
        sortIndex: 22
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1445,
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
        sortIndex: 23
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D145,
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
        sortIndex: 24
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D146,
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
        sortIndex: 25
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D156,
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
        sortIndex: 26
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D1645,
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
        sortIndex: 27
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D213,
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
        sortIndex: 28
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D223,
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
        sortIndex: 29
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D225,
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
        sortIndex: 30
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D231,
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
        sortIndex: 31
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D233,
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
        sortIndex: 32
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D235,
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
        sortIndex: 33
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D245,
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
        sortIndex: 34
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D246,
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
        sortIndex: 35
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D256,
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
        sortIndex: 36
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D313,
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
        sortIndex: 37
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D323,
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
        sortIndex: 38
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D325,
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
        sortIndex: 39
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D331,
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
        sortIndex: 40
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D333,
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
        sortIndex: 41
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D335,
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
        sortIndex: 42
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D345,
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
        sortIndex: 43
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D346,
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
        sortIndex: 44
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D356,
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
        sortIndex: 45
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D413,
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
        sortIndex: 46
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D423,
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
        sortIndex: 47
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D425,
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
        sortIndex: 48
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D433,
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
        sortIndex: 49
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D435,
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
        sortIndex: 50
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D445,
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
        sortIndex: 51
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D446,
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
        sortIndex: 52
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D456,
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
        sortIndex: 53
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D523,
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
        sortIndex: 54
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D525,
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
        sortIndex: 55
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D535,
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
        sortIndex: 56
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D545,
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
        sortIndex: 57
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D546,
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
        sortIndex: 58
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D556,
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
        sortIndex: 59
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D623,
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
        sortIndex: 60
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D625,
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
        sortIndex: 61
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D645,
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
        sortIndex: 62
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D646,
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
        sortIndex: 63
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D656,
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
        sortIndex: 64
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D725,
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
        sortIndex: 65
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D745,
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
        sortIndex: 66
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D746,
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
        sortIndex: 67
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D756,
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
        sortIndex: 68
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D825,
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
        sortIndex: 69
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D845,
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
        sortIndex: 70
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D846,
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
        sortIndex: 71
      }
    },
    {
      key: OrificeDiscNumberAndCoreNumberFacetOptionKey.D856,
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
        sortIndex: 72
      }
    }
  ];
export const orificeDiscNumberAndCoreNumberFacet: Facet<
  OrificeDiscNumberAndCoreNumberFacetOptionKey,
  FacetOption<OrificeDiscNumberAndCoreNumberFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.OrificeDiscNumberAndCoreNumber,
  attributeTypeCode: 'OrificeDiscNumberAndCoreNumber',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: orificeDiscNumberAndCoreNumberFacetOptions
};
