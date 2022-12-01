import { ENVIRONMENT_VARIABLES } from '@utilities/environmentVariables';

import { FacetResult } from '../facet-service/models/facet/facetResult';
import { BaseResource } from './base/baseResource';
import { digitalHighWayFetch } from './base/fetch';
import {
  AutoCompleteOdataCollection,
  FacetedSearchOdataCollection
} from './faceted-search/types';
import { FlaggedEnum } from './flaggedEnum';
import { AttributeSettings } from './models/AttributeSettingsFlags';
import { ModelSeriesGrouping } from './models/ModelSeriesGrouping';
import { Product } from './models/Product';
import { OdataCollection, OdataEntity } from './o-data/oData';
import { QueryOptions } from './o-data/queryOptions';
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

/**
 * Function that calls the /Products/Find function to retrieve the data expected to be displayed on the ProductListView
 * @param encodedExternalFilters stringified and encoded version of the external filters @see ExternalFilter
 * @param encodedOperatingConditions stringified and encoded version of the operating conditions @see useOperatingConditions
 * @param searchQuery search 'search' parameter to prefilter results
 * @param productModelId guid to prefilter on model
 * @param productSeriesId guid to prefilter on series
 * @param top amount of products to fetch (pagination)
 * @param skip amount of products to skip (pagination)
 * @returns a collection of Products (Designs)
 */
export const fetchProductDataForListView = async (
  encodedExternalFilters: string,
  encodedOperatingConditions: string,
  searchQuery: string,
  productModelId: string | undefined,
  productSeriesId: string | undefined,
  top: number,
  skip: number
): Promise<OdataCollection<Product>> => {
  let parentQuery: string | null = null;
  if (productModelId) {
    parentQuery = `modelId eq ${productModelId}`;
  } else if (productSeriesId) {
    parentQuery = `model/seriesId eq ${productSeriesId}`;
  }
  const productsResource: ProductsResource = new ProductsResource();

  const queryOptions: Partial<QueryOptions> = {
    selectQuery: 'id,name,number',
    filterQuery: parentQuery || undefined,
    top,
    skip,
    expandQuery: `image($select=url),attributes($orderby=sortIndex asc,typeCode asc;$select=id,typeCode,displays,settings;$filter=settings has SSCo.DigitalHighway.Portal.Data.Enumerations.AttributeSettings'${FlaggedEnum.toString(
      AttributeSettings,
      AttributeSettings.DisplayOnProductCharacteristics
    )}')`,
    includeCount: true
  };

  const data: OdataCollection<Product> = await productsResource.find(
    queryOptions,
    `@filters=${encodedExternalFilters}`,
    searchQuery,
    encodedOperatingConditions
  );

  return data;
};

/**
 * Function that fetches a Product with all information to be displayed on a single ListItem expected to be displayed on the Expanded Design on the Grouped Table View
 * @param id guid of the product
 * @returns a single Product
 */
export const fetchProductDataForProductListItem = async (
  id: string
): Promise<OdataEntity & Product> => {
  const productsResource: ProductsResource = new ProductsResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: 'id,name,number',
    expandQuery: `image($select=url),attributes($orderby=sortIndex asc,typeCode asc;$select=id,typeCode,value,displays,settings;$filter=settings has SSCo.DigitalHighway.Portal.Data.Enumerations.AttributeSettings'${FlaggedEnum.toString(
      AttributeSettings,
      AttributeSettings.DisplayOnProductCharacteristics
    )}')`
  };
  const data = await productsResource.getEntity(id, queryOptions);
  return data;
};
/**
 * Function that calls the /Products/Find function to retrieve the data expected to be displayed on the ProductListView
 * @param encodedExternalFilters stringified and encoded version of the external filters @see ExternalFilter
 * @param encodedOperatingConditions stringified and encoded version of the operating conditions @see useOperatingConditions
 * @param searchQuery search 'search' parameter to prefilter results
 * @param productModelId guid to prefilter on model
 * @param productSeriesId guid to prefilter on series
 * @param top amount of products to fetch (pagination)
 * @param skip amount of products to skip (pagination)
 * @returns a collection of Products (Designs)
 */
export const fetchProductDataForGridView = async (
  encodedExternalFilters: string,
  encodedOperatingConditions: string,
  searchQuery: string,
  productModelId: string | undefined,
  productSeriesId: string | undefined,
  top: number,
  skip: number
): Promise<OdataCollection<Product>> => {
  let parentQuery: string | null = null;
  if (productModelId) {
    parentQuery = `modelId eq ${productModelId}`;
  } else if (productSeriesId) {
    parentQuery = `model/seriesId eq ${productSeriesId}`;
  }
  const productsResource: ProductsResource = new ProductsResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: 'id,name,number',
    expandQuery: 'image($select=url)',
    filterQuery: parentQuery || undefined,
    top,
    skip,
    includeCount: true
  };

  const data: OdataCollection<Product> = await productsResource.find(
    queryOptions,
    `@filters=${encodedExternalFilters}`,
    searchQuery,
    encodedOperatingConditions
  );

  return data;
};
/**
 * Function that calls the /Products/Find function to retrieve the data expected to be displayed on the Expanded model of the Grouped Table View
 * @param encodedExternalFilters stringified and encoded version of the external filters @see ExternalFilter
 * @param encodedOperatingConditions stringified and encoded version of the operating conditions @see useOperatingConditions
 * @param searchQuery search 'search' parameter to prefilter results
 * @param productModelId guid of the model to get the products for.
 * @param top amount of products to fetch (pagination)
 * @param skip amount of products to skip (pagination)
 * @returns a collection of Products (Designs)
 */
export const fetchProductDataForGroupedTableView = async (
  encodedExternalFilters: string,
  encodedOperatingConditions: string,
  searchQuery: string,
  productModelId: string,
  top: number,
  skip: number
): Promise<OdataCollection<Product>> => {
  const filterQuery: string = `modelId eq ${productModelId}`;
  const productsResource: ProductsResource = new ProductsResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: 'id,number',
    expandQuery: `attributes($orderby=sortIndex asc,typeCode asc;$select=id,typeCode,name,value,displays,settings;$filter=settings has SSCo.DigitalHighway.Portal.Data.Enumerations.AttributeSettings'${FlaggedEnum.toString(
      AttributeSettings,
      AttributeSettings.DisplayOnProductTableRow
    )}')`,
    filterQuery,
    top,
    skip,
    orderbyQuery: 'number asc',
    includeCount: true
  };

  const data: OdataCollection<Product> = await productsResource.find(
    queryOptions,
    `@filters=${encodedExternalFilters}`,
    searchQuery,
    encodedOperatingConditions
  );

  return data;
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
  encodedSearchQuery: string | undefined
): Promise<AutoCompleteOdataCollection | null> {
  const productsResource: ProductsResource = new ProductsResource();

  if (!encodedSearchQuery) {
    return null;
  }
  const data: AutoCompleteOdataCollection = await productsResource.autoComplete(
    encodedSearchQuery
  );
  return data;
}
