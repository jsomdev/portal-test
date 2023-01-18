import React, { useEffect } from 'react';

import Image from 'next/image';
import { defineMessages, useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import { PortalMessageBar } from '@components/messages/portalMessageBar';
import {
  FontIcon,
  FontWeights,
  IStackStyles,
  ITextStyles,
  MessageBarType,
  Stack,
  Text,
  mergeStyles,
  useTheme
} from '@fluentui/react';
import { useAppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { STATIC_IMAGES } from '@public/media/images';
import { messageIds } from '@services/i18n';

export interface ErrorMessageProps {
  error?: Error | undefined | null;
  logError?: boolean;
  showHomepageLink?: boolean;
  showLogo?: boolean;
  message?: string;
  silent?: boolean;
  noPadding?: boolean;
}

export interface ErrorMessageStyles {
  bodyWrapper: IStackStyles;
  header: ITextStyles;
  description: ITextStyles;
}

const messages = defineMessages({
  redirection: {
    id: messageIds.pages.notFound.redirection,
    defaultMessage:
      'If you are lost, please use our search bar in the top menu, or return to the {homepageLink}'
  },
  homepageLink: {
    id: messageIds.pages.notFound.homepageLink,
    defaultMessage: 'homepage'
  },
  siteLogoAlt: {
    id: messageIds.navigation.site.logoAlt,
    description: 'Alt for the Spraying Systems logo',
    defaultMessage: 'Spraying Systems Company logo'
  },
  headerLine1: {
    id: messageIds.pages.error.headerLine1,
    defaultMessage: 'Oops!'
  },
  headerLine2: {
    id: messageIds.pages.error.headerLine2,
    defaultMessage: 'Something went wrong.'
  }
});

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  error,
  silent = false,
  logError = true,
  showHomepageLink = false,
  showLogo = false,
  message = undefined, // = 'There was an error loading the products you are looking for. Please try again later.'
  noPadding = false
}) => {
  const { spacing, palette, fonts } = useTheme();
  const appInsightsContext = useAppInsightsContext();
  const { formatMessage } = useIntl();

  const iconClass = mergeStyles({
    fontSize: 50,
    height: 50,
    width: 50,
    marginBottom: '1.25rem'
  });

  useEffect(() => {
    if (error && logError) {
      appInsightsContext.getAppInsights().trackException({
        error: error,
        exception: error,
        severityLevel: SeverityLevel.Error
      });
    }
  }, [error, logError, appInsightsContext]);
  const styles = {
    description: {
      root: {
        textAlign: 'center'
      }
    },
    bodyWrapper: {
      root: {
        height: '100%'
      }
    },
    header: {
      root: {
        ...fonts.xxLarge,
        textAlign: 'center',

        fontWeight: FontWeights.semilight,
        lineHeight: '1.5em'
      }
    }
  };

  if (silent) {
    return null;
  }
  return (
    <Stack
      verticalAlign="space-between"
      horizontalAlign="center"
      grow
      tokens={{
        padding: noPadding ? undefined : '10vh 0',
        childrenGap: spacing.l1
      }}
    >
      <Stack
        grow
        styles={styles.bodyWrapper}
        tokens={{
          childrenGap: spacing.l2
        }}
        horizontalAlign="center"
        verticalAlign="center"
      >
        {showLogo && (
          <Image
            width={400}
            height={100}
            src={STATIC_IMAGES.branding.siteLogo}
            layout="fixed"
            alt={formatMessage(messages.siteLogoAlt)}
          />
        )}
        <Text styles={styles.header} as="h1">
          <FontIcon title="Error" iconName="Bug" className={iconClass} />
          <br />
          {formatMessage(messages.headerLine1)}
          <br /> {formatMessage(messages.headerLine2)}
        </Text>
        {message && (
          <PortalMessageBar messageBarType={MessageBarType.error}>
            <Stack>
              <Text>{message}</Text>
            </Stack>
          </PortalMessageBar>
        )}
        {showHomepageLink && (
          <Text variant="mediumPlus" styles={styles.description}>
            {formatMessage(messages.redirection, {
              homepageLink: (
                <NextLink href={'/'}>
                  <Text
                    variant="mediumPlus"
                    styles={{
                      root: {
                        color: palette.themePrimary,
                        cursor: 'pointer',
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    {formatMessage(messages.homepageLink)}
                  </Text>
                </NextLink>
              )
            })}
          </Text>
        )}
      </Stack>
    </Stack>
  );
};
