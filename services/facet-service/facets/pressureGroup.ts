import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum PressureGroupFacetOptionKey {
  HighPressure = 'HighPressure',
  LowPressure = 'LowPressure',
  MediumPressure = 'MediumPressure',
  UltraHighPressure = 'UltraHighPressure'
}

export const pressureGroupFacetOptions: FacetOption<PressureGroupFacetOptionKey>[] =
  [
    {
      key: PressureGroupFacetOptionKey.HighPressure,
      ...defaultFacetOption,
      valueId: '0c4d01f7-cccd-4a82-8bcd-bd66b8e210a8',
      value: 'HighPressure',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'High Pressure' }
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: PressureGroupFacetOptionKey.LowPressure,
      ...defaultFacetOption,
      valueId: 'c84e2fb5-371e-4a45-8a15-1dc07ca28157',
      value: 'LowPressure',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Low Pressure' }
          }
        ],
        sortIndex: 2
      }
    },
    {
      key: PressureGroupFacetOptionKey.MediumPressure,
      ...defaultFacetOption,
      valueId: 'eea96f87-0afd-4752-8c1b-53a16833fed7',
      value: 'MediumPressure',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Medium Pressure' }
          }
        ],
        sortIndex: 3
      }
    },
    {
      key: PressureGroupFacetOptionKey.UltraHighPressure,
      ...defaultFacetOption,
      valueId: 'b8a921de-31d5-4101-a958-67d5a1213932',
      value: 'Ultra-HighPressure',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Ultra-High Pressure' }
          }
        ],
        sortIndex: 4
      }
    }
  ];

export const pressureGroupFacet: Facet<
  PressureGroupFacetOptionKey,
  FacetOption<PressureGroupFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.PressureGroup,
  attributeTypeCode: 'PressureGroup',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: pressureGroupFacetOptions
};
