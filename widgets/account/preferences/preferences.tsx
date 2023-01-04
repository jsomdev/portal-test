import React, { useContext } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  ActionButton,
  IIconStyles,
  IStackStyles,
  ITextStyles,
  Icon,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { SystemOfMeasurementContext } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';
import { mediaQueryFrom } from '@widgets/media-queries';

const messages = defineMessages({
  systemOfMeasurementMetric: {
    id: messageIds.data.systemOfMeasurement.metric,
    defaultMessage: 'Metric',
    description: 'Metric system of measurement'
  },
  systemOfMeasurementUS: {
    id: messageIds.data.systemOfMeasurement.us,
    defaultMessage: 'US',
    description: 'US system of measurement'
  },
  units: {
    id: messageIds.data.systemOfMeasurement.controls.units,
    defaultMessage: '{system} Units',
    description: 'Display {system} of Units'
  },
  title: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .measurementSettings.title,
    defaultMessage: 'Measurement Settings',
    description: 'Measurement Settings'
  },
  description: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .measurementSettings.description,
    defaultMessage: 'Change your measurement settings',
    description: 'Change your measurement settings'
  }
});

interface PreferencesStyles {
  cardContainer: IStackStyles;
  iconContainer: IStackStyles;
  iconStyles: IIconStyles;
  sectionTitle: ITextStyles;
}

export const Preferences: React.FC = () => {
  const { spacing, semanticColors, effects, fonts } = useTheme();
  const { formatMessage } = useIntl();
  const { systemOfMeasurement, changeSystemOfMeasurement } = useContext(
    SystemOfMeasurementContext
  );

  const translatedSystemOfMeasurement = formatMessage(
    systemOfMeasurement === 'Metric'
      ? messages.systemOfMeasurementMetric
      : messages.systemOfMeasurementUS
  );

  const styles: PreferencesStyles = {
    cardContainer: {
      root: {
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner4,
        width: '100%',
        padding: spacing.l1,
        ...mediaQueryFrom('tablet', {
          padding: `${spacing.l1} ${spacing.l2}`
        })
      }
    },
    iconContainer: {
      root: {
        paddingRight: spacing.l1,
        ...mediaQueryFrom('tablet', {
          paddingRight: spacing.l2
        })
      }
    },
    iconStyles: {
      root: {
        fontSize: fonts.xxLarge.fontSize,
        ...mediaQueryFrom('tablet', {
          fontSize: rem(32)
        })
      }
    },
    sectionTitle: {
      root: {
        ...fonts.large
      }
    }
  };

  return (
    <Stack styles={styles.cardContainer} horizontal>
      <Stack styles={styles.iconContainer} verticalAlign="center">
        <Icon styles={styles.iconStyles} iconName="Calculator" />
      </Stack>
      <Stack tokens={{ childrenGap: spacing.m }}>
        <Stack>
          <Text styles={styles.sectionTitle} as="h3">
            {formatMessage(messages.title)}
          </Text>
        </Stack>
        <Stack>
          <Text>{formatMessage(messages.description)}</Text>
        </Stack>
        <ActionButton
          text={formatMessage(messages.units, {
            system: translatedSystemOfMeasurement
          })}
          onClick={() =>
            changeSystemOfMeasurement(
              systemOfMeasurement === 'Metric' ? 'US' : 'Metric'
            )
          }
          iconProps={{
            iconName: 'Switch'
          }}
        />
      </Stack>
    </Stack>
  );
};
