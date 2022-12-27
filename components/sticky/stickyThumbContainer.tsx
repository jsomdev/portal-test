import { IStackStyles, useTheme } from '@fluentui/react';
import ContentContainerStack from '@widgets/layouts/contentContainerStack';

interface StickyThumbContainerStyles {
  stickyContainer: IStackStyles;
}

export const StickyThumbContainer: React.FC = ({ children }) => {
  const { palette, spacing } = useTheme();
  const styles: StickyThumbContainerStyles = {
    stickyContainer: {
      root: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 3,
        paddingTop: spacing.m,
        paddingBottom: spacing.m,
        width: '100%',
        background: palette.white
      }
    }
  };
  return (
    <ContentContainerStack
      innerStackProps={{
        styles: styles.stickyContainer
      }}
    >
      {children}
    </ContentContainerStack>
  );
};
