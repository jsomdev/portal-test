import { PORTAL_API_BASE_URL } from '@services/authentication/authenticationConfiguration';
import { OdataCollection, OdataEntity } from '../o-data/oData';
import { QueryOptions } from '../o-data/queryOptions';
import { digitalHighWayFetch } from './fetch';
import { ODataQueryHelper } from './queryHelper';

export class BaseResource<T> {
  private baseResourcePath: string;
  constructor(baseResourcePath: string = '') {
    this.baseResourcePath = baseResourcePath;
  }
  /**
   * Returns Response Object
   * @param resourcePath e.g. /Accounts
   * @param queryOptions e.g. { selectQuery: "$select=id,name"}
   * @param requestOptions e.g {body: JSON.stringify(myObject), headers: {content-type: "application/json"}}
   */
  public fetch<TResponse = unknown>(
    resourcePath: string,
    queryOptions: Partial<QueryOptions> | string,
    requestOptions: RequestInit,
    shouldParseToJson: boolean = true
  ): Promise<TResponse> {
    return digitalHighWayFetch(
      PORTAL_API_BASE_URL,
      resourcePath,
      queryOptions,
      requestOptions,
      shouldParseToJson
    ) as Promise<TResponse>;
  }
  public getEntities = (
    queryOptions: Partial<QueryOptions>,
    authenticate: boolean = true
  ): Promise<OdataCollection<T>> => {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return digitalHighWayFetch<OdataCollection<T>>(
      PORTAL_API_BASE_URL,
      this.getResourcePath(),
      queryOptions,
      requestOptions
    ) as Promise<OdataCollection<T>>;
  };

  public searchEntities = (queryOptions: Partial<QueryOptions>, searchQuery: string): Promise<OdataCollection<T>> => {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return digitalHighWayFetch<OdataCollection<T>>(
      PORTAL_API_BASE_URL,
      this.getSearchResourcePath(searchQuery),
      queryOptions,
      requestOptions
    ) as Promise<OdataCollection<T>>;
  };

  public getEntity = (id: number | string, queryOptions: Partial<QueryOptions>): Promise<T & OdataEntity> => {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return digitalHighWayFetch<T & OdataEntity>(
      PORTAL_API_BASE_URL,
      this.getEntityResourcePath(id),
      queryOptions,
      requestOptions
    ) as Promise<OdataEntity & T>;
  };

  public putEntity = async (id: string, body: string): Promise<T & OdataEntity> => {
    try {
      const requestOptions: RequestInit = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      };
      return digitalHighWayFetch<T & OdataEntity>(
        PORTAL_API_BASE_URL,
        this.getEntityResourcePath(id),
        {},
        requestOptions,
        true
      ) as Promise<T & OdataEntity>;
    } catch (e) {
      throw e;
    }
  };
  public postEntity = async (body: string): Promise<T & OdataEntity> => {
    try {
      const requestOptions: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      };
      return digitalHighWayFetch<T & OdataEntity>(
        PORTAL_API_BASE_URL,
        this.getResourcePath(),
        {},
        requestOptions,
        true
      ) as Promise<T & OdataEntity>;
    } catch (e) {
      throw e;
    }
  };

  public deleteEntity = (id: string): Promise<void> => {
    const requestOptions: RequestInit = {
      method: 'DELETE',
    };
    return digitalHighWayFetch<void>(
      PORTAL_API_BASE_URL,
      this.getEntityResourcePath(id),
      {},
      requestOptions
    ) as Promise<void>;
  };

  protected getEntityResourcePath = (id: number | string): string => {
    return ODataQueryHelper.formatEntityResourcePath(this.getResourcePath(), id);
  };
  protected getResourcePath = (): string => {
    return this.baseResourcePath;
  };

  protected getSearchResourcePath = (searchQuery: string): string => {
    return `${this.baseResourcePath}/Search(query='${BaseResource.escapeSearchQuery(searchQuery)}')`;
  };

  static escapeSearchQuery = (searchQuery: string): string => {
    const escapedQuery = searchQuery.replaceAll(`'`, `''`);
    return escapedQuery;
  };
}
