import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum ProductTypeFacetOptionKey {
  AirCap = 'AirCap',
  Body = 'Body',
  Disc = 'Disc',
  FluidCap = 'FluidCap',
  Nozzle = 'Nozzle',
  NozzleAssembly = 'NozzleAssembly',
  Setup = 'Setup',
  Tip = 'Tip'
}

export const productTypeFacetOptions: FacetOption<ProductTypeFacetOptionKey>[] =
  [
    {
      key: ProductTypeFacetOptionKey.AirCap,
      ...defaultFacetOption,
      valueId: '5d692122-3b49-48be-bc39-286a4a4922d5',
      value: 'AirCap',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Air Cap' }
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: ProductTypeFacetOptionKey.Body,
      ...defaultFacetOption,
      valueId: 'a111b0c0-b26f-465f-8b21-a9fbab1aac74',
      value: 'Body',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Body' }
          }
        ],
        sortIndex: 2
      }
    },
    {
      key: ProductTypeFacetOptionKey.Disc,
      ...defaultFacetOption,
      valueId: '9b97652c-fdb2-4526-b23c-8513873bec5a',
      value: 'Disc',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Disc' }
          }
        ],
        sortIndex: 3
      }
    },
    {
      key: ProductTypeFacetOptionKey.FluidCap,
      ...defaultFacetOption,
      valueId: 'ce45c67e-ce61-47e9-8e79-f8a7fee0e7cb',
      value: 'FluidCap',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Fluid Cap' }
          }
        ],
        sortIndex: 4
      }
    },
    {
      key: ProductTypeFacetOptionKey.Nozzle,
      ...defaultFacetOption,
      valueId: 'eb952350-6ba8-4cf5-b178-d737a7d2fa35',
      value: 'Nozzle',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Nozzle' }
          }
        ],
        sortIndex: 5
      }
    },
    {
      key: ProductTypeFacetOptionKey.NozzleAssembly,
      ...defaultFacetOption,
      valueId: 'fa2b75fd-f1d4-4e7a-9a5c-c9e42014d67f',
      value: 'NozzleAssembly',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Nozzle Assembly' }
          }
        ],
        sortIndex: 6
      }
    },
    {
      key: ProductTypeFacetOptionKey.Setup,
      ...defaultFacetOption,
      valueId: 'cbdfd12d-4dd6-4680-bbf5-4ce1447872c8',
      value: 'Setup',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Set-up' }
          }
        ],
        sortIndex: 7
      }
    },
    {
      key: ProductTypeFacetOptionKey.Tip,
      ...defaultFacetOption,
      valueId: '8f9da459-b6e4-4938-a6ea-20a29f81fb63',
      value: 'Tip',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Tip' }
          }
        ],
        sortIndex: 8
      }
    }
  ];

export const productTypeFacet: Facet<
  ProductTypeFacetOptionKey,
  FacetOption<ProductTypeFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.ProductType,
  attributeTypeCode: 'ProductType',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: productTypeFacetOptions
};
