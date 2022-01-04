import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum DesignFeatureFacetOptionKey {
  Integralstrainer = 'Integralstrainer',
  Nointegralstrainer = 'Nointegralstrainer',
  Onepiecebody = 'Onepiecebody',
  Onepiececasttype = 'Onepiececasttype',
  Onepiecedesign = 'Onepiecedesign',
  Removablecapandvane = 'Removablecapandvane',
  Twopiececasttype = 'Twopiececasttype',
  Twopiecedesign = 'Twopiecedesign'
}

export const designFeatureFacetOptions: FacetOption<DesignFeatureFacetOptionKey>[] =
  [
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
        sortIndex: 1
      }
    },
    {
      key: DesignFeatureFacetOptionKey.Nointegralstrainer,
      ...defaultFacetOption,
      valueId: '02385f5d-b1ab-4fcc-b3e0-c4d2a23632cc',
      value: 'Nointegralstrainer',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'No integral strainer' }
          }
        ],
        sortIndex: 2
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
        sortIndex: 3
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
        sortIndex: 4
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
        sortIndex: 5
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
        sortIndex: 6
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
        sortIndex: 7
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
        sortIndex: 8
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
    category: FacetCategory.Default,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: designFeatureFacetOptions
};
