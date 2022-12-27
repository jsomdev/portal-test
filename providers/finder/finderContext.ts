import { createContext, useContext } from 'react';

import { RangeFacetMatchType } from '@services/facet-service/facets/range-facets/rangeFacetHelper';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';
import { Range } from '@services/facet-service/models/facet/facetResult';
import {
  SystemOfMeasurement,
  UnitOfMeasurement
} from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import {
  FacetedSearchFacetResult,
  FacetedSearchProduct
} from '@services/portal-api/faceted-search/types';
import { ReactQueryStatus } from '@services/react-query/types';

interface FinderContextProps {
  visibleMainFacets: Facet[];
  visibleOperatingConditionsFacets: Record<string, Facet>;
  productCount: number | undefined;
  modelCount: number | undefined;
  searchQuery: string | undefined;
  products: FacetedSearchProduct[];
  facetedSearchStatus: ReactQueryStatus;
  isFetching: boolean;
  facetedSearchError: Error | undefined;
  toggleFacetOption: (facetKey: FacetKey, optionKey: string) => void;
  applyOperatingConditions: (operatingConditions: Facet[]) => void;
  clearFacetOptions: (facetKey: FacetKey) => void;
  clearSearch: () => void;
  clearTheoreticalFlow: () => void;
  clearAllFacets: () => void;
  getFacetResult: (facet: Facet) => FacetedSearchFacetResult[] | undefined;
  getOperatingConditionUnit: (
    operatingCondition: Facet,
    systemOfMeasurement: SystemOfMeasurement
  ) => UnitOfMeasurement | undefined;
  getOperatingConditionMatchType: (
    operatingCondition: Facet
  ) => RangeFacetMatchType | undefined;
  getOperatingConditionValue: (
    operatingCondition: Facet
  ) => Range | number | string | null;
  showFacetInPanel: (facet: Facet) => boolean;
  isFacetActive: (facetKey: FacetKey) => boolean;
}

const initialContext: FinderContextProps = {
  productCount: undefined,
  modelCount: undefined,
  products: [],
  searchQuery: undefined,
  visibleMainFacets: [],
  visibleOperatingConditionsFacets: {},
  facetedSearchError: undefined,
  facetedSearchStatus: 'idle',
  isFetching: false,
  toggleFacetOption: () => {
    throw Error('Not implemented');
  },
  isFacetActive: () => {
    throw Error('Not implemented');
  },
  applyOperatingConditions: () => {
    throw Error('Not implemented');
  },
  clearFacetOptions: () => {
    throw Error('Not implemented');
  },
  clearSearch: () => {
    throw Error('Not implemented');
  },
  clearTheoreticalFlow: () => {
    throw Error('Not implemented');
  },
  clearAllFacets: () => {
    throw Error('Not implemented');
  },
  getFacetResult: () => {
    throw Error('Not implemented');
  },
  showFacetInPanel: () => {
    throw Error('Not implemented');
  },
  getOperatingConditionMatchType: () => {
    throw Error('Not implemented');
  },
  getOperatingConditionUnit: () => {
    throw Error('Not implemented');
  },
  getOperatingConditionValue: () => {
    throw Error('Not implemented');
  }
};

export const FinderContext = createContext<FinderContextProps>(initialContext);

export const useFinder = (): FinderContextProps => useContext(FinderContext);
