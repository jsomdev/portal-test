import { useState } from 'react';

import { MenuItemViewModel } from '@widgets/headers/main-header/mainHeader.helper';
import {
  FindMenuItemFunction,
  MultiMenuConfiguration,
  MultiMenuResult
} from '@widgets/headers/site-header/multi-menu/multiMenu.types';

const recursiveFindMenuItem = (
  items: MenuItemViewModel[] | undefined,
  menuItemId: string
):
  | {
      menuItem: MenuItemViewModel | undefined;
      breadcrumbs: MenuItemViewModel[];
    }
  | undefined => {
  if (!items) {
    return { menuItem: undefined, breadcrumbs: [] };
  }
  const foundItem = items.find(item => item.id === menuItemId);
  if (foundItem) {
    return { menuItem: foundItem, breadcrumbs: [] };
  }
  for (const item of items) {
    const result = recursiveFindMenuItem(item.children || [], menuItemId);
    if (result?.menuItem) {
      return {
        menuItem: result.menuItem,
        breadcrumbs: result.breadcrumbs ? [item, ...result.breadcrumbs] : [item]
      };
    }
  }

  return undefined;
};

const findMenuItem: FindMenuItemFunction = <T extends MultiMenuConfiguration>(
  menuItems: T,
  itemId: string | undefined
) => {
  const menuIds = Object.keys(menuItems) as Extract<keyof T, string>[];

  for (const menuId of menuIds) {
    const findResult = itemId
      ? recursiveFindMenuItem(menuItems[menuId].items, itemId)
      : undefined;

    if (findResult) {
      return { ...findResult, menuId };
    }
  }

  return { menuItem: undefined, menuId: undefined, breadcrumbs: [] };
};

const getMenusWithActiveItems = <T extends MultiMenuConfiguration>(
  menus: T,
  activeMenuId: string | undefined,
  activeMenuItem: MenuItemViewModel | undefined
) => {
  const activeMenus: T = { ...menus };
  Object.keys(menus).forEach((key: keyof T) => {
    const menu = menus[key];
    if (activeMenuId === key && menu.items) {
      activeMenus[key] = {
        ...menu,
        items: activeMenuItem?.children
      };
    } else {
      activeMenus[key] = menu;
    }
  });
  return activeMenus;
};

export const useMultiMenu = <T extends MultiMenuConfiguration>(
  configuration: T
): MultiMenuResult<T> => {
  const [activeMenuItemId, setActiveMenuItemId] = useState<string | undefined>(
    undefined
  );

  const {
    menuId: activeMenuId,
    menuItem: activeMenuItem,
    breadcrumbs
  } = findMenuItem(configuration, activeMenuItemId);

  const activeMenus = getMenusWithActiveItems<T>(
    configuration,
    activeMenuId,
    activeMenuItem
  );
  const activeMenu = activeMenuId ? activeMenus[activeMenuId] : undefined;

  return {
    activeMenuItemId: activeMenuItemId,
    activeMenuItem: activeMenuItem,
    activeMenuId: activeMenuId,
    activeMenu: activeMenu || undefined,
    breadcrumbs: breadcrumbs,
    setActiveMenuItemId: setActiveMenuItemId,
    menus: activeMenus
  };
};
