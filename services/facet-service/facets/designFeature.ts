import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum DesignFeatureFacetOptionKey {
  ExtraLongTrigger = 'ExtraLongTrigger',
  HasCleanoutNeedle = 'HasCleanoutNeedle',
  HasGuideVane = 'HasGuideVane',
  HasShutoffNeedle = 'HasShutoffNeedle',
  Integralstrainer = 'Integralstrainer',
  IsCast = 'IsCast',
  IsCleanInPlace = 'IsCleanInPlace',
  IsRecirculating = 'IsRecirculating',
  IsSelfCleaning = 'IsSelfCleaning',
  IsVaneless = 'IsVaneless',
  Onepiecebody = 'Onepiecebody',
  Onepiececasttype = 'Onepiececasttype',
  Onepiecedesign = 'Onepiecedesign',
  Removablecapandvane = 'Removablecapandvane',
  Swivel = 'Swivel',
  Twopiececasttype = 'Twopiececasttype',
  Twopiecedesign = 'Twopiecedesign',
  WallMount = 'WallMount'
}

export const designFeatureFacetOptions: FacetOption<DesignFeatureFacetOptionKey>[] =
  [
    {
      key: DesignFeatureFacetOptionKey.ExtraLongTrigger,
      ...defaultFacetOption,
      valueId: '18f4356c-515c-43ed-88bc-eeb06ba22701',
      value: 'ExtraLongTrigger',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Extra long trigger' }
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: DesignFeatureFacetOptionKey.HasCleanoutNeedle,
      ...defaultFacetOption,
      valueId: '49a91a3d-a8ea-40a7-b5e1-9de857194f0d',
      value: 'HasCleanoutNeedle',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Has cleanout needle' }
          }
        ],
        sortIndex: 2
      }
    },
    {
      key: DesignFeatureFacetOptionKey.HasGuideVane,
      ...defaultFacetOption,
      valueId: '2b6f2e04-ff95-48b1-a465-29f78675896c',
      value: 'HasGuideVane',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Has guide vane' }
          }
        ],
        sortIndex: 3
      }
    },
    {
      key: DesignFeatureFacetOptionKey.HasShutoffNeedle,
      ...defaultFacetOption,
      valueId: 'b7bba6ec-2440-413e-96e9-60e2183667de',
      value: 'HasShutoffNeedle',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Has shutoff needle' }
          }
        ],
        sortIndex: 4
      }
    },
    {
      key: DesignFeatureFacetOptionKey.Integralstrainer,
      ...defaultFacetOption,
      valueId: '09611af3-e131-463d-b24b-94fa21b85190',
      value: 'Integralstrainer',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Integral strainer' }
          }
        ],
        sortIndex: 5
      }
    },
    {
      key: DesignFeatureFacetOptionKey.IsCast,
      ...defaultFacetOption,
      valueId: 'be62846f-10fd-4e33-9382-afd6df7d147d',
      value: 'IsCast',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Is cast' }
          }
        ],
        sortIndex: 6
      }
    },
    {
      key: DesignFeatureFacetOptionKey.IsCleanInPlace,
      ...defaultFacetOption,
      valueId: '11381827-769f-428b-accb-c8fa41b27aa2',
      value: 'IsCleanInPlace',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Is clean in place' }
          }
        ],
        sortIndex: 7
      }
    },
    {
      key: DesignFeatureFacetOptionKey.IsRecirculating,
      ...defaultFacetOption,
      valueId: 'ad588e8a-a7d7-47ab-b668-a914ebdfbd57',
      value: 'IsRecirculating',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Is recirculating' }
          }
        ],
        sortIndex: 8
      }
    },
    {
      key: DesignFeatureFacetOptionKey.IsSelfCleaning,
      ...defaultFacetOption,
      valueId: '0228ce4b-80a5-4118-9a3b-746087ff0cac',
      value: 'IsSelfCleaning',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Is self cleaning' }
          }
        ],
        sortIndex: 9
      }
    },
    {
      key: DesignFeatureFacetOptionKey.IsVaneless,
      ...defaultFacetOption,
      valueId: 'df7a048b-fe56-4e6a-a5c7-95f4e861d775',
      value: 'IsVaneless',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Is vaneless' }
          }
        ],
        sortIndex: 10
      }
    },
    {
      key: DesignFeatureFacetOptionKey.Onepiecebody,
      ...defaultFacetOption,
      valueId: 'f12a1b64-d5c1-4d77-a66e-2c28e806d1af',
      value: 'One-piecebody',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'One-piece body' }
          }
        ],
        sortIndex: 11
      }
    },
    {
      key: DesignFeatureFacetOptionKey.Onepiececasttype,
      ...defaultFacetOption,
      valueId: '0b1153e8-9e2b-48dd-a31b-74fb43e92805',
      value: 'One-piececasttype',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'One-piece cast type' }
          }
        ],
        sortIndex: 12
      }
    },
    {
      key: DesignFeatureFacetOptionKey.Onepiecedesign,
      ...defaultFacetOption,
      valueId: '80540508-967d-4eb4-90e8-9ae8783f8c8d',
      value: 'One-piecedesign',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'One-piece design' }
          }
        ],
        sortIndex: 13
      }
    },
    {
      key: DesignFeatureFacetOptionKey.Removablecapandvane,
      ...defaultFacetOption,
      valueId: '8b87ea08-0b97-4cc7-be2d-198c4e71d740',
      value: 'Removablecapandvane',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Removable cap and vane' }
          }
        ],
        sortIndex: 14
      }
    },
    {
      key: DesignFeatureFacetOptionKey.Swivel,
      ...defaultFacetOption,
      valueId: '7cb84fc8-dbd0-42ac-bb8a-3cb5b0bbd413',
      value: 'Swivel',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Swivel' }
          }
        ],
        sortIndex: 15
      }
    },
    {
      key: DesignFeatureFacetOptionKey.Twopiececasttype,
      ...defaultFacetOption,
      valueId: 'b85aa602-95d4-4449-8cb5-ddcc281f001f',
      value: 'Two-piececast-type',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Two-piece cast-type' }
          }
        ],
        sortIndex: 16
      }
    },
    {
      key: DesignFeatureFacetOptionKey.Twopiecedesign,
      ...defaultFacetOption,
      valueId: 'dce195ac-400d-428b-81be-6c9663d63761',
      value: 'Two-piecedesign',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Two-piece design' }
          }
        ],
        sortIndex: 17
      }
    },
    {
      key: DesignFeatureFacetOptionKey.WallMount,
      ...defaultFacetOption,
      valueId: '3bcf7da4-eeb7-4e07-929d-0d9cc5b0eb8a',
      value: 'WallMount',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Wall mount' }
          }
        ],
        sortIndex: 18
      }
    }
  ];

export const designFeatureFacet: Facet<
  DesignFeatureFacetOptionKey,
  FacetOption<DesignFeatureFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.DesignFeature,
  attributeTypeCode: 'DesignFeature',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: designFeatureFacetOptions
};
