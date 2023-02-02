import { ENVIRONMENT_VARIABLES } from '@utilities/environmentVariables';

import { FacetResult } from '../facet-service/models/facet/facetResult';
import { BaseResource } from './base/baseResource';
import { digitalHighWayFetch } from './base/fetch';
import {
  AutoCompleteOdataCollection,
  FacetedSearchOdataCollection
} from './faceted-search/types';
import { Audience } from './models/AudienceFlags';
import { ModelSeriesGrouping } from './models/ModelSeriesGrouping';
import { OdataCollection } from './o-data/oData';
import { ProductsResource } from './resources/ProductsResource';

/**
 * Function that calls the Products/GroupByFacets to retrieve the expected results for Facets and their FacetOptions.
 * @param encodedExternalFilters stringified and encoded version of the external filters @see ExternalFilter
 * @param productModelId guid to prefilter on model
 * @param productSeriesId guid to prefilter on series
 * @param searchQuery search 'search' parameter to prefilter results
 * @param encodedOperatingConditions stringified and encoded version of the operating conditions @see useOperatingConditions
 * @returns @see FacetResult that hold information about the Facets with their Options and their count (typeCode for reference)
 */
export const fetchFacetResults = async (
  encodedExternalFilters: string,
  productModelId?: string | undefined,
  productSeriesId?: string | undefined,
  searchQuery?: string | undefined,
  encodedOperatingConditions?: string | undefined
): Promise<FacetResult[]> => {
  const baseResource: BaseResource<FacetResult> = new BaseResource(
    `/Products/GroupByFacets(seriesId=${productSeriesId || 'null'},modelId=${
      productModelId || 'null'
    },operatingConditions=@operatingConditions,filters=@filters${
      searchQuery
        ? `,query='${BaseResource.escapeSearchQuery(searchQuery) || ''}'`
        : ',query=null'
    })${
      encodedExternalFilters.length > 0
        ? `?@filters=${encodedExternalFilters}&@operatingConditions=${
            encodedOperatingConditions || 'null'
          }`
        : `?@filters=${encodeURIComponent(
            JSON.stringify([])
          )}&@operatingConditions=${encodedOperatingConditions || 'null'}`
    }`
  );
  const data: OdataCollection<FacetResult> = await baseResource.getEntities({});
  return data.value;
};

const illegalCharacterSetsEncodedSearchQuery = ['%25', '%09'];

function isEncodedSearchQueryValid(encodedQuery: string): boolean {
  let isValid: boolean = true;
  illegalCharacterSetsEncodedSearchQuery.forEach(illegalCharSet => {
    if (encodedQuery.includes(illegalCharSet)) {
      isValid = false;
    }
  });
  return isValid;
}

export async function fetchCountByModelSeries(
  filterParams: string,
  operatingConditions?: string,
  productModelId?: string,
  productSeriesId?: string,
  searchQuery?: string
): Promise<ModelSeriesGrouping[]> {
  try {
    const serviceRootUrl: string = ENVIRONMENT_VARIABLES.portalApi.baseUrl;
    const resourcePath: string = `/Products/CountByModelSeries(productModelId=${
      productModelId || 'null'
    },productSeriesId=${
      productSeriesId || 'null'
    },operatingConditions=@operatingConditions,filters=@filters${
      searchQuery ? `,query='${encodeURIComponent(searchQuery)}'` : ''
    })`;
    const data: OdataCollection<ModelSeriesGrouping> =
      (await digitalHighWayFetch<OdataCollection<ModelSeriesGrouping>>(
        serviceRootUrl,
        resourcePath,
        `?@filters=${filterParams}&@operatingConditions=${
          operatingConditions || 'null'
        }`,
        {}
      )) as OdataCollection<ModelSeriesGrouping>;
    return data.value;
  } catch (error) {
    if (!isEncodedSearchQueryValid(encodeURIComponent(searchQuery || ''))) {
      return [];
    } else {
      throw error;
    }
  }
}

export async function fetchFacetedSearchResults(
  encodedExternalFilters: string,
  encodedOperatingConditions: string,
  encodedSearchQuery: string | undefined,
  top: number,
  skip: number
): Promise<FacetedSearchOdataCollection> {
  const productsResource: ProductsResource = new ProductsResource();

  const data: FacetedSearchOdataCollection =
    await productsResource.facetedSearch(
      top,
      skip,
      `@filters=${encodedExternalFilters}`,
      encodedSearchQuery,
      encodedOperatingConditions
    );

  return data;
}

export async function fetchAutoCompleteSearch(
  encodedSearchQuery: string | undefined,
  audience: Audience
): Promise<AutoCompleteOdataCollection | null> {
  const productsResource: ProductsResource = new ProductsResource();

  if (!encodedSearchQuery) {
    return null;
  }
  const data: AutoCompleteOdataCollection = await productsResource.autoComplete(
    encodedSearchQuery,
    audience
  );
  return data;
}
