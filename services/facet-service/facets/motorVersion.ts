import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum MotorVersionFacetOptionKey {
  AG = 'AG',
  AN = 'AN',
  AX_ = 'AX_',
  E_ = 'E_',
  EA = 'EA',
  EP = 'EP',
  ER = 'ER',
  ES = 'ES',
  ET = 'ET',
  EU = 'EU',
  EV = 'EV'
}

export const motorVersionFacetOptions: FacetOption<MotorVersionFacetOptionKey>[] =
  [
    {
      key: MotorVersionFacetOptionKey.AG,
      ...defaultFacetOption,
      valueId: 'a1854b63-4959-4343-a7d0-0f665ce8d57b',
      value: 'AG',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'Air motor, lubricated',
              de: 'Luftgetriebener Motor, geschmiert'
            }
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: MotorVersionFacetOptionKey.AN,
      ...defaultFacetOption,
      valueId: 'fb8a783e-a789-4451-84b8-5f5a64368502',
      value: 'AN',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'Air motor, non-lubricated',
              de: 'Luftmotor, nicht geschmiert'
            }
          }
        ],
        sortIndex: 2
      }
    },
    {
      key: MotorVersionFacetOptionKey.AX_,
      ...defaultFacetOption,
      valueId: 'cbb5b7f1-a094-4cec-b226-295f0c7e7d00',
      value: 'AX',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'Air motor, lubricated ATEX',
              de: 'Luftmotor, lubricated ATEX'
            }
          }
        ],
        sortIndex: 3
      }
    },
    {
      key: MotorVersionFacetOptionKey.E_,
      ...defaultFacetOption,
      valueId: '77989ff7-aefc-4421-9fa4-9daa2c48eff2',
      value: 'E',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Electric Motor, 120V, IP44, 60Hz' }
          }
        ],
        sortIndex: 4
      }
    },
    {
      key: MotorVersionFacetOptionKey.EA,
      ...defaultFacetOption,
      valueId: '30a76ba4-fcc6-486f-ab14-5f95e707f974',
      value: 'EA',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Electric Motor, 240V, IP44, 1PH, 60Hz' }
          }
        ],
        sortIndex: 5
      }
    },
    {
      key: MotorVersionFacetOptionKey.EP,
      ...defaultFacetOption,
      valueId: 'c3899bd8-e846-4ab7-aa85-29065f87345f',
      value: 'EP',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'Electric Motor, 120V, NEMA 4, 4x, 7 & 9 for Water Tight and EX Proof'
            }
          }
        ],
        sortIndex: 6
      }
    },
    {
      key: MotorVersionFacetOptionKey.ER,
      ...defaultFacetOption,
      valueId: '9fb62e56-931f-46ec-9718-a4972508694c',
      value: 'ER',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'Electric motor 230V~; IP56',
              de: 'Elektromotor 230V~; IP56'
            }
          }
        ],
        sortIndex: 7
      }
    },
    {
      key: MotorVersionFacetOptionKey.ES,
      ...defaultFacetOption,
      valueId: 'e88fd789-a0b9-43a9-b71d-a4dfc2669f45',
      value: 'ES',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'El. motor 230V/400V, IP65 50 Hz',
              de: 'El. motor 230V/400V, IP65 50 Hz'
            }
          }
        ],
        sortIndex: 8
      }
    },
    {
      key: MotorVersionFacetOptionKey.ET,
      ...defaultFacetOption,
      valueId: '3f56ef55-3b08-4887-95f9-ad76594c8b53',
      value: 'ET',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'El. motor 230V/400V, IP66 50 Hz ATEX',
              de: 'El. motor 230V/400V, IP66 50 Hz ATEX'
            }
          }
        ],
        sortIndex: 9
      }
    },
    {
      key: MotorVersionFacetOptionKey.EU,
      ...defaultFacetOption,
      valueId: 'f96587f4-21d0-46ad-8499-7ff76951d93d',
      value: 'EU',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'El. motor 230V/400V, IP65 60 Hz',
              de: 'El. motor 230V/400V, IP65 60 Hz'
            }
          }
        ],
        sortIndex: 10
      }
    },
    {
      key: MotorVersionFacetOptionKey.EV,
      ...defaultFacetOption,
      valueId: 'dd08a238-c322-4050-9c3b-609cfe6fe97c',
      value: 'EV',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'El. motor 230V/400V, IP66 60 Hz ATEX',
              de: 'El. motor 230V/400V, IP66 60 Hz ATEX'
            }
          }
        ],
        sortIndex: 11
      }
    }
  ];

export const motorVersionFacet: Facet<
  MotorVersionFacetOptionKey,
  FacetOption<MotorVersionFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.MotorVersion,
  attributeTypeCode: 'MotorVersion',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: motorVersionFacetOptions
};
