import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import {
  FontWeights,
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { getAudience, messageIds } from '@services/i18n';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { AppLayout } from '@widgets/layouts/appLayout';
import Page from '@widgets/page/page';

export interface NotFoundStyles {
  root: IStackStyles;
  bodyWrapper: IStackStyles;
  header: ITextStyles;
  description: ITextStyles;

  recentlyViewedWrapper: IStackItemStyles;
}

type Custom404Props = Pick<
  GlobalDataContextProps,
  'mainMenuItems' | 'siteMenuItems'
>;

const messages = defineMessages({
  title: {
    id: messageIds.pages.notFound.title,
    defaultMessage: 'Not Found'
  },
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

const Custom404: NextPage<Custom404Props> = ({
  siteMenuItems,
  mainMenuItems
}) => {
  const router = useRouter();
  const intl = useIntl();
  const { palette, spacing, fonts } = useTheme();

  const explanation = getExplanation(router, intl);

  const styles: NotFoundStyles = {
    description: {
      root: {
        textAlign: 'center'
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
    header: {
      root: {
        textAlign: 'center',
        fontSize: fonts.xxLarge.fontSize,
        textTransform: 'uppercase',
        padding: spacing.l1,
        fontWeight: FontWeights.semilight
      }
    },
    root: {
      root: {
        minHeight: '100%'
      }
    }
  };

  return (
    <Page
      metaProps={{
        title: intl.formatMessage(messages.title)
      }}
      i18nProps={{}}
    >
      <GlobalDataProvider
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>
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
        </AppLayout>
      </GlobalDataProvider>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<Custom404Props>> => {
  const { locale } = context;

  const [siteMenuData, mainMenuData] = await Promise.all([
    fetchMenuItemsForSiteHeader(getAudience(locale)),
    fetchMenuItemsForMainHeader(getAudience(locale))
  ]);

  return {
    props: {
      siteMenuItems: siteMenuData || [],
      mainMenuItems: mainMenuData || []
    }
  };
};

export default Custom404;
