import React, { useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { useMsal } from '@azure/msal-react';
import { useMe } from '@providers/user/userContext';
import { messageIds } from '@services/i18n';
import MultiMenu from '@widgets/headers/site-header/multi-menu/multiMenu';
import { MultiMenuConfiguration } from '@widgets/headers/site-header/multi-menu/multiMenu.types';

import { getUserMenuItems } from './siteHeader.helper';

const messages = defineMessages({
  menuReset: {
    id: messageIds.pages.account.overview,
    description: 'Back to user menu overview',
    defaultMessage: 'Go to overview default'
  }
});

type UserNavigationMenuProps = {
  onDismiss: () => void;
};
export const UserNavigationMenu: React.FC<UserNavigationMenuProps> = ({
  onDismiss
}) => {
  const intl = useIntl();
  const { me } = useMe();
  const { instance } = useMsal();

  const configuration: MultiMenuConfiguration = {
    userMenu: {
      backButtonText: intl.formatMessage(messages.menuReset),
      hideOtherMenusWhenActive: true,
      style: 'plain',
      items: getUserMenuItems(intl, me, instance)
    }
  };

  return <MultiMenu configuration={configuration} onDismiss={onDismiss} />;
};
