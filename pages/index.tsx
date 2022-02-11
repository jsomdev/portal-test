import React from 'react';

import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { Head } from 'widgets/metadata/head';

import { Category } from '@services/portal-api';
import { fetchCategoriesForHomePage } from '@services/portal-api/categories';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { HomeCategoriesSection } from '@widgets/categories/homeCategories';
import { IPageLayoutProps, PageLayout } from '@widgets/layouts/pageLayout';

export interface IHomeProps {
  categories: Category[];
}

const Home: NextPage<IHomeProps & IPageLayoutProps> = ({
  categories,
  siteMenuItems,
  mainMenuItems
}) => {
  const { pathname } = useRouter();

  return (
    <PageLayout siteMenuItems={siteMenuItems} mainMenuItems={mainMenuItems}>
      <Head pathname={pathname} title="Home" description="Home Description" />
      <HomeCategoriesSection categories={categories} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<IHomeProps & IPageLayoutProps>
> => {
  try {
    const [categoriesData, siteMenuData, mainMenuData] = await Promise.all([
      fetchCategoriesForHomePage(),
      fetchMenuItemsForSiteHeader(),
      fetchMenuItemsForMainHeader()
    ]);

    return {
      props: {
        categories: categoriesData?.value || [],
        siteMenuItems: siteMenuData?.value || [],
        mainMenuItems: mainMenuData?.value || []
      }
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default Home;
