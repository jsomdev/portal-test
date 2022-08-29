import React, { useEffect, useMemo, useState } from 'react';

import { useTheme } from '@fluentui/react';
import { useLarge } from '@widgets/media-queries';
import { AppNavigationType } from '@widgets/panels/appNavigationPanel.types';

import { useGlobalData } from '@providers/global-data/globalDataContext';
import { AppPanel } from '@widgets/panels/appNavigationPanel';
import { useIntl } from 'react-intl';
import { MainHeader } from './mainHeader';
import { mapGlobalMenuItemsToMainMenuItems } from './mainHeader.helper';
import { SiteHeader } from './siteHeader';
import { mapMenuItemsToSiteHeaderItemProps } from './siteHeader.helper';
import { SiteHeaderItemProps } from './siteHeaderItem';

export interface AppHeaderStyles {
  root: React.CSSProperties;
}
/**
 * Header component that is displayed at the top of each page.
 */
export const AppHeader: React.FC = () => {
  const showMainHeader = useLarge();
  const { semanticColors } = useTheme();
  const { siteMenuItems, mainMenuItems } = useGlobalData();
  const { locale } = useIntl();

  const [sideNavigationType, setSideNavigationType] =
    useState<null | AppNavigationType>(null);

  const mappedSiteMenuItems: SiteHeaderItemProps[] = useMemo(() => {
    return mapMenuItemsToSiteHeaderItemProps(siteMenuItems || [], locale);
  }, [locale, siteMenuItems]);

  function onSitePanelDismiss(): void {
    setSideNavigationType(null);
  }

  const mappedMainMenuItems = useMemo(() => {
    return mapGlobalMenuItemsToMainMenuItems(
      mainMenuItems || [],
      null,
      undefined,
      locale
    );
  }, [mainMenuItems, locale]);

  useEffect(() => {
    console.log(mappedMainMenuItems);
  }, [mappedMainMenuItems]);

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
      {showMainHeader && <MainHeader items={mappedMainMenuItems} />}
      <AppPanel
        panelProps={{
          isOpen: !!sideNavigationType,
          onDismiss: onSitePanelDismiss
        }}
        siteMenuItems={mappedSiteMenuItems}
        mainMenuItems={mappedMainMenuItems}
      />
    </header>
  );
};
