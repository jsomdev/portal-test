import React from 'react';

import { useTheme } from '@fluentui/react';

import { MainHeader } from '../main-header/mainHeader';
import { SiteHeader } from '../site-header/siteHeader';

export interface AppHeaderStyles {
  root: React.CSSProperties;
}

/**
 * Header component that is displayed at the top of each page.
 */

export const AppHeader: React.FC = () => {
  const { semanticColors } = useTheme();

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
      <SiteHeader />
      <MainHeader />
    </header>
  );
};
