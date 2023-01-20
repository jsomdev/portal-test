import { Url } from 'url';

import { IBreadcrumbItem } from '@fluentui/react';
import { CategoryFormatter } from '@services/i18n/formatters/entity-formatters/categoryFormatter';
import { Category } from '@services/portal-api';
import pagePaths from '@utilities/pagePaths';

/**LastSearch is a type that describes the state of the route on the Search page, to allow the next route on the history stack to access
 * this last search (e.g: on a breadcrumb).
 */
export type LastSearch = {
  /**
   * Describes the last search page (e.g: Search results for 'Hydrau')
   */

  text: string;
  /**
   * Url that contains information of the route that
   * was active on the search page. This is used to direct back to the search page.
   */
  url: Partial<Url> | string;
};

/**
 * Function that will map the listItem's parent(s) to an array of IBreadcrumbItems,
 * until no more parent is present.
 * @param parent Category that is the parent of the category the hierarchy is needed for.
 * @param onClick callback that expects the location and event to be passed as parameters
 * @param location Location that holds the route information of the breadcrumb
 * @param categoryHierarchyBreadcrumbItems Array for IBreadcrumbItems that will be passed recursively
 */
export function getCategoryBreadcrumbItemsRecursively(
  parent: Category | undefined | null,
  onClick: (
    url: Partial<Url | string>,
    event: React.MouseEvent<HTMLElement, MouseEvent> | undefined
  ) => void,
  locale: string,
  categoryHierarchyBreadcrumbItems: IBreadcrumbItem[] = []
): IBreadcrumbItem[] {
  if (parent) {
    const categoryFormatter = new CategoryFormatter(parent, locale);
    categoryHierarchyBreadcrumbItems.push({
      key: parent.id || '',
      text: categoryFormatter.formatName(),
      href: categoryFormatter.formatHref(),
      onClick: ev => onClick(categoryFormatter.formatHref(), ev)
    });
    if (parent.parent) {
      return getCategoryBreadcrumbItemsRecursively(
        parent.parent,
        onClick,
        locale,
        categoryHierarchyBreadcrumbItems
      );
    }
  }

  return categoryHierarchyBreadcrumbItems.reverse();
}

export const homeBreadcrumb: IBreadcrumbItem = {
  text: 'portal.spray.com',
  key: 'home',
  href: pagePaths.home,
  isCurrentItem: false
};
