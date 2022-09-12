import { messageIds } from '@services/i18n';
import { MenuItemFormatter } from '@services/i18n/formatters/entity-formatters/menuItemFormatter';
import { MenuItem } from '@services/portal-api/models/MenuItem';
import { IntlShape } from 'react-intl';

export interface MenuItemProps {
  href: string;
  text: string;
  id?: string | undefined;
  parentId?: string | undefined;
  subItems?: MenuItemProps[];
}

const messages = {
  mainMenuViewAllCategory: {
    id: messageIds.navigation.menu.viewAllCategory,
    description: 'View all ... ',
    defaultMessage: 'View all default '
  }
};

/**
 * Getter for the Main Menu Items structure that will be displayed in the Mobile and Desktoip Main header.
 * @param menuItems Array of MenuItems to create Main Menu Items structure
 * @param prefixText Text that will be prepended to the parent item text property which as a menu item is then prepended to it's own sub-items
 * @param parentId A parent of the menu item to filter out sub menu items
 * @param parentItem A parent item will be prepended to the list of menu items
 * @param locale the locale to pass to the menu item formatter class to get the correct text and href
 * @returns Array of MainMenuItems
 */
export function mapMenuItemsToMenuItemProps(
  menuItems: MenuItem[],
  type: 'expanded' | 'default',
  intl: IntlShape,
  parentId: string | null | undefined = null,
  parentItem: MenuItemProps | undefined = undefined
): MenuItemProps[] {
  // This function will determine if a given menu item has sub items based on the parent ID / item ID
  const hasSubItems: (id: string | undefined) => boolean = (
    id: string | undefined
  ): boolean => {
    return !!menuItems.filter(child => child.parentId === id).length;
  };

  function mapMenuItemToMenuItemProps(menuItem: MenuItem): MenuItemProps {
    const menuItemFormatter = new MenuItemFormatter(menuItem, intl.locale);
    return {
      href: menuItemFormatter.formatHref() || '/404',
      text: menuItemFormatter.formatText(),
      id: menuItem.id,
      parentId: menuItem.parentId || undefined
    };
  }

  const menuItemProps: MenuItemProps[] = menuItems
    .filter(menuItem => menuItem.parentId === parentId)
    .map((menuItem): MenuItemProps => {
      const item = mapMenuItemToMenuItemProps(menuItem);
      return {
        ...item,
        subItems: hasSubItems(menuItem.id)
          ? mapMenuItemsToMenuItemProps(
              menuItems,
              type,
              intl,
              menuItem.id,
              item
            )
          : undefined
      };
    });

  // Add the parent item to it's own subItems list and prefix the text if present
  if (parentItem && type === 'expanded') {
    menuItemProps.unshift({
      ...parentItem,
      text: `${intl.formatMessage(messages.mainMenuViewAllCategory)} ${
        parentItem.text
      }`,
      parentId: parentItem.id
    });
  }

  return menuItemProps;
}
