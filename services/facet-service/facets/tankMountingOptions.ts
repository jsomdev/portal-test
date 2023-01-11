import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum TankMountingOptionsFacetOptionKey {
  VerticalDownward45Upward45Downward = 'VerticalDownward45Upward45Downward',
  VerticalDownwardHorizontal45Downward = 'VerticalDownwardHorizontal45Downward',
  VerticalDownwardVerticalUpward = 'VerticalDownwardVerticalUpward',
  VerticalDownwardVerticalUpward45Upward45Downward = 'VerticalDownwardVerticalUpward45Upward45Downward',
  VerticalDownwardVerticalUpwardHorizontal = 'VerticalDownwardVerticalUpwardHorizontal',
  VerticalDownwardVerticalUpwardHorizontal45Upward45Downward = 'VerticalDownwardVerticalUpwardHorizontal45Upward45Downward'
}

export const tankMountingOptionsFacetOptions: FacetOption<TankMountingOptionsFacetOptionKey>[] =
  [
    {
      key: TankMountingOptionsFacetOptionKey.VerticalDownward45Upward45Downward,
      ...defaultFacetOption,
      valueId: '',
      value: 'Vertical/Downward, 45° Upward, 45° Downward',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Vertical/Downward, 45° Upward, 45° Downward' }
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: TankMountingOptionsFacetOptionKey.VerticalDownwardHorizontal45Downward,
      ...defaultFacetOption,
      valueId: '',
      value: 'Vertical/Downward, Horizontal, 45° Downward',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Vertical/Downward, Horizontal, 45° Downward' }
          }
        ],
        sortIndex: 2
      }
    },
    {
      key: TankMountingOptionsFacetOptionKey.VerticalDownwardVerticalUpward,
      ...defaultFacetOption,
      valueId: '',
      value: 'Vertical/Downward, Vertical/Upward',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Vertical/Downward, Vertical/Upward' }
          }
        ],
        sortIndex: 3
      }
    },
    {
      key: TankMountingOptionsFacetOptionKey.VerticalDownwardVerticalUpward45Upward45Downward,
      ...defaultFacetOption,
      valueId: '',
      value: 'Vertical/Downward, Vertical/Upward, 45° Upward, 45° Downward',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'Vertical/Downward, Vertical/Upward, 45° Upward, 45° Downward'
            }
          }
        ],
        sortIndex: 4
      }
    },
    {
      key: TankMountingOptionsFacetOptionKey.VerticalDownwardVerticalUpwardHorizontal,
      ...defaultFacetOption,
      valueId: '',
      value: 'Vertical/Downward, Vertical/Upward, Horizontal',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Vertical/Downward, Vertical/Upward, Horizontal' }
          }
        ],
        sortIndex: 5
      }
    },
    {
      key: TankMountingOptionsFacetOptionKey.VerticalDownwardVerticalUpwardHorizontal45Upward45Downward,
      ...defaultFacetOption,
      valueId: '',
      value:
        'Vertical/Downward, Vertical/Upward, Horizontal, 45° Upward, 45° Downward',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'Vertical/Downward, Vertical/Upward, Horizontal, 45° Upward, 45° Downward'
            }
          }
        ],
        sortIndex: 6
      }
    }
  ];

export const tankMountingOptionsFacet: Facet<
  TankMountingOptionsFacetOptionKey,
  FacetOption<TankMountingOptionsFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.TankMountingOptions,
  attributeTypeCode: 'TankMountingOptions',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: tankMountingOptionsFacetOptions
};
