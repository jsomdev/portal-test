import React from 'react';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';

export const ModelCard: React.FC = ({ children }) => {
  const { semanticColors, spacing } = useTheme();
  const stackStyles: IStackStyles = {
    root: {
      border: `1px solid ${semanticColors.variantBorder}`,
      borderRadius: 7
    }
  };

  return (
    <Stack tokens={{ padding: spacing.m }} styles={stackStyles}>
      {children}
    </Stack>
  );
};
