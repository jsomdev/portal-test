import React from 'react';

import { NextRouter, useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import {
  FontWeights,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';

export interface NotFoundStyles {
  bodyWrapper: IStackStyles;
  header: ITextStyles;
  description: ITextStyles;
}

const messages = defineMessages({
  header: {
    id: messageIds.pages.notFound.header,
    defaultMessage: 'This page could not be found'
  },
  explanation: {
    id: messageIds.pages.notFound.explanation,
    defaultMessage: 'The {pageType} you are looking for cannot be found.'
  },
  redirection: {
    id: messageIds.pages.notFound.redirection,
    defaultMessage:
      'If you are lost, please use our search bar in the top menu, or return to the {homepageLink}'
  },
  homepageLink: {
    id: messageIds.pages.notFound.homepageLink,
    defaultMessage: 'homepage'
  },
  productPage: {
    id: messageIds.pages.notFound.pageTypes.product,
    defaultMessage: 'product'
  },
  modelPage: {
    id: messageIds.pages.notFound.pageTypes.model,
    defaultMessage: 'product model'
  },
  categoryPage: {
    id: messageIds.pages.notFound.pageTypes.category,
    defaultMessage: 'product category'
  },
  defaultPage: {
    id: messageIds.pages.notFound.pageTypes.defaultPage,
    defaultMessage: 'page'
  }
});

function getExplanation(router: NextRouter, intl: ReturnType<typeof useIntl>) {
  let pageTypeMessageId: keyof typeof messages = 'defaultPage';

  const { asPath } = router;

  if (asPath.startsWith('/models/')) {
    pageTypeMessageId = 'modelPage';
  } else if (asPath.startsWith('/categories/')) {
    pageTypeMessageId = 'categoryPage';
  } else if (asPath.startsWith('/products/')) {
    pageTypeMessageId = 'productPage';
  }

  return intl.formatMessage(messages.explanation, {
    pageType: intl.formatMessage(messages[pageTypeMessageId])
  });
}

export const NotFoundMessage: React.FC = () => {
  const intl = useIntl();
  const { palette, spacing, fonts } = useTheme();
  const router = useRouter();
  const explanation = getExplanation(router, intl);
  const styles: NotFoundStyles = {
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
        padding: spacing.l1,
        fontWeight: FontWeights.semilight
      }
    }
  };
  return (
    <Stack
      verticalAlign="space-between"
      horizontalAlign="center"
      grow
      tokens={{
        padding: '10vh 0',
        childrenGap: spacing.l1
      }}
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
        <Text styles={styles.header} as="h1">
          {intl.formatMessage(messages.header)}
        </Text>
        <Text variant="mediumPlus" styles={styles.description}>
          {explanation}
        </Text>
        <Text variant="mediumPlus" styles={styles.description}>
          {intl.formatMessage(messages.redirection, {
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
                  {intl.formatMessage(messages.homepageLink)}
                </Text>
              </NextLink>
            )
          })}
        </Text>
      </Stack>
    </Stack>
  );
};
