import React from 'react';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';

export const CheckoutFormRowContainer: React.FC = ({ children }) => {
  const { spacing } = useTheme();
  const styles: IStackStyles = {
    root: {
      selectors: {
        '> *': {
          flex: '0 3 33.33%'
        }
      }
    }
  };
  return (
    <Stack horizontal styles={styles} tokens={{ childrenGap: spacing.s1 }}>
      {children}
    </Stack>
  );
};
