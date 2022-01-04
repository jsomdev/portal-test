import { BaseResource } from '../base/baseResource';
import { ODataQueryHelper } from '../base/queryHelper';
import { Product } from '../models/Product';
import { OdataCollection } from '../o-data/oData';
import { QueryOptions } from '../o-data/queryOptions';

export class ProductsResource extends BaseResource<Product> {
  constructor() {
    super('/Products');
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
  private getFindResourcePath(urlEncodedQuery?: string): string {
    return `${this.getResourcePath()}/Find${
      urlEncodedQuery
        ? `(operatingConditions=@operatingConditions,filters=@filters,query='${ProductsResource.escapeSearchQuery(
            urlEncodedQuery
          )}')`
        : '(operatingConditions=@operatingConditions,filters=@filters)'
    }`;
  }
}
