import { IntlShape } from 'react-intl';
import { UrlObject } from 'url';

import { IBreadcrumbItem } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import pagePaths from '@utilities/pagePaths';

import { LastSearch, homeBreadcrumb } from '../breadcrumbHelpers';

/**
 * Function that will build and return the ordered Breadcrumbs for the Search page.
 * @param onBreadcrumbItemClick callback that expects the location and event to be passed as parameters
 * @param lastSearch  (optional) LastSearch object that holds information about the last search page
 */
export function getSearchBreadcrumbItems(
  lastSearch: LastSearch | undefined,
  onBreadcrumbItemClick: (
    url: UrlObject | string,
    event: React.MouseEvent<HTMLElement, MouseEvent> | undefined
  ) => void,
  intl: IntlShape,
  tabletAndDesktop: boolean
): IBreadcrumbItem[] {
  const breadCrumbItems: IBreadcrumbItem[] = [];
  // 1. Add the root breadcrumb to the array
  breadCrumbItems.push({
    ...homeBreadcrumb,
    onClick: ev => onBreadcrumbItemClick(pagePaths.home, ev)
  });

  // 2. Add the base search breadcrumb to the array

  breadCrumbItems.push({
    key: 'search',
    text: intl.formatMessage({
      id: messageIds.pages.category.titleWithoutSearchOrCategory
    }),
    onClick: lastSearch
      ? ev => onBreadcrumbItemClick(pagePaths.search(), ev)
      : undefined,
    isCurrentItem: !lastSearch
  });

  // 2. Add the last search as current item
  if (lastSearch !== undefined && tabletAndDesktop) {
    breadCrumbItems.push({
      key: lastSearch.text,
      text: lastSearch.text,
      isCurrentItem: true
    });
  }
  return breadCrumbItems;
}
