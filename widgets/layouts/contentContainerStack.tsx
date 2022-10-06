import React from 'react';

import { merge } from 'lodash';

import { IStackStyles, Stack, useTheme } from '@fluentui/react';

export type ContentContainerStyles = {
  outerContainer: IStackStyles;
  innerContainer: IStackStyles;
};

type ContentContainerProps = {
  styles?: Partial<ContentContainerStyles>;
};

const ContentContainerStack: React.FC<ContentContainerProps> = ({
  children,
  styles = {}
}) => {
  const { spacing } = useTheme();
  const mergedStyles: ContentContainerStyles = merge(
    {
      outerContainer: {},
      innerContainer: {
        root: {
          maxWidth: '1600px',
          width: '100%',
          margin: '0 auto',
          padding: `0 ${spacing.l2}`
        }
      }
    },
    styles
  );
  return (
    <Stack styles={mergedStyles.outerContainer}>
      <Stack styles={mergedStyles.innerContainer}>{children}</Stack>
    </Stack>
  );
};

export default ContentContainerStack;
