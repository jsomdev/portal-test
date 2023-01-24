import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum SetupTypeFacetOptionKey {
  PressureSprayProduct = 'PressureSprayProduct',
  SiphonGravitySprayProduct = 'SiphonGravitySprayProduct',
  VmauPressureSprayProduct = 'VmauPressureSprayProduct'
}

export const setupTypeFacetOptions: FacetOption<SetupTypeFacetOptionKey>[] = [
  {
    key: SetupTypeFacetOptionKey.PressureSprayProduct,
    ...defaultFacetOption,
    valueId: 'faf0d620-ba8a-4e28-ac9b-d630273829e9',
    value: 'PressureSprayProduct',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Pressure Spray Product' }
        }
      ],
      sortIndex: 1
    }
  },
  {
    key: SetupTypeFacetOptionKey.SiphonGravitySprayProduct,
    ...defaultFacetOption,
    valueId: '3cb46b6f-3747-4ba0-94b9-a36c16ef927a',
    value: 'SiphonGravitySprayProduct',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Siphon/Gravity Spray Product' }
        }
      ],
      sortIndex: 2
    }
  },
  {
    key: SetupTypeFacetOptionKey.VmauPressureSprayProduct,
    ...defaultFacetOption,
    valueId: 'a4d1ee7e-3821-4565-995a-7488ae7078a9',
    value: 'VmauPressureSprayProduct',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Vmau Pressure Spray Product' }
        }
      ],
      sortIndex: 3
    }
  }
];

export const setupTypeFacet: Facet<
  SetupTypeFacetOptionKey,
  FacetOption<SetupTypeFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.SetupType,
  attributeTypeCode: 'SetupType',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: setupTypeFacetOptions
};
