import React from 'react';

import { FontWeights, ITextProps, ITextStyles, Text } from '@fluentui/react';

export const PricePrimaryText: React.FC<
  ITextProps & { text: string; color?: string }
> = ({ text, color = 'green', ...props }) => {
  const styles: ITextStyles = {
    root: {
      color,
      fontWeight: FontWeights.semibold
    }
  };
  return (
    <Text variant="large" {...props} styles={styles}>
      {text}
    </Text>
  );
};
