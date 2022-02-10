import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum BrandFacetOptionKey {
  DeflectoJet = 'DeflectoJet',
  DistriboJet = 'DistriboJet',
  FlatJet = 'FlatJet',
  FloodJet = 'FloodJet',
  FogJet = 'FogJet',
  FullJet = 'FullJet',
  ProMaxQuickVeeJet = 'ProMaxQuickVeeJet',
  ProMaxQuickFullJet = 'ProMaxQuickFullJet',
  ProMaxQuickJet = 'ProMaxQuickJet',
  QuickFloodJet = 'QuickFloodJet',
  QuickFullJet = 'QuickFullJet',
  QuickJet = 'QuickJet',
  QuickVeeJet = 'QuickVeeJet',
  SpiralJet = 'SpiralJet',
  UniJet = 'UniJet',
  VeeJet = 'VeeJet',
  WashJet = 'WashJet',
  WhirlJet = 'WhirlJet'
}

export const brandFacetOptions: FacetOption<BrandFacetOptionKey>[] = [
  {
    key: BrandFacetOptionKey.DeflectoJet,
    ...defaultFacetOption,
    valueId: 'b5f1360b-8c25-4c2f-8b38-bbe9a5dc25ad',
    value: 'DeflectoJet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'DeflectoJet®' }
        }
      ],
      sortIndex: 1
    }
  },
  {
    key: BrandFacetOptionKey.DistriboJet,
    ...defaultFacetOption,
    valueId: '1e031aa1-d82b-441a-9d6f-5d9961cffc3f',
    value: 'DistriboJet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'DistriboJet®' }
        }
      ],
      sortIndex: 2
    }
  },
  {
    key: BrandFacetOptionKey.FlatJet,
    ...defaultFacetOption,
    valueId: 'a94ec0a1-5a47-49d1-abe2-2edd34b9e921',
    value: 'FlatJet',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'FlatJet®' } }
      ],
      sortIndex: 3
    }
  },
  {
    key: BrandFacetOptionKey.FloodJet,
    ...defaultFacetOption,
    valueId: '50696134-0305-4537-adff-32baba818653',
    value: 'FloodJet',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'FloodJet®' } }
      ],
      sortIndex: 4
    }
  },
  {
    key: BrandFacetOptionKey.FogJet,
    ...defaultFacetOption,
    valueId: '6fcdf77b-5190-4b80-bb71-961f244031b6',
    value: 'FogJet',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'FogJet®' } }
      ],
      sortIndex: 5
    }
  },
  {
    key: BrandFacetOptionKey.FullJet,
    ...defaultFacetOption,
    valueId: '435be26d-c5bf-43a4-81ec-943c46b55c60',
    value: 'FullJet',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'FullJet®' } }
      ],
      sortIndex: 6
    }
  },
  {
    key: BrandFacetOptionKey.ProMaxQuickVeeJet,
    ...defaultFacetOption,
    valueId: 'caa2d949-c765-48b8-8d1e-81f95a53ce26',
    value: 'ProMax®QuickVeeJet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'ProMax® Quick VeeJet®' }
        }
      ],
      sortIndex: 7
    }
  },
  {
    key: BrandFacetOptionKey.ProMaxQuickFullJet,
    ...defaultFacetOption,
    valueId: '3529a730-599a-4f99-99e6-16d2af709abc',
    value: 'ProMaxQuickFullJet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'ProMax® Quick FullJet®' }
        }
      ],
      sortIndex: 8
    }
  },
  {
    key: BrandFacetOptionKey.ProMaxQuickJet,
    ...defaultFacetOption,
    valueId: '2b2cd080-60b8-4c4c-b99d-e4aae27d87c7',
    value: 'ProMaxQuickJet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'ProMax® QuickJet®' }
        }
      ],
      sortIndex: 9
    }
  },
  {
    key: BrandFacetOptionKey.QuickFloodJet,
    ...defaultFacetOption,
    valueId: 'bd52452d-c3a0-4fd4-ba69-475e3abd36ba',
    value: 'QuickFloodJet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Quick FloodJet®' }
        }
      ],
      sortIndex: 10
    }
  },
  {
    key: BrandFacetOptionKey.QuickFullJet,
    ...defaultFacetOption,
    valueId: 'da7bdaa8-ce1c-4f28-bf1e-d2b7018b7399',
    value: 'QuickFullJet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Quick FullJet®' }
        }
      ],
      sortIndex: 11
    }
  },
  {
    key: BrandFacetOptionKey.QuickJet,
    ...defaultFacetOption,
    valueId: '3df05831-3082-4464-9562-284ae4c60cfc',
    value: 'QuickJet',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'QuickJet®' } }
      ],
      sortIndex: 12
    }
  },
  {
    key: BrandFacetOptionKey.QuickVeeJet,
    ...defaultFacetOption,
    valueId: '8dfa74e3-68e0-4dc1-b53a-433a5324261e',
    value: 'QuickVeeJet',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Quick VeeJet®' }
        }
      ],
      sortIndex: 13
    }
  },
  {
    key: BrandFacetOptionKey.SpiralJet,
    ...defaultFacetOption,
    valueId: '93d9fd7e-a2ed-4968-b532-6dce42bcaf74',
    value: 'SpiralJet',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'SpiralJet®' } }
      ],
      sortIndex: 14
    }
  },
  {
    key: BrandFacetOptionKey.UniJet,
    ...defaultFacetOption,
    valueId: 'aa87de5d-0940-42e9-bb42-d4c39f7c7c0a',
    value: 'UniJet',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'UniJet®' } }
      ],
      sortIndex: 15
    }
  },
  {
    key: BrandFacetOptionKey.VeeJet,
    ...defaultFacetOption,
    valueId: '41ab76f5-5e6d-464f-a94b-720c4de8dbdf',
    value: 'VeeJet',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'VeeJet®' } }
      ],
      sortIndex: 16
    }
  },
  {
    key: BrandFacetOptionKey.WashJet,
    ...defaultFacetOption,
    valueId: '3e067b14-90e2-4bbd-a618-f342873e10ca',
    value: 'WashJet',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'WashJet®' } }
      ],
      sortIndex: 17
    }
  },
  {
    key: BrandFacetOptionKey.WhirlJet,
    ...defaultFacetOption,
    valueId: '69f0d988-477c-47d9-b554-fa160d22f89a',
    value: 'WhirlJet',
    configuration: {
      displays: [
        { variation: 'Invariant', unitSymbol: '', value: { en: 'WhirlJet®' } }
      ],
      sortIndex: 18
    }
  }
];

export const brandFacet: Facet<
  BrandFacetOptionKey,
  FacetOption<BrandFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.Brand,
  attributeTypeCode: 'Brand',
  configuration: {
    category: FacetCategory.Default,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: brandFacetOptions
};
