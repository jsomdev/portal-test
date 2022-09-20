import React from 'react';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';
import { MenuItem } from '@services/portal-api';
import { rem } from '@utilities/rem';
import { MainHeader } from '@widgets/headers/main-header/mainHeader';
import { SiteHeader } from '@widgets/headers/site-header/siteHeader';
import { mediaQueryFrom } from '@widgets/media-queries';
import { SiteFooter } from '@widgets/site-footer/siteFooter';

interface AppLayoutStyles {
  main: React.CSSProperties;
  header: React.CSSProperties;
  content: IStackStyles;
}

export interface AppLayoutProps {
  siteMenuItems: MenuItem[];
  mainMenuItems: MenuItem[];
}

/**
 * Layout component for a page.
 */
export const AppLayout: React.FC = ({ children }) => {
  const { semanticColors } = useTheme();
  const styles: AppLayoutStyles = {
    main: {
      maxWidth: '100%',
      margin: 'auto',
      verticalAlign: 'fill'
    },
    header: {
      backgroundColor: semanticColors.bodyBackground
    },
    content: {
      root: {
        overflow: 'auto',
        height: `calc(100vh - ${rem(112)})`,
        ...mediaQueryFrom('tablet', {
          height: `calc(100vh - ${rem(124)})`
        })
      }
    }
  };

  return (
    <React.Fragment>
      <header style={styles.header}>
        <SiteHeader />
        <MainHeader />
      </header>
      <Stack className="list-scroll" styles={styles.content}>
        <main style={styles.main}>{children}</main>
        <footer>
          <SiteFooter />
        </footer>
      </Stack>
    </React.Fragment>
  );
};
