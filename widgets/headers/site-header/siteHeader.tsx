import { useCallback, useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { AccountInfo } from '@azure/msal-browser';
import { ClosePanelButton } from '@components/buttons/closePanelButton';
import {
  Callout,
  IButtonStyles,
  ICalloutContentStyles,
  IPanelStyles,
  IStackStyles,
  IVerticalDividerStyles,
  Panel,
  PanelType,
  Stack,
  VerticalDivider,
  useTheme
} from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { useMe } from '@providers/user/userContext';
import { msalInstance } from '@services/authentication/authenticationConfiguration';
import { useClaims } from '@services/authentication/claims';
import { messageIds } from '@services/i18n';
import { UserFormatter } from '@services/i18n/formatters/entity-formatters/userFormatter';
import { rem } from '@utilities/rem';
import { LanguageMenu } from '@widgets/headers/site-header/language-menu/languageMenu';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';

import {
  MenuItemProps,
  mapMenuItemsToMenuItemProps
} from '../main-header/mainHeader.helper';
import { HeaderSearchBar } from '../shared/headerSearchBar';
import { AppNavigationMenu } from './appNavigationMenu';
import { SiteHeaderButton } from './siteHeaderButton';
import { SiteLogo } from './siteLogo';
import { UserNavigationMenu } from './userNavigationMenu';

export interface SiteHeaderProps {
  siteMenuItems: MenuItemProps[];
}

const messages = defineMessages({
  navigationAriaLabel: {
    id: messageIds.navigation.site.navigationAriaLabel,
    description: 'Aria label for the navigation menu',
    defaultMessage: 'Navigation menu'
  },
  welcome: {
    id: messageIds.pages.account.welcome,
    description: 'Text to welcome user',
    defaultMessage: 'Welcome default'
  },
  mainMenuViewAllCategories: {
    id: messageIds.navigation.main.viewAllCategories,
    description: 'View all categories text',
    defaultMessage: 'View all categories'
  },
  signIn: {
    id: messageIds.navigation.user.signIn,
    description: 'Link text for sign in button',
    defaultMessage: 'Sign In'
  },
  closeMenu: {
    id: messageIds.navigation.main.title,
    description: 'Button text for app navigation header',
    defaultMessage: 'Menu default'
  }
});

/**
 * Header component for the Spray.com links.
 * Based on the screen size a different version will be displayed.
 * Important note: the aim is to keep this header aligned with the spray.com header.
 */
export const SiteHeader: React.FC = () => {
  return (
    <>
      <Mobile>
        <MobileSiteHeader />
      </Mobile>
      <TabletAndDesktop>
        <DesktopSiteHeader />
      </TabletAndDesktop>
    </>
  );
};

// ### Mobile Site Header

interface MobileSiteHeaderStyles {
  root: IStackStyles;
  panel: Partial<IPanelStyles>;
  panelHeader: IStackStyles;
  closeButton: IButtonStyles;
}

const MobileSiteHeader: React.FC = () => {
  const { spacing, palette, semanticColors } = useTheme();
  const intl = useIntl();
  const { asPath, push } = useRouter();
  const { me } = useMe();
  const { formatMessage } = intl;
  const [showPanel, setShowPanel] = useState<'app' | 'user' | undefined>();
  const account: AccountInfo | undefined = msalInstance.getAllAccounts()[0];
  const claims = useClaims();

  const panelHeaderText: string = useMemo(() => {
    if (showPanel === 'app') {
      return formatMessage(messages.closeMenu);
    }
    if (showPanel === 'user') {
      const nameFormatter = new UserFormatter(me, account);
      const name = nameFormatter.formatDisplayName(claims.firstName);
      return formatMessage(messages.welcome, {
        name
      });
    }
    return '';
  }, [account, formatMessage, me, showPanel, claims]);

  const panelType: PanelType = useMemo(() => {
    if (showPanel === 'app') {
      return PanelType.customNear;
    }
    if (showPanel === 'user') {
      return PanelType.custom;
    }
    return PanelType.custom;
  }, [showPanel]);

  function onPanelDismiss(): void {
    setShowPanel(undefined);
  }

  useEffect(() => {
    onPanelDismiss();
  }, [asPath]);

  const styles: MobileSiteHeaderStyles = {
    root: {
      root: {
        height: rem(80),
        position: 'relative'
      }
    },
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
      },
      main: {
        backgroundColor: palette.white
      }
    },
    panelHeader: {
      root: {
        borderBottom: `1px solid ${semanticColors.variantBorder}`,
        height: rem(80)
      }
    },
    closeButton: {
      icon: {
        color: palette.neutralPrimary
      }
    }
  };
  return (
    <Stack>
      <Stack
        horizontal
        verticalAlign="center"
        tokens={{
          padding: `0 ${rem(spacing.s1)}`
        }}
        horizontalAlign="space-between"
        styles={styles.root}
      >
        <Stack
          horizontal
          grow
          verticalFill
          tokens={{ childrenGap: rem(spacing.s1) }}
          verticalAlign="center"
        >
          <SiteHeaderButton
            title={formatMessage(messages.navigationAriaLabel)}
            onClick={() => {
              setShowPanel('app');
            }}
            iconProps={{
              iconName: 'GlobalNavButton'
            }}
          />
        </Stack>
        <SiteLogo />
        <Stack
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: rem(spacing.s2) }}
        >
          <SiteHeaderButton
            onClick={() => {
              push('/cart');
            }}
            iconProps={{
              iconName: 'ShoppingCart'
            }}
          />
          <SiteHeaderButton
            onClick={() => {
              setShowPanel('user');
            }}
            iconProps={{
              iconName: 'Contact'
            }}
          />
        </Stack>
      </Stack>
      {showPanel && (
        <Panel
          hasCloseButton={false}
          type={panelType}
          onRenderHeader={props => (
            <Stack
              horizontal
              horizontalAlign="space-between"
              verticalAlign="center"
              tokens={{ padding: `${rem(25)} ${rem(spacing.s1)}` }}
              styles={styles.panelHeader}
            >
              <ClosePanelButton
                iconProps={{
                  iconName: 'Cancel'
                }}
                onClick={() => props?.onDismiss?.()}
                text={formatMessage(messages.closeMenu)}
                styles={styles.closeButton}
              />
            </Stack>
          )}
          isOpen={!!showPanel}
          onDismiss={onPanelDismiss}
          styles={styles.panel}
        >
          {showPanel === 'user' && (
            <UserNavigationMenu onDismiss={onPanelDismiss} />
          )}
          {showPanel === 'app' && (
            <AppNavigationMenu onDismiss={onPanelDismiss} />
          )}
        </Panel>
      )}
    </Stack>
  );
};

