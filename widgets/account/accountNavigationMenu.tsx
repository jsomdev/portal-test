import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { useMsal } from '@azure/msal-react';
import { useMe } from '@providers/user/userContext';
import { messageIds } from '@services/i18n';
import MultiMenu from '@widgets/headers/site-header/multi-menu/multiMenu';
import { MultiMenuConfiguration } from '@widgets/headers/site-header/multi-menu/multiMenu.types';

import { getAccountNavigationMenuItems } from './accountNavigationMenu.helper';

const messages = defineMessages({
  menuReset: {
    id: messageIds.pages.account.overview.title,
    description: 'Back to user menu overview',
    defaultMessage: 'Go to overview default'
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
  const intl = useIntl();
  const { me } = useMe();
  const { instance } = useMsal();

  const configuration: MultiMenuConfiguration = {
    accountMenu: {
      backButtonText: intl.formatMessage(messages.menuReset),
      hideOtherMenusWhenActive: true,
      items: getAccountNavigationMenuItems(intl, me, instance)
    }
  };

  return <MultiMenu configuration={configuration} onDismiss={onDismiss} />;
};
