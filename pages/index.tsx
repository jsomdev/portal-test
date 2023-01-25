import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { defineMessages, useIntl } from 'react-intl';

import { useIsAuthenticated } from '@azure/msal-react';
import { IStackStyles, mergeStyleSets, useTheme } from '@fluentui/react';
import {
  GlobalDataProvider,
  GlobalDataProviderProps
} from '@providers/global-data/globalDataProvider';
import { useRecentlyViewedProducts } from '@providers/recently-viewed/recentlyViewedContext';
import { messageIds } from '@services/i18n';
import { Category } from '@services/portal-api';
import { fetchCategoriesForHomePage } from '@services/portal-api/categories';
import { CATEGORY_IDS } from '@services/portal-api/constants';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { ENVIRONMENT_VARIABLES } from '@utilities/environmentVariables';
import { rem } from '@utilities/rem';
import { Applications } from '@widgets/home-page/sections/applications';
import { Brands } from '@widgets/home-page/sections/brands';
import { Catalog } from '@widgets/home-page/sections/catalog';
import { Hero } from '@widgets/home-page/sections/hero';
import { SignIn } from '@widgets/home-page/sections/signIn';
import { Support } from '@widgets/home-page/sections/support';
import { AppLayout, AppLayoutProps } from '@widgets/layouts/appLayout';
import ContentContainerStack, {
  ContentContainerStyles
} from '@widgets/layouts/contentContainerStack';
import Page from '@widgets/page/page';
import { getLocalePaths } from '@widgets/page/page.helper';
import { RecentlyViewedProducts } from '@widgets/recently-viewed-gallery/recentlyViewedProducts';

export interface HomeProps {
  categories: Category[];
}

const messages = defineMessages({
  headTitle: {
    id: messageIds.pages.home.headTitle,
    description: 'Page metadata title',
    defaultMessage: 'Welcome'
  },
  headDescription: {
    id: messageIds.pages.home.headDescription,
    description: 'Page metadata description',
    defaultMessage: 'Experts in Spray Technology | Spraying Systems Co.'
  },
  catalogTitle: {
    id: messageIds.pages.home.sections.catalog.title,
    description: 'Header text for the homepage catalog section'
  }
});

type HomeStyles = {
  catalogContainer: Partial<ContentContainerStyles>;
  applicationContainer: Partial<ContentContainerStyles>;
  sectionContainer: Partial<IStackStyles>;
  recentlyViewedContainer: Partial<ContentContainerStyles>;
};

const Home: NextPage<HomeProps & AppLayoutProps> = ({
  categories,
  siteMenuItems,
  mainMenuItems
}) => {
  const { formatMessage } = useIntl();
  const { products } = useRecentlyViewedProducts();
  const { palette, semanticColors } = useTheme();
  const isAuthenticated = useIsAuthenticated();

  const styles: HomeStyles = {
    sectionContainer: {
      root: {
        paddingTop: rem(30),
        paddingBottom: rem(30)
      }
    },
    catalogContainer: {
      outerContainer: {
        root: {
          background: palette.neutralLighterAlt
        }
      }
    },
    recentlyViewedContainer: {
      outerContainer: {
        root: {
          borderTop: `2px solid ${semanticColors.variantBorder}`
        }
      }
    },
    applicationContainer: {
      outerContainer: {
        root: {
          background: palette.neutralLighter
        }
      }
    }
  };
  return (
    <Page
      metaProps={{
        title: formatMessage(messages.headTitle),
        description: formatMessage(messages.headDescription),
        noIndex: false
      }}
      i18nProps={{
        localePaths: getLocalePaths('')
      }}
    >
      <GlobalDataProvider
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>
          <Hero />
          {!isAuthenticated && (
            <ContentContainerStack
              outerStackProps={{
                styles: styles.sectionContainer
              }}
            >
              <SignIn />
            </ContentContainerStack>
          )}
          <ContentContainerStack
            outerStackProps={{
              styles: mergeStyleSets(
                styles.catalogContainer.outerContainer,
                styles.sectionContainer
              )
            }}
          >
            <Catalog
              categories={categories.filter(
                category =>
                  ![
                    CATEGORY_IDS.applications.toLowerCase(),
                    CATEGORY_IDS.brands.toLowerCase()
                  ].includes(category.id?.toLowerCase() || '')
              )}
            />
          </ContentContainerStack>
          <ContentContainerStack
            outerStackProps={{
              styles: mergeStyleSets(
                styles.applicationContainer.outerContainer,
                styles.sectionContainer
              )
            }}
          >
            <Applications
              category={categories.find(
                category =>
                  category.id?.toLowerCase() ===
                  CATEGORY_IDS.applications.toLowerCase()
              )}
            />
          </ContentContainerStack>
          <ContentContainerStack
            outerStackProps={{ styles: styles.sectionContainer }}
          >
            <Brands
              category={categories.find(
                category =>
                  category.id?.toLowerCase() ===
                  CATEGORY_IDS.brands.toLowerCase()
              )}
            />
          </ContentContainerStack>
          <ContentContainerStack
            outerStackProps={{
              styles: mergeStyleSets(
                styles.catalogContainer.outerContainer,
                styles.sectionContainer
              )
            }}
          >
            <Support />
          </ContentContainerStack>
          {products?.length && (
            <ContentContainerStack
              outerStackProps={{
                styles: mergeStyleSets(
                  styles.recentlyViewedContainer.outerContainer,
                  styles.sectionContainer
                )
              }}
            >
              <RecentlyViewedProducts products={products} />
            </ContentContainerStack>
          )}
        </AppLayout>
      </GlobalDataProvider>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<
  GetStaticPropsResult<
    HomeProps & Pick<GlobalDataProviderProps, 'mainMenuItems' | 'siteMenuItems'>
  >
> => {
  const { locale: contextLocale } = context;
  let locale = contextLocale;
  if (locale === ENVIRONMENT_VARIABLES.defaultLocale || locale === 'default') {
    locale = 'en-us';
  }
  const [categoriesData, siteMenuData, mainMenuData] = await Promise.all([
    fetchCategoriesForHomePage(locale),
    fetchMenuItemsForSiteHeader(locale),
    fetchMenuItemsForMainHeader(locale)
  ]);

  return {
    props: {
      categories: categoriesData,
      siteMenuItems: siteMenuData || [],
      mainMenuItems: mainMenuData || []
    }
  };
};

export default Home;
