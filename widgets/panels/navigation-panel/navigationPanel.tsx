import React from 'react';

import {
  IButtonStyles,
  IPanelProps,
  IPanelStyles,
  IStackStyles,
  Panel,
  PanelType,
  Stack,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';
import { MenuItemProps } from '@widgets/headers/main-header/mainHeader.helper';
import { SiteHeaderButton } from '@widgets/headers/site-header/siteHeaderButton';
import { defineMessages, useIntl } from 'react-intl';
import { NavigationPanelMainMenu } from '../navigationPanelMainMenu';
import { NavigationPanelSiteMenu } from '../navigationPanelSiteMenu';

export interface NavigationPanelProps {
  panelProps: Partial<IPanelProps>;
  siteMenuItems: MenuItemProps[];
  mainMenuItems: MenuItemProps[];
}

export interface NavigationPanelStyles {
  panel: Partial<IPanelStyles>;
  panelHeader: IStackStyles;
  closeButton: IButtonStyles;
}

const messages = defineMessages({
  closeMenu: {
    id: messageIds.navigation.menu.close,
    description: 'Close panel button text',
    defaultMessage: 'Menu'
  }
});

export const NavigationPanel: React.FC<NavigationPanelProps> = ({
  panelProps,
  siteMenuItems,
  mainMenuItems
}) => {
  const { spacing, semanticColors, palette } = useTheme();
  const { formatMessage } = useIntl();

  const styles: NavigationPanelStyles = {
    panel: {
      commands: {
        display: 'none'
      },
      root: {
        height: '100vh'
      },
      content: {
        padding: 0
      }
    },
    panelHeader: {
      root: {
        borderBottom: `1px solid ${semanticColors.variantBorder}`,
        overflow: 'auto'
      }
    },
    closeButton: {
      icon: {
        color: palette.neutralPrimary
      }
    }
  };

  return (
    <Panel
      hasCloseButton={false}
      styles={styles.panel}
      type={PanelType.smallFluid}
      onRenderHeader={() => (
        <Stack
          horizontal
          horizontalAlign="space-between"
          verticalAlign="center"
          tokens={{ padding: `${rem(25)} ${rem(spacing.s1)}` }}
          styles={styles.panelHeader}
        >
          <SiteHeaderButton
            type="iconButton"
            iconProps={{
              iconName: 'Cancel'
            }}
            onClick={() => panelProps?.onDismiss?.()}
            text={formatMessage(messages.closeMenu)}
            styles={styles.closeButton}
          />
        </Stack>
      )}
      {...panelProps}
    >
      <Stack>
        <NavigationPanelMainMenu items={mainMenuItems} />
        <NavigationPanelSiteMenu items={siteMenuItems} />
      </Stack>
    </Panel>
  );
};
