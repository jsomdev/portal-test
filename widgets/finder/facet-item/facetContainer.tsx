import React from 'react';

import {
  FontWeights,
  IButtonStyles,
  IStyle,
  IconButton,
  Stack,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';

console.log(123);
interface FacetContainerProps {
  facetTitle: string;
  onShowInfo?: () => void;
  onRenderActions?: () => void;
}

interface FacetContainerStyles {
  info?: IButtonStyles;
  root?: IStyle;
  title?: IStyle;
  optionsContainer?: IStyle;
}

export const FacetContainer: React.FC<FacetContainerProps> = props => {
  return (
    <React.Fragment>
      <TabletAndDesktop>
        <DesktopFacetContainer {...props} />
      </TabletAndDesktop>
      <Mobile>
        <MobileFacetContainer {...props} />
      </Mobile>
    </React.Fragment>
  );
};
export const DesktopFacetContainer: React.FC<FacetContainerProps> = ({
  facetTitle,
  children,
  onRenderActions,
  onShowInfo
}) => {
  const { spacing } = useTheme();
  const styles: FacetContainerStyles = {
    info: {
      rootHovered: {
        background: 'transparent'
      },
      root: {
        height: rem(24)
      }
    },
    title: {
      fontWeight: FontWeights.semibold,
      margin: `${rem(spacing.s2)} 0`
    }
  };
  return (
    <Stack
      tokens={{
        padding: `0 ${rem(spacing.l1)} ${rem(spacing.l1)} 0`
      }}
    >
      <Stack.Item>
        <Stack verticalAlign="center" horizontal={true}>
          <h3>{facetTitle}</h3>
          {onShowInfo && (
            <IconButton
              iconProps={{
                iconName: 'info'
              }}
              styles={styles.info}
              onClick={() => onShowInfo && onShowInfo()}
            />
          )}
          {onRenderActions && onRenderActions()}
        </Stack>
      </Stack.Item>
      <Stack.Item>{children}</Stack.Item>
    </Stack>
  );
};
export const MobileFacetContainer: React.FC<FacetContainerProps> = ({
  facetTitle,
  children,
  onRenderActions,
  onShowInfo
}) => {
  const { spacing } = useTheme();
  const styles: FacetContainerStyles = {
    info: {
      rootHovered: {
        background: 'transparent'
      },
      root: {
        height: rem(24)
      }
    },
    title: {
      fontWeight: FontWeights.semibold,
      margin: `${rem(spacing.s2)} 0`
    }
  };
  return (
    <Stack
      tokens={{
        padding: `0 ${rem(spacing.l1)} ${rem(spacing.l1)} 0`
      }}
    >
      <Stack.Item>
        <Stack verticalAlign="center" horizontal={true}>
          <h3>{facetTitle}</h3>
          {onShowInfo && (
            <IconButton
              iconProps={{
                iconName: 'info'
              }}
              styles={styles.info}
              onClick={() => onShowInfo && onShowInfo()}
            />
          )}
          {onRenderActions && onRenderActions()}
        </Stack>
      </Stack.Item>
      <Stack.Item>{children}</Stack.Item>
    </Stack>
  );
};
