import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { defineMessages, useIntl } from 'react-intl';

import { IStackStyles, mergeStyleSets, useTheme } from '@fluentui/react';
import {
  GlobalDataProvider,
  GlobalDataProviderProps
} from '@providers/global-data/globalDataProvider';
import { getAudience, messageIds } from '@services/i18n';
import { Category } from '@services/portal-api';
import { fetchCategoriesForHomePage } from '@services/portal-api/categories';
import { CATEGORY_IDS } from '@services/portal-api/constants';
import { FlaggedEnum } from '@services/portal-api/flaggedEnum';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { Audience } from '@services/portal-api/models/AudienceFlags';
import { rem } from '@utilities/rem';
import { Applications } from '@widgets/home-page/sections/applications';
import { Brands } from '@widgets/home-page/sections/brands';
import { Catalog } from '@widgets/home-page/sections/catalog';
import { Hero } from '@widgets/home-page/sections/hero';
import { SignIn } from '@widgets/home-page/sections/signIn';
import { AppLayout, AppLayoutProps } from '@widgets/layouts/appLayout';
import ContentContainerStack, {
  ContentContainerStyles
} from '@widgets/layouts/contentContainerStack';
import { TabletAndDesktop } from '@widgets/media-queries';
import Page from '@widgets/page/page';
import { getLocalePaths } from '@widgets/page/page.helper';

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
};

const Home: NextPage<HomeProps & AppLayoutProps> = ({
  categories,
  siteMenuItems,
  mainMenuItems
}) => {
  const { formatMessage } = useIntl();
  const { palette } = useTheme();

  const styles: HomeStyles = {
    sectionContainer: {
      root: {
        paddingTop: rem(60),
        paddingBottom: rem(60)
      }
    },
    catalogContainer: {
      outerContainer: {
        root: {
          background: palette.neutralLighterAlt
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
          <TabletAndDesktop>
            <SignIn />
          </TabletAndDesktop>
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
        </AppLayout>
      </GlobalDataProvider>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<
  GetStaticPropsResult<
    HomeProps &
      Partial<Pick<GlobalDataProviderProps, 'mainMenuItems' | 'siteMenuItems'>>
  >
> => {
  const { locale } = context;
  const [categoriesData, siteMenuData, mainMenuData] = await Promise.all([
    fetchCategoriesForHomePage(getAudience(locale)),
    fetchMenuItemsForSiteHeader(getAudience(locale)),
    fetchMenuItemsForMainHeader(getAudience(locale))
  ]);

  return {
    props: {
      categories:
        categoriesData?.value.filter(category => {
          const audience = FlaggedEnum.create<Audience>(
            Audience,
            category.audience || ''
          );
          const currentAudience = getAudience(locale);
          return audience & currentAudience;
        }) || [],
      siteMenuItems: siteMenuData || [],
      mainMenuItems: mainMenuData || []
    }
  };
};

export default Home;
