import { MenuItemFormatter } from '@services/i18n/formatters/entity-formatters/menuItemFormatter';
import { MenuItem } from './../../services/portal-api/models/MenuItem';
import { SiteHeaderItemProps } from './siteHeaderItem';

export function mapMenuItemsToSiteHeaderItemProps(
  menuItems: MenuItem[],
  locale?: string
): SiteHeaderItemProps[] {
  return menuItems.map(menuItem =>
    mapMenuItemToSiteHeaderItemProps(menuItem, locale)
  );
}

function mapMenuItemToSiteHeaderItemProps(
  menuItem: MenuItem,
  locale?: string
): SiteHeaderItemProps {
  const menuItemFormatter = new MenuItemFormatter(menuItem, locale);
  return {
    //TODO add route path isntead of hardcoded 404 @Jan
    href: menuItemFormatter.formatHref() || '/404',
    text: menuItemFormatter.formatText()
  };
}
