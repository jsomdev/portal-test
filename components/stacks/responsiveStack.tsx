import React from 'react';
import {
  IStackProps,
  IStackStyles,
  mergeStyleSets,
  Stack
} from '@fluentui/react';
import { mediaDesktop } from '@widgets/media-queries';

type Direction = 'vertical' | 'horizontal';

type ResponsiveStackProps = IStackProps & {
  direction?: {
    desktop: Direction;
    mobile: Direction;
  };
};

const directions = {
  vertical: 'column',
  horizontal: 'row'
};

export const ResponsiveStack: React.FC<ResponsiveStackProps> = ({
  direction = { desktop: 'horizontal', mobile: 'vertical' },
  styles,
  ...stackProps
}) => {
  const stackStyles: IStackStyles = {
    root: {
      flexDirection: directions[direction.mobile],
      ...mediaDesktop({
        flexDirection: directions[direction.desktop]
      })
    }
  };
  return <Stack styles={mergeStyleSets(stackStyles, styles)} {...stackProps} />;
};
