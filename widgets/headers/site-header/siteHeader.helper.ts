import { IntlShape, defineMessages } from 'react-intl';

import { IPublicClientApplication } from '@azure/msal-browser';
import { customerLoginRequest } from '@services/authentication/authenticationConfiguration';
import { messageIds } from '@services/i18n';
import { User } from '@services/portal-api';

import { MenuItemViewModel } from '../main-header/mainHeader.helper';

const messages = defineMessages({
  overview: {
    id: messageIds.pages.account.overview.title,
    description: 'Link text for account overview',
    defaultMessage: 'Account Overview default'
  },
  orders: {
    id: messageIds.pages.account.sections.orders.title,
    description: 'Link text for orders',
    defaultMessage: 'Orders default'
  },
  quoteRequests: {
    id: messageIds.pages.account.sections.quoteRequests.title,
    description: 'Link text for quote requests',
    defaultMessage: 'Quote Requests default'
  },
  infoAndPreferences: {
    id: messageIds.pages.account.sections.infoAndPreferences.title,
    description: 'Link text for quote info and preferences',
    defaultMessage: 'Info & Preferences default'
  },
  signOut: {
    id: messageIds.pages.account.signOut,
    description: 'Text for the sign out button',
    defaultMessage: 'Sign out default'
  },
  welcome: {
    id: messageIds.pages.account.overview.welcome,
    description: 'Text to welcome user',
    defaultMessage: 'Welcome default'
  },
  profileInformation: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .profileInformation.title,
    description: 'Link text for account profile information',
    defaultMessage: 'Profile Information Default'
  },
  addressBook: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .addressBook.title,
    description: 'Link text for account address book',
    defaultMessage: 'Address book Default'
  },
  companyInformation: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .companyInformation.title,
    description: 'Link text for account company information',
    defaultMessage: 'Comapny Information Default'
  },
  preferences: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .preferences.title,
    description: 'Link text for account preferences',
    defaultMessage: 'Preferences Default'
  },
  signIn: {
    id: messageIds.navigation.user.signIn,
    description: 'Link text for sign in button',
    defaultMessage: 'Sign In'
  },
  accountPage: {
    id: messageIds.pages.account.overview.link,
    description: 'Link text for account page',
    defaultMessage: 'My Account default'
  }
});

export function getAppUserMenuItems(
  intl: IntlShape,
  me: User | undefined,
  instance: IPublicClientApplication
): MenuItemViewModel[] {
  const { formatMessage } = intl;
  if (me) {
    return [
      {
        href: '/account',
        text: formatMessage(messages.accountPage),
        id: 'main-menu-account'
      }
    ];
  }
  return [
    {
      text: formatMessage(messages.signIn),
      onClick: () => {
        instance.loginRedirect(customerLoginRequest);
      },
      id: 'main-menu-sign-in'
    }
  ];
}

export function getUserMenuItems(
  intl: IntlShape,
  me: User | undefined,
  instance: IPublicClientApplication
): MenuItemViewModel[] {
  const { formatMessage } = intl;

  if (me) {
    return [
      {
        href: '/account',
        text: formatMessage(messages.overview),
        id: 'account'
      },
      {
        href: '/account/orders',
        text: formatMessage(messages.orders),
        id: 'account-orders'
      },
      {
        href: '/account/quote-requests',
        text: formatMessage(messages.quoteRequests),
        id: 'account-quote-requests'
      },
      {
        text: formatMessage(messages.infoAndPreferences),
        id: 'account-info-and-preferences',
        href: '/account/info-and-preferences'
      },
      {
        text: formatMessage(messages.signOut),
        onClick: () => {
          return instance.logoutRedirect(customerLoginRequest);
        },
        id: 'account-sign-out'
      }
    ];
  }
  return [
    {
      text: formatMessage(messages.signIn),
      onClick: () => {
        instance.loginRedirect(customerLoginRequest);
      },
      id: 'account-sign-in'
    }
  ];
}
