import React from 'react';

import {
  FontSizes,
  FontWeights,
  ITextStyles,
  Stack,
  Text
} from '@fluentui/react';

export const CheckoutFormGroupTitle: React.FC<{ title: string }> = ({
  title
}) => {
  const styles: ITextStyles = {
    root: {
      fontWeight: FontWeights.bold,
      fontSize: FontSizes.large
    }
  };
  return (
    <Stack>
      <Stack.Item>
        <Text styles={styles}>{title}</Text>
      </Stack.Item>
    </Stack>
  );
};
