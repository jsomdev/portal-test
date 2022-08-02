import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';

import { FacetsState } from './facetsContext';
import {
  clearAllOptionsForFacet,
  clearAllOptionsForFacets
} from './facetsHelper';

export type FacetsAction =
  | {
      type: 'updateFacet';
      updatedFacet: Facet;
    }
  | {
      type: 'updateFacets';
      updatedFacets: { [key: string]: Facet };
    }
  | {
      type: 'toggleFacetExpand';
      facetKey: FacetKey;
    }
  | {
      type: 'clearAllFacetsActiveOptions';
    }
  | {
      type: 'clearFacetActiveOptions';
      facetKey: FacetKey;
    };
export function facetsReducer(
  state: FacetsState,
  action: FacetsAction
): FacetsState {
  switch (action.type) {
    case 'updateFacet':
      return {
        ...state,
        facets: {
          ...state.facets,
          [action.updatedFacet.key]: action.updatedFacet
        }
      };
    case 'updateFacets':
      return {
        ...state,
        facets: {
          ...state.facets,
          ...action.updatedFacets
        }
      };
    case 'clearAllFacetsActiveOptions':
      return {
        ...state,
        ...clearAllOptionsForFacets(state)
      };
    case 'clearFacetActiveOptions':
      return {
        ...state,
        facets: {
          ...state.facets,
          [action.facetKey]: clearAllOptionsForFacet(state[action.facetKey])
        }
      };

    default:
      return state;
  }
}
