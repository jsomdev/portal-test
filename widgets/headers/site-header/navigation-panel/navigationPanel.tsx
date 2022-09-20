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
import React, { useMemo } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { NavigationPanelMainMenu } from './navigationPanelMainMenu';
import { NavigationPanelSiteMenu } from './navigationPanelSiteMenu';

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

export type NavigationPanelType = 'site' | 'user';

const messages = defineMessages({
  closeMenu: {
    id: messageIds.navigation.menu.close,
    description: 'Close panel button text',
    defaultMessage: 'Menu'
  },
  accountPage: {
    id: messageIds.navigation.menu.accountPage,
    description: 'Link text for account page',
    defaultMessage: 'My Account'
  }
});

const accountMessages = defineMessages({
  overview: {
    id: messageIds.navigation.account.overview.linkText,
    description: 'Link text for account overview',
    defaultMessage: 'Overview'
  },
  orders: {
    id: messageIds.navigation.account.orders.linkText,
    description: 'Link text for orders',
    defaultMessage: 'Orders'
  },
  quoteRequests: {
    id: messageIds.navigation.account.quoteRequests.linkText,
    description: 'Link text for quote requests',
    defaultMessage: 'Quote Requests'
  },
  preferences: {
    id: messageIds.navigation.account.infoAndPreferences.linkText,
    description: 'Link text for quote info and preferences',
    defaultMessage: 'Info & Preferences'
  }
});

export const NavigationPanel: React.FC<NavigationPanelProps> = ({
  panelProps,
  siteMenuItems,
  mainMenuItems
}) => {
  const { spacing, semanticColors, palette } = useTheme();
  const { formatMessage } = useIntl();

  const customSiteMenuItems: MenuItemProps[] = useMemo(() => {
    const accountMenuItem: MenuItemProps = {
      // TODO replace hard coded account href
      href: '/account',
      text: formatMessage(messages.accountPage)
    };
    return [accountMenuItem, ...siteMenuItems];
  }, [formatMessage, siteMenuItems]);

  const customUserMenuItems: MenuItemProps[] = useMemo((): MenuItemProps[] => {
    return [
      {
        href: '/account',
        text: formatMessage(accountMessages.overview)
      },
      {
        href: '/account/orders',
        text: formatMessage(accountMessages.orders)
      },
      {
        href: '/account/quote-requests',
        text: formatMessage(accountMessages.quoteRequests)
      },
      {
        href: '/account/info-preferences',
        text: formatMessage(accountMessages.preferences)
      }
    ];
  }, [formatMessage]);

  const styles: NavigationPanelStyles = {
    panel: {
      commands: {
        display: 'none'
      },
      root: {
        height: '100vh'
      },
      content: {
        padding: 0,
        overflow: 'auto',
        maxHeight: `calc(100vh - ${rem(90)})`
      }
    },
    panelHeader: {
      root: {
        borderBottom: `1px solid ${semanticColors.variantBorder}`,
        height: rem(90)
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
        <NavigationPanelMainMenu items={customUserMenuItems} />
        <NavigationPanelSiteMenu items={customSiteMenuItems} />
      </Stack>
    </Panel>
  );
};
