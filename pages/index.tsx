import React from 'react';

import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { defineMessages, useIntl } from 'react-intl';
import { Head } from 'widgets/metadata/head';

import { getAudience, messageIds } from '@services/i18n';
import { Category } from '@services/portal-api';
import { fetchCategoriesForHomePage } from '@services/portal-api/categories';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { HomeCategoriesSection } from '@widgets/categories/homeCategories';
import { AppLayout, AppLayoutProps } from '@widgets/layouts/appLayout';

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
    }
  });
  return (
    <AppLayout siteMenuItems={siteMenuItems} mainMenuItems={mainMenuItems}>
      <Head
        pathname={pathname}
        title={formatMessage(messages.headTitle)}
        description={formatMessage(messages.headDescription)}
      />
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
      fetchCategoriesForHomePage(),
      fetchMenuItemsForSiteHeader(getAudience(locale)),
      fetchMenuItemsForMainHeader(getAudience(locale))
    ]);

    return {
      props: {
        categories: categoriesData?.value || [],
        siteMenuItems: siteMenuData || [],
        mainMenuItems: mainMenuData || []
      }
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default Home;
