import { messageIds } from '@services/i18n';
import { MenuItemFormatter } from '@services/i18n/formatters/entity-formatters/menuItemFormatter';
import { MenuItem } from '@services/portal-api/models/MenuItem';
import { defineMessages } from 'react-intl';

export interface MainMenuItem {
  href: string;
  text: string;
  id: string | undefined;
  parentId: string | undefined;
  subItems?: MainMenuItem[];
}

const messages = defineMessages({
  mainMenuViewAllCategory: {
    id: messageIds.navigation.menu.viewAllCategory,
    description: 'View all ... ',
    defaultMessage: 'View all '
  }
});

/**
 * Getter for the Main Menu Items structure that will be displayed in the Mobile and Desktoip Main header.
 * @param menuItems Array of MenuItems to create Main Menu Items structure
 * @param parentId A parent of the menu item to filter out sub menu items
 * @param locale the locale to pass to the menu item formatter class to get the correct text and href
 * @returns Array of MainMenuItem
 */
export function mapGlobalMenuItemsToMainMenuItems(
  menuItems: MenuItem[],
  parentId?: string | null | undefined,
  parentItem?: MainMenuItem,
  locale?: string
): MainMenuItem[] {
  if (!menuItems) {
    return [];
  }
  const hasSubItems: (id: string | undefined) => boolean = (
    id: string | undefined
  ): boolean => {
    return !!menuItems.filter(child => child.parentId === id).length;
  };

  const returnItems = menuItems
    .filter(menuItem => menuItem.parentId === parentId)
    .map((menuItem): MainMenuItem => {
      const menuItemFormatter = new MenuItemFormatter(menuItem, locale);
      const mappedMenuItem: MainMenuItem = {
        href: menuItemFormatter.formatHref() || '/404',
        text: menuItemFormatter.formatText(),
        id: menuItem.id,
        parentId: menuItem.parentId || undefined
      };
      return {
        ...mappedMenuItem,
        subItems: hasSubItems(menuItem.id)
          ? mapGlobalMenuItemsToMainMenuItems(
              menuItems,
              menuItem.id,
              mappedMenuItem,
              locale
            )
          : undefined
      };
    });

  if (parentItem) {
    returnItems.unshift(parentItem);
  }

  return returnItems;
}
