import React, { useMemo, useState } from 'react';

import { useTheme } from '@fluentui/react';
import { useLarge } from '@widgets/media-queries';
import { NavigationPanelType } from '@widgets/panels/navigation-panel/navigationPanel.types';

import { useGlobalData } from '@providers/global-data/globalDataContext';
import { messageIds } from '@services/i18n';
import { NavigationPanel } from '@widgets/panels/navigation-panel/navigationPanel';
import { defineMessages, useIntl } from 'react-intl';
import { HeroMenu } from '../main-header/hero-menu/heroMenu';
import { MainHeader } from '../main-header/mainHeader';
import {
  mapMenuItemsToMenuItemProps,
  MenuItemProps
} from '../main-header/mainHeader.helper';
import { SiteHeader } from '../site-header/siteHeader';
import { mapMenuItemsToSiteHeaderItemProps as mapGlobalSiteMenuItemsToMenuItemProps } from '../site-header/siteHeader.helper';

export interface AppHeaderStyles {
  root: React.CSSProperties;
}

const messages = defineMessages({
  mainMenuViewAllCategory: {
    id: messageIds.navigation.menu.viewAllCategory,
    description: 'View all ... ',
    defaultMessage: 'View all '
  }
});
/**
 * Header component that is displayed at the top of each page.
 */
export const AppHeader: React.FC = () => {
  const showMainHeader = useLarge();
  const { semanticColors } = useTheme();
  const { siteMenuItems, mainMenuItems } = useGlobalData();
  const { locale, formatMessage } = useIntl();

  const [sideNavigationType, setSideNavigationType] =
    useState<null | NavigationPanelType>(null);

  const [activeMenuItem, setActiveMenuItem] = useState<string | undefined>();

  const mappedSiteMenuItems: MenuItemProps[] = useMemo(() => {
    return mapGlobalSiteMenuItemsToMenuItemProps(siteMenuItems || [], locale);
  }, [locale, siteMenuItems]);

  function onSitePanelDismiss(): void {
    setSideNavigationType(null);
  }

  const mappedMainMenuItems: MenuItemProps[] = useMemo(() => {
    return mapMenuItemsToMenuItemProps(
      mainMenuItems || [],
      formatMessage(messages.mainMenuViewAllCategory),
      null,
      undefined,
      locale
    );
  }, [mainMenuItems, formatMessage, locale]);

  const styles: AppHeaderStyles = {
    root: {
      position: 'fixed',
      zIndex: 1,
      backgroundColor: semanticColors.bodyBackground,
      top: 0,
      left: 0,
      right: 0
    }
  };
  return (
    <header style={styles.root}>
      <SiteHeader
        items={mappedSiteMenuItems}
        onOpenSideNavigation={setSideNavigationType}
      />
      {showMainHeader && (
        <MainHeader
          items={mappedMainMenuItems}
          setActiveMenuItem={setActiveMenuItem}
        />
      )}
      <NavigationPanel
        panelProps={{
          isOpen: !!sideNavigationType,
          onDismiss: onSitePanelDismiss
        }}
        siteMenuItems={mappedSiteMenuItems}
        mainMenuItems={mappedMainMenuItems}
      />
      <HeroMenu
        menuItems={mappedMainMenuItems}
        activeMenuItemId={activeMenuItem}
      />
    </header>
  );
};
