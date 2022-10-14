import { Dispatch, SetStateAction } from 'react';

import { MenuItemViewModel } from '@widgets/headers/main-header/mainHeader.helper';
import { NavigationMenuStyle } from '@widgets/headers/site-header/navigationMenuItem';

export type MenuConfiguration = {
  backButtonText?: string;
  hideOtherMenusWhenActive: boolean;
  style: NavigationMenuStyle;
  items: MenuItemViewModel[] | undefined;
};

export interface MultiMenuConfiguration {
  [key: string]: MenuConfiguration;
}

export type MultiMenuResult<T extends MultiMenuConfiguration> = {
  activeMenuId: Extract<keyof T, string> | undefined;
  activeMenu: MenuConfiguration | undefined;
  activeMenuItem: MenuItemViewModel | undefined;
  breadcrumbs: MenuItemViewModel[];
  activeMenuItemId: string | undefined;
  setActiveMenuItemId: Dispatch<SetStateAction<string | undefined>>;
  menus: T;
};

export type FindMenuItemFunction = <T extends MultiMenuConfiguration>(
  menuItems: T,
  itemId: string | undefined
) => {
  menuItem: MenuItemViewModel | undefined;
  menuId: Extract<keyof T, string> | undefined;
  breadcrumbs: MenuItemViewModel[];
};
