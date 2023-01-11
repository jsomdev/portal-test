import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum BushingAndORingMaterialFacetOptionKey {
  FC = 'FC',
  PE = 'PE',
  TE = 'TE',
  TK = 'TK',
  TV = 'TV'
}

export const bushingAndORingMaterialFacetOptions: FacetOption<BushingAndORingMaterialFacetOptionKey>[] =
  [
    {
      key: BushingAndORingMaterialFacetOptionKey.FC,
      ...defaultFacetOption,
      valueId: '812a0a79-9ec5-498c-a98f-a4386f643a23',
      value: 'FC',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'UHWMPEFDU and EPDMFDU (food contact)',
              de: 'UHWMPEFDU und EPDMFDU (food contact)'
            }
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: BushingAndORingMaterialFacetOptionKey.PE,
      ...defaultFacetOption,
      valueId: '96137cd8-f575-4fb5-ac13-1868073e3578',
      value: 'PE',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: {
              en: 'UHWMPE and EPDM (Teflon free)',
              de: 'UHWMPE und EPDM (Teflon frei)'
            }
          }
        ],
        sortIndex: 2
      }
    },
    {
      key: BushingAndORingMaterialFacetOptionKey.TE,
      ...defaultFacetOption,
      valueId: 'a67572df-a2dd-4212-a349-2c66f0aec89b',
      value: 'TE',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'CGTEF and EPDM', de: 'CGTEF und EPDM' }
          }
        ],
        sortIndex: 3
      }
    },
    {
      key: BushingAndORingMaterialFacetOptionKey.TK,
      ...defaultFacetOption,
      valueId: 'bbb14c99-e9b1-4ec9-8418-d0fa9fb56f63',
      value: 'TK',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'CGTEF and Kalrez', de: 'CGTEF und Kalrez' }
          }
        ],
        sortIndex: 4
      }
    },
    {
      key: BushingAndORingMaterialFacetOptionKey.TV,
      ...defaultFacetOption,
      valueId: '7f7a8abb-47cb-4fe5-87e2-f97fda3bb802',
      value: 'TV',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'CGTEF and Viton' }
          }
        ],
        sortIndex: 5
      }
    }
  ];

export const bushingAndORingMaterialFacet: Facet<
  BushingAndORingMaterialFacetOptionKey,
  FacetOption<BushingAndORingMaterialFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.BushingAndORingMaterial,
  attributeTypeCode: 'BushingAndORingMaterial',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: bushingAndORingMaterialFacetOptions
};
