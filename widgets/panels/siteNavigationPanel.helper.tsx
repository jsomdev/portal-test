import { INavLink, INavLinkGroup } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { MenuItem } from '@services/portal-api/models/MenuItem';
import { mainMenuItems, siteMenuItems } from '@services/preval';

import { SiteNavigationType } from './siteNavigationPanel.types';

// Group including the spray.com links
const siteNavigationLinkGroup: INavLinkGroup = {
  name: messageIds.navigation.site.title,
  expandAriaLabel: messageIds.navigation.site.expandLabel,
  collapseAriaLabel: messageIds.navigation.site.collapseLabel,
  collapseByDefault: true,
  groupData: {
    iconName: 'BusinessCenterLogo'
  },
  links: siteMenuItems.map(
    (item: MenuItem): INavLink => ({
      name: item?.url?.text?.en || '',
      url: item?.url?.value || ''
    })
  )
};

// Group including the root category links for the application
const mainNavigationLinkGroup: INavLinkGroup = {
  name: messageIds.navigation.main.title,
  collapseByDefault: true,
  expandAriaLabel: messageIds.navigation.main.expandLabel,
  collapseAriaLabel: messageIds.navigation.main.collapseLabel,
  groupData: {
    iconName: 'ContextMenu'
  },
  links: mainMenuItems
    .filter(item => item.parentId === null)
    .map(
      (rootItem: MenuItem): INavLink => ({
        name: rootItem.url?.text?.en || '',
        url: rootItem.url?.value || ''
        //   links: mainMenuItems
        //     .filter((item) => item.parentId === rootItem.id)
        //     .map((childItem: MenuItem) => ({
        //       name: childItem.url?.text?.en || '',
        //       url: childItem.url?.value || '',
        //     })),
      })
    )
};

// Group including the user links for the guest / authenticated user
const userNavigationLinkGroup: INavLinkGroup = {
  name: messageIds.navigation.user.title,
  collapseByDefault: true,
  expandAriaLabel: messageIds.navigation.user.expandLabel,
  collapseAriaLabel: messageIds.navigation.user.collapseLabel,
  groupData: {
    iconName: 'AccountManagement'
  },
  links: [
    {
      name: 'Todo #1',
      url: 'Todo #1'
    },
    {
      name: 'Todo #2',
      url: 'Todo #2'
    },
    {
      name: 'Sign in',
      url: 'Sign in'
    },
    {
      name: 'Sign out',
      url: 'Sign out'
    }
  ]
};
/**
 * Getter function for the navigation link groups inside the site navigation panel.
 * @param type indicates the type of navigation that was referenced
 * @returns Array of INavLinkGroup that will be displayed in the site navigation panel
 */
export function getSiteNavigationPanelLinkGroups(
  type: SiteNavigationType | null
): INavLinkGroup[] {
  const navigationLinkGroups: INavLinkGroup[] = [
    siteNavigationLinkGroup,
    { ...mainNavigationLinkGroup, collapseByDefault: type !== 'site' },
    { ...userNavigationLinkGroup, collapseByDefault: type !== 'user' }
  ];

  return navigationLinkGroups;
}
