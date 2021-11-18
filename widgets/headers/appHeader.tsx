import React, { useState } from 'react';

import { useTheme } from '@fluentui/react';
import { SitePanel } from '@widgets/panels/siteNavigationPanel';
import { SiteNavigationType } from '@widgets/panels/siteNavigationPanel.types';

import { MainHeader } from './mainHeader';
import { SiteHeader } from './siteHeader';

export interface IAppHeaderProps {
  showMainHeader: boolean;
}

export interface IAppHeaderStyles {
  root: React.CSSProperties;
}
/**
 * Header component that is displayed at the top of each page.
 */
export const AppHeader: React.FC<IAppHeaderProps> = ({ showMainHeader }) => {
  const { semanticColors } = useTheme();
  const [sideNavigationType, setSideNavigationType] = useState<null | SiteNavigationType>(null);

  function onSitePanelDismiss(): void {
    setSideNavigationType(null);
  }

  const styles: IAppHeaderStyles = {
    root: {
      borderBottom: `1px solid ${semanticColors.variantBorder}`,
      position: 'fixed',
      backgroundColor: semanticColors.bodyBackground,
      top: 0,
      left: 0,
      right: 0,
    },
  };
  return (
    <header style={styles.root}>
      <SiteHeader onOpenSideNavigation={setSideNavigationType} />
      {showMainHeader && <MainHeader />}
      <SitePanel
        type={sideNavigationType}
        panelProps={{ isOpen: !!sideNavigationType, onDismiss: onSitePanelDismiss }}
      />
    </header>
  );
};
