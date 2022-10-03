import { IntlShape, defineMessages } from 'react-intl';

import { IPublicClientApplication } from '@azure/msal-browser';
import { customerLoginRequest } from '@services/authentication/authenticationConfiguration';
import { messageIds } from '@services/i18n';
import { User } from '@services/portal-api';

import { MenuItemProps } from '../main-header/mainHeader.helper';

const messages = defineMessages({
  overview: {
    id: messageIds.pages.account.overview,
    description: 'Link text for account overview',
    defaultMessage: 'Account Overview default'
  },
  orders: {
    id: messageIds.pages.account.orders,
    description: 'Link text for orders',
    defaultMessage: 'Orders default'
  },
  quoteRequests: {
    id: messageIds.pages.account.quoteRequests,
    description: 'Link text for quote requests',
    defaultMessage: 'Quote Requests default'
  },
  infoAndPreferences: {
    id: messageIds.pages.account.infoAndPreferences,
    description: 'Link text for quote info and preferences',
    defaultMessage: 'Info & Preferences default'
  },
  signOut: {
    id: messageIds.pages.account.signOut,
    description: 'Text for the sign out button',
    defaultMessage: 'Sign out default'
  },
  welcome: {
    id: messageIds.pages.account.welcome,
    description: 'Text to welcome user',
    defaultMessage: 'Welcome default'
  },
  profileInformation: {
    id: messageIds.pages.account.profileInformation,
    description: 'Link text for account profile information',
    defaultMessage: 'Profile Information Default'
  },
  addressBook: {
    id: messageIds.pages.account.addressBook,
    description: 'Link text for account address book',
    defaultMessage: 'Address book Default'
  },
  companyInformation: {
    id: messageIds.pages.account.companyInformation,
    description: 'Link text for account company information',
    defaultMessage: 'Comapny Information Default'
  },
  preferences: {
    id: messageIds.pages.account.preferences,
    description: 'Link text for account preferences',
    defaultMessage: 'Preferences Default'
  },
  signIn: {
    id: messageIds.navigation.user.signIn,
    description: 'Link text for sign in button',
    defaultMessage: 'Sign In'
  },
  accountPage: {
    id: messageIds.pages.account.accountPage,
    description: 'Link text for account page',
    defaultMessage: 'My Account'
  }
});

export function getAppUserMenuItems(
  intl: IntlShape,
  me: User | undefined,
  instance: IPublicClientApplication
): MenuItemProps[] {
  const { formatMessage } = intl;
  if (me) {
    return [
      {
        href: '/account',
        text: formatMessage(messages.accountPage),
        id: 'main-menu-account',
        parentId: undefined
      }
    ];
  }
  return [
    {
      text: formatMessage(messages.signIn),
      onClick: () => {
        instance.loginRedirect(customerLoginRequest);
      },
      id: 'main-menu-sign-in',
      parentId: undefined
    }
  ];
}

export function getUserMenuItems(
  intl: IntlShape,
  me: User | undefined,
  instance: IPublicClientApplication
): MenuItemProps[] {
  const { formatMessage } = intl;

  if (me) {
    return [
      {
        href: '/account',
        text: formatMessage(messages.overview),
        id: 'account',
        parentId: undefined
      },
      {
        href: '/account/orders',
        text: formatMessage(messages.orders),
        id: 'account-orders',
        parentId: undefined
      },
      {
        href: '/account/quote-requests',
        text: formatMessage(messages.quoteRequests),
        id: 'account-quote-requests',
        parentId: undefined
      },
      {
        text: formatMessage(messages.infoAndPreferences),
        id: 'account-info-and-preferences',
        parentId: undefined,
        children: [
          {
            href: '/account/profile-information',
            text: formatMessage(messages.profileInformation),
            id: 'account-profile-information',
            parentId: 'account-info-and-preferences'
          },
          {
            href: '/account/address-book',
            text: formatMessage(messages.addressBook),
            id: 'account-address-book',
            parentId: 'account-info-and-preferences'
          },
          {
            href: '/account/company-information',
            text: formatMessage(messages.companyInformation),
            id: 'account-company-information',
            parentId: 'account-info-and-preferences'
          },
          {
            href: '/account/preferences',
            text: formatMessage(messages.preferences),
            id: 'account-preferences',
            parentId: 'account-info-and-preferences'
          }
        ]
      },
      {
        text: formatMessage(messages.signOut),
        onClick: () => {
          instance.logoutRedirect(customerLoginRequest);
        },
        id: 'account-sign-out',
        parentId: undefined
      }
    ];
  }
  return [
    {
      text: formatMessage(messages.signIn),
      onClick: () => {
        instance.loginRedirect(customerLoginRequest);
      },
      id: 'account-sign-in',
      parentId: undefined
    }
  ];
}
