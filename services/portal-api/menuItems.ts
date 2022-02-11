import { MenuItem } from './';
import { Menu } from './models/Menu';
import { OdataCollection } from './o-data/oData';
import { QueryOptions } from './o-data/queryOptions';
import { MenuItemsResource } from './resources/MenuItemsResource';

/**
 * Function that fetches the MenuItems that should be displayed on the SiteCommandBar (Menu)
 * @returns an OdataCollection of MenuItems in the order it should be displayed.
 */
export async function fetchMenuItemsForSiteHeader(): Promise<
  OdataCollection<MenuItem>
> {
  const menuItemsResource: MenuItemsResource = new MenuItemsResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,url`,
    orderbyQuery: 'sortIndex asc',
    filterQuery: `menu eq '${Menu.SITE}' and parentId eq null`
  };
  const data = await menuItemsResource.getEntities(queryOptions);
  return data;
}
/**
 * Function that fetches the MenuItems that should be displayed on the MainCommandBar (Menu).
 * The reference between a parent and its children is parentId. This way no expands have to be used.
 * @returns an OdataCollection of MenuItems as a flat array in the order they should be displayed.
 * It is expected that this flat array gets mapped correctly.
 */
export async function fetchMenuItemsForMainHeader(): Promise<
  OdataCollection<MenuItem>
> {
  const menuItemsResource: MenuItemsResource = new MenuItemsResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,url,parentId`,
    orderbyQuery: 'sortIndex asc',
    filterQuery: `menu eq '${Menu.MAIN}'`
  };
  const data = await menuItemsResource.getEntities(queryOptions);
  return data;
}
