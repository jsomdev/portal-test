import { DataCacheManager } from '@services/cache/dataCache';
import path from 'path';
import { Resource } from './models/Resource';
import { Series } from './models/Series';
import { OdataCollection } from './o-data/oData';
import { QueryOptions } from './o-data/queryOptions';
import { SeriesResource } from './resources/SeriesResource';

const SERIES_CACHE_PATH = path.resolve('./data-cache/series.json');
const seriesCacheDataManager: DataCacheManager<Series[]> = new DataCacheManager<
  Series[]
>('Series', SERIES_CACHE_PATH);
/**
 * Function that retrieves information about the Series that need to be globally available
 * @returns Collection of Series that will be referenced throughout the application  (e.g Alternative Series, Series information)
 */
export async function fetchAllSeries(): Promise<Series[]> {
  const cachedData: Series[] | undefined = await seriesCacheDataManager.get();
  if (cachedData) {
    return cachedData;
  }
  const seriesResource: SeriesResource = new SeriesResource();

  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,name,familyId,description,name,seoPath`,
    expandQuery: `image($select=id,thumbnail,url),resources($select=id,type,variation,caption,url,thumbnail)`
  };

  const data: OdataCollection<Series> = await seriesResource.getEntities(
    queryOptions
  );
  await seriesCacheDataManager.set(data.value);
  return data.value;
}

export async function fetchSeriesResources(id: string): Promise<Resource[]> {
  const seriesResource: SeriesResource = new SeriesResource();

  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id`,
    expandQuery: `resources($select=id,type,variation,caption,url,thumbnail)`
  };

  const data: Series | undefined = await seriesResource.getEntity(
    id,
    queryOptions
  );
  return data.resources || [];
}

/**
 * Function that retrieves information about the Series that need to be globally available
 */
export async function fetchSeriesForStaticPaths(): Promise<
  OdataCollection<Series>
> {
  const seriesResource: SeriesResource = new SeriesResource();

  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,slug`
  };

  const data: OdataCollection<Series> | undefined =
    await seriesResource.getEntities(queryOptions);
  return data;
}
