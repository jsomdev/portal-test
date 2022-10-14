import React from 'react';

import { useRouter } from 'next/dist/client/router';
import { defineMessages, useIntl } from 'react-intl';

import { useMsal } from '@azure/msal-react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { useMe } from '@providers/user/userContext';
import { messageIds } from '@services/i18n';
import { mapRegionsToMenuItems } from '@widgets/headers/site-header/appNavigationMenu.helper';
import {
  getCountryImage,
  getSupportedRegionsWithPaths
} from '@widgets/headers/site-header/language-menu/languageMenuCountry.helper';
import MultiMenu from '@widgets/headers/site-header/multi-menu/multiMenu';
import { MultiMenuConfiguration } from '@widgets/headers/site-header/multi-menu/multiMenu.types';
import { usePageContext } from '@widgets/page/pageContext';

import { mapMenuItemsToMenuItemViewModel } from '../main-header/mainHeader.helper';
import { getAppUserMenuItems } from './siteHeader.helper';

const messages = defineMessages({
  mainMenuViewAllCategories: {
    id: messageIds.navigation.main.viewAllCategories,
    description: 'View all categories text',
    defaultMessage: 'View all categories'
  },
  signIn: {
    id: messageIds.navigation.user.signIn,
    description: 'Link text for sign in button',
    defaultMessage: 'Sign In'
  },
  currentLanguageTitle: {
    id: messageIds.navigation.locale.title,
    description: 'Selected Country/Region',
    defaultMessage: 'Selected Country/Region'
  }
});

type AppNavigationMenuProps = {
  onDismiss: () => void;
};

export const AppNavigationMenu: React.FC<AppNavigationMenuProps> = ({
  onDismiss
}) => {
  const {
    mainMenuItems: globalMainMenuItems,
    siteMenuItems: globalSiteMenuItems
  } = useGlobalData();
  const intl = useIntl();
  const { formatMessage } = intl;
  const { instance } = useMsal();
  const { me } = useMe();
  const { localePaths } = usePageContext();
  const { defaultLocale, locale } = useRouter();

  const regions = defaultLocale
    ? getSupportedRegionsWithPaths(localePaths, defaultLocale)
    : null;

  const currentCountry = locale?.substr(locale?.indexOf('-') + 1);

  const currentCountryFlag = currentCountry
    ? getCountryImage(currentCountry)
    : undefined;

  const configuration: MultiMenuConfiguration = {
    mainMenu: {
      backButtonText: formatMessage(messages.mainMenuViewAllCategories),
      hideOtherMenusWhenActive: false,
      style: 'default',
      items: mapMenuItemsToMenuItemViewModel(
        globalMainMenuItems || [],
        'expanded',
        intl,
        null
      )
    },
    languageMenu: {
      backButtonText: formatMessage(messages.mainMenuViewAllCategories),
      hideOtherMenusWhenActive: true,
      style: 'plain',
      items: [
        {
          id: 'language-menu',
          text: `${formatMessage(messages.currentLanguageTitle)}: ${locale}`,
          image: currentCountryFlag,
          href: undefined,
          children: regions ? mapRegionsToMenuItems(regions, onDismiss) : []
        }
      ]
    },
    siteMenu: {
      backButtonText: formatMessage(messages.mainMenuViewAllCategories),
      hideOtherMenusWhenActive: true,
      style: 'plain',
      items: mapMenuItemsToMenuItemViewModel(
        globalSiteMenuItems || [],
        'default',
        intl
      )
    },
    userMenu: {
      backButtonText: formatMessage(messages.mainMenuViewAllCategories),
      hideOtherMenusWhenActive: true,
      style: 'plain',
      items: getAppUserMenuItems(intl, me, instance)
    }
  };
  return <MultiMenu configuration={configuration} onDismiss={onDismiss} />;
};
