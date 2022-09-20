import {
  GlobalDataProvider,
  GlobalDataProviderProps
} from '@providers/global-data/globalDataProvider';
import { getAudience, messageIds } from '@services/i18n';
import { Category } from '@services/portal-api';
import { fetchCategoriesForHomePage } from '@services/portal-api/categories';
import { FlaggedEnum } from '@services/portal-api/flaggedEnum';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { Audience } from '@services/portal-api/models/AudienceFlags';
import { HomeCategoriesSection } from '@widgets/home-page/homeCategories';
import { AppLayout } from '@widgets/layouts/appLayout';


import { TabletAndDesktop } from '@widgets/media-queries';
import { MediaContextProvider } from '@widgets/media-queries/media';
import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';

import { useRouter } from 'next/dist/client/router';







import { defineMessages, useIntl } from 'react-intl';
import { Head } from 'widgets/metadata/head';

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
  backgroundImageAlt: {
    id: 'messageIds.pages.home.backgroundImageAlt',
    description: 'Alternative for background image',
    defaultMessage: 'Big spray lance background image'
  }
});

const Home: NextPage<
  HomeProps &
    Partial<Pick<GlobalDataProviderProps, 'mainMenuItems' | 'siteMenuItems'>>
> = ({ categories, siteMenuItems, mainMenuItems }) => {
  const { pathname } = useRouter();
  const { formatMessage } = useIntl();

  return (
    <MediaContextProvider>
      <GlobalDataProvider
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>
          <Head
            pathname={pathname}
            title={formatMessage(messages.headTitle)}
            description={formatMessage(messages.headDescription)}
          />
          <TabletAndDesktop>
            <div id="get-started">
              {/* <style jsx>
              {`
                #get-started {
                  width: 100%;
                  height: ${rem(500)};
                  position: relative;
                }
              `}
            </style> */}
            </div>
          </TabletAndDesktop>
          <HomeCategoriesSection categories={categories} />
        </AppLayout>
      </GlobalDataProvider>
    </MediaContextProvider>
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
  try {
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
  } catch (e) {
    return { notFound: true };
  }
};

export default Home;
