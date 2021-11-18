import { AttributeGroup } from './models/AttributeGroup';
import { OdataCollection } from './o-data/oData';
import { QueryOptions } from './o-data/queryOptions';
import { AttributeGroupsResource } from './resources/AttributeGroupsResource';
/**
 * Function that retrieves information about the AttributeGroups that need to be globally available
 * @returns Array of AttributeGroups that will be referenced throughout the application  (e.g Product Specifications Section Name = Attribute Group)
 */
export async function fetchGlobalAttributeGroups(): Promise<AttributeGroup[]> {
  try {
    const attributeGroupsResource: AttributeGroupsResource = new AttributeGroupsResource();

    const queryOptions: Partial<QueryOptions> = {
      selectQuery: `id,name,sortIndex,code`,
    };

    const data: OdataCollection<AttributeGroup> = await attributeGroupsResource.getEntities(
      queryOptions
    );
    return data.value || [];
  } catch (e) {
    throw e;
  }
}
