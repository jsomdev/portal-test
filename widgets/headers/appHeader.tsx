import React, { useMemo, useState } from 'react';

import { useTheme } from '@fluentui/react';
import { useLarge } from '@widgets/media-queries';
import { AppPanel } from '@widgets/panels/appNavigationPanel';
import { AppNavigationType } from '@widgets/panels/appNavigationPanel.types';

import { useGlobalData } from '@providers/global-data/globalDataContext';
import { useIntl } from 'react-intl';
import { MainHeader } from './mainHeader';
import { SiteHeader, SiteHeaderItemProps } from './siteHeader';
import { mapMenuItemsToSiteHeaderItemProps } from './siteHeader.helper';

export interface AppHeaderStyles {
  root: React.CSSProperties;
}
/**
 * Header component that is displayed at the top of each page.
 */
export const AppHeader: React.FC = () => {
  const showMainHeader = useLarge();
  const { semanticColors } = useTheme();
  const { siteMenuItems } = useGlobalData();
  const { locale } = useIntl();

  const [sideNavigationType, setSideNavigationType] =
    useState<null | AppNavigationType>(null);

  const items: SiteHeaderItemProps[] = useMemo(() => {
    return mapMenuItemsToSiteHeaderItemProps(siteMenuItems || [], locale);
  }, [locale, siteMenuItems]);

  function onSitePanelDismiss(): void {
    setSideNavigationType(null);
  }

  const styles: AppHeaderStyles = {
    root: {
      borderBottom: `1px solid ${semanticColors.variantBorder}`,
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
      <SiteHeader items={items} onOpenSideNavigation={setSideNavigationType} />
      {showMainHeader && <MainHeader />}
      <AppPanel
        type={sideNavigationType}
        panelProps={{
          isOpen: !!sideNavigationType,
          onDismiss: onSitePanelDismiss
        }}
      />
    </header>
  );
};
