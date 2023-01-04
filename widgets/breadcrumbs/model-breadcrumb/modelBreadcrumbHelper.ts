import { Guid } from 'guid-typescript';
import { Url } from 'url';

import { IBreadcrumbItem } from '@fluentui/react';
import { ModelFormatter } from '@services/i18n/formatters/entity-formatters/modelFormatter';
import { TextFormatter } from '@services/i18n/formatters/entity-formatters/textFormatter';
import pagePaths from '@utilities/pagePaths';

import { Model } from '../../../services/portal-api';
import { homeBreadcrumb } from '../breadcrumbHelpers';

/**
 * Function that will build and return the ordered Breadcrumbs for the Model page.
 * @param product Model that should be the current Breadcrumb
 * @param model Model that should be the current Breadcrumb
 * @param onBreadcrumbItemClick callback that expects the location and event to be passed as parameters
 */
export function getModelBreadcrumbItems(
  model: Model,
  onBreadcrumbItemClick: (
    url: Partial<Url> | string,
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

  // 2. Add the model as currentItem
  const modelFormatter = new ModelFormatter(model, locale);
  const textFormatter = new TextFormatter();
  const modelBreadcrumbItem: IBreadcrumbItem = {
    key: model?.id || Guid.create().toString(),
    text: textFormatter.formatText(model?.number || '', 40, '...'),
    href: modelFormatter.formatUrl() || '404',
    onClick: undefined,
    isCurrentItem: true
  };
  breadCrumbItems.push(modelBreadcrumbItem);

  return breadCrumbItems;
}
