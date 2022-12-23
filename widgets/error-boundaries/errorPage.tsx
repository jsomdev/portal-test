import React, { useEffect } from 'react';

import { FontWeights, Link, Stack, Text, useTheme } from '@fluentui/react';

import { ErrorPageProps, ErrorPageStyles } from './errorPage.types';

export const ErrorPage: React.FC<ErrorPageProps> = ({ page, error }) => {
  const { spacing } = useTheme();

  const messages = {
    title: 'THE PAGE CANNOT BE FOUND',
    descriptionPrefix: 'The ',
    descriptionSuffix: ' you are looking for cannot be found.',
    helpMessage: ` If you are lost, please use our search bar in the top menu, or return to the `
  };

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  const styles: ErrorPageStyles = {
    description: {
      root: {
        textAlign: 'center',
        maxWidth: 480
      }
    },
    recentlyViewedWrapper: {
      root: {
        width: '100%'
      }
    },
    bodyWrapper: {
      root: {
        height: '100%'
      }
    },
    actionsWrapper: {
      root: {
        width: '100%'
      }
    },
    actionTitle: {
      root: {
        fontWeight: FontWeights.semibold,
        textAlign: 'center'
      }
    },

    title: {
      root: {
        textAlign: 'center',
        fontSize: 46,
        maxWidth: 480
      }
    },
    actionDescription: {
      root: {
        textAlign: 'justify'
      }
    },
    action: { root: { width: 300 } },
    root: {
      root: {
        minHeight: '100%'
      }
    }
  };
  return (
    <>
      <Stack
        verticalAlign="space-between"
        horizontalAlign="center"
        grow
        tokens={{
          padding: spacing.l2,
          childrenGap: spacing.l1
        }}
        styles={styles.root}
      >
        <Stack
          grow
          styles={styles.bodyWrapper}
          tokens={{
            childrenGap: spacing.m
          }}
          horizontalAlign="center"
          verticalAlign="center"
        >
          <Text variant="xLarge" styles={styles.title}>
            {messages.title}
          </Text>
          <Text variant="mediumPlus" styles={styles.description}>
            {messages.descriptionPrefix}
            <strong>{page}</strong>
            {messages.descriptionSuffix}
          </Text>
          <Text variant="mediumPlus" styles={styles.description}>
            {messages.helpMessage}
            <Link href={window.location.origin}>homepage</Link>
          </Text>
        </Stack>
      </Stack>
    </>
  );
};
