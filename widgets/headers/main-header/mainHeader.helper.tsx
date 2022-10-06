import { Guid } from 'guid-typescript';
import { IntlShape, defineMessages } from 'react-intl';

import { messageIds } from '@services/i18n';
import { MenuItemFormatter } from '@services/i18n/formatters/entity-formatters/menuItemFormatter';
import { MenuItem } from '@services/portal-api/models/MenuItem';

export interface MenuItemProps {
  id: string;
  text: string;
  href?: string;
  locale?: string;
  image?: string;
  children?: MenuItemProps[];
  onClick?: () => void;
}

const messages = defineMessages({
  mainMenuViewAllCategory: {
    id: messageIds.navigation.main.viewAllCategory,
    description: 'View all ... ',
    defaultMessage: 'View all default '
  }
});

/**
 *
 * @param menuItems an array of type MenuItem
 * @param viewType 'expanded' or 'default', expanded will add the parent item to its own children array as a link
 * @param intl our intl provider which contains the locale and formateMessage function used for our translations
 * @param parentId a parent ID used in our iterations of child menu items
 * @param parentItem the parent MenuItemProps that will be added as the first element to its own children
 * @returns an array of type MenuItemProps in a menu item / sub menu item structure
 */
export function mapMenuItemsToMenuItemProps(
  menuItems: MenuItem[],
  viewType: 'expanded' | 'default',
  intl: IntlShape,
  parentId: string | null | undefined = undefined,
  parentItem: MenuItemProps | undefined = undefined
): MenuItemProps[] {
  // This function will determine if a given menu item has sub items based on the parent ID / item ID
  const hasSubItems: (id: string | undefined) => boolean = (
    id: string | undefined
  ): boolean => {
    return !!menuItems.filter(child => child.parentId === id).length;
  };

  // Map a single MenuItem to single MenuItemProps (without the children)
  function mapMenuItemToMenuItemProps(menuItem: MenuItem): MenuItemProps {
    const menuItemFormatter = new MenuItemFormatter(menuItem, intl.locale);
    return {
      href: menuItemFormatter.formatHref() || '/404',
      text: menuItemFormatter.formatText(),
      id: menuItem.id || `${Guid.create()}`
    };
  }

  const menuItemProps: MenuItemProps[] = menuItems
    .filter(menuItem => menuItem.parentId === parentId)
    .map((menuItem): MenuItemProps => {
      const item = mapMenuItemToMenuItemProps(menuItem);
      return {
        ...item,
        href:
          viewType === 'expanded' && hasSubItems(item.id)
            ? undefined
            : item.href,
        children: hasSubItems(item.id)
          ? mapMenuItemsToMenuItemProps(
              menuItems,
              viewType,
              intl,
              menuItem.id,
              item
            )
          : undefined
      };
    });

  // Add the parent item to it's own children list and prefix the text if present
  if (parentItem && viewType === 'expanded') {
    menuItemProps.unshift({
      ...parentItem,
      text: intl.formatMessage(messages.mainMenuViewAllCategory, {
        category: parentItem.text
      })
    });
  }

  return menuItemProps;
}
