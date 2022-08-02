import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum RelativeDropSizeGroupFacetOptionKey {
  _1000to5000Microns = '_1000to5000Microns',
  _100to500Microns = '_100to500Microns',
  _10to100Microns = '_10to100Microns',
  _500to1000Microns = '_500to1000Microns'
}

export const relativeDropSizeGroupFacetOptions: FacetOption<RelativeDropSizeGroupFacetOptionKey>[] =
  [
    {
      key: RelativeDropSizeGroupFacetOptionKey._1000to5000Microns,
      ...defaultFacetOption,
      valueId: '4a359ecc-8acb-4512-898f-bfecd9ffc9cc',
      value: '1000to5000Microns',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '{1000} - {5000} µm (Heavy Rain)' }
          }
        ],
        sortIndex: 1
      }
    },
    {
      key: RelativeDropSizeGroupFacetOptionKey._100to500Microns,
      ...defaultFacetOption,
      valueId: 'e038003d-f51d-4f91-8f09-e60cf5e7a69b',
      value: '100to500Microns',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '100 - 500 µm (Light Rain)' }
          }
        ],
        sortIndex: 2
      }
    },
    {
      key: RelativeDropSizeGroupFacetOptionKey._10to100Microns,
      ...defaultFacetOption,
      valueId: '98082f59-2cbf-439a-a0c5-b3f56aa8d71a',
      value: '10to100Microns',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '10 - 100 µm (Fog)' }
          }
        ],
        sortIndex: 3
      }
    },
    {
      key: RelativeDropSizeGroupFacetOptionKey._500to1000Microns,
      ...defaultFacetOption,
      valueId: 'c059f05f-6a87-4a82-9a62-1fd38b618377',
      value: '500to1000Microns',
      configuration: {
        displays: [
          {
            variation: 'Invariant',
            unitSymbol: '',
            value: { en: '500 - {1000} µm (Moderate Rain)' }
          }
        ],
        sortIndex: 4
      }
    }
  ];

export const relativeDropSizeGroupFacet: Facet<
  RelativeDropSizeGroupFacetOptionKey,
  FacetOption<RelativeDropSizeGroupFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.RelativeDropSizeGroup,
  attributeTypeCode: 'RelativeDropSizeGroup',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: relativeDropSizeGroupFacetOptions
};
