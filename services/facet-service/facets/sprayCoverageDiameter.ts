import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum SprayCoverageDiameterFacetOptionKey {
  _1_9685 = '_1_9685',
  _2 = '_2',
  _2_5 = '_2_5',
  _2_62467 = '_2_62467',
  _2_95276 = '_2_95276',
  _3 = '_3',
  _3_5 = '_3_5',
  _3_60892 = '_3_60892',
  _3_93701 = '_3_93701',
  _4 = '_4',
  _4_92126 = '_4_92126',
  _5 = '_5'
}

export const sprayCoverageDiameterFacetOptions: FacetOption<SprayCoverageDiameterFacetOptionKey>[] =
  [
    {
      key: SprayCoverageDiameterFacetOptionKey._1_9685,
      ...defaultFacetOption,
      valueId: '',
      value: 1.9685,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'ft', value: 1.9685 },
          { variation: 'Metric', unitSymbol: 'm', value: 0.6 }
        ],
        sortIndex: 1
      }
    },
    {
      key: SprayCoverageDiameterFacetOptionKey._2,
      ...defaultFacetOption,
      valueId: '',
      value: 2,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'ft', value: 2 }],
        sortIndex: 2
      }
    },
    {
      key: SprayCoverageDiameterFacetOptionKey._2_5,
      ...defaultFacetOption,
      valueId: '',
      value: 2.5,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'ft', value: 2.5 }],
        sortIndex: 3
      }
    },
    {
      key: SprayCoverageDiameterFacetOptionKey._2_62467,
      ...defaultFacetOption,
      valueId: '',
      value: 2.62467,
      configuration: {
        displays: [
          { variation: 'Metric', unitSymbol: 'm', value: 0.8 },
          { variation: 'Us', unitSymbol: 'ft', value: 2.62467 }
        ],
        sortIndex: 4
      }
    },
    {
      key: SprayCoverageDiameterFacetOptionKey._2_95276,
      ...defaultFacetOption,
      valueId: '',
      value: 2.95276,
      configuration: {
        displays: [
          { variation: 'Metric', unitSymbol: 'm', value: 0.9 },
          { variation: 'Us', unitSymbol: 'ft', value: 2.95276 }
        ],
        sortIndex: 5
      }
    },
    {
      key: SprayCoverageDiameterFacetOptionKey._3,
      ...defaultFacetOption,
      valueId: '',
      value: 3,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'ft', value: 3 }],
        sortIndex: 6
      }
    },
    {
      key: SprayCoverageDiameterFacetOptionKey._3_5,
      ...defaultFacetOption,
      valueId: '',
      value: 3.5,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'ft', value: 3.5 }],
        sortIndex: 7
      }
    },
    {
      key: SprayCoverageDiameterFacetOptionKey._3_60892,
      ...defaultFacetOption,
      valueId: '',
      value: 3.60892,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'ft', value: 3.60892 },
          { variation: 'Metric', unitSymbol: 'm', value: 1.1 }
        ],
        sortIndex: 8
      }
    },
    {
      key: SprayCoverageDiameterFacetOptionKey._3_93701,
      ...defaultFacetOption,
      valueId: '',
      value: 3.93701,
      configuration: {
        displays: [
          { variation: 'Us', unitSymbol: 'ft', value: 3.93701 },
          { variation: 'Metric', unitSymbol: 'm', value: 1.2 }
        ],
        sortIndex: 9
      }
    },
    {
      key: SprayCoverageDiameterFacetOptionKey._4,
      ...defaultFacetOption,
      valueId: '',
      value: 4,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'ft', value: 4 }],
        sortIndex: 10
      }
    },
    {
      key: SprayCoverageDiameterFacetOptionKey._4_92126,
      ...defaultFacetOption,
      valueId: '',
      value: 4.92126,
      configuration: {
        displays: [
          { variation: 'Metric', unitSymbol: 'm', value: 1.5 },
          { variation: 'Us', unitSymbol: 'ft', value: 4.92126 }
        ],
        sortIndex: 11
      }
    },
    {
      key: SprayCoverageDiameterFacetOptionKey._5,
      ...defaultFacetOption,
      valueId: '',
      value: 5,
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: 'ft', value: 5 }],
        sortIndex: 12
      }
    }
  ];

export const sprayCoverageDiameterFacet: Facet<
  SprayCoverageDiameterFacetOptionKey,
  FacetOption<SprayCoverageDiameterFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.SprayCoverageDiameter,
  attributeTypeCode: 'SprayCoverageDiameter',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: sprayCoverageDiameterFacetOptions
};
