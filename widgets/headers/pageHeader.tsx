import React, { CSSProperties, FC } from 'react';

import { Stack, Text, useTheme } from '@fluentui/react';

interface PageHeaderProps {
  title: string | JSX.Element;
  description?: string;
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
        <Text as="h1" variant="xxLarge" style={styles.title}>
          {title}
        </Text>
        {description && <p style={styles.description}>{description}</p>}
      </Stack>
      {children}
    </Stack>
  );
};
