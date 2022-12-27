import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum ShaftLengthFacetOptionKey {
  _1_5 = '_1_5',
  _3 = '_3',
  _3_3 = '_3_3',
  _3_9 = '_3_9',
  _4 = '_4',
  _4_1 = '_4_1',
  _4_9 = '_4_9',
  _5_7 = '_5_7',
  _5_9 = '_5_9',
  _6 = '_6',
  _6_6 = '_6_6',
  _7_4 = '_7_4',
  _8_2 = '_8_2'
}

export const shaftLengthFacetOptions: FacetOption<ShaftLengthFacetOptionKey>[] =
  [
    {
      key: ShaftLengthFacetOptionKey._1_5,
      ...defaultFacetOption,
      valueId: '',
      value: 1.5,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'ft', value: 1.5 },
          { variation: 'Metric', unitSymbol: 'm', value: 0.5 }
        ],
        sortIndex: 1
      }
    },
    {
      key: ShaftLengthFacetOptionKey._3,
      ...defaultFacetOption,
      valueId: '',
      value: 3,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'ft', value: 3 },
          { variation: 'Metric', unitSymbol: 'm', value: 0.9 },
          { variation: 'Metric', unitSymbol: 'm', value: 0.91 }
        ],
        sortIndex: 2
      }
    },
    {
      key: ShaftLengthFacetOptionKey._3_3,
      ...defaultFacetOption,
      valueId: '',
      value: 3.3,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'ft', value: 3.3 },
          { variation: 'Metric', unitSymbol: 'm', value: 1 }
        ],
        sortIndex: 3
      }
    },
    {
      key: ShaftLengthFacetOptionKey._3_9,
      ...defaultFacetOption,
      valueId: '',
      value: 3.9,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'ft', value: 3.9 },
          { variation: 'Metric', unitSymbol: 'm', value: 1.2 }
        ],
        sortIndex: 4
      }
    },
    {
      key: ShaftLengthFacetOptionKey._4,
      ...defaultFacetOption,
      valueId: '',
      value: 4,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'ft', value: 4 },
          { variation: 'Metric', unitSymbol: 'm', value: 1.2 }
        ],
        sortIndex: 5
      }
    },
    {
      key: ShaftLengthFacetOptionKey._4_1,
      ...defaultFacetOption,
      valueId: '',
      value: 4.1,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'ft', value: 4.1 },
          { variation: 'Metric', unitSymbol: 'm', value: 1.25 }
        ],
        sortIndex: 6
      }
    },
    {
      key: ShaftLengthFacetOptionKey._4_9,
      ...defaultFacetOption,
      valueId: '',
      value: 4.9,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'ft', value: 4.9 },
          { variation: 'Metric', unitSymbol: 'm', value: 1.5 }
        ],
        sortIndex: 7
      }
    },
    {
      key: ShaftLengthFacetOptionKey._5_7,
      ...defaultFacetOption,
      valueId: '',
      value: 5.7,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'ft', value: 5.7 },
          { variation: 'Metric', unitSymbol: 'm', value: 1.75 }
        ],
        sortIndex: 8
      }
    },
    {
      key: ShaftLengthFacetOptionKey._5_9,
      ...defaultFacetOption,
      valueId: '',
      value: 5.9,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'ft', value: 5.9 },
          { variation: 'Metric', unitSymbol: 'm', value: 1.8 }
        ],
        sortIndex: 9
      }
    },
    {
      key: ShaftLengthFacetOptionKey._6,
      ...defaultFacetOption,
      valueId: '',
      value: 6,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'ft', value: 6 },
          { variation: 'Metric', unitSymbol: 'm', value: 1.8 }
        ],
        sortIndex: 10
      }
    },
    {
      key: ShaftLengthFacetOptionKey._6_6,
      ...defaultFacetOption,
      valueId: '',
      value: 6.6,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'ft', value: 6.6 },
          { variation: 'Metric', unitSymbol: 'm', value: 2 }
        ],
        sortIndex: 11
      }
    },
    {
      key: ShaftLengthFacetOptionKey._7_4,
      ...defaultFacetOption,
      valueId: '',
      value: 7.4,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'ft', value: 7.4 },
          { variation: 'Metric', unitSymbol: 'm', value: 2.25 }
        ],
        sortIndex: 12
      }
    },
    {
      key: ShaftLengthFacetOptionKey._8_2,
      ...defaultFacetOption,
      valueId: '',
      value: 8.2,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'ft', value: 8.2 },
          { variation: 'Metric', unitSymbol: 'm', value: 2.5 }
        ],
        sortIndex: 13
      }
    }
  ];

export const shaftLengthFacet: Facet<
  ShaftLengthFacetOptionKey,
  FacetOption<ShaftLengthFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.ShaftLength,
  attributeTypeCode: 'ShaftLength',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: shaftLengthFacetOptions
};
