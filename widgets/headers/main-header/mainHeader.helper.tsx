import { MenuItemFormatter } from '@services/i18n/formatters/entity-formatters/menuItemFormatter';
import { MenuItem } from '@services/portal-api/models/MenuItem';

export interface MenuItemProps {
  href: string;
  text: string;
  id?: string | undefined;
  parentId?: string | undefined;
  subItems?: MenuItemProps[];
}

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
  prefixText: string | undefined,
  type: 'expanded' | 'default',
  parentId?: string | null | undefined,
  parentItem?: MenuItemProps | undefined,
  locale?: string | undefined
): MenuItemProps[] {
  // This function will determine if a given menu item has sub items based on the parent ID / item ID
  const hasSubItems: (id: string | undefined) => boolean = (
    id: string | undefined
  ): boolean => {
    return !!menuItems.filter(child => child.parentId === id).length;
  };

  function mapMenuItemToMenuItemProps(menuItem: MenuItem): MenuItemProps {
    const menuItemFormatter = new MenuItemFormatter(menuItem, locale);
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
              prefixText,
              type,
              menuItem.id,
              item,
              locale
            )
          : undefined
      };
    });

  // Add the parent item to it's own subItems list and prefix the text if present
  if (parentItem && type === 'expanded') {
    menuItemProps.unshift({
      ...parentItem,
      text: `${prefixText} ${parentItem.text}`,
      parentId: parentItem.id
    });
  }

  return menuItemProps;
}
