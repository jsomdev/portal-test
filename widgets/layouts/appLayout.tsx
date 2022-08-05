import { MenuItem } from '@services/portal-api';
import { rem } from '@utilities/rem';
import { AppHeader } from '@widgets/headers/appHeader';
import { useLarge } from '@widgets/media-queries';

interface AppLayoutStyles {
  main: React.CSSProperties;
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
  const isLarge = useLarge();
  const styles: AppLayoutStyles = {
    main: {
      maxWidth: '100%',
      margin: 'auto',
      verticalAlign: 'fill',
      paddingTop: isLarge ? rem(124) : rem(80)
    }
  };

  return (
    <>
      <AppHeader
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
        showMainHeader={isLarge}
      />
      <main style={styles.main}>{children}</main>
      <footer></footer>
    </>
  );
};
