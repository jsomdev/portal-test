import React from 'react';

import { Stack, useTheme } from '@fluentui/react';

import { SummaryProps, SummaryStyles } from './summary.types';

export const Summary: React.FC<SummaryProps> = ({
  onRenderDetails,
  onRenderActions,
  onRenderTopSection
}) => {
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
