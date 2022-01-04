import { FacetOption } from '../../models/facet/facetOption';
import { RangeFacetOptionKey } from '../../models/range-facets/rangeFacetOptionKey';
import { defaultFacetOption } from '../defaultFacetOption';
import { RangeFacetMatchType } from './rangeFacetHelper';

export const rangeFacetOptions: (
  defaultMatchType?: RangeFacetMatchType
) => FacetOption<RangeFacetOptionKey>[] = (
  defaultMatchType?: RangeFacetMatchType
) => [
  // Important: further implementation expects Minimum to be index [0]
  {
    key: RangeFacetOptionKey.Minimum,
    ...defaultFacetOption,
    valueId: '',
    value: null,
    isActive: false,
    configuration: {
      displays: [{ value: 'Minimum', variation: 'Invariant' }]
    }
  },
  // Important: further implementation expects Minimum to be index [1]
  {
    key: RangeFacetOptionKey.Maximum,
    ...defaultFacetOption,
    valueId: '',
    value: null,
    isActive: false,
    configuration: {
      displays: [{ value: 'Maximum', variation: 'Invariant' }]
    }
  },
  {
    key: RangeFacetOptionKey.Exact,
    ...defaultFacetOption,
    valueId: '',
    value: null,
    isActive: false,
    configuration: {
      displays: [{ value: 'Exact', variation: 'Invariant' }]
    }
  },
  {
    key: RangeFacetOptionKey.Nearby,
    ...defaultFacetOption,
    valueId: '',
    value: null,
    isActive: false,
    configuration: {
      displays: [{ value: 'Nearby', variation: 'Invariant' }]
    }
  },

  {
    key: RangeFacetOptionKey.Unit,
    ...defaultFacetOption,
    valueId: '',
    value: null,
    isActive: false,
    configuration: {
      displays: [{ value: 'Unit', variation: 'Invariant' }]
    }
  },
  {
    key: RangeFacetOptionKey.MatchType,
    ...defaultFacetOption,
    valueId: '',
    value: defaultMatchType || null,
    isActive: !!defaultMatchType,
    configuration: {
      displays: [{ value: 'Match Type', variation: 'Invariant' }]
    }
  }
];
