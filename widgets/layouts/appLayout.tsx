import { useTheme } from '@fluentui/react';
import { rem } from '@utilities/rem';
import { MainHeader } from '@widgets/headers/main-header/mainHeader';
import { SiteHeader } from '@widgets/headers/site-header/siteHeader';
import { useLarge } from '@widgets/media-queries';
import React from 'react';

interface AppLayoutStyles {
  main: React.CSSProperties;
  header: React.CSSProperties;
}

/**
 * Layout component for a page.
 */
export const AppLayout: React.FC = ({ children }) => {
  const isLarge = useLarge();
  const { semanticColors } = useTheme();
  const styles: AppLayoutStyles = {
    main: {
      maxWidth: '100%',
      margin: 'auto',
      verticalAlign: 'fill',
      paddingTop: isLarge ? rem(124) : rem(80)
    },
    header: {
      position: 'fixed',
      zIndex: 1,
      backgroundColor: semanticColors.bodyBackground,
      top: 0,
      left: 0,
      right: 0
    }
  };

  return (
    <React.Fragment>
      <header style={styles.header}>
        <SiteHeader />
        <MainHeader />
      </header>
      <main style={styles.main}>{children}</main>
      <footer></footer>
    </React.Fragment>
  );
};
