import { Facet } from '@services/facet-service/models/facet/facet';

import { FacetsState } from './facetsContext';

export type FacetsAction =
  | {
      type: 'storeFacet';
      facet: Facet;
    }
  | {
      type: 'storeFacets';
      facets: { [key: string]: Facet };
    };

export function facetsReducer(
  state: FacetsState,
  action: FacetsAction
): FacetsState {
  switch (action.type) {
    case 'storeFacet':
      return {
        ...state,
        [action.facet.key]: action.facet
      };
    case 'storeFacets':
      return {
        ...state,
        ...action.facets
      };

    default:
      return state;
  }
}
