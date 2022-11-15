import React from 'react';

import { MenuItem } from '@services/portal-api';
import { MainHeader } from '@widgets/headers/main-header/mainHeader';
import { SiteHeader } from '@widgets/headers/site-header/siteHeader';

export interface AppLayoutProps {
  siteMenuItems: MenuItem[];
  mainMenuItems: MenuItem[];
}

/**
 * Layout component for a page.
 */
export const AppLayout: React.FC = ({ children }) => {
  const styles = {
    header: {
      zIndex: 3
    }
  };
  return (
    <React.Fragment>
      <header style={styles.header}>
        <SiteHeader />
        <MainHeader />
        <div id="breadcrumb-portal"></div>
      </header>
      <main>{children}</main>
      <footer></footer>
    </React.Fragment>
  );
};
