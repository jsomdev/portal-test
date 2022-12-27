import React, { FC } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  ActionButton,
  Breadcrumb,
  FontWeights,
  IconButton,
  Stack,
  useTheme
} from '@fluentui/react';
import { SystemOfMeasurementContext } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { messageIds } from '@services/i18n';
import ContentContainerStack from '@widgets/layouts/contentContainerStack';

import {
  MainBreadcrumbProps,
  MainBreadcrumbStyles
} from './mainBreadcrumb.types';

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
  }
});
export const MainBreadcrumb: FC<MainBreadcrumbProps> = ({ items }) => {
  const { spacing, fonts, palette } = useTheme();
  const { formatMessage } = useIntl();
  const { systemOfMeasurement, changeSystemOfMeasurement } = React.useContext(
    SystemOfMeasurementContext
  );
  const styles: MainBreadcrumbStyles = {
    root: {
      root: {
        width: '100%',
        margin: 'auto'
      }
    },
    breadcrumb: {
      root: {
        width: '100%',
        marginTop: spacing.s1,
        marginBottom: spacing.s1
      },
      list: {
        padding: 0
      },
      item: {
        selectors: {
          ':last-child.ms-Breadcrumb-item': {
            fontSize: fonts.medium.fontSize,
            fontWeight: FontWeights.regular,
            padding: 0
          }
        }
      },
      chevron: {
        // Because paddingLeft was removed from an itemLink I had to made sure
        // the chevron aligned correct. I didn't want to use spacing from theme
        // since it's not meant to be changed
        paddingRight: 8
      },

      itemLink: {
        fontSize: fonts.medium.fontSize,
        color: '#3F6074',
        borderBottom: 'none',
        paddingLeft: 0,
        selectors: {
          '&:hover': {
            textDecoration: 'underline',
            color: palette.themeDarker,
            backgroundColor: 'transparant'
          },
          '&:active:hover': {
            backgroundColor: 'transparant'
          },
          '&:active': {
            backgroundColor: 'transparant'
          }
        }
      }
    }
  };

  const translatedSystemOfMeasurement = formatMessage(
    systemOfMeasurement === 'Metric'
      ? messages.systemOfMeasurementMetric
      : messages.systemOfMeasurementUS
  );
  return (
    <ContentContainerStack>
      <Stack horizontal verticalAlign="center" styles={styles.root}>
        <Stack.Item grow>
          <Breadcrumb
            items={items}
            styles={styles.breadcrumb}
            onRenderItem={(props, defaultRender) => {
              if (props?.key === 'home') {
                return (
                  <IconButton
                    styles={{
                      rootHovered: {
                        backgroundColor: 'transparent'
                      },
                      icon: {
                        color: '#3F6074'
                      },
                      iconHovered: {
                        color: '#3F6074'
                      }
                    }}
                    iconProps={{
                      iconName: 'Home'
                    }}
                    href={props.href}
                  />
                );
              }
              return (defaultRender && defaultRender(props)) || null;
            }}
          />
        </Stack.Item>
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
    </ContentContainerStack>
  );
};
