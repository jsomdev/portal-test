import React from 'react';

import {
  FontWeights,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';

export const CheckoutFormGroupTitle: React.FC<{ title: string }> = ({
  title
}) => {
  const { fonts } = useTheme();
  const styles: ITextStyles = {
    root: {
      ...fonts.large,
      fontWeight: FontWeights.bold
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
