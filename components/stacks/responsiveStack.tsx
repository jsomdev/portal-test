import {
  IStackProps,
  IStackStyles,
  mergeStyleSets,
  Stack
} from '@fluentui/react';
import { mediaQueryFrom } from '@widgets/media-queries';
import React from 'react';

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
      ...mediaQueryFrom('tablet', {
        flexDirection: directions[direction.desktop]
      })
    }
  };
  return <Stack styles={mergeStyleSets(stackStyles, styles)} {...stackProps} />;
};
