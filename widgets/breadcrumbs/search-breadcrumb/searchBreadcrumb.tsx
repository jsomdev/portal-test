import React, { useMemo } from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { IBreadcrumbItem } from '@fluentui/react';
import { useTabletAndDesktop } from '@widgets/media-queries';
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
  const tabletAndDesktop = useTabletAndDesktop();
  const intl = useIntl();
  const breadcrumbItems: IBreadcrumbItem[] = useMemo(() => {
    return getSearchBreadcrumbItems(
      props.lastSearch,
      (url, event) => {
        event?.preventDefault();
        push(url);
      },
      intl,
      tabletAndDesktop
    );
  }, [intl, props.lastSearch, push, tabletAndDesktop]);

  return <MainBreadcrumb items={breadcrumbItems} />;
};
