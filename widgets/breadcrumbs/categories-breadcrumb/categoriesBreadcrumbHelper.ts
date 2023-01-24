import { Url } from 'url';

import { IBreadcrumbItem } from '@fluentui/react';
import { CategoryFormatter } from '@services/i18n/formatters/entity-formatters/categoryFormatter';
import { Category } from '@services/portal-api';
import pagePaths from '@utilities/pagePaths';

import {
  getCategoryBreadcrumbItemsRecursively,
  homeBreadcrumb
} from '../breadcrumbHelpers';

/**
 * Function that will build and return the ordered Breadcrumbs for the Categories page.
 * @param currentCategory Category that should be the current Breadcrumb
 * @param onBreadcrumbItemClick callback that expects the location and event to be passed as parameters
 */
export function getCategoryOverviewBreadcrumbItems(
  currentCategory: Category,
  onBreadcrumbItemClick: (
    location: Partial<Url> | string,
    event: React.MouseEvent<HTMLElement, MouseEvent> | undefined
  ) => void,
  locale: string
): IBreadcrumbItem[] {
  const breadCrumbItems: IBreadcrumbItem[] = [];
  // 1. Add the root breadcrumb to the array
  breadCrumbItems.push({
    ...homeBreadcrumb,
    onClick: ev => onBreadcrumbItemClick(pagePaths.home, ev)
  });

  // 2. Build the category hierarchy as breadcrumbs (e.g: Hydraulic Nozzles > ...)

  const categoryHierarchyBreadcrumbItems: IBreadcrumbItem[] =
    getCategoryBreadcrumbItemsRecursively(
      currentCategory.parent,
      onBreadcrumbItemClick,
      locale,
      []
    );
  breadCrumbItems.push(...categoryHierarchyBreadcrumbItems);

  const categoryFormatter = new CategoryFormatter(currentCategory, locale);

  //4. Add the currentCategory as currentItem
  const currentCategoryItem: IBreadcrumbItem = {
    key: currentCategory.id || '',
    text: categoryFormatter.formatName() || '',
    onClick: undefined,
    isCurrentItem: true
  };
  breadCrumbItems.push(currentCategoryItem);

  return breadCrumbItems;
}
