import React from 'react';

import {
  ISpinnerStyles,
  Spinner,
  SpinnerSize,
  Stack,
  useTheme
} from '@fluentui/react';

export const LoadingSpinner: React.FC = () => {
  const { spacing, fonts, palette } = useTheme();

  const styles: ISpinnerStyles = {
    label: {
      ...fonts.mediumPlus,
      color: palette.themeDark
    }
  };

  return (
    <Stack
      verticalAlign="center"
      horizontalAlign="center"
      tokens={{ childrenGap: spacing.l1, padding: `${spacing.l1} 0 ` }}
    >
      <Spinner styles={styles} size={SpinnerSize.large} />
    </Stack>
  );
};
