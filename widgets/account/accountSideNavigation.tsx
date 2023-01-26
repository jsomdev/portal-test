import React, { useMemo } from 'react';

import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { NextLink } from '@components/link/nextLink';
import {
  ActionButton,
  FontSizes,
  FontWeights,
  IButtonStyles,
  INavLinkGroup,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import {
  customerLoginRequest,
  employeeLoginRequest
} from '@services/authentication/authenticationConfiguration';
import { useClaims } from '@services/authentication/claims';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';

import {
  getAccountNavigationMenuItemClassName,
  getAccountSideNavigationLinkGroupItems
} from './accountNavigationMenu.helper';

interface AccountSideNavigationStyles {
  instanceButton: IButtonStyles;
  navContainer: IStackStyles;
  linkTextContainer: IStackStyles;
  linkText: ITextStyles;
}

const messages = defineMessages({
  signIn: {
    id: messageIds.navigation.account.signIn,
    defaultMessage: 'Sign in',
    description: 'Button text to prompting to sign in'
  },
  signOut: {
    id: messageIds.pages.account.signOut,
    defaultMessage: 'Sign out',
    description: 'Button text to prompting to sign in'
  }
});

const ACTIVE_LINK_CLASSNAME = 'active-link';

/**
 * This component renders the account menu on the desktop verion of the account pages
 */
export const AccountSideNavigation: React.FC = () => {
  const { spacing, palette } = useTheme();
  const intl = useIntl();
  const { instance } = useMsal();
  const { isEmployee } = useClaims();
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();

  const accountNavigationGroups: INavLinkGroup[] = useMemo(() => {
    return getAccountSideNavigationLinkGroupItems(intl, isAuthenticated);
  }, [intl, isAuthenticated]);

  const styles: AccountSideNavigationStyles = {
    navContainer: {
      root: { position: 'sticky', top: rem(160) }
    },
    instanceButton: {
      root: {
        padding: `${spacing.m}`
      },
      label: {
        margin: 0
      }
    },
    linkTextContainer: {
      root: {
        width: '100%',
        textAlign: 'left',
        padding: `${spacing.m}`,
        '&:hover': {
          backgroundColor: palette.neutralLighter
        },
        '&.active-link': {
          borderLeft: `2px solid ${palette.themePrimary}`,
          fontWeight: FontWeights.semibold
        }
      }
    },
    linkText: {
      root: {
        fontSize: FontSizes.medium
      }
    }
  };

  return (
    <Stack styles={styles.navContainer}>
      <ul>
        {accountNavigationGroups.map(group => {
          return group.links?.map(link => {
            return (
              <NextLink key={link.name} href={link.url} passHref>
                <a>
                  <Stack
                    styles={styles.linkTextContainer}
                    className={getAccountNavigationMenuItemClassName(
                      link.url,
                      router.pathname,
                      ACTIVE_LINK_CLASSNAME
                    )}
                  >
                    <Text styles={styles.linkText}>{link.name}</Text>
                  </Stack>
                </a>
              </NextLink>
            );
          });
        })}
        {!isAuthenticated && (
          <Stack>
            <ActionButton
              onClick={() => instance.loginRedirect(customerLoginRequest)}
              text={intl.formatMessage(messages.signIn)}
              styles={styles.instanceButton}
            />
          </Stack>
        )}
        {isAuthenticated && (
          <Stack>
            <ActionButton
              onClick={() =>
                instance.logoutRedirect(
                  isEmployee ? employeeLoginRequest : customerLoginRequest
                )
              }
              text={intl.formatMessage(messages.signOut)}
              styles={styles.instanceButton}
            />
          </Stack>
        )}
      </ul>
    </Stack>
  );
};
