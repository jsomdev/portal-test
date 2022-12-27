import path from 'path';

import { DataCacheManager } from '@services/cache/dataCache';

import { ConditionType } from './models/ConditionType';
import { OdataCollection, QueryOptions } from './o-data';
import { ConditionTypesResource } from './resources/ConditionTypesResource';

const ATTRIBUTE_TYPES_CACHE_PATH = path.resolve(
  './data-cache/conditionTypes.json'
);
const conditionTypesDataCacheManager: DataCacheManager<ConditionType[]> =
  new DataCacheManager<ConditionType[]>(
    'ConditionTypes',
    ATTRIBUTE_TYPES_CACHE_PATH
  );
/**
 * Function that retrieves information about the ConditionTypes that need to be globally available
 * @returns Array of ConditionTypes that will be referenced throughout the application  (e.g Product Specification Name --> Condition Type)
 */
export async function fetchAllConditionTypes(): Promise<ConditionType[]> {
  const cachedData: ConditionType[] | undefined =
    await conditionTypesDataCacheManager.get();
  if (cachedData) {
    return cachedData;
  }
  const conditionTypesResource: ConditionTypesResource =
    new ConditionTypesResource();

  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,code,name,sortIndex,unitSymbol`
  };

  const data: OdataCollection<ConditionType> =
    await conditionTypesResource.getEntities(queryOptions);
  conditionTypesDataCacheManager.set(data.value);
  return data.value;
}
