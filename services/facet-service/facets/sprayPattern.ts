import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum SprayPatternFacetOptionKey {
  FineSpray = 'FineSpray',
  FlatFan = 'FlatFan',
  FullCone = 'FullCone',
  HollowCone = 'HollowCone',
  RoundSpray = 'RoundSpray',
  SolidStream = 'SolidStream',
  SquareSpray = 'SquareSpray'
}

export const sprayPatternFacetOptions: FacetOption<SprayPatternFacetOptionKey>[] =
  [
    {
      key: SprayPatternFacetOptionKey.FineSpray,
      ...defaultFacetOption,
      valueId: '3b5d7a77-3e97-4e55-a7f7-1d95745bed94',
      value: 'FineSpray',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Fine Spray' }
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: SprayPatternFacetOptionKey.FlatFan,
      ...defaultFacetOption,
      valueId: '2a72be52-82b9-4d01-a82b-a7dd655596a6',
      value: 'FlatFan',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'Flat Fan' } }
        ],
        sortIndex: 2
      }
    },
    {
      key: SprayPatternFacetOptionKey.FullCone,
      ...defaultFacetOption,
      valueId: '74590920-d263-4ebf-bc82-39ed03f6e5ed',
      value: 'FullCone',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'Full Cone' } }
        ],
        sortIndex: 3
      }
    },
    {
      key: SprayPatternFacetOptionKey.HollowCone,
      ...defaultFacetOption,
      valueId: '6da9c8dc-36ea-4d3e-89d6-63f3ee1b426a',
      value: 'HollowCone',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Hollow Cone' }
          }
        ],
        sortIndex: 4
      }
    },
    {
      key: SprayPatternFacetOptionKey.RoundSpray,
      ...defaultFacetOption,
      valueId: '1237556b-e465-41bb-8627-55fd2d7b543c',
      value: 'RoundSpray',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Round Spray' }
          }
        ],
        sortIndex: 5
      }
    },
    {
      key: SprayPatternFacetOptionKey.SolidStream,
      ...defaultFacetOption,
      valueId: '3c26ba69-0e11-490f-a6d7-e24d978d01aa',
      value: 'SolidStream',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Solid Stream' }
          }
        ],
        sortIndex: 6
      }
    },
    {
      key: SprayPatternFacetOptionKey.SquareSpray,
      ...defaultFacetOption,
      valueId: '5db2bbf7-f105-45d7-95ac-3e9e19931449',
      value: 'SquareSpray',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Square Spray' }
          }
        ],
        sortIndex: 7
      }
    }
  ];

export const sprayPatternFacet: Facet<
  SprayPatternFacetOptionKey,
  FacetOption<SprayPatternFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.SprayPattern,
  attributeTypeCode: 'SprayPattern',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: sprayPatternFacetOptions
};
