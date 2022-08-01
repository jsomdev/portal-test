import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum SprayAngleCatalogCodeFacetOptionKey {
  Narrow = 'Narrow',
  Standard = 'Standard',
  Wide = 'Wide'
}

export const sprayAngleCatalogCodeFacetOptions: FacetOption<SprayAngleCatalogCodeFacetOptionKey>[] =
  [
    {
      key: SprayAngleCatalogCodeFacetOptionKey.Narrow,
      ...defaultFacetOption,
      valueId: '529e559e-f836-4746-9b98-5f1850e2b759',
      value: 'Narrow',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'Narrow' } }
        ],
        sortIndex: 1
      }
    },
    {
      key: SprayAngleCatalogCodeFacetOptionKey.Standard,
      ...defaultFacetOption,
      valueId: '93f82313-7bae-40fd-98f9-8077153c97b6',
      value: 'Standard',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'Standard' } }
        ],
        sortIndex: 2
      }
    },
    {
      key: SprayAngleCatalogCodeFacetOptionKey.Wide,
      ...defaultFacetOption,
      valueId: 'd3c0083f-9632-4506-bd67-1da282a9d5b0',
      value: 'Wide',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'Wide' } }
        ],
        sortIndex: 3
      }
    }
  ];

export const sprayAngleCatalogCodeFacet: Facet<
  SprayAngleCatalogCodeFacetOptionKey,
  FacetOption<SprayAngleCatalogCodeFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.SprayAngleCatalogCode,
  attributeTypeCode: 'SprayAngleCatalogCode',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: sprayAngleCatalogCodeFacetOptions
};
