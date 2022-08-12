import React from 'react';

import { useRouter } from 'next/dist/client/router';
import { defineMessages, useIntl } from 'react-intl';

import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import {
  CommandBar,
  IButtonStyles,
  ICommandBarStyles,
  IStackItemStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { useMe } from '@providers/user/userContext';
import { customerLoginRequest } from '@services/authentication/authenticationConfiguration';
import { messageIds } from '@services/i18n';
import { UserFormatter } from '@services/i18n/formatters/entity-formatters/userFormatter';
import { MenuItem } from '@services/portal-api';
import { rem } from '@utilities/rem';

import { getMainCommandBarItems } from './mainHeader.helper';
import { SiteHeaderButton } from './siteHeaderButton';

interface MainHeaderStyles {
  commandBarContainer: IStackItemStyles;
  root: IStackStyles;
}
interface MainCommandBarStyles {
  commandBar: Partial<ICommandBarStyles>;
  button: Partial<IButtonStyles>;
}

export const MainHeader: React.FC = () => {
  const { spacing } = useTheme();
  const { instance, inProgress } = useMsal();
  const { mainMenuItems: items } = useGlobalData();
  const { me } = useMe();
  const isAuthenticated = useIsAuthenticated();
  const { formatMessage } = useIntl();
  const userFormatter = new UserFormatter(me, instance.getActiveAccount());
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
    }
  });

  function signIn() {
    instance.loginRedirect(customerLoginRequest);
  }
  const styles: MainHeaderStyles = {
    root: {
      root: {
        height: 44,
        transition: '0.3s all ease'
      }
    },
    commandBarContainer: {
      root: {
        flex: 1
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
        <Stack.Item styles={styles.commandBarContainer}>
          <MainHeaderCommandBar items={items || []} />
        </Stack.Item>
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
    </nav>
  );
};

const MainHeaderCommandBar: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  const theme = useTheme();
  const { spacing, palette } = theme;
  const { push } = useRouter();
  const styles: MainCommandBarStyles = {
    commandBar: {
      root: {
        width: '100%',
        background: 'transparent',
        paddingLeft: 0
      },

      primarySet: {
        background: 'transparent'
      }
    },
    button: {
      root: {
        background: 'transparent',
        margin: `0 ${rem(spacing.s1)} 0 0`,
        paddingLeft: 0,
        marginLeft: 0
      },
      label: {
        fontSize: rem(15),
        letterSpacing: rem(0.38),
        color: palette.black,
        marginLeft: 0,
        fontWeight: 500
      },
      menuIcon: {
        color: palette.black,
        marginBottom: `-${rem(spacing.s1)}`
      },
      menuIconHovered: {
        color: palette.accent
      },
      labelHovered: {
        color: palette.accent
      },

      rootHovered: {
        background: 'transparent'
      },
      rootPressed: {
        background: 'transparent'
      },
      rootExpanded: {
        background: 'transparent'
      },
      rootExpandedHovered: {
        background: 'transparent'
      }
    }
  };

  return (
    <CommandBar
      styles={styles.commandBar}
      items={getMainCommandBarItems(
        items,
        (ev, path) => {
          ev?.preventDefault();
          push(path);
        },
        theme,
        styles.button,
        null
      )}
    />
  );
};
