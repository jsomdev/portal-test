import React from 'react';

import { useIntl } from 'react-intl';

import { MainBreadcrumb } from '@widgets/spray-portal-breadcrumb/mainBreadcrumb';

/**
 * Wrapper component for the MainBreadcrumb.
 * This smart component will pass on the expected IBreadcrumbItems to the MainBreadcrumb.
 * It is expected to be used on the checkout page.
 */
// eslint-disable-next-line max-len
export const CheckoutBreadcrumb: React.FC = () => {
  const { formatMessage } = useIntl();
  const breadCrumbItems = [
    {
      key: 'home',
      text: 'Home', //TODO ward i18n
      isCurrentItem: false,
      href: '/'
    },
    {
      key: 'cart',
      text: 'Cart', //TODO ward i18n
      href: '/cart',
      isCurrentItem: false
    },
    {
      key: 'checkout',
      text: 'Checkout', //TODO ward i18n
      isCurrentItem: true
    }
  ];

  return <MainBreadcrumb items={breadCrumbItems} />;
};
