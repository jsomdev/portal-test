import { createContext, useContext } from 'react';

import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';
import { Audience } from '@services/portal-api/models/AudienceFlags';

export type FacetsState = {
  [facetKey: string]: Facet;
};

export interface FacetsPreFilters {
  searchQuery?: string | undefined;
  categoryId?: string | undefined;
  audience?: Audience | undefined;
}

export interface FacetsContextProps {
  mainFacets: FacetsState;
  operatingConditionsFacets: FacetsState;
  preFilters: FacetsPreFilters;
  storeFacet: (facet: Facet) => void;
  storeFacets: (facets: { [key: string]: Facet }) => void;
  getFacet: (key: FacetKey) => Facet | undefined;
  activeFacetKeys: FacetKey[];
  activeFacets: Facet[];
  combinedFiltersApiParameter: string;
  combinedOperatingConditionsApiParameter: string;
}

export const initialFacetsContextProps: FacetsContextProps = {
  mainFacets: {},
  operatingConditionsFacets: {},
  activeFacetKeys: [],
  activeFacets: [],
  preFilters: {
    categoryId: undefined,
    searchQuery: undefined,
    audience: undefined
  },
  combinedFiltersApiParameter: '',
  combinedOperatingConditionsApiParameter: '',

  getFacet: () => {
    throw new Error('Not implemented');
  },

  storeFacet: () => {
    throw new Error('Not implemented');
  },
  storeFacets: () => {
    throw new Error('Not implemented');
  }
};

export const FacetsContext = createContext<FacetsContextProps>(
  initialFacetsContextProps
);

export const useFacets = (): FacetsContextProps => useContext(FacetsContext);
