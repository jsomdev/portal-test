import path from 'path';

import { DataCacheManager } from '@services/cache/dataCache';
import { MultilingualStringHelper } from '@utilities/multilingualStringHelper';

import { AttributeType } from './models/AttributeType';
import { OdataCollection } from './o-data/oData';
import { QueryOptions } from './o-data/queryOptions';
import { AttributeTypesResource } from './resources/AttributeTypesResource';

const ATTRIBUTE_TYPES_CACHE_PATH = path.resolve(
  './data-cache/attributeTypes.json'
);
const attributeTypesDataCacheManager: DataCacheManager<AttributeType[]> =
  new DataCacheManager<AttributeType[]>(
    'AttributeTypes',
    ATTRIBUTE_TYPES_CACHE_PATH
  );

/**
 * Function that retrieves information about the AttributeTypes that need to be globally available
 * @returns Array of AttributeTypes that will be referenced throughout the application  (e.g Product Specification Name --> Attribute Type)
 */
export async function fetchAllAttributeTypes(
  locale: string | undefined
): Promise<AttributeType[]> {
  const cachedData: AttributeType[] | undefined =
    await attributeTypesDataCacheManager.get();

  function optimize(attributeTypes: AttributeType[]): AttributeType[] {
    return attributeTypes.map(attributeType => ({
      ...attributeType,
      name: MultilingualStringHelper.strip(attributeType.name, locale),
      description: MultilingualStringHelper.strip(
        attributeType.description,
        locale
      )
    }));
  }
  if (cachedData) {
    return optimize(cachedData);
  }
  const attributeTypesResource: AttributeTypesResource =
    new AttributeTypesResource();

  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `name,description,code`
  };

  const data: OdataCollection<AttributeType> =
    await attributeTypesResource.getEntities(queryOptions);
  attributeTypesDataCacheManager.set(data.value);
  return optimize(data.value);
}
