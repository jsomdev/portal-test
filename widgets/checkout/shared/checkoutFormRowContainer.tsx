import React from 'react';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';

export const CheckoutFormRowContainer: React.FC = ({ children }) => {
  const { spacing } = useTheme();
  const styles: IStackStyles = {
    root: {
      maxWidth: '800px',
      selectors: {
        '> *': {
          flex: '0 3 50%'
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
