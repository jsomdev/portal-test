import React from 'react';

import { ITextProps, ITextStyles, Text } from '@fluentui/react';

export const PriceSecondaryText: React.FC<ITextProps & { text: string }> = ({
  text,
  ...props
}) => {
  const styles: ITextStyles = {
    root: {
      fontWeight: 400,
      textDecoration: 'line-through'
    }
  };
  return (
    <Text {...props} styles={styles}>
      {text}
    </Text>
  );
};
