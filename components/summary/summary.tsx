import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { Stack, Text, useTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';

import { SummaryProps, SummaryStyles } from './summary.types';

const messages = defineMessages({
  details: {
    id: messageIds.summary.details,
    defaultMessage: 'Details',
    description: 'Title for summary component'
  }
});

export const Summary: React.FC<SummaryProps> = ({
  onRenderDetails,
  onRenderActions,
  onRenderTopSection
}) => {
  const { palette, spacing, effects, semanticColors } = useTheme();
  const { formatMessage } = useIntl();
  const styles: SummaryStyles = {
    detailsText: {
      root: {
        borderBottom: `1px solid ${semanticColors.variantBorder}`
      }
    },
    actionsWrapper: {
      root: {
        marginTop: spacing.l1,
        paddingTop: spacing.l1,
        borderTop: `1px solid ${semanticColors.variantBorder}`
      }
    },
    headerText: {
      root: {
        color: palette.white,
        textTransform: 'uppercase'
      }
    },
    topSection: {
      root: {
        borderBottom: `1px solid ${semanticColors.variantBorder}`
      }
    },
    contentWrapper: {
      root: {}
    },
    wrapper: {
      root: {
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner4,
        overflow: 'hidden'
      }
    }
  };
  return (
    <Stack styles={styles.wrapper}>
      <Stack.Item>
        <Stack
          styles={styles.contentWrapper}
          tokens={{
            padding: `${spacing.m} ${spacing.l1}`,
            childrenGap: spacing.l1
          }}
        >
          {onRenderTopSection && (
            <Stack.Item>
              <Stack
                styles={styles.topSection}
                tokens={{ padding: `0 0 ${spacing.m}` }}
              >
                <Stack.Item>{onRenderTopSection()}</Stack.Item>
              </Stack>
            </Stack.Item>
          )}
          <Stack.Item>
            <Stack
              styles={styles.detailsText}
              tokens={{ padding: `0 0 ${spacing.m}` }}
            >
              <Stack.Item>
                <Text variant="mediumPlus">
                  {formatMessage(messages.details)}
                </Text>
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>{onRenderDetails()}</Stack.Item>
          {onRenderActions && (
            <Stack.Item styles={styles.actionsWrapper}>
              {onRenderActions()}
            </Stack.Item>
          )}
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
