import { Dispatch, SetStateAction } from 'react';

import { MenuItemProps } from '@widgets/headers/main-header/mainHeader.helper';
import { NavigationMenuStyle } from '@widgets/headers/site-header/navigationMenuItem';

export type MenuConfiguration = {
  backButtonText?: string;
  hideOtherMenusWhenActive: boolean;
  style: NavigationMenuStyle;
  items: MenuItemProps[] | undefined;
};

export interface MultiMenuConfiguration {
  [key: string]: MenuConfiguration;
}

export type MultiMenuResult<T extends MultiMenuConfiguration> = {
  activeMenuId: Extract<keyof T, string> | undefined;
  activeMenu: MenuConfiguration | undefined;
  activeMenuItem: MenuItemProps | undefined;
  breadcrumbs: MenuItemProps[];
  activeMenuItemId: string | undefined;
  setActiveMenuItemId: Dispatch<SetStateAction<string | undefined>>;
  menus: T;
};

export type FindMenuItemFunction = <T extends MultiMenuConfiguration>(
  menuItems: T,
  itemId: string | undefined
) => {
  menuItem: MenuItemProps | undefined;
  menuId: Extract<keyof T, string> | undefined;
  breadcrumbs: MenuItemProps[];
};
