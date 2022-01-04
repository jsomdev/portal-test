import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum ConnectionGenderFacetOptionKey {
  Female = 'Female',
  Male = 'Male'
}

export const connectionGenderFacetOptions: FacetOption<ConnectionGenderFacetOptionKey>[] =
  [
    {
      key: ConnectionGenderFacetOptionKey.Female,
      ...defaultFacetOption,
      valueId: '3e8fdfc2-5631-493a-91f4-32b931ab3738',
      value: 'Female',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'Female' } }
        ],
        sortIndex: 1
      }
    },
    {
      key: ConnectionGenderFacetOptionKey.Male,
      ...defaultFacetOption,
      valueId: '839a8ef5-08dc-4fe5-9c62-f88d11960ad5',
      value: 'Male',
      configuration: {
        displays: [
          { variation: 'Invariant', unitSymbol: '', value: { en: 'Male' } }
        ],
        sortIndex: 2
      }
    }
  ];

export const connectionGenderFacet: Facet<
  ConnectionGenderFacetOptionKey,
  FacetOption<ConnectionGenderFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.ConnectionGender,
  attributeTypeCode: 'ConnectionGender',
  configuration: {
    category: FacetCategory.Default,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: connectionGenderFacetOptions
};
