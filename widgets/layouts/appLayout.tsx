import { MenuItem } from '@services/portal-api';
import { rem } from '@utilities/rem';
import { AppHeader } from '@widgets/headers/appHeader';
import { mediaQueryFrom } from '@widgets/media-queries';
import React from 'react';
import { IStyle, mergeStyles } from '@fluentui/react';

interface AppLayoutStyles {
  main: IStyle;
}

export interface AppLayoutProps {
  siteMenuItems: MenuItem[];
  mainMenuItems: MenuItem[];
}
/**
 * Layout component for a page.
 */
export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  siteMenuItems,
  mainMenuItems
}) => {
  const styles: AppLayoutStyles = {
    main: {
      maxWidth: '100%',
      margin: 'auto',
      verticalAlign: 'fill',
      paddingTop: rem(80),
      ...mediaQueryFrom('tablet', {
        paddingTop: rem(124)
      })
    }
  };

  return (
    <>
      <AppHeader siteMenuItems={siteMenuItems} mainMenuItems={mainMenuItems} />
      <main className={mergeStyles(styles.main)}>{children}</main>
      <footer></footer>
    </>
  );
};
