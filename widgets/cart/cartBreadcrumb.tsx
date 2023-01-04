import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { IBreadcrumbItem } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';
import { homeBreadcrumb } from '@widgets/breadcrumbs/breadcrumbHelpers';
import { MainBreadcrumb } from '@widgets/spray-portal-breadcrumb/mainBreadcrumb';

const messages = defineMessages({
  home: {
    id: messageIds.pages.home.headTitle,
    defaultMessage: 'Home',
    description: 'Home breadcrumb'
  },
  cart: {
    id: messageIds.pages.cart.title,
    defaultMessage: 'Cart',
    description: 'Cart breadcrumb'
  }
});

/**
 * Wrapper component for the MainBreadcrumb.
 * This smart component will pass on the expected IBreadcrumbItems to the MainBreadcrumb.
 * It is expected to be used on the cart page.
 */
export const CartBreadcrumb: React.FC = () => {
  const { formatMessage } = useIntl();
  const breadCrumbItems: IBreadcrumbItem[] = [
    {
      ...homeBreadcrumb
    },
    {
      key: 'cart',
      text: formatMessage(messages.cart),
      href: '',
      isCurrentItem: true
    }
  ];

  return <MainBreadcrumb items={breadCrumbItems} />;
};
