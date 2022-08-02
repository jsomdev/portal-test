import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum IsRecirculatingFacetOptionKey {
  false = 'false',
  true = 'true'
}

export const isRecirculatingFacetOptions: FacetOption<IsRecirculatingFacetOptionKey>[] =
  [
    {
      key: IsRecirculatingFacetOptionKey.false,
      ...defaultFacetOption,
      valueId: '',
      value: 'false',
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: '', value: 'No' }],
        sortIndex: 2
      }
    },
    {
      key: IsRecirculatingFacetOptionKey.true,
      ...defaultFacetOption,
      valueId: '',
      value: 'true',
      configuration: {
        displays: [{ variation: 'Invariant', unitSymbol: '', value: 'Yes' }],
        sortIndex: 1
      }
    }
  ];

export const isRecirculatingFacet: Facet<
  IsRecirculatingFacetOptionKey,
  FacetOption<IsRecirculatingFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.IsRecirculating,
  attributeTypeCode: 'IsRecirculating',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.SingleSelect,
    isFacetingEnabled: true
  },
  options: isRecirculatingFacetOptions
};
