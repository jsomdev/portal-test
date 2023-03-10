import React from 'react';

import {
  IStackProps,
  IStackStyles,
  Stack,
  mergeStyleSets,
  useTheme
} from '@fluentui/react';
import { mediaQueryFrom } from '@widgets/media-queries';

export type ContentContainerStyles = {
  outerContainer: IStackStyles;
  innerContainer: IStackStyles;
};

export type ContentContainerProps = {
  outerStackProps?: IStackProps;
  innerStackProps?: Partial<IStackProps>;
};

const ContentContainerStack: React.FC<ContentContainerProps> = ({
  children,
  outerStackProps,
  innerStackProps
}) => {
  const { spacing } = useTheme();
  const styles: ContentContainerStyles = {
    outerContainer: {},
    innerContainer: {
      root: {
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto',
        padding: `0 ${spacing.l1}`,
        ...mediaQueryFrom('tablet', {
          padding: `0 ${spacing.l2}`
        })
      }
    }
  };
  return (
    <Stack
      {...outerStackProps}
      styles={mergeStyleSets(styles.outerContainer, outerStackProps?.styles)}
    >
      <Stack
        {...innerStackProps}
        styles={mergeStyleSets(styles.innerContainer, innerStackProps?.styles)}
      >
        {children}
      </Stack>
    </Stack>
  );
};

type OptionalContentContainerStackProps = {
  wrapWithContainer: boolean;
};

export const OptionalContentContainerStack: React.FC<
  OptionalContentContainerStackProps
> = ({ wrapWithContainer, children }) => {
  if (wrapWithContainer) {
    return <ContentContainerStack>{children}</ContentContainerStack>;
  } else {
    return <React.Fragment>{children}</React.Fragment>;
  }
};

export default ContentContainerStack;
