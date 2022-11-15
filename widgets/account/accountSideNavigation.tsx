import React, { useMemo } from 'react';

import Link from 'next/link';
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
import { customerLoginRequest } from '@services/authentication/authenticationConfiguration';
import { messageIds } from '@services/i18n';
import pagePaths from '@utilities/pagePaths';
import { rem } from '@utilities/rem';

import { getAccountSideNavigationLinkGroupItems } from './accountNavigationMenu.helper';

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

/**
 * This component renders the account menu on the desktop verion of the account pages
 */
export const AccountSideNavigation: React.FC = () => {
  const { spacing, palette } = useTheme();
  const intl = useIntl();
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();

  // NOTE: Will be shortened / obsolete once quote, order and qrs detail pages are implemented
  function getActiveClassName(path: string): string {
    if (router.pathname === path) {
      return 'active-link';
    }
    // set active state for info and preferences link
    if (
      path.includes(pagePaths.infoAndPreferences) &&
      router.pathname.includes(pagePaths.infoAndPreferences)
    ) {
      return 'active-link';
    }
    // set active state for orders
    if (
      path.includes(pagePaths.orders) &&
      router.pathname.includes(pagePaths.orders)
    ) {
      return 'active-link';
    }
    // set active state for quote requests
    if (
      path.includes(pagePaths.quoteRequests) &&
      router.pathname.includes(pagePaths.quoteRequests)
    ) {
      return 'active-link';
    }
    // set active state for quotes
    if (
      path.includes(pagePaths.quotes) &&
      router.pathname.includes(pagePaths.quotes)
    ) {
      return 'active-link';
    }
    return '';
  }

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
                    className={getActiveClassName(link.url)}
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
              onClick={() => instance.logoutRedirect(customerLoginRequest)}
              text={intl.formatMessage(messages.signOut)}
              styles={styles.instanceButton}
            />
          </Stack>
        )}
      </ul>
    </Stack>
  );
};
