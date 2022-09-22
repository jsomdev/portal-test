import React from 'react';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';
import { MenuItem } from '@services/portal-api';
import { rem } from '@utilities/rem';
import { MainHeader } from '@widgets/headers/main-header/mainHeader';
import { SiteHeader } from '@widgets/headers/site-header/siteHeader';
import { mediaQueryFrom } from '@widgets/media-queries';
import { SiteFooter } from '@widgets/site-footer/siteFooter';

export interface AppLayoutProps {
  siteMenuItems: MenuItem[];
  mainMenuItems: MenuItem[];
}

/**
 * Layout component for a page.
 */
export const AppLayout: React.FC = ({ children }) => {
  const { semanticColors } = useTheme();

  return (
    <React.Fragment>
      <header>
        <SiteHeader />
        <MainHeader />
      </header>
      <main>{children}</main>
      <footer></footer>
    </React.Fragment>
  );
};
