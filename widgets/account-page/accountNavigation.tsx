import React, { useMemo } from 'react';

import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { INavStyles, Nav, Stack } from '@fluentui/react';
import { rem } from '@utilities/rem';

export const AccountNavigation: React.FC = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  // This component has temporary functionality for layout purposes

  const accountNavigationGroups = useMemo(() => {
    if (isAuthenticated) {
      return [
        {
          links: [
            {
              name: 'Overview',
              url: '/account'
            },
            {
              name: 'Orders',
              url: '/account/orders'
            },
            {
              name: 'Quote Requests',
              url: '/account/quote-requests'
            },
            {
              name: 'Info & Preferences',
              url: '/account/info-and-preferences'
            },
            {
              name: 'Sign Out',
              onClick: () => {
                instance.logoutRedirect();
              },
              url: ''
            }
          ]
        }
      ];
    }

    return [
      {
        links: [
          {
            name: 'Overview',
            url: '/account'
          },
          {
            name: 'Sign In',
            onClick: () => {
              instance.loginRedirect();
            },
            url: ''
          }
        ]
      }
    ];
  }, [instance, isAuthenticated]);

  const styles: Partial<INavStyles> = {
    navItem: {
      backgroundColor: 'transparent',
      '& .ms-Button': {
        backgroundColor: 'transparent'
      }
    }
  };
  return (
    <Stack
      styles={{
        root: { position: 'sticky', top: rem(160) }
      }}
    >
      <Nav styles={styles} groups={accountNavigationGroups || []} />
    </Stack>
  );
};
