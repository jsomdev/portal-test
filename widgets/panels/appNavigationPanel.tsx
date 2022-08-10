import React from 'react';

import { FormattedMessage } from 'react-intl';

import {
  Icon,
  INavStyles,
  IPanelProps,
  IPanelStyles,
  IStackStyles,
  Nav,
  Panel,
  PanelType,
  Stack,
  useTheme
} from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { rem } from '@utilities/rem';
import { HeaderButton } from '@widgets/headers/headerButton';

import { getAppNavigationPanelLinkGroups } from './appNavigationPanel.helper';
import { AppNavigationType } from './appNavigationPanel.types';

export interface AppPanelProps {
  panelProps: Partial<IPanelProps>;
  type: AppNavigationType | null;
}

export interface AppPanelStyles {
  panel: Partial<IPanelStyles>;
  panelHeader: IStackStyles;
  nav: Partial<INavStyles>;
  navGroupHeader: IStackStyles;
}

export const AppPanel: React.FC<AppPanelProps> = ({ panelProps, type }) => {
  const { spacing, palette, semanticColors } = useTheme();
  const { siteMenuItems, mainMenuItems } = useGlobalData();
  const styles: AppPanelStyles = {
    panel: {
      content: {
        padding: 0,
        marginTop: rem(80)
      },
      commands: {
        padding: 0
      },
      root: {
        padding: 0
      }
    },
    panelHeader: {
      root: {
        position: 'absolute',
        top: 0,
        backgroundColor: 'white',
        left: 0,
        right: 0,

        height: rem(80)
      }
    },
    nav: {
      link: {
        color: palette.themeDark,
        paddingLeft: rem(spacing.l1)
      },
      chevronButton: {
        position: 'relative',
        padding: 0
      },
      chevronIcon: {
        position: 'relative'
      },
      compositeLink: {
        display: 'flex',
        flexDirection: 'row-reverse'
      },
      groupContent: {
        padding: `0 ${rem(spacing.l1)}`
      }
    },
    navGroupHeader: {
      root: {
        color: semanticColors.menuItemText,
        borderTop: `${rem(1)} solid ${semanticColors.variantBorder}`
      }
    }
  };
  return (
    <Panel
      hasCloseButton={false}
      styles={styles.panel}
      type={PanelType.customNear}
      onRenderHeader={() => (
        <Stack
          horizontal
          horizontalAlign="space-between"
          verticalAlign="center"
          tokens={{ padding: rem(spacing.s1) }}
          styles={styles.panelHeader}
        >
          <HeaderButton
            type="iconButton"
            iconProps={{
              iconName: 'Back'
            }}
            onClick={() => panelProps?.onDismiss?.()}
          />
        </Stack>
      )}
      customWidth={rem(280)}
      {...panelProps}
    >
      <Nav
        styles={styles.nav}
        groups={getAppNavigationPanelLinkGroups(
          type,
          siteMenuItems || [],
          mainMenuItems || []
        )}
        onRenderGroupHeader={props => (
          <Stack
            horizontal
            horizontalAlign="space-between"
            verticalAlign="center"
            styles={styles.navGroupHeader}
            tokens={{
              childrenGap: spacing.s1,
              padding: `0 ${rem(spacing.l1)}`
            }}
            onClick={ev => props?.onHeaderClick?.(ev, props.isExpanded)}
          >
            <Stack
              horizontal
              verticalAlign="center"
              tokens={{ childrenGap: rem(spacing.s1) }}
            >
              <Icon iconName={props?.groupData?.iconName} />
              <p>
                <FormattedMessage id={props?.name} />
              </p>
            </Stack>
            <Icon
              iconName={props?.isExpanded ? 'ChevronUpMed' : 'ChevronDownMed'}
            />
          </Stack>
        )}
      />
    </Panel>
  );
};
