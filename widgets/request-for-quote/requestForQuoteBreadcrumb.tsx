import React from 'react';

import { useIntl } from 'react-intl';

import { messageIds } from '@services/i18n';
import { MainBreadcrumb } from '@widgets/spray-portal-breadcrumb/mainBreadcrumb';

/**
 * Wrapper component for the MainBreadcrumb.
 * This smart component will pass on the expected IBreadcrumbItems to the MainBreadcrumb.
 * It is expected to be used on the checkout page.
 */
export const RequestForQuoteBreadcrumb: React.FC = () => {
  const { formatMessage } = useIntl();
  const breadCrumbItems = [
    {
      key: 'home',
      text: formatMessage({ id: messageIds.pages.home.headTitle }),
      isCurrentItem: false,
      href: '/'
    },
    {
      key: 'cart',
      text: formatMessage({ id: messageIds.pages.cart.title }),
      href: '/cart',
      isCurrentItem: false
    },
    {
      key: 'checkout',
      text: formatMessage({ id: messageIds.pages.requestForQuote.title }),
      isCurrentItem: true
    }
  ];

  return <MainBreadcrumb items={breadCrumbItems} />;
};
