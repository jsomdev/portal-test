import React from 'react';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';

const ProductCard: React.FC = ({ children }) => {
  const { semanticColors, spacing } = useTheme();
  const stackStyles: IStackStyles = {
    root: {
      marginBottom: spacing.s1,
      border: `1px solid ${semanticColors.variantBorder}`,
      borderRadius: 7,
      justifyContent: 'space-around'
    }
  };

  return (
    <Stack
      horizontal
      wrap
      verticalAlign="center"
      tokens={{ padding: spacing.s1 }}
      styles={stackStyles}
    >
      {children}
    </Stack>
  );
};

export default ProductCard;
