import React from 'react';

import { useIntl } from 'react-intl';

import { messageIds } from '@services/i18n';
import { homeBreadcrumb } from '@widgets/breadcrumbs/breadcrumbHelpers';
import { MainBreadcrumb } from '@widgets/spray-portal-breadcrumb/mainBreadcrumb';

/**
 * Wrapper component for the MainBreadcrumb.
 * This smart component will pass on the expected IBreadcrumbItems to the MainBreadcrumb.
 * It is expected to be used on the checkout page.
 */
export const CheckoutBreadcrumb: React.FC = () => {
  const { formatMessage } = useIntl();
  const breadCrumbItems = [
    {
      ...homeBreadcrumb
    },
    {
      key: 'cart',
      text: formatMessage({ id: messageIds.pages.cart.title }),
      href: '/cart',
      isCurrentItem: false
    },
    {
      key: 'checkout',
      text: formatMessage({ id: messageIds.pages.checkout.title }),
      isCurrentItem: true
    }
  ];

  return <MainBreadcrumb items={breadCrumbItems} />;
};
