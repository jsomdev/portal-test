// TODO Add Common Cultures
// TODO Add Liquids with Relative Density
import { LISTIDS } from './constants';
import { ListItem } from './models/ListItem';
import { QueryOptions } from './o-data/queryOptions';
import { ListsResource } from './resources/ListsResource';

/**
 * Function that retrieves liquids with specific gravity (used in Operating Conditions specific gravity dialog)
 * @returns Array of ListItems that represents the Liquids with their Specific Gravity
 */
export async function fetchLiquidsWithSpecificGravity(): Promise<ListItem[]> {
  const listsResource: ListsResource = new ListsResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id`,
    expandQuery: 'items($select=value,displays,id;$orderby=sortIndex asc)'
  };
  const data = await listsResource.getEntity(
    LISTIDS.liquidSpecificGravity,
    queryOptions
  );
  return data?.items || [];
}
