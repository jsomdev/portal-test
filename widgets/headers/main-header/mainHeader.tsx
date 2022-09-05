import React, { useMemo, useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import {
  ActionButton,
  IButtonStyles,
  IStackItemStyles,
  IStackStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { useMe } from '@providers/user/userContext';
import { customerLoginRequest } from '@services/authentication/authenticationConfiguration';
import { messageIds } from '@services/i18n';
import { UserFormatter } from '@services/i18n/formatters/entity-formatters/userFormatter';
import { rem } from '@utilities/rem';
import { useLarge } from '@widgets/media-queries';
import { HeaderSearchBar } from '../shared/headerSearchBar';
import { SiteHeaderButton } from '../site-header/siteHeaderButton';
import {
  mapMenuItemsToMenuItemProps,
  MenuItemProps
} from './mainHeader.helper';
import { MainHeaderMenu } from './mainHeaderMenu';

interface MainHeaderStyles {
  mainMenuContainer: IStackItemStyles;
  root: IStackStyles;
  headerButton: IButtonStyles;
}

const messages = defineMessages({
  signIn: {
    id: messageIds.navigation.user.signIn,
    description: 'Text for the sign in button',
    defaultMessage: 'Sign in'
  },
  myProfile: {
    id: messageIds.navigation.user.myProfile,
    description: 'Fallback text for the My Profile button',
    defaultMessage: 'My Profile'
  },
  mainMenuViewAllCategory: {
    id: messageIds.navigation.menu.viewAllCategory,
    description: 'View all ... ',
    defaultMessage: 'View all '
  }
});

export const MainHeader: React.FC = () => {
  const isLarge = useLarge();

  if (isLarge) {
    return <DesktopMainHeader />;
  }

  return <MobileMainHeader />;
};

const MobileMainHeader: React.FC = () => {
  return <HeaderSearchBar />;
};

const DesktopMainHeader: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string | undefined>();

  const { formatMessage, locale } = useIntl();
  const { instance, inProgress } = useMsal();
  const { mainMenuItems } = useGlobalData();
  const { spacing, palette } = useTheme();
  const { me } = useMe();

  const isAuthenticated = useIsAuthenticated();

  const userFormatter = new UserFormatter(me, instance.getActiveAccount());

  const mappedMainMenuItems: MenuItemProps[] = useMemo(() => {
    return mapMenuItemsToMenuItemProps(
      mainMenuItems || [],
      formatMessage(messages.mainMenuViewAllCategory),
      null,
      undefined,
      locale
    );
  }, [mainMenuItems, formatMessage, locale]);

  function signIn() {
    instance.loginRedirect(customerLoginRequest);
  }
  const styles: MainHeaderStyles = {
    root: {
      root: {
        height: 46,
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
        height: rem(46),
        fontWeight: 500,
        padding: 0,
        selectors: {
          ':before': {
            content: '',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: 0,
            height: '3px',
            display: 'block',
            backgroundColor: palette.themeSecondary,
            transform: `translateX(-50%)`,
            transition: 'all 0.3s ease-in'
          },
          ':hover::before': {
            content: "''",
            width: '100%'
          }
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
          padding: `0 ${rem(spacing.l1)}`
        }}
        horizontalAlign="space-between"
      >
        <Stack
          tokens={{ childrenGap: spacing.l2 }}
          styles={styles.mainMenuContainer}
          horizontal
        >
          {mappedMainMenuItems.map(item => {
            return (
              <ActionButton
                key={`main-header-menu-${item.text}`}
                styles={styles.headerButton}
                onClick={() => {
                  setActiveMenuItem(item.id);
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
            childrenGap: rem(spacing.s2)
          }}
          verticalAlign="center"
        >
          {inProgress === InteractionStatus.None && (
            <SiteHeaderButton
              type="actionButton"
              iconProps={{
                iconName: 'Contact'
              }}
              onClick={() => (isAuthenticated ? null : signIn())}
              text={
                isAuthenticated
                  ? userFormatter.formatDisplayName(
                      formatMessage(messages.myProfile)
                    )
                  : formatMessage(messages.signIn)
              }
            />
          )}
          <SiteHeaderButton
            iconProps={{
              iconName: 'Search'
            }}
          />
          <SiteHeaderButton
            iconProps={{
              iconName: 'ShoppingCart'
            }}
          />
          <SiteHeaderButton
            iconProps={{
              iconName: 'FavoriteList'
            }}
          />
        </Stack>
      </Stack>
      <MainHeaderMenu
        menuItems={mappedMainMenuItems}
        activeMenuItemId={activeMenuItem}
      />
    </nav>
  );
};
