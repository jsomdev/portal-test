import { Resource } from './models/Resource';
import { Series } from './models/Series';
import { OdataCollection } from './o-data/oData';
import { QueryOptions } from './o-data/queryOptions';
import { SeriesResource } from './resources/SeriesResource';
/**
 * Function that retrieves information about the Series that need to be globally available
 * @returns Collection of Series that will be referenced throughout the application  (e.g Alternative Series, Series information)
 */
export async function fetchGlobalSeries(): Promise<OdataCollection<Series>> {
  try {
    const seriesResource: SeriesResource = new SeriesResource();

    const queryOptions: Partial<QueryOptions> = {
      selectQuery: `id,name,familyId,description,name,seoPath`,
      expandQuery: `image($select=id,thumbnail,url)`,
    };

    const data:
      | OdataCollection<Series>
      | undefined = await seriesResource.getEntities(queryOptions);
    return data;
  } catch (e) {
    throw e;
  }
}

export async function fetchSeriesResources(id: string): Promise<Resource[]> {
  try {
    const seriesResource: SeriesResource = new SeriesResource();

    const queryOptions: Partial<QueryOptions> = {
      selectQuery: `id`,
      expandQuery: `resources($select=id,type,variation,caption,url,thumbnail)`,
    };

    const data: Series | undefined = await seriesResource.getEntity(
      id,
      queryOptions
    );
    return data.resources || [];
  } catch (e) {
    throw e;
  }
}
