import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import {
  customerLoginRequest,
  employeeLoginRequest
} from '@services/authentication/authenticationConfiguration';
import { useClaims } from '@services/authentication/claims';
import { messageIds } from '@services/i18n';
import MultiMenu from '@widgets/headers/site-header/multi-menu/multiMenu';
import { MultiMenuConfiguration } from '@widgets/headers/site-header/multi-menu/multiMenu.types';

import { getAccountNavigationMenuItems } from './accountNavigationMenu.helper';

const messages = defineMessages({
  menuReset: {
    id: messageIds.pages.account.overview.title,
    description: 'Back to user menu overview',
    defaultMessage: 'Go to overview'
  }
});

type AccountNavigationMenuProps = {
  onDismiss: () => void;
};

/**
 * This component renders the account menu accessed through the site-header on mobile
 */
export const AccountNavigationMenu: React.FC<AccountNavigationMenuProps> = ({
  onDismiss
}) => {
  const { formatMessage } = useIntl();
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const { isEmployee } = useClaims();
  const request = isEmployee ? employeeLoginRequest : customerLoginRequest;
  const configuration: MultiMenuConfiguration = {
    accountMenu: {
      backButtonText: formatMessage(messages.menuReset),
      hideOtherMenusWhenActive: true,
      items: getAccountNavigationMenuItems(
        isAuthenticated,
        () => instance.loginRedirect(request),
        () => instance.logoutRedirect(request),
        formatMessage
      )
    }
  };

  return <MultiMenu configuration={configuration} onDismiss={onDismiss} />;
};
