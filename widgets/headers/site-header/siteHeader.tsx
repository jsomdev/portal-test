import { useCallback, useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { AccountInfo } from '@azure/msal-browser';
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
import { getMsalInstance } from '@services/authentication/authenticationConfiguration';
import { messageIds } from '@services/i18n';
import { UserFormatter } from '@services/i18n/formatters/entity-formatters/userFormatter';
import pagePaths from '@utilities/pagePaths';
import { rem } from '@utilities/rem';
import CartCountButtonIcon from '@widgets/cart/cartCountButtonIcon';
import { LanguageMenu } from '@widgets/headers/site-header/language-menu/languageMenu';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';

import { AccountNavigationMenu } from '../../account/accountNavigationMenu';
import {
  MenuItemViewModel,
  mapMenuItemsToMenuItemViewModel
} from '../main-header/mainHeader.helper';
import { HeaderSearchBar } from '../shared/headerSearchBar';
import { AppNavigationMenu } from './appNavigationMenu';
import { SiteHeaderButton } from './siteHeaderButton';
import { SiteLogo } from './siteLogo';

export interface SiteHeaderProps {
  siteMenuItems: MenuItemViewModel[];
}

const messages = defineMessages({
  navigationAriaLabel: {
    id: messageIds.navigation.site.navigationAriaLabel,
    description: 'Aria label for the navigation menu',
    defaultMessage: 'Navigation menu'
  },
  cartAriaLabel: {
    id: messageIds.navigation.main.cartAriaLabel,
    defaultMessage: 'Shopping Cart',
    description: 'Aria label for cart button'
  },

  userAriaLabel: {
    id: messageIds.navigation.main.userAriaLabel,
    defaultMessage: 'User Menu',
    description: 'Aria label for user button'
  },
  welcome: {
    id: messageIds.pages.account.overview.welcome,
    description: 'Text to welcome user',
    defaultMessage: 'Welcome'
  },
  mainMenuViewAllCategories: {
    id: messageIds.navigation.main.viewAllCategories,
    description: 'View all categories text',
    defaultMessage: 'View all categories'
  },
  signIn: {
    id: messageIds.navigation.account.signIn,
    description: 'Link text for sign in button',
    defaultMessage: 'Sign In'
  },
  closeMenu: {
    id: messageIds.navigation.main.title,
    description: 'Button text for app navigation header',
    defaultMessage: 'Menu'
  }
});

export const SITE_HEADER_HEIGHT = 80;

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
}

const MobileSiteHeader: React.FC = () => {
  const { spacing, palette, semanticColors } = useTheme();
  const intl = useIntl();
  const { asPath, push } = useRouter();
  const { me } = useMe();
  const { formatMessage } = intl;
  const [showPanel, setShowPanel] = useState<'app' | 'user' | undefined>();
  const account: AccountInfo | undefined =
    getMsalInstance()?.getAllAccounts()[0];

  const panelHeaderText: string = useMemo(() => {
    if (showPanel === 'app') {
      return formatMessage(messages.closeMenu);
    }

    if (showPanel === 'user') {
      const userFormatter = new UserFormatter(me, account);
      const name = userFormatter.formatDisplayName();
      return formatMessage(messages.welcome, {
        name
      });
    }
    return '';
  }, [account, formatMessage, me, showPanel]);

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
        height: rem(SITE_HEADER_HEIGHT),
        position: 'relative'
      }
    },

    panel: {
      content: {
        background: palette.white,
        padding: 0
      },
      contentInner: {
        background: palette.white
      },
      commands: {
        padding: 0,
        position: 'sticky'
      },
      navigation: {
        height: 80,
        borderBottom: `1px solid ${semanticColors.variantBorder}`,
        background: palette.white,
        padding: spacing.m
      },
      header: {
        padding: 0,
        margin: 'auto'
      },
      subComponentStyles: {
        closeButton: {
          root: {
            margin: 'auto'
          }
        }
      }
    }
  };
  return (
    <Stack>
      <Stack
        horizontal
        verticalAlign="center"
        tokens={{
          padding: `0 ${spacing.s1}`
        }}
        horizontalAlign="space-between"
        styles={styles.root}
      >
        <Stack
          horizontal
          grow
          verticalFill
          tokens={{ childrenGap: spacing.s1 }}
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
          tokens={{ childrenGap: spacing.s2 }}
        >
          <SiteHeaderButton
            title={intl.formatMessage(messages.cartAriaLabel)}
            onRenderMenuIcon={() => <CartCountButtonIcon />}
            onClick={() => {
              push(pagePaths.cart);
            }}
            iconProps={{
              iconName: 'ShoppingCart'
            }}
          />
          <SiteHeaderButton
            title={intl.formatMessage(messages.userAriaLabel)}
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
          hasCloseButton={true}
          type={panelType}
          headerText={panelHeaderText}
          isOpen={!!showPanel}
          onDismiss={onPanelDismiss}
          closeButtonAriaLabel={formatMessage(messages.closeMenu)}
          styles={styles.panel}
        >
          <Stack.Item styles={{ root: { overflow: 'hidden' } }}>
            {showPanel === 'user' && (
              <AccountNavigationMenu onDismiss={onPanelDismiss} />
            )}

            {showPanel === 'app' && (
              <AppNavigationMenu onDismiss={onPanelDismiss} />
            )}
          </Stack.Item>
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

  const siteMenuItems: MenuItemViewModel[] = useMemo(() => {
    return mapMenuItemsToMenuItemViewModel(
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
        height: rem(SITE_HEADER_HEIGHT)
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
        padding: spacing.s2,
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
          padding: `0 ${spacing.l1}`
        }}
        horizontalAlign="space-between"
        styles={styles.root}
      >
        <SiteLogo />
        <HeaderSearchBar />
        <Stack
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: spacing.s2 }}
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
            text={locale === 'default' ? 'EN-US' : locale?.toLocaleUpperCase()}
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
