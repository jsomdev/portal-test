import { DataCacheManager } from '@services/cache/dataCache';
import path from 'path';
import { MenuItem } from './';
import { Menu } from './models/Menu';
import { QueryOptions } from './o-data/queryOptions';
import { MenuItemsResource } from './resources/MenuItemsResource';

const SITE_MENU_ITEMS_CACHE_PATH = path.resolve(
  './data-cache/siteMenuItems.json'
);
const siteMenuItemsDataCacheManager: DataCacheManager<MenuItem[]> =
  new DataCacheManager<MenuItem[]>(
    'Site menu items',
    SITE_MENU_ITEMS_CACHE_PATH
  );

const MAIN_MENU_ITEMS_CACHE_PATH = path.resolve(
  './data-cache/mainMenuItems.json'
);
const mainMenuItemsDataCacheManager: DataCacheManager<MenuItem[]> =
  new DataCacheManager<MenuItem[]>(
    'Main menu items',
    MAIN_MENU_ITEMS_CACHE_PATH
  );

/**
 * Function that fetches the MenuItems that should be displayed on the SiteCommandBar (Menu)
 * @returns an OdataCollection of MenuItems in the order it should be displayed.
 */
export async function fetchMenuItemsForSiteHeader(): Promise<MenuItem[]> {
  const cachedData: MenuItem[] | undefined =
    await siteMenuItemsDataCacheManager.get();
  if (cachedData) {
    return cachedData;
  }
  const menuItemsResource: MenuItemsResource = new MenuItemsResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,url`,
    orderbyQuery: 'sortIndex asc',
    filterQuery: `menu eq '${Menu.SITE}' and parentId eq null`
  };
  const data = await menuItemsResource.getEntities(queryOptions);
  siteMenuItemsDataCacheManager.set(data.value);
  return data.value;
}
/**
 * Function that fetches the MenuItems that should be displayed on the MainCommandBar (Menu).
 * The reference between a parent and its children is parentId. This way no expands have to be used.
 * @returns an OdataCollection of MenuItems as a flat array in the order they should be displayed.
 * It is expected that this flat array gets mapped correctly.
 */
export async function fetchMenuItemsForMainHeader(): Promise<MenuItem[]> {
  const cachedData: MenuItem[] | undefined =
    await mainMenuItemsDataCacheManager.get();
  if (cachedData) {
    return cachedData;
  }
  const menuItemsResource: MenuItemsResource = new MenuItemsResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,url,parentId`,
    orderbyQuery: 'sortIndex asc',
    filterQuery: `menu eq '${Menu.MAIN}'`
  };
  const data = await menuItemsResource.getEntities(queryOptions);
  mainMenuItemsDataCacheManager.set(data.value);
  return data.value;
}
