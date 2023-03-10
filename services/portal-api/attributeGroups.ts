import path from 'path';

import { DataCacheManager } from '@services/cache/dataCache';
import { MultilingualStringHelper } from '@utilities/multilingualStringHelper';

import { AttributeGroup } from './models/AttributeGroup';
import { OdataCollection } from './o-data/oData';
import { QueryOptions } from './o-data/queryOptions';
import { AttributeGroupsResource } from './resources/AttributeGroupsResource';

const ATTRIBUTE_GROUPS_CACHE_PATH = path.resolve(
  './data-cache/attributeGroups.json'
);
const attributeGroupsDataCacheManager: DataCacheManager<AttributeGroup[]> =
  new DataCacheManager<AttributeGroup[]>(
    'AttributeGroups',
    ATTRIBUTE_GROUPS_CACHE_PATH
  );

/**
 * Function that retrieves information about the AttributeGroups that need to be globally available
 * @returns Array of AttributeGroups that will be referenced throughout the application  (e.g Product Specifications Section Name = Attribute Group)
 */
export async function fetchAllAttributeGroups(
  locale: string | undefined
): Promise<AttributeGroup[]> {
  const cachedData: AttributeGroup[] | undefined =
    await attributeGroupsDataCacheManager.get();

  function optimize(attributeGroups: AttributeGroup[]): AttributeGroup[] {
    return attributeGroups.map(attributeGroup => ({
      ...attributeGroup,
      name: MultilingualStringHelper.strip(attributeGroup.name, locale)
    }));
  }
  if (cachedData) {
    return optimize(cachedData);
  }
  const attributeGroupsResource: AttributeGroupsResource =
    new AttributeGroupsResource();

  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `name,code`
  };

  const data: OdataCollection<AttributeGroup> =
    await attributeGroupsResource.getEntities(queryOptions);
  attributeGroupsDataCacheManager.set(data.value);
  return optimize(data.value);
}
