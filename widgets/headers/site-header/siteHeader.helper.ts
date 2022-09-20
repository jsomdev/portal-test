import { MenuItemFormatter } from '@services/i18n/formatters/entity-formatters/menuItemFormatter';

import { MenuItem } from '../../../services/portal-api/models/MenuItem';
import { MenuItemProps } from '../main-header/mainHeader.helper';

export function mapMenuItemsToSiteHeaderItemProps(
  menuItems: MenuItem[],
  locale?: string
): MenuItemProps[] {
  return menuItems.map(menuItem =>
    mapMenuItemToSiteHeaderItemProps(menuItem, locale)
  );
}

function mapMenuItemToSiteHeaderItemProps(
  menuItem: MenuItem,
  locale?: string
): MenuItemProps {
  const menuItemFormatter = new MenuItemFormatter(menuItem, locale);
  return {
    href: menuItemFormatter.formatHref() || '/404',
    text: menuItemFormatter.formatText(),
    id: menuItem.id
  };
}
