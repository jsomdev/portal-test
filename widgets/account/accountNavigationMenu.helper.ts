import { IntlShape, defineMessages } from 'react-intl';

import { IPublicClientApplication } from '@azure/msal-browser';
import { INavLinkGroup } from '@fluentui/react';
import { customerLoginRequest } from '@services/authentication/authenticationConfiguration';
import { messageIds } from '@services/i18n';
import { User } from '@services/portal-api';
import pagePaths from '@utilities/pagePaths';
import { MenuItemViewModel } from '@widgets/headers/main-header/mainHeader.helper';

const messages = defineMessages({
  overview: {
    id: messageIds.pages.account.overview.title,
    description: 'Link text for account overview',
    defaultMessage: 'Account Overview'
  },
  orders: {
    id: messageIds.pages.account.sections.orders.title,
    description: 'Link text for orders',
    defaultMessage: 'Orders'
  },
  quotes: {
    id: messageIds.pages.account.sections.quotes.title,
    description: 'Link text for quotes',
    defaultMessage: 'Quotes'
  },
  quoteRequests: {
    id: messageIds.pages.account.sections.quoteRequests.title,
    description: 'Link text for quote requests',
    defaultMessage: 'Quote Requests'
  },
  infoAndPreferences: {
    id: messageIds.pages.account.sections.infoAndPreferences.title,
    description: 'Link text for quote info and preferences',
    defaultMessage: 'Info & Preferences'
  },
  signOut: {
    id: messageIds.pages.account.signOut,
    description: 'Text for the sign out button',
    defaultMessage: 'Sign out'
  },
  welcome: {
    id: messageIds.pages.account.overview.welcome,
    description: 'Text to welcome user',
    defaultMessage: 'Welcome'
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
    id: messageIds.navigation.account.signIn,
    description: 'Link text for sign in button',
    defaultMessage: 'Sign In'
  },
  accountPage: {
    id: messageIds.pages.account.overview.link,
    description: 'Link text for account page',
    defaultMessage: 'My Account'
  }
});

/**
 * @returns MenuItemViewModel[]
 * @param intl intl shape used to format the message
 * @param me Used to determine if a sign in button or account link will be returned
 * @param instance the msal instance used for the login redirect
 * @returns MenuItemViewModel[]
 */
export function getAppNavigationAccountMenuItems(
  intl: IntlShape,
  me: User | undefined,
  instance: IPublicClientApplication
): MenuItemViewModel[] {
  const { formatMessage } = intl;
  if (me) {
    return [
      {
        href: pagePaths.accountOverview,
        text: formatMessage(messages.accountPage),
        id: 'main-menu-account'
      }
    ];
  }
  return [
    {
      href: '#',
      text: formatMessage(messages.signIn),
      onClick: () => {
        instance.loginRedirect(customerLoginRequest);
      },
      id: 'main-menu-sign-in'
    }
  ];
}

/**
 * This function will return menu items used on the account menu accessed through the site-header on mobile
 * @param intl intl shape used to format the message
 * @param me Used to determine if a sign in button or sign out will be returned
 * @param instance the msal instance used for the login / logout redirect
 * @returns MenuItemViewModel[]
 */
export function getAccountNavigationMenuItems(
  intl: IntlShape,
  me: User | undefined,
  instance: IPublicClientApplication
): MenuItemViewModel[] {
  const { formatMessage } = intl;

  if (me) {
    return [
      {
        href: pagePaths.accountOverview,
        text: formatMessage(messages.overview),
        id: 'account'
      },
      {
        href: pagePaths.orders,
        text: formatMessage(messages.orders),
        id: 'account-orders'
      },
      {
        href: pagePaths.quotes,
        text: formatMessage(messages.quotes),
        id: 'account-quotes'
      },
      {
        href: pagePaths.quoteRequests,
        text: formatMessage(messages.quoteRequests),
        id: 'account-quote-requests'
      },
      {
        href: pagePaths.infoAndPreferences,
        text: formatMessage(messages.infoAndPreferences),
        id: 'account-info-and-preferences'
      },
      {
        href: '#',
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
      href: '#',
      text: formatMessage(messages.signIn),
      onClick: () => {
        instance.loginRedirect(customerLoginRequest);
      },
      id: 'account-sign-in'
    }
  ];
}

/**
 * This function will return menu items used on the account menu on the desktop verion of the account pages
 * @param intl intl shape used to format the message
 * @param isAuthenticated Used to determine if a sign in button or sign out will be returned
 * @param instance the msal instance used for the login / logout redirect
 * @returns INavLinkGroup[]
 */
export function getAccountSideNavigationLinkGroupItems(
  intl: IntlShape,
  isAuthenticated: boolean
): INavLinkGroup[] {
  const { formatMessage } = intl;
  if (isAuthenticated) {
    return [
      {
        links: [
          {
            name: formatMessage(messages.overview),
            url: pagePaths.accountOverview
          },
          {
            name: formatMessage(messages.orders),
            url: pagePaths.orders
          },
          {
            name: formatMessage(messages.quotes),
            url: pagePaths.quotes
          },
          {
            name: formatMessage(messages.quoteRequests),
            url: pagePaths.quoteRequests
          },
          {
            name: formatMessage(messages.infoAndPreferences),
            url: pagePaths.infoAndPreferences
          }
        ]
      }
    ];
  }

  return [
    {
      links: [
        {
          name: formatMessage(messages.overview),
          url: pagePaths.accountOverview
        }
      ]
    }
  ];
}

/**
 * Returns the class name or undefined for an account navigation menu item.
 * @param {string} linkPath - The path of the menu item link.
 * @param {string} routerPathname - the pathname from the NextJS router object.
 * @param {string} activeClassName - The class name to return if the menu item is active.
 * @returns {string} - The class name or undefined for each menu item.
 */
export function getAccountNavigationMenuItemClassName(
  linkPath: string | undefined,
  routerPathname: string,
  activeClassName: string
): string | undefined {
  if (linkPath && routerPathname.includes(linkPath)) {
    return activeClassName;
  }
  return undefined;
}
