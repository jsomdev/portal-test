import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { defineMessages, useIntl } from 'react-intl';
import { Head } from 'widgets/metadata/head';

import backgroundImage from '@public/bigcard_spraylance.png';
import { getAudience, messageIds } from '@services/i18n';
import { Category } from '@services/portal-api';
import { fetchCategoriesForHomePage } from '@services/portal-api/categories';
import { FlaggedEnum } from '@services/portal-api/flaggedEnum';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { Audience } from '@services/portal-api/models/AudienceFlags';
import { rem } from '@utilities/rem';
import { HomeCategoriesSection } from '@widgets/home-page/homeCategories';
import { AppLayout, AppLayoutProps } from '@widgets/layouts/appLayout';
import { Large } from '@widgets/media-queries';

export interface HomeProps {
  categories: Category[];
}

const Home: NextPage<HomeProps & AppLayoutProps> = ({
  categories,
  siteMenuItems,
  mainMenuItems
}) => {
  const { pathname } = useRouter();
  const { formatMessage } = useIntl();
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
      id: messageIds.pages.home.backgroundImageAlt,
      description: 'Alternative for background image',
      defaultMessage: 'Big spray lance background image'
    }
  });
  return (
    <AppLayout siteMenuItems={siteMenuItems} mainMenuItems={mainMenuItems}>
      <Head
        pathname={pathname}
        title={formatMessage(messages.headTitle)}
        description={formatMessage(messages.headDescription)}
      />
      <Large>
        <div id="get-started">
          <Image
            src={backgroundImage}
            layout="fill"
            quality={100}
            objectFit="cover"
            objectPosition={'top center'}
          />
          <style jsx>
            {`
              #get-started {
                width: 100%;
                height: ${rem(500)};
                position: relative;
              }
            `}
          </style>
        </div>
      </Large>
      <HomeCategoriesSection categories={categories} />
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<HomeProps & AppLayoutProps>> => {
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
