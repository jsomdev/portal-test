import React, { useMemo } from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { IBreadcrumbItem } from '@fluentui/react';
import { Model } from '@services/portal-api';
import { MainBreadcrumb } from '@widgets/spray-portal-breadcrumb/mainBreadcrumb';

import { getModelBreadcrumbItems } from './modelBreadcrumbHelper';

interface ModelBreadcrumbProps {
  model: Model;
}

/**
 * Wrapper component for the MainBreadcrumb.
 * This smart component will pass on the expected IBreadcrumbItems to the MainBreadcrumb.
 * It is expected to be used on the Model Page
 */
export const ModelBreadcrumb: React.FC<ModelBreadcrumbProps> = props => {
  const { push } = useRouter();
  const { locale } = useIntl();

  const breadCrumbItems: IBreadcrumbItem[] = useMemo(() => {
    return getModelBreadcrumbItems(
      props.model,
      (url, event) => {
        event?.preventDefault();
        push(url);
      },
      locale
    );
  }, [props.model, locale, push]);

  return <MainBreadcrumb items={breadCrumbItems} />;
};
