import React, { useMemo } from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { IBreadcrumbItem } from '@fluentui/react';
import { Category } from '@services/portal-api';
import { MainBreadcrumb } from '@widgets/spray-portal-breadcrumb/mainBreadcrumb';

import { getCategoryOverviewBreadcrumbItems } from './categoriesBreadcrumbHelper';

export interface CategoriesBreadcrumbProps {
  category: Category;
}

/**
 * Breadcrumb component that will render the breadcrumb for the search page
 * @param props lastCategories needs to be passed and is used to build the current breadcrumb item
 */
export const CategoriesBreadcrumb: React.FC<
  CategoriesBreadcrumbProps
> = props => {
  const { push } = useRouter();
  const intl = useIntl();
  const breadcrumbItems: IBreadcrumbItem[] = useMemo(() => {
    return getCategoryOverviewBreadcrumbItems(
      props.category,
      (url, event) => {
        event?.preventDefault();
        push(url);
      },
      intl.locale
    );
  }, [intl.locale, props.category, push]);

  return <MainBreadcrumb items={breadcrumbItems} />;
};
