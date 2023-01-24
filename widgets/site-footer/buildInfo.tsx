import React from 'react';

import { FormattedDate, defineMessages, useIntl } from 'react-intl';

import { IStackStyles, Stack, Text, useTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';

import packageJson from './../../package.json';

const messages = defineMessages({
  buildVersion: {
    id: messageIds.navigation.footer.buildVersion,
    defaultMessage: 'Build Version'
  }
});

export const BuildInfo: React.FC = () => {
  const { palette, semanticColors, spacing } = useTheme();
  const { formatMessage } = useIntl();
  const containerStyle: IStackStyles = {
    root: {
      backgroundColor: semanticColors.bodyStandoutBackground,
      padding: spacing.l1,
      ' span': {
        opacity: 0.7,
        color: palette.neutralLight
      }
    }
  };

  const buildDateEnvironmentVariable = process.env.NEXT_BUILD_DATE;
  const buildId = process.env.NEXT_BUILD_ID;
  const buildDate = buildDateEnvironmentVariable
    ? Date.parse(buildDateEnvironmentVariable)
    : undefined;

  return (
    <Stack
      styles={containerStyle}
      verticalAlign="center"
      horizontalAlign="center"
    >
      <Text variant="xSmall">
        {formatMessage(messages.buildVersion)}
        {': '}
      </Text>
      <Text variant="xSmall">
        {packageJson.version}
        {' - '}
        {buildDate ? (
          <FormattedDate
            timeStyle="short"
            dateStyle="short"
            value={buildDate}
          />
        ) : (
          buildId || 'unknown'
        )}
      </Text>
    </Stack>
  );
};
