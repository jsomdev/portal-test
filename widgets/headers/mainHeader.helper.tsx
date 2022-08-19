import { MenuItemFormatter } from '@services/i18n/formatters/entity-formatters/menuItemFormatter';
import { MenuItem } from '@services/portal-api/models/MenuItem';

export type SiteMenuItem = {
  href: string;
  text: string;
  subItems?: Array<{ href: string; text: string }>;
};

export function mapGlobalMenuItemsToMainMenuItems(
  menuItems: MenuItem[],
  locale?: string
): SiteMenuItem[] {
  return menuItems
    .filter(item => {
      return !item.parentId;
    })
    .map(menuItem =>
      mapGlobalMenuItemToMainMenuItem(menuItem, menuItems, locale)
    );
}

function mapGlobalMenuItemToMainMenuItem(
  menuItem: MenuItem,
  menuItems: MenuItem[],
  locale?: string
): SiteMenuItem {
  const menuItemFormatter = new MenuItemFormatter(menuItem, locale);
  return {
    href: menuItemFormatter.formatHref() || '/404',
    text: menuItemFormatter.formatText(),
    subItems: menuItems
      .filter(subItem => {
        return subItem.parentId === menuItem.id;
      })
      .map(subMenuItem => {
        const subMenuItemFormatter = new MenuItemFormatter(subMenuItem, locale);
        return {
          href: subMenuItemFormatter.formatHref() || '/404',
          text: subMenuItemFormatter.formatText()
        };
      })
  };
}
