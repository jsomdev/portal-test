import React, { FC } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import {
  ActionButton,
  Breadcrumb,
  FontWeights,
  IBreadcrumbItem,
  IBreadcrumbStyles,
  IButtonStyles,
  IStackStyles,
  IconButton,
  Stack,
  useTheme
} from '@fluentui/react';
import { SystemOfMeasurementContext } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { messageIds } from '@services/i18n';
import pagePaths from '@utilities/pagePaths';
import ContentContainerStack from '@widgets/layouts/contentContainerStack';
import {
  mediaQueryFrom,
  useMobile,
  useTabletAndDesktop
} from '@widgets/media-queries';

type MainBreadcrumbProps = {
  items: IBreadcrumbItem[];
};

type MainBreadcrumbStyles = {
  breadcrumb?: Partial<IBreadcrumbStyles>;
  root?: Partial<IStackStyles>;
  homeIconButton: Partial<IButtonStyles>;
  systemOfMeasurementButton: Partial<IButtonStyles>;
};

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
  const isTabletAndDesktop = useTabletAndDesktop();
  const isMobile = useMobile();
  const maxDisplayedItems = isTabletAndDesktop ? 4 : isMobile ? 0 : 1;
  const styles: MainBreadcrumbStyles = {
    root: {
      root: {
        width: '100%',
        margin: `${spacing.m} 0 ${spacing.l2}`
      }
    },
    systemOfMeasurementButton: {
      root: {
        fontSize: fonts.mediumPlus.fontSize
      }
    },
    homeIconButton: {
      rootHovered: {
        backgroundColor: 'transparent'
      },
      root: {
        height: 36
      },
      icon: {
        lineHeight: 14,
        fontSize: fonts.mediumPlus.fontSize,
        color: palette.themePrimary
      },
      iconHovered: {
        color: palette.accent
      }
    },
    breadcrumb: {
      root: {
        width: '100%',
        overflow: 'hidden',
        margin: 'auto'
      },
      list: {
        padding: 0
      },
      listItem: {
        selectors: {
          ':last-child.ms-Breadcrumb-listItem .ms-Breadcrumb-item': {
            fontSize: fonts.medium.fontSize,
            fontWeight: FontWeights.regular,
            padding: 0,
            ...mediaQueryFrom('tablet', {
              fontSize: fonts.mediumPlus.fontSize
            })
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
        ...mediaQueryFrom('tablet', {
          fontSize: fonts.mediumPlus.fontSize
        }),
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
            maxDisplayedItems={maxDisplayedItems}
            styles={styles.breadcrumb}
            onRenderItem={(props, defaultRender) => {
              if (props?.key === 'home') {
                return (
                  <NextLink href={pagePaths.home} passHref>
                    <IconButton
                      styles={styles.homeIconButton}
                      iconProps={{
                        iconName: 'Home'
                      }}
                      href={props.href}
                    />
                  </NextLink>
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
          styles={styles.systemOfMeasurementButton}
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
