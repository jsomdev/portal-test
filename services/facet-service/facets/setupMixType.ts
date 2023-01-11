import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum SetupMixTypeFacetOptionKey {
  ExternalMix = 'ExternalMix',
  InternalMix = 'InternalMix'
}

export const setupMixTypeFacetOptions: FacetOption<SetupMixTypeFacetOptionKey>[] =
  [
    {
      key: SetupMixTypeFacetOptionKey.ExternalMix,
      ...defaultFacetOption,
      valueId: 'de113887-9a51-4931-a90d-c47d35cd4576',
      value: 'ExternalMix',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'External Mix' }
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: SetupMixTypeFacetOptionKey.InternalMix,
      ...defaultFacetOption,
      valueId: '1f3af9d0-2bd4-4f34-a28f-4fdc39ab8464',
      value: 'InternalMix',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: 'Internal Mix' }
          }
        ],
        sortIndex: 2
      }
    }
  ];

export const setupMixTypeFacet: Facet<
  SetupMixTypeFacetOptionKey,
  FacetOption<SetupMixTypeFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.SetupMixType,
  attributeTypeCode: 'SetupMixType',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: setupMixTypeFacetOptions
};
