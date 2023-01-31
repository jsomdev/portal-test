import path from 'path';

import { DataCacheManager } from '@services/cache/dataCache';
import { MultilingualStringHelper } from '@utilities/multilingualStringHelper';

import { FlaggedEnum } from './flaggedEnum';
import { AttributeSettings } from './models/AttributeSettingsFlags';
import { Model } from './models/Model';
import { OdataCollection } from './o-data/oData';
import { QueryOptions } from './o-data/queryOptions';
import { ModelsResource } from './resources/ModelsResource';

const MODELS_CACHE_PATH = path.resolve('./data-cache/models.json');
const modelsCacheDataManager: DataCacheManager<Model[]> = new DataCacheManager<
  Model[]
>('Models', MODELS_CACHE_PATH);
/**
 * Function that retrieves information about the Models with all their relevant information
 * @returns Collection of Models that will be referenced throughout the application  (e.g Alternative Models, Model information)
 */
export async function fetchAllModels(
  locale: string | undefined
): Promise<Model[]> {
  const cachedData: Model[] | undefined = await modelsCacheDataManager.get();
  function optimize(models: Model[]): Model[] {
    return models.map(model => ({
      ...model,
      name: MultilingualStringHelper.strip(model.name, locale),
      description: MultilingualStringHelper.strip(model.description, locale)
    }));
  }
  if (cachedData) {
    return optimize(cachedData);
  }
  const modelsResource: ModelsResource = new ModelsResource();

  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,name,seriesId,number,description,slug`,
    expandQuery: `image($select=id,url,thumbnail),resources($select=id,type,variation,caption,url,thumbnail),attributes($select=typeCode,value,settings,conditions,displays,sortIndex,id;$filter=settings has '${FlaggedEnum.toString(
      AttributeSettings,
      AttributeSettings.DisplayOnProductCharacteristics
    )}')`
  };

  const data: OdataCollection<Model> = await modelsResource.getEntities(
    queryOptions
  );
  await modelsCacheDataManager.set(data.value);
  return optimize(data.value);
}
