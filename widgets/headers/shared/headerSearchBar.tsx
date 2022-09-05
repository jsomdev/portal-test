import { ITextFieldStyles, Stack, TextField, useTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';
import { useLarge } from '@widgets/media-queries';
import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  searchPlaceholder: {
    id: messageIds.navigation.searchBar.placeholder,
    description: 'Page search bar placeholder',
    defaultMessage: 'Search by part number...'
  }
});

export const HeaderSearchBar: React.FC = () => {
  const isLarge = useLarge();

  if (isLarge) {
    return <DesktopSearchBar />;
  }

  return <MobileSearchBar />;
};

const DesktopSearchBar: React.FC = () => {
  const { formatMessage } = useIntl();
  const { spacing } = useTheme();

  const styles: Partial<ITextFieldStyles> = {
    root: { width: '100%', maxWidth: rem(450) }
  };

  return (
    <Stack
      grow
      horizontal
      tokens={{ padding: `0 ${rem(spacing.l1)}` }}
      horizontalAlign="center"
    >
      <TextField
        styles={styles}
        iconProps={{ iconName: 'Search' }}
        placeholder={formatMessage(messages.searchPlaceholder)}
      />
    </Stack>
  );
};

const MobileSearchBar: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Stack
      tokens={{
        padding: `0 ${rem(12)}`
      }}
    >
      <TextField
        iconProps={{ iconName: 'Search' }}
        placeholder={formatMessage(messages.searchPlaceholder)}
      />
    </Stack>
  );
};
