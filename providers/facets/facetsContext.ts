import { createContext } from 'react';

import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';

import { FacetsPreFilters } from './models';

export type FacetsState = {
  [facetKey: string]: Facet;
};

export interface FacetsContextProps {
  mainFacets: FacetsState;
  sprayFinderFacets: FacetsState;
  preFilters: FacetsPreFilters;
  updateFacet: (facet: Facet) => void;
  updateFacets: (facets: { [key: string]: Facet }) => void;
  getFacet: (key: FacetKey) => Facet | undefined;
  activeFacetKeys: FacetKey[];
  activeFacets: Facet[];
  clearAllFacetsActiveOptions: () => void;
  clearFacetActiveOptions: (facetKey: FacetKey) => void;
  combinedMainFiltersParameter: string;
  combinedSprayFinderFiltersParameter: string;
}

export const initialFacetsContextProps: FacetsContextProps = {
  mainFacets: {},
  sprayFinderFacets: {},
  activeFacetKeys: [],
  activeFacets: [],
  preFilters: {
    categoryId: undefined,
    searchQuery: undefined
  },
  combinedMainFiltersParameter: '',
  combinedSprayFinderFiltersParameter: '',
  clearFacetActiveOptions: () => {
    throw new Error('Not implemented');
  },
  getFacet: () => {
    throw new Error('Not implemented');
  },
  clearAllFacetsActiveOptions: () => {
    throw new Error('Not implemented');
  },

  updateFacet: () => {
    throw new Error('Not implemented');
  },
  updateFacets: () => {
    throw new Error('Not implemented');
  }
};

export const FacetsContext = createContext<FacetsContextProps>(
  initialFacetsContextProps
);
