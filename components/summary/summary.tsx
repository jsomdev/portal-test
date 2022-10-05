import React from 'react';

import { Stack, Text, useTheme } from '@fluentui/react';

import { SummaryProps, SummaryStyles } from './summary.types';

export const Summary: React.FC<SummaryProps> = ({
  headerText,
  onRenderDetails,
  onRenderActions,
  onRenderTopSection
}) => {
  const messages = { details: 'Details' };
  const { palette, spacing, effects, semanticColors } = useTheme();
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
    headerWrapper: {
      root: {
        backgroundColor: palette.themePrimary
      }
    },
    topSection: {
      root: {
        borderBottom: `1px solid ${semanticColors.variantBorder}`
      }
    },
    contentWrapper: {
      root: {
        border: `1px solid ${semanticColors.variantBorder}`,
        borderTop: 'none',
        borderRadius: `0 0 ${effects.roundedCorner4} ${effects.roundedCorner4}`
      }
    },
    wrapper: {
      root: {
        borderRadius: effects.roundedCorner4,
        overflow: 'hidden'
      }
    }
  };
  return (
    <Stack styles={styles.wrapper}>
      <Stack.Item>
        <Stack
          styles={styles.headerWrapper}
          tokens={{ padding: spacing.m }}
          horizontalAlign="center"
        >
          <Stack.Item>
            <Text styles={styles.headerText}>{headerText}</Text>
          </Stack.Item>
        </Stack>
      </Stack.Item>
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
                <Text variant="mediumPlus">{messages.details}</Text>
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
