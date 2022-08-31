import { rem } from '@utilities/rem';
import { AppHeader } from '@widgets/headers/app-header/appHeader';
import { useLarge } from '@widgets/media-queries';

interface AppLayoutStyles {
  main: React.CSSProperties;
}

/**
 * Layout component for a page.
 */
export const AppLayout: React.FC = ({ children }) => {
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
      <AppHeader />
      <main style={styles.main}>{children}</main>
      <footer></footer>
    </>
  );
};
