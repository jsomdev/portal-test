import React from 'react';

import { FontWeights, ITextProps, ITextStyles, Text } from '@fluentui/react';

export const PriceSecondaryText: React.FC<ITextProps & { text: string }> = ({
  text,
  ...props
}) => {
  const styles: ITextStyles = {
    root: {
      fontWeight: FontWeights.regular,
      textDecoration: 'line-through',
      wordBreak: 'break-all'
    }
  };
  return (
    <Text {...props} styles={styles}>
      {text}
    </Text>
  );
};
