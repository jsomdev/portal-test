import React, { CSSProperties, useEffect, useState } from 'react';

import { AppErrorBoundary } from '@components/errors/appErrorBoundary';
import { MenuItem } from '@services/portal-api';
import { ComparisonPopup } from '@widgets/compare/comparison-popup/comparisonPopup';
import { MainHeader } from '@widgets/headers/main-header/mainHeader';
import { SiteHeader } from '@widgets/headers/site-header/siteHeader';
import { usePageContext } from '@widgets/page/pageContext';
import { SiteFooter } from '@widgets/site-footer/siteFooter';

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
        <AppOverlay />
      </header>
      <main>
        <AppErrorBoundary>{children}</AppErrorBoundary>
        <ComparisonPopup />
      </main>
      <footer>
        <SiteFooter />
      </footer>
    </React.Fragment>
  );
};

export const AppOverlay: React.FC = () => {
  const { showPageOverlay } = usePageContext();
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    if (showPageOverlay) {
      setTimeout(() => setOverlayOpacity(1));
    } else {
      setOverlayOpacity(0);
    }
  }, [showPageOverlay]);

  const style: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    right: 0,
    display: showPageOverlay ? 'block' : 'none',
    transition: 'opacity 0.1s ease-in',
    opacity: overlayOpacity,
    background: 'rgba(0,0,0,0.15)',
    bottom: 0
  };
  return <div style={style} />;
};
