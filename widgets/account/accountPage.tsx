import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { AppErrorBoundary } from '@components/errors/appErrorBoundary';
import { NextLink } from '@components/link/nextLink';
import { PortalMessageBar } from '@components/messages/portalMessageBar';
import {
  ActionButton,
  IButtonStyles,
  IMessageBarStyles,
  IStackStyles,
  MessageBarType,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { messageIds } from '@services/i18n';
import { MenuItem } from '@services/portal-api';
import { rem } from '@utilities/rem';
import { AppLayout } from '@widgets/layouts/appLayout';
import ContentContainerStack from '@widgets/layouts/contentContainerStack';
import { TabletAndDesktop } from '@widgets/media-queries';
import Page from '@widgets/page/page';
import { LocalePaths } from '@widgets/page/page.types';

import { AccountSideNavigation } from './accountSideNavigation';

interface AccountPageProps {
  pageTitle: string;
  siteMenuItems: MenuItem[] | undefined;
  mainMenuItems: MenuItem[] | undefined;
  localePaths: LocalePaths | undefined;
  breadCrumbItem?: {
    text: string;
    link: string;
  };
}

interface AccountPageStyles {
  accountNavigationContainer: IStackStyles;
  mainContainer: IStackStyles;
  signInPrompt: IMessageBarStyles;
  breadCrumbButton: IButtonStyles;
}

const messages = defineMessages({
  signInPrompt: {
    id: messageIds.pages.account.signInPrompt,
    description: 'Prompt for an unauthenticated user',
    defaultMessage: 'Default sign in message prompt'
  }
});

export const AccountPage: React.FC<AccountPageProps> = ({
  pageTitle,
  mainMenuItems,
  siteMenuItems,
  localePaths,
  children,
  breadCrumbItem
}) => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
  const isAuthenticated = useIsAuthenticated();
  const { inProgress } = useMsal();

  const styles: AccountPageStyles = {
    accountNavigationContainer: {
      root: {
        width: 'auto',
        paddingRight: spacing.l1,
        minWidth: rem(260)
      }
    },
    mainContainer: {
      root: {
        height: 'auto',
        flex: '1 1 0'
      }
    },
    signInPrompt: {
      root: {
        height: '100%'
      }
    },
    breadCrumbButton: {
      root: {
        padding: 0,
        margin: 0
      },
      icon: {
        margin: 0
      }
    }
  };

  return (
    <Page
      metaProps={{
        title: pageTitle,
        noIndex: true
      }}
      i18nProps={{
        localePaths
      }}
    >
      <GlobalDataProvider
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>
          <ContentContainerStack>
            {inProgress !== InteractionStatus.Startup && (
              <Stack
                horizontal
                tokens={{ padding: `${spacing.l2} 0 ${spacing.l1} 0` }}
              >
                <TabletAndDesktop>
                  {className => (
                    <Stack
                      styles={styles.accountNavigationContainer}
                      className={className}
                    >
                      <AccountSideNavigation />
                    </Stack>
                  )}
                </TabletAndDesktop>
                {isAuthenticated && (
                  <Stack
                    styles={styles.mainContainer}
                    tokens={{ childrenGap: spacing.l1 }}
                  >
                    {breadCrumbItem && (
                      <Stack.Item>
                        <NextLink href={breadCrumbItem.link} passHref>
                          <a>
                            <ActionButton
                              text={breadCrumbItem.text}
                              iconProps={{ iconName: 'ChevronLeft' }}
                              styles={styles.breadCrumbButton}
                            />
                          </a>
                        </NextLink>
                      </Stack.Item>
                    )}
                    <Stack.Item>
                      <Text variant="xLarge" as={'h1'}>
                        {pageTitle}
                      </Text>
                    </Stack.Item>
                    <AppErrorBoundary>{children}</AppErrorBoundary>
                  </Stack>
                )}
                {!isAuthenticated && (
                  <PortalMessageBar
                    messageBarType={MessageBarType.warning}
                    styles={styles.signInPrompt}
                  >
                    <Stack>
                      <Text>{formatMessage(messages.signInPrompt)}</Text>
                    </Stack>
                  </PortalMessageBar>
                )}
              </Stack>
            )}
          </ContentContainerStack>
        </AppLayout>
      </GlobalDataProvider>
    </Page>
  );
};
