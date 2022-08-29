import React from 'react';

import {
  ActionButton,
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
import { MainMenuItem } from '@widgets/headers/mainHeader.helper';
import { SiteHeaderButton } from '@widgets/headers/siteHeaderButton';
import { SiteHeaderItemProps } from '@widgets/headers/siteHeaderItem';
import { defineMessages, useIntl } from 'react-intl';
import { AppNavigationPanelMobileMenu } from './appNavigationPanelMobileMenu';

export interface AppPanelProps {
  panelProps: Partial<IPanelProps>;
  siteMenuItems: SiteHeaderItemProps[];
  mainMenuItems: MainMenuItem[];
}

export interface AppPanelStyles {
  panel: Partial<IPanelStyles>;
  panelHeader: IStackStyles;
  closeButton: IButtonStyles;
}

const messages = defineMessages({
  closeMenu: {
    id: messageIds.navigation.menu.close,
    description: 'Close menu button text',
    defaultMessage: 'Menu'
  }
});

export const AppPanel: React.FC<AppPanelProps> = ({
  panelProps,
  siteMenuItems,
  mainMenuItems
}) => {
  const { spacing, semanticColors, palette } = useTheme();
  const { formatMessage } = useIntl();

  const styles: AppPanelStyles = {
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
        <AppNavigationPanelMobileMenu items={mainMenuItems} />
        {siteMenuItems.map(item => {
          return (
            <Stack key={`site-menu-item-${item.text}`}>
              <ActionButton
                {...item}
                styles={{
                  root: {
                    padding: `${spacing.l1} ${spacing.m}`
                  }
                }}
              />
            </Stack>
          );
        })}
      </Stack>
    </Panel>
  );
};
