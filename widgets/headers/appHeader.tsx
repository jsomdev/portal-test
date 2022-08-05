import React, { useState } from 'react';

import { useTheme } from '@fluentui/react';
import { MenuItem } from '@services/portal-api';
import { AppPanel } from '@widgets/panels/appNavigationPanel';
import { AppNavigationType } from '@widgets/panels/appNavigationPanel.types';

import { SiteHeader } from './siteHeader';

export interface IAppHeaderProps {
  showMainHeader: boolean;
  mainMenuItems: MenuItem[];
  siteMenuItems: MenuItem[];
}

export interface IAppHeaderStyles {
  root: React.CSSProperties;
}
/**
 * Header component that is displayed at the top of each page.
 */
export const AppHeader: React.FC<IAppHeaderProps> = ({
  showMainHeader,
  siteMenuItems,
  mainMenuItems
}) => {
  const { semanticColors } = useTheme();
  const [sideNavigationType, setSideNavigationType] =
    useState<null | AppNavigationType>(null);

  function onSitePanelDismiss(): void {
    setSideNavigationType(null);
  }

  const styles: IAppHeaderStyles = {
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
      <SiteHeader
        items={siteMenuItems}
        onOpenSideNavigation={setSideNavigationType}
      />
      {/* {showMainHeader && <MainHeader items={mainMenuItems} />} */}
      <AppPanel
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
        type={sideNavigationType}
        panelProps={{
          isOpen: !!sideNavigationType,
          onDismiss: onSitePanelDismiss
        }}
      />
    </header>
  );
};
