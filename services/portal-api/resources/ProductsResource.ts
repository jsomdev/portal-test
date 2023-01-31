import { BaseResource } from '../base/baseResource';
import { ODataQueryHelper } from '../base/queryHelper';
import {
  AutoCompleteOdataCollection,
  FacetedSearchOdataCollection
} from '../faceted-search/types';
import { FlaggedEnum } from '../flaggedEnum';
import { Audience, AudienceFlags } from '../models/AudienceFlags';
import { Product } from '../models/Product';
import { OdataCollection } from '../o-data/oData';
import { QueryOptions } from '../o-data/queryOptions';

export class ProductsResource extends BaseResource<Product> {
  constructor() {
    super('/products');
  }

  async autoComplete(
    encodedQuery: string,
    audience: Audience
  ): Promise<AutoCompleteOdataCollection> {
    const resourcePath = this.getAutoCompleteResourcePath(
      encodedQuery,
      audience
    );

    return this.fetch(resourcePath, '', {});
  }

  async facetedSearch(
    top: number,
    skip: number = 0,
    urlEncodedFilters?: string | undefined,
    encodedQuery?: string | undefined,
    urlEncodedOperatingConditions?: string | undefined
  ): Promise<FacetedSearchOdataCollection> {
    const queryOptions: Partial<QueryOptions> = {
      top,
      skip,
      includeCount: true
    };
    const queryOptionsString: string =
      ODataQueryHelper.formatQueryOptionsToOdataQueryOptions(queryOptions);
    const combinedQueryOptionsString: string = queryOptionsString
      .concat(queryOptionsString ? '&' : '?')
      .concat(urlEncodedFilters ? `${urlEncodedFilters}` : '')
      .concat(
        `&@operatingConditions=${urlEncodedOperatingConditions || 'null'}`
      )
      .concat(
        encodedQuery
          ? `&@query='${ProductsResource.escapeSearchQuery(encodedQuery)}'`
          : ''
      );
    const resourcePath = this.getFacetedSearchResourcePath(encodedQuery);

    return this.fetch(resourcePath, combinedQueryOptionsString, {});
  }
  async find(
    queryOptions: Partial<QueryOptions>,
    // expected format: @filters=<urlEncodedValue>
    urlEncodedFilters?: string | undefined,
    // exported format (1/4): 1%2F4
    urlEncodedQuery?: string | undefined,
    urlEncodedOperatingConditions?: string | undefined
  ): Promise<OdataCollection<Product>> {
    // eg: ?$select=id,number&$top=10&@filters=<urlEncodedValue>
    const queryOptionsString: string =
      ODataQueryHelper.formatQueryOptionsToOdataQueryOptions(queryOptions)
        .concat(urlEncodedFilters ? `&${urlEncodedFilters}` : '')
        .concat(
          `&@operatingConditions=${urlEncodedOperatingConditions || 'null'}`
        );
    // eg: Products/Find(filters@filters,query='1%2F4')
    const resourcePath: string = this.getFindResourcePath(urlEncodedQuery);
    return this.fetch(resourcePath, queryOptionsString, {}) as Promise<
      OdataCollection<Product>
    >;
  }
  private getFacetedSearchResourcePath(urlEncodedQuery?: string) {
    return `${this.getResourcePath()}/facetedSearch${
      urlEncodedQuery
        ? `(query=@query,operatingConditions=@operatingConditions,filters=@filters)`
        : '(query=null,operatingConditions=@operatingConditions,filters=@filters)'
    }`;
  }
  private getAutoCompleteResourcePath(
    urlEncodedQuery: string,
    audience: Audience
  ) {
    const audienceFlag = FlaggedEnum.toString<Audience>(Audience, audience);
    return `${this.getResourcePath()}/autoComplete(query=@query,audience=@audience)?@query='${ProductsResource.escapeSearchQuery(
      urlEncodedQuery
    )}'&@audience='${audienceFlag}'`;
  }

  private getFindResourcePath(urlEncodedQuery?: string): string {
    return `${this.getResourcePath()}/find${
      urlEncodedQuery
        ? `(operatingConditions=@operatingConditions,filters=@filters,query='${ProductsResource.escapeSearchQuery(
            urlEncodedQuery
          )}')`
        : '(operatingConditions=@operatingConditions,filters=@filters)'
    }`;
  }
}
