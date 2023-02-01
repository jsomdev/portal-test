import React, { useMemo } from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { IBreadcrumbItem } from '@fluentui/react';
import { Model, Product } from '@services/portal-api';
import { MainBreadcrumb } from '@widgets/spray-portal-breadcrumb/mainBreadcrumb';

import { getProductBreadcrumbItems } from './productBreadcrumbHelper';

interface ProductBreadcrumbProps {
  product: Product;
  model: Model | null | undefined;
}

/**
 * Wrapper component for the MainBreadcrumb.
 * This smart component will pass on the expected IBreadcrumbItems to the MainBreadcrumb.
 * It is expected to be used on the Product Page
 */
export const ProductBreadcrumb: React.FC<ProductBreadcrumbProps> = props => {
  const { push } = useRouter();
  const { locale } = useIntl();

  const breadCrumbItems: IBreadcrumbItem[] = useMemo(() => {
    return getProductBreadcrumbItems(
      props.product,
      props.model,
      (url, event) => {
        event?.preventDefault();
        push(url);
      },
      locale
    );
  }, [props.product, props.model, locale, push]);

  return <MainBreadcrumb items={breadCrumbItems} />;
};
