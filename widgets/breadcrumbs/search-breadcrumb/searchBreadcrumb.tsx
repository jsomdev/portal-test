import React, { useMemo } from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { Url } from 'url';

import { IBreadcrumbItem } from '@fluentui/react';
import { MainBreadcrumb } from '@widgets/spray-portal-breadcrumb/mainBreadcrumb';

import { LastSearch } from '../breadcrumbHelpers';
import { getSearchBreadcrumbItems } from './searchBreadcrumbHelper';

export interface SearchBreadcrumbProps {
  lastSearch: LastSearch | undefined;
}

/**
 * Breadcrumb component that will render the breadcrumb for the search page
 * @param props lastSearch needs to be passed and is used to build the current breadcrumb item
 */
export const SearchBreadcrumb: React.FC<SearchBreadcrumbProps> = props => {
  const { push } = useRouter();
  const intl = useIntl();
  const breadcrumbItems: IBreadcrumbItem[] = useMemo(() => {
    return getSearchBreadcrumbItems(
      props.lastSearch,
      (url, event) => {
        event?.preventDefault();
        push(url);
      },
      intl
    );
  }, [intl, props.lastSearch, push]);

  return <MainBreadcrumb items={breadcrumbItems} />;
};
