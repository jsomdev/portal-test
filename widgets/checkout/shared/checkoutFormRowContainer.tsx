import React from 'react';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';
import { useMobile } from '@widgets/media-queries';

export const CheckoutFormRowContainer: React.FC = ({ children }) => {
  const { spacing } = useTheme();
  const isMobile = useMobile();
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
    <Stack
      horizontal={!isMobile}
      styles={styles}
      tokens={{ childrenGap: spacing.s1 }}
    >
      {children}
    </Stack>
  );
};
