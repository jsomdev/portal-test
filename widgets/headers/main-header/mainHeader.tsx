import React, { useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { NextLink } from '@components/link/nextLink';
import {
  ActionButton,
  Callout,
  IButtonStyles,
  IStackItemStyles,
  IStackStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { customerLoginRequest } from '@services/authentication/authenticationConfiguration';
import { messageIds } from '@services/i18n';
import pagePaths from '@utilities/pagePaths';
import { rem } from '@utilities/rem';
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

interface MainHeaderStyles {
  mainMenuContainer?: IStackItemStyles;
  root: IStackStyles;
  headerButton?: IButtonStyles;
}

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

  const styles: MainHeaderStyles = {
    root: {
      root: {
        height: MAIN_HEADER_HEIGHT,
        transition: '0.3s all ease',
        backgroundColor: palette.neutralLighter
      }
    }
  };
  return (
    <Stack verticalAlign="center" styles={styles.root}>
      <HeaderSearchBar />
    </Stack>
  );
};

const DesktopMainHeader: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<
    MenuItemViewModel | undefined
  >();

  const intl = useIntl();
  const { asPath, push } = useRouter();
  const { instance, inProgress } = useMsal();
  const { mainMenuItems } = useGlobalData();
  const { spacing, palette, effects } = useTheme();

  const isAuthenticated = useIsAuthenticated();

  const menuItems: MenuItemViewModel[] = useMemo(() => {
    return mapMenuItemsToMenuItemViewModel(
      mainMenuItems || [],
      'default',
      intl,
      null
    );
  }, [mainMenuItems, intl]);

  function signIn() {
    instance.loginRedirect(customerLoginRequest);
  }

  useEffect(() => {
    setActiveMenuItem(undefined);
  }, [asPath]);

  const styles: MainHeaderStyles = {
    root: {
      root: {
        height: MAIN_HEADER_HEIGHT,
        transition: '0.3s all ease',
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
          bottom: 0,
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
          <NextLink href={pagePaths.cart}>
            <a>
              <SiteHeaderButton
                title={intl.formatMessage(messages.cartAriaLabel)}
                iconProps={{
                  iconName: 'ShoppingCart'
                }}
                onRenderMenuIcon={() => <CartCountButtonIcon />}
              />
            </a>
          </NextLink>
          {inProgress === InteractionStatus.None && (
            <SiteHeaderButton
              title={intl.formatMessage(messages.userAriaLabel)}
              type="actionButton"
              iconProps={{
                iconName: 'Contact'
              }}
              // TODO temporary functionality until the desktop 'user menu' is implemented
              onClick={() =>
                isAuthenticated ? push(pagePaths.accountOverview) : signIn()
              }
            />
          )}
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
