import path from 'path';

import { DataCacheManager } from '@services/cache/dataCache';
import { MultilingualStringHelper } from '@utilities/multilingualStringHelper';

import { getAudience } from '..';
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

function optimize(
  menuItems: MenuItem[],
  locale: string | undefined
): MenuItem[] {
  return menuItems.map(menuItem => {
    if (menuItem.slug) {
      return {
        ...menuItem,
        slug:
          MultilingualStringHelper.strip(menuItem.slug, locale) || undefined,
        url: {
          ...menuItem.url,
          text: MultilingualStringHelper.strip(menuItem.url?.text, locale)
        }
      };
    }

    return {
      ...menuItem,
      url: {
        ...menuItem.url,
        text: MultilingualStringHelper.strip(menuItem.url?.text, locale)
      }
    };
  });
}
/**
 * Function that fetches the MenuItems that should be displayed on the SiteCommandBar (Menu)
 * @returns an OdataCollection of MenuItems in the order it should be displayed.
 */
export async function fetchMenuItemsForSiteHeader(
  locale: string | undefined
): Promise<MenuItem[]> {
  const audience = getAudience(locale);
  const cachedData: MenuItem[] | undefined =
    await siteMenuItemsDataCacheManager.get();
  if (cachedData) {
    return filterMenuItemsByAudience(audience, optimize(cachedData, locale));
  }
  const menuItemsResource: MenuItemsResource = new MenuItemsResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,url,audience,slug`,
    orderbyQuery: 'sortIndex asc',
    filterQuery: `menu eq '${Menu.SITE}' and parentId eq null`
  };
  const data = await menuItemsResource.getEntities(queryOptions);
  siteMenuItemsDataCacheManager.set(data.value);
  return filterMenuItemsByAudience(audience, optimize(data.value, locale));
}

// /categories/formatCategory.formatSlug() query -> categorySlug (array)

/**
 * Function that fetches the MenuItems that should be displayed on the MainCommandBar (Menu).
 * The reference between a parent and its children is parentId. This way no expands have to be used.
 * @returns an OdataCollection of MenuItems as a flat array in the order they should be displayed.
 * It is expected that this flat array gets mapped correctly.
 */
export async function fetchMenuItemsForMainHeader(
  locale: string | undefined
): Promise<MenuItem[]> {
  const audience = getAudience(locale);
  const cachedData: MenuItem[] | undefined =
    await mainMenuItemsDataCacheManager.get();

  if (cachedData) {
    return filterMenuItemsByAudience(audience, optimize(cachedData, locale));
  }
  const menuItemsResource: MenuItemsResource = new MenuItemsResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: `id,url,parentId,audience,slug`,
    orderbyQuery: 'sortIndex asc',
    filterQuery: `menu eq '${Menu.MAIN}'`
  };
  const data = await menuItemsResource.getEntities(queryOptions);
  mainMenuItemsDataCacheManager.set(data.value);
  return filterMenuItemsByAudience(audience, optimize(data.value, locale));
}
