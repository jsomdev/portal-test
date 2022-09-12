import path from 'path';

import { DataCacheManager } from '@services/cache/dataCache';

import { MenuItem } from './';
import { FlaggedEnum } from './flaggedEnum';
import { Audience } from './models/AudienceFlags';
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
 * Function that will filter a collection of MenuItems by Audience
 * (e.g.: If the audience of the application is Europe, the audience of the MenuItem must either be Europe)
 * @param audience The Audience that each MenuItem must match with
 * @param menuItems A collection of MenuItems that need filtering
 * @returns A collection of filtered MenuItems that match the Audience
 */
function filterMenuItemsByAudience(
  audience: Audience | undefined,
  menuItems: MenuItem[]
): MenuItem[] {
  return menuItems.filter(item => {
    const menuItemAudience: Audience = FlaggedEnum.create<Audience>(
      Audience,
      item.audience || Audience.NorthAmerica
    );

    return !!(menuItemAudience & (audience || Audience.NorthAmerica));
  });
}
/**
 * Function that fetches the MenuItems that should be displayed on the SiteCommandBar (Menu)
 * @returns an OdataCollection of MenuItems in the order it should be displayed.
 */
export async function fetchMenuItemsForSiteHeader(
  audience: Audience | undefined
): Promise<MenuItem[]> {
  const cachedData: MenuItem[] | undefined =
    await siteMenuItemsDataCacheManager.get();
  if (cachedData) {
    return filterMenuItemsByAudience(audience, cachedData);
  }
  const menuItemsResource: MenuItemsResource = new MenuItemsResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,url,audience`,
    orderbyQuery: 'sortIndex asc',
    filterQuery: `menu eq '${Menu.SITE}' and parentId eq null`
  };
  const data = await menuItemsResource.getEntities(queryOptions);
  siteMenuItemsDataCacheManager.set(data.value);
  return filterMenuItemsByAudience(audience, data.value);
}

// /categories/formatCategory.formatSlug() query -> categorySlug (array)

/**
 * Function that fetches the MenuItems that should be displayed on the MainCommandBar (Menu).
 * The reference between a parent and its children is parentId. This way no expands have to be used.
 * @returns an OdataCollection of MenuItems as a flat array in the order they should be displayed.
 * It is expected that this flat array gets mapped correctly.
 */
export async function fetchMenuItemsForMainHeader(
  audience: Audience | undefined
): Promise<MenuItem[]> {
  const cachedData: MenuItem[] | undefined =
    await mainMenuItemsDataCacheManager.get();
  if (cachedData) {
    return filterMenuItemsByAudience(audience, cachedData);
  }
  const menuItemsResource: MenuItemsResource = new MenuItemsResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,url,parentId,audience,slug`,
    orderbyQuery: 'sortIndex asc',
    filterQuery: `menu eq '${Menu.MAIN}'`
  };
  const data = await menuItemsResource.getEntities(queryOptions);
  mainMenuItemsDataCacheManager.set(data.value);
  return filterMenuItemsByAudience(audience, data.value);
}
