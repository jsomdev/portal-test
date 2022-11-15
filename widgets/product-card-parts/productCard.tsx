import React from 'react';

import { Alignment, IStackStyles, Stack, useTheme } from '@fluentui/react';

interface ProductCardProps {
  verticalAlign?: Alignment;
  horizontalAlign?: Alignment;
  horizontal?: boolean;
  wrap?: boolean;
}
const ProductCard: React.FC<ProductCardProps> = ({
  children,
  verticalAlign = 'center',
  horizontal = true,
  horizontalAlign = 'start',
  wrap = true
}) => {
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
      horizontal={horizontal}
      wrap={wrap}
      tokens={{ padding: spacing.s1 }}
      verticalAlign={verticalAlign}
      horizontalAlign={horizontalAlign}
      styles={stackStyles}
    >
      {children}
    </Stack>
  );
};

export default ProductCard;
