import React, { useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { NextLink } from '@components/link/nextLink';
import {
  ActionButton,
  Callout,
  FontWeights,
  IButtonStyles,
  ICalloutContentStyles,
  IIconStyles,
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
  Icon,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { useMe } from '@providers/user/userContext';
import {
  customerLoginRequest,
  employeeLoginRequest
} from '@services/authentication/authenticationConfiguration';
import { useClaims } from '@services/authentication/claims';
import { messageIds } from '@services/i18n';
import pagePaths from '@utilities/pagePaths';
import { rem } from '@utilities/rem';
import {
  getAccountNavigationMenuItemClassName,
  getAccountNavigationMenuItems
} from '@widgets/account/accountNavigationMenu.helper';
import CartCountButtonIcon from '@widgets/cart/cartCountButtonIcon';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';

import { HeaderSearchBar } from '../shared/headerSearchBar';
import { SiteHeaderButton } from '../site-header/siteHeaderButton';
import {
  MenuItemViewModel,
  mapMenuItemsToMenuItemViewModel
} from './mainHeader.helper';
import { MainHeaderMenu } from './mainHeaderMenu';

const messages = defineMessages({
  cartAriaLabel: {
    id: messageIds.navigation.main.cartAriaLabel,
    defaultMessage: 'Shopping Cart',
    description: 'Aria label for cart button'
  },
  accessPadAriaLabel: {
    id: messageIds.navigation.main.accessPadAriaLabel,
    defaultMessage: 'Quick Access Pad',
    description: 'Aria label for quick access button'
  },
  userAriaLabel: {
    id: messageIds.navigation.main.userAriaLabel,
    defaultMessage: 'User Menu',
    description: 'Aria label for user button'
  }
});

export const MAIN_HEADER_HEIGHT = 46;
export const MainHeader: React.FC = () => {
  return (
    <>
      <Mobile>
        <MobileMainHeader />
      </Mobile>
      <TabletAndDesktop>
        <DesktopMainHeader />
      </TabletAndDesktop>
    </>
  );
};

const MobileMainHeader: React.FC = () => {
  const { palette } = useTheme();

  const styles: IStackStyles = {
    root: {
      height: MAIN_HEADER_HEIGHT,
      transition: '0.3s all ease',
      backgroundColor: palette.neutralLighter
    }
  };
  return (
    <Stack verticalAlign="center" styles={styles}>
      <HeaderSearchBar />
    </Stack>
  );
};

interface DesktopMainHeaderStyles {
  mainMenuContainer: IStackItemStyles;
  root: IStackStyles;
  headerButton: IButtonStyles;
  linkTextContainer: IStackStyles;
  linkText: ITextStyles;
  callout: Partial<ICalloutContentStyles>;
  menuIconAuthenticated: IIconStyles;
  cartButton: IButtonStyles;
  userButton: IButtonStyles;
}

const ACTIVE_LINK_CLASSNAME = 'active-link';

const DesktopMainHeader: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<
    MenuItemViewModel | undefined
  >();
  const intl = useIntl();
  const { formatMessage } = intl;
  const { asPath } = useRouter();
  const { instance, inProgress } = useMsal();

  const { mainMenuItems } = useGlobalData();
  const { spacing, palette, effects, fonts } = useTheme();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { isEmployee } = useClaims();
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();

  const menuItems: MenuItemViewModel[] = useMemo(() => {
    return mapMenuItemsToMenuItemViewModel(
      mainMenuItems || [],
      'default',
      intl,
      null
    );
  }, [mainMenuItems, intl]);

  useEffect(() => {
    setActiveMenuItem(undefined);
  }, [asPath]);

  const accountMenuItems: MenuItemViewModel[] = useMemo(() => {
    const request = isEmployee ? employeeLoginRequest : customerLoginRequest;
    return getAccountNavigationMenuItems(
      isAuthenticated,
      () => instance.loginRedirect(request),
      () => instance.logoutRedirect(request),
      message => formatMessage(message)
    );
  }, [instance, isEmployee, isAuthenticated, formatMessage]);

  const styles: DesktopMainHeaderStyles = {
    root: {
      root: {
        height: MAIN_HEADER_HEIGHT,
        transition: '0.3s background-color ease',
        backgroundColor: palette.neutralLighter
      }
    },
    mainMenuContainer: {
      root: {
        flex: 1
      }
    },
    headerButton: {
      root: {
        position: 'relative',
        height: rem(MAIN_HEADER_HEIGHT),
        fontWeight: 500,
        padding: 0,
        textAlign: 'left',
        ':before, &.active::before': {
          content: "''",
          position: 'absolute',
          bottom: '-1px',
          left: '50%',
          width: '75%',
          height: '2px',
          backgroundColor: 'transparent',
          transform: `translateX(-50%)`,
          transition: 'width 0.15s ease-in, background-color 0.15s ease-in'
        },
        ':hover::before, &.active::before': {
          content: "''",
          width: '100%',
          backgroundColor: palette.themeSecondary
        }
      }
    },
    linkTextContainer: {
      root: {
        width: '100%',
        textAlign: 'left',
        padding: `${spacing.s1} ${spacing.l2}`,
        '&:hover': {
          color: palette.themePrimary
        }
      }
    },
    callout: {
      root: {
        boxShadow: effects.elevation4
      },
      calloutMain: {
        padding: `${spacing.m} 0`
      }
    },
    menuIconAuthenticated: {
      root: {
        color: 'green',
        position: 'absolute',
        top: 0,
        right: '-6px',
        fontSize: fonts.large.fontSize
      }
    },
    linkText: {
      root: {
        color: 'inherit',
        [`&.${ACTIVE_LINK_CLASSNAME}`]: {
          fontWeight: FontWeights.semibold
        }
      }
    },
    cartButton: {
      root: {
        height: rem(MAIN_HEADER_HEIGHT)
      }
    },
    userButton: {
      root: {
        height: rem(MAIN_HEADER_HEIGHT),
        transition: '0.3s background-color ease',
        backgroundColor: showUserMenu ? palette.white : 'transparent'
      }
    }
  };

  return (
    <nav>
      <Stack
        horizontal
        verticalAlign="center"
        styles={styles.root}
        tokens={{
          padding: `0 ${spacing.l1}`
        }}
        horizontalAlign="space-between"
      >
        <Stack
          tokens={{ childrenGap: spacing.l2 }}
          styles={styles.mainMenuContainer}
          horizontal
          id={'main-menu-container'}
        >
          {menuItems.map(item => {
            return (
              <ActionButton
                key={`main-header-menu-${item.text}`}
                styles={styles.headerButton}
                className={item.id === activeMenuItem?.id ? 'active' : ''}
                onClick={() => {
                  if (activeMenuItem?.id === item.id) {
                    setActiveMenuItem(undefined);
                  } else {
                    setActiveMenuItem(item);
                  }
                }}
              >
                <Text>{item.text}</Text>
              </ActionButton>
            );
          })}
        </Stack>
        <Stack
          horizontal
          verticalFill
          tokens={{
            childrenGap: spacing.s2
          }}
          verticalAlign="center"
        >
          {inProgress === InteractionStatus.None && (
            <Stack>
              <SiteHeaderButton
                id="desktop-user-menu-button"
                title={intl.formatMessage(messages.userAriaLabel)}
                type="actionButton"
                iconProps={{
                  iconName: 'Contact'
                }}
                styles={styles.userButton}
                onClick={() => {
                  setShowUserMenu(currentState => !currentState);
                }}
              >
                {isAuthenticated && (
                  <Icon
                    iconName="StatusCircleCheckmark"
                    styles={styles.menuIconAuthenticated}
                  />
                )}
              </SiteHeaderButton>
              {showUserMenu && (
                <Callout
                  role="dialog"
                  target={`#desktop-user-menu-button`}
                  onDismiss={() => setShowUserMenu(false)}
                  setInitialFocus
                  isBeakVisible={false}
                  styles={styles.callout}
                >
                  <Stack tokens={{ childrenGap: spacing.s1 }}>
                    {accountMenuItems.map(link => {
                      return (
                        <NextLink key={link.id} href={link.href} passHref>
                          <a>
                            <ActionButton
                              styles={styles.linkTextContainer}
                              onClick={() => {
                                link.onClick && link.onClick();
                              }}
                            >
                              <Text
                                className={getAccountNavigationMenuItemClassName(
                                  link.href,
                                  router.pathname,
                                  ACTIVE_LINK_CLASSNAME
                                )}
                                styles={styles.linkText}
                              >
                                {link.text}
                              </Text>
                            </ActionButton>
                          </a>
                        </NextLink>
                      );
                    })}
                  </Stack>
                </Callout>
              )}
            </Stack>
          )}
          <NextLink href={pagePaths.cart}>
            <a>
              <SiteHeaderButton
                title={intl.formatMessage(messages.cartAriaLabel)}
                iconProps={{
                  iconName: 'ShoppingCart'
                }}
                onRenderMenuIcon={() => <CartCountButtonIcon />}
                styles={styles.cartButton}
              />
            </a>
          </NextLink>
        </Stack>
      </Stack>

      {activeMenuItem && (
        <Callout
          hidden={!activeMenuItem}
          target={`#main-menu-container`}
          onDismiss={() => {
            setActiveMenuItem(undefined);
          }}
          role="navigation"
          isBeakVisible={false}
          directionalHintFixed={true}
          styles={{
            root: {
              width: '100%',
              boxShadow: effects.elevation8
            }
          }}
        >
          <MainHeaderMenu activeMenuItem={activeMenuItem} />
        </Callout>
      )}
    </nav>
  );
};
