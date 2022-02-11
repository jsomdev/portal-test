import { MenuItem } from '@services/portal-api';
import { rem } from '@utilities/rem';
import { AppHeader } from '@widgets/headers/appHeader';
import { useLarge } from '@widgets/media-queries';

interface IPageLayoutStyles {
  main: React.CSSProperties;
}

export interface IPageLayoutProps {
  siteMenuItems: MenuItem[];
  mainMenuItems: MenuItem[];
}
/**
 * Layout component for a page.
 */
export const PageLayout: React.FC<IPageLayoutProps> = ({
  children,
  siteMenuItems,
  mainMenuItems
}) => {
  const isLarge = useLarge();
  const styles: IPageLayoutStyles = {
    main: {
      maxWidth: rem(1280),
      margin: 'auto',
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
      <footer>Footer</footer>
    </>
  );
};