interface DesktopSiteHeaderStyles {
  root: IStackStyles;
  button: Partial<IButtonStyles>;
  divider: Partial<IVerticalDividerStyles>;
  languageMenuCallout: Partial<ICalloutContentStyles>;
}

// ### Desktop Site Header

/**
 * Large version of the Site Header
 */
const DesktopSiteHeader: React.FC = () => {
  const { spacing, palette } = useTheme();
  const { locale } = useIntl();
  const intl = useIntl();
  const { siteMenuItems: globalSiteMenuItems } = useGlobalData();

  const siteMenuItems: MenuItemProps[] = useMemo(() => {
    return mapMenuItemsToMenuItemProps(
      globalSiteMenuItems || [],
      'default',
      intl
    );
  }, [globalSiteMenuItems, intl]);

  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const onDismiss = useCallback(() => setShowLanguageMenu(false), []);

  useEffect(() => {
    onDismiss();
  }, [locale, onDismiss]);

  const styles: DesktopSiteHeaderStyles = {
    root: {
      root: {
        height: rem(80)
      }
    },
    button: {
      label: {
        fontSize: rem(14),
        fontWeight: 500
      }
    },
    divider: {
      wrapper: {
        padding: rem(spacing.s2),
        height: rem(32)
      }
    },
    languageMenuCallout: { beak: { backgroundColor: palette.themeDark } }
  };
  return (
    <Stack>
      <Stack
        horizontal
        verticalAlign="center"
        tokens={{
          padding: `0 ${rem(spacing.l1)}`
        }}
        horizontalAlign="space-between"
        styles={styles.root}
      >
        <SiteLogo />
        <HeaderSearchBar />
        <Stack
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: rem(spacing.s2) }}
          role="navigation"
          id="far-items"
        >
          <ul className="horizontal">
            {siteMenuItems.map(item => {
              return (
                <li key={item.id} className="horizontal">
                  <SiteHeaderButton
                    type="actionButton"
                    id={`site-header-item-${item.id}`}
                    text={item.text}
                    href={item.href}
                    styles={styles.button}
                  />
                </li>
              );
            })}
          </ul>
          <VerticalDivider styles={styles.divider} />
          <SiteHeaderButton
            id="language-select"
            iconProps={{
              iconName: 'Globe'
            }}
            type="actionButton"
            styles={styles.button}
            text={locale.toLocaleUpperCase()}
            onClick={() => {
              setShowLanguageMenu(true);
            }}
          />
          {showLanguageMenu && (
            <div style={{ margin: 0 }}>
              <Callout
                gapSpace={0}
                target={`#language-select`}
                onDismiss={onDismiss}
                setInitialFocus
                styles={styles.languageMenuCallout}
                dismissOnTargetClick={true}
                alignTargetEdge={true}
                minPagePadding={15}
              >
                <LanguageMenu onDismiss={onDismiss} />
              </Callout>
            </div>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
