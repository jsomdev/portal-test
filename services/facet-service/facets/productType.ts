import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum ProductTypeFacetOptionKey {
  Body = 'Body',
  Disc = 'Disc',
  Nozzle = 'Nozzle',
  NozzleAssembly = 'NozzleAssembly',
  Tip = 'Tip'
}

export const productTypeFacetOptions: FacetOption<ProductTypeFacetOptionKey>[] =
  [
    {
      key: ProductTypeFacetOptionKey.Body,
      ...defaultFacetOption,
      valueId: 'a111b0c0-b26f-465f-8b21-a9fbab1aac74',
      value: 'Body',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'Body' } }
        ],
        sortIndex: 1
      }
    },
    {
      key: ProductTypeFacetOptionKey.Disc,
      ...defaultFacetOption,
      valueId: '9b97652c-fdb2-4526-b23c-8513873bec5a',
      value: 'Disc',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'Disc' } }
        ],
        sortIndex: 2
      }
    },
    {
      key: ProductTypeFacetOptionKey.Nozzle,
      ...defaultFacetOption,
      valueId: 'eb952350-6ba8-4cf5-b178-d737a7d2fa35',
      value: 'Nozzle',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'Nozzle' } }
        ],
        sortIndex: 3
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
        sortIndex: 4
      }
    },
    {
      key: ProductTypeFacetOptionKey.Tip,
      ...defaultFacetOption,
      valueId: '8f9da459-b6e4-4938-a6ea-20a29f81fb63',
      value: 'Tip',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'Tip' } }
        ],
        sortIndex: 5
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
