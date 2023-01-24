import path from 'path';

import { DataCacheManager } from '@services/cache/dataCache';
import { MultilingualStringHelper } from '@utilities/multilingualStringHelper';

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
export async function fetchAllConditionTypes(
  locale: string | undefined
): Promise<ConditionType[]> {
  const cachedData: ConditionType[] | undefined =
    await conditionTypesDataCacheManager.get();

  function optimize(conditionTypes: ConditionType[]): ConditionType[] {
    return conditionTypes.map(conditionType => ({
      ...conditionType,
      name: MultilingualStringHelper.strip(conditionType.name, locale)
    }));
  }
  if (cachedData) {
    return optimize(cachedData);
  }
  const conditionTypesResource: ConditionTypesResource =
    new ConditionTypesResource();

  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `code,name,unitSymbol`
  };

  const data: OdataCollection<ConditionType> =
    await conditionTypesResource.getEntities(queryOptions);
  conditionTypesDataCacheManager.set(data.value);
  return optimize(data.value);
}
