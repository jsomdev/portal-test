import { INavLink, INavLinkGroup } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { MenuItem } from '@services/portal-api/models/MenuItem';

// Group including the root category links for the application
const mainNavigationLinkGroup: (
  items: MenuItem[]
) => INavLinkGroup = items => ({
  name: messageIds.navigation.main.title,
  collapseByDefault: true,
  expandAriaLabel: messageIds.navigation.main.expandLabel,
  collapseAriaLabel: messageIds.navigation.main.collapseLabel,
  groupData: {
    iconName: 'ContextMenu'
  },
  links: items
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
});

/**
 * Getter function for the navigation link groups inside the app navigation panel.
 * @param type indicates the type of navigation that was referenced
 * @returns Array of INavLinkGroup that will be displayed in the app navigation panel
 */
export function getAppNavigationPanelLinkGroups(
  mainMenuItems: MenuItem[]
): INavLinkGroup[] {
  const navigationLinkGroups: INavLinkGroup[] = [
    {
      ...mainNavigationLinkGroup(mainMenuItems)
    }
  ];

  return navigationLinkGroups;
}
