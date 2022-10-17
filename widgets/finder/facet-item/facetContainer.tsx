import React, { useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  FontWeights,
  IButtonStyles,
  IStackStyles,
  IStyle,
  IconButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';

const messages = defineMessages({
  ariaExpand: {
    id: messageIds.finder.panel.mobile.ariaExpand,
    description: 'Aria text for the expand facet button',
    defaultMessage: 'Expand Filter'
  },
  ariaCollapse: {
    id: messageIds.finder.panel.mobile.ariaCollapse,
    description: 'Aria text for the collapse facet button',
    defaultMessage: 'Collapse Filter'
  }
});

interface FacetContainerProps {
  facetTitle: string;
  onShowInfo?: () => void;
  onRenderActions?: () => void;
}

interface FacetContainerStyles {
  info?: IButtonStyles;
  root?: IStackStyles;
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
      margin: `${spacing.s2} 0`
    }
  };
  return (
    <Stack
      tokens={{
        padding: `0 ${spacing.l1} ${spacing.l1} 0`
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
  const { formatMessage } = useIntl();
  const { spacing, semanticColors } = useTheme();
  const [isExpanded, setIsExpanded] = useState(true);
  const styles: FacetContainerStyles = {
    root: {
      root: {
        borderBottom: `1px solid ${semanticColors.variantBorder}`,
        padding: `${spacing.l1} ${spacing.m}`
      }
    },
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
      margin: `${spacing.s2} 0`
    }
  };
  return (
    <Stack
      styles={styles.root}
      tokens={{
        padding: `0 ${spacing.l1} ${spacing.l1} 0`,
        childrenGap: spacing.s1
      }}
    >
      <Stack.Item>
        <Stack
          verticalAlign="center"
          horizontal={true}
          onClick={() => setIsExpanded(previousState => !previousState)}
        >
          <Text as="h3" variant="large">
            {facetTitle}
          </Text>
          {onShowInfo && (
            <IconButton
              iconProps={{
                iconName: 'info'
              }}
              styles={styles.info}
              onClick={ev => {
                ev.stopPropagation();
                onShowInfo && onShowInfo();
              }}
            />
          )}
          <Stack grow verticalAlign="center" horizontalAlign="end">
            <IconButton
              title={formatMessage(
                isExpanded ? messages.ariaCollapse : messages.ariaExpand
              )}
              iconProps={{
                iconName: isExpanded ? 'ChevronUp' : 'ChevronDown'
              }}
            />
          </Stack>
          {onRenderActions && onRenderActions()}
        </Stack>
      </Stack.Item>
      {isExpanded && <Stack.Item>{children}</Stack.Item>}
    </Stack>
  );
};
