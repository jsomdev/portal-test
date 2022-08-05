import React from 'react';

import {
  Overlay,
  Spinner,
  SpinnerSize,
  Stack,
  useTheme
} from '@fluentui/react';

import {
  LoadingOverlayProps,
  LoadingOverlayStyles
} from './loadingOverlay.types';

/**
 * Overlay component that displays a semi-transparent overlay,
 * with a spinner in the middle
 */
export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  spinnerText
}) => {
  const { palette, fonts } = useTheme();
  const styles: LoadingOverlayStyles = {
    overlay: {
      root: {
        zIndex: 30,
        marginTop: '0 !important'
      }
    },
    contentWrapper: {
      root: {
        backgroundColor: `${palette.themeLighter}1A`,
        height: '100vh',
        width: '100%'
      }
    },
    spinner: {
      label: {
        ...fonts.mediumPlus,
        color: palette.themeDark
      }
    }
  };
  return (
    <Overlay styles={styles.overlay}>
      <Stack
        verticalAlign="center"
        horizontalAlign="center"
        styles={styles.contentWrapper}
      >
        <Spinner
          styles={styles.spinner}
          size={SpinnerSize.large}
          label={spinnerText}
        />
      </Stack>
    </Overlay>
  );
};
