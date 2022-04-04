import path from 'path';

import { DataCacheManager } from '@services/cache/dataCache';

import { FlaggedEnum } from './flaggedEnum';
import { Attribute } from './models/Attribute';
import { AttributeSettings } from './models/AttributeSettingsFlags';
import { Model } from './models/Model';
import { Resource } from './models/Resource';
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
export async function fetchAllModels(): Promise<Model[]> {
  const cachedData: Model[] | undefined = await modelsCacheDataManager.get();
  if (cachedData) {
    return cachedData;
  }
  const modelsResource: ModelsResource = new ModelsResource();

  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,name,seriesId,number,description,seoPath,slug`,
    expandQuery: `image($select=id,url,thumbnail),resources($select=id,type,variation,caption,url,thumbnail),attributes($select=typeCode,value,settings,conditions,displays,sortIndex,id;$filter=settings has SSCo.DigitalHighway.Portal.Data.Enumerations.AttributeSettings'${FlaggedEnum.toString(
      AttributeSettings,
      AttributeSettings.DisplayOnProductCharacteristics
    )}')`
  };

  const data: OdataCollection<Model> = await modelsResource.getEntities(
    queryOptions
  );
  await modelsCacheDataManager.set(data.value);
  return data.value;
}

/**
 * Function that retrieves the visual resources of a model that will be displayed on the top section of a model page.
 * @param id Guid of the Model
 * @returns Array of Resource
 */
export async function fetchModelResources(id: string): Promise<Resource[]> {
  const modelsResource: ModelsResource = new ModelsResource();

  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id`,
    expandQuery: `resources($select=id,type,variation,caption,url,thumbnail)`
  };
  const data: Model | undefined = await modelsResource.getEntity(
    id,
    queryOptions
  );
  return data.resources || [];
}

/**
 * Function that retrieves the necessary attributes of a model that are to be displayed as (key) characteristics. (Specification Summary)
 * @param id Guid of the Model
 * @returns Array of Attributes that represent the Key Specifications of a Product Model
 */
export async function fetchModelKeySpecifications(
  id: string
): Promise<Attribute[]> {
  const modelsResource: ModelsResource = new ModelsResource();

  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id`,
    expandQuery: `attributes($select=typeCode,value,settings,conditions,displays,sortIndex,id;$filter=settings has SSCo.DigitalHighway.Portal.Data.Enumerations.AttributeSettings'${FlaggedEnum.toString(
      AttributeSettings,
      AttributeSettings.DisplayOnProductCharacteristics
    )}')`
  };

  const data: Model | undefined = await modelsResource.getEntity(
    id,
    queryOptions
  );
  return data.attributes || [];
}
