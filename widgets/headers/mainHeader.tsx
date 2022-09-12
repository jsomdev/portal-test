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
import { useMe } from '@providers/user/userContext';
import { customerLoginRequest } from '@services/authentication/authenticationConfiguration';
import { messageIds } from '@services/i18n';
import { UserFormatter } from '@services/i18n/formatters/entity-formatters/userFormatter';
import { MenuItem } from '@services/portal-api';
import { rem } from '@utilities/rem';

import { HeaderButton } from './headerButton';
import { getMainCommandBarItems } from './mainHeader.helper';

interface IMainHeaderProps {
  items: MenuItem[];
}
interface IMainHeaderStyles {
  commandBarContainer: IStackItemStyles;
  root: IStackStyles;
}
interface IMainCommandBarStyles {
  commandBar: Partial<ICommandBarStyles>;
  button: Partial<IButtonStyles>;
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
  }
});
export const MainHeader: React.FC<IMainHeaderProps> = ({ items }) => {
  const { spacing } = useTheme();
  const { instance, inProgress } = useMsal();
  const { me } = useMe();
  const isAuthenticated = useIsAuthenticated();
  const { formatMessage } = useIntl();
  const userFormatter = new UserFormatter(me, instance.getActiveAccount());

  function signIn() {
    instance.loginRedirect(customerLoginRequest);
  }
  const styles: IMainHeaderStyles = {
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
          <MainHeaderCommandBar items={items} />
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
            <HeaderButton
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
          <HeaderButton
            iconProps={{
              iconName: 'Search'
            }}
          />
          <HeaderButton
            iconProps={{
              iconName: 'ShoppingCart'
            }}
          />
          <HeaderButton
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
  const styles: IMainCommandBarStyles = {
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
