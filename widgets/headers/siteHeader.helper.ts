import { SiteHeaderMenuUrlFormatter } from '@services/i18n/formatters/entity-formatters/siteMenuItemFormatter';
import { MenuItem } from './../../services/portal-api/models/MenuItem';
export function mapSiteMenuItemsToMenuItems(
  items: MenuItem[],
  locale?: string
): MenuItem[] {
  const returnItems: MenuItem[] = [];
  items.map(menuItem => {
    if (menuItem && menuItem.url) {
      const formatter = new SiteHeaderMenuUrlFormatter(menuItem.url, locale);
      returnItems.push({
        ...menuItem,
        url: {
          text: formatter.formatText(),
          type: '',
          value: formatter.formatHref()
        }
      });
    }
  });
  return [];
}
