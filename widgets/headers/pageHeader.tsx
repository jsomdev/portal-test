import { CSSProperties, FC } from 'react';

import { Stack, useTheme } from '@fluentui/react';

interface PageHeaderProps {
  title: string | JSX.Element;
  description?: string;
  children: JSX.Element;
}
interface PagesHeaderStyles {
  title?: CSSProperties;
  description?: CSSProperties;
}
export const PagesHeader: FC<PageHeaderProps> = ({
  title,
  children,
  description
}) => {
  const { spacing, palette } = useTheme();
  const styles: PagesHeaderStyles = {
    title: {
      color: palette.themeDarker
    },
    description: {}
  };

  return (
    <Stack horizontal wrap verticalAlign="center">
      <Stack tokens={{ childrenGap: spacing.s1 }}>
        <h2 style={styles.title}>{title}</h2>
        {description && <p style={styles.description}>{description}</p>}
      </Stack>
      {children}
    </Stack>
  );
};
