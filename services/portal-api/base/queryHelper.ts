import { Guid } from 'guid-typescript';
import { QueryOptions } from '../o-data/queryOptions';

export class ODataQueryHelper {
  static formatSelectQuery(
    newQuery: Partial<QueryOptions>
  ): string | undefined {
    if (newQuery.selectQuery) {
      const selectKeys = newQuery.selectQuery.split(',');
      const uniqueValues = Array.from(new Set(selectKeys));
      return `$select=${uniqueValues}`;
    }
    return undefined;
  }

  static formatCountQuery(
    queryOptions: Partial<QueryOptions>
  ): string | undefined {
    if (queryOptions.includeCount) {
      return '$count=true';
    }
    return undefined;
  }

  static formatTopQuery = (
    queryOptions: Partial<QueryOptions>
  ): string | undefined => {
    if (queryOptions.top) {
      return `$top=${queryOptions.top}`;
    }
    return undefined;
  };

  static formatSkipQuery = (
    queryOptions: Partial<QueryOptions>
  ): string | undefined => {
    if (queryOptions.skip) {
      return `$skip=${queryOptions.skip}`;
    }
    return undefined;
  };

  static formatFilterQuery = (
    queryOptions: Partial<QueryOptions>
  ): string | undefined => {
    if (queryOptions.filterQuery) {
      return `$filter=${queryOptions.filterQuery}`;
    }

    return undefined;
  };

  static formatExpandQuery = (
    queryOptions: Partial<QueryOptions>
  ): string | undefined => {
    if (queryOptions.expandQuery) {
      return `$expand=${queryOptions.expandQuery}`;
    }
    return undefined;
  };

  static formatOrderByQuery = (
    queryOptions: Partial<QueryOptions>
  ): string | undefined => {
    if (queryOptions.orderbyQuery) {
      return `$orderby=${queryOptions.orderbyQuery}`;
    }
    return undefined;
  };
  public static formatQueryOptionsToOdataQueryOptions = (
    queryOptions: Partial<QueryOptions>
  ): string => {
    const queries: Array<string | undefined> = [
      ODataQueryHelper.formatCountQuery(queryOptions),
      ODataQueryHelper.formatSelectQuery(queryOptions),
      ODataQueryHelper.formatExpandQuery(queryOptions),
      ODataQueryHelper.formatFilterQuery(queryOptions),
      ODataQueryHelper.formatOrderByQuery(queryOptions),
      ODataQueryHelper.formatTopQuery(queryOptions),
      ODataQueryHelper.formatSkipQuery(queryOptions),
    ];
    const definedQueries: string[] = queries.filter(
      (query) => query !== undefined
    ) as string[];

    if (definedQueries.length === 0) {
      return '';
    }
    return `?${definedQueries.join('&')}`;
  };

  public static formatEntityResourcePath(
    baseResourcePath: string,
    resourceId: number | string
  ): string {
    let entity: string = `(${resourceId})`;
    const isGuid: boolean = Guid.isGuid(resourceId);
    if (typeof resourceId === 'string' && !isGuid) {
      entity = `('${resourceId}')`;
    }
    return baseResourcePath.concat(entity);
  }
}
