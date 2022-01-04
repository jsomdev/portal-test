import React from 'react';

import type {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { useRouter } from 'next/dist/client/router';
import { Head } from 'widgets/metadata/head';

import { Category } from '@services/portal-api';
import { OdataCollection, QueryOptions } from '@services/portal-api/o-data';
import { CategoriesResource } from '@services/portal-api/resources/CategoriesResource';
import { HomeCategoriesSection } from '@widgets/categories/homeCategories';

interface IHomeProps {
  categories: Category[];
}

const Home: NextPage<IHomeProps> = ({ categories }) => {
  const { pathname } = useRouter();

  return (
    <div>
      <Head pathname={pathname} title="Home" description="Home Description" />
      <p>Hello</p>
      <HomeCategoriesSection categories={categories} />
    </div>
  );
};

async function fetcHomeCategoriesInfo() {
  const categoriesResource: CategoriesResource = new CategoriesResource();
  const queryOptions: Partial<QueryOptions> = {
    selectQuery: 'id,name,description,settings,seoPath',
    expandQuery:
      'image($select=url),children($select=id,name,settings,seoPath;$expand=image($select=url);$orderby=sortIndex asc)',
    filterQuery: `parentId eq null`,
    orderbyQuery: 'sortIndex asc'
  };
  const data = await categoriesResource.getEntities(queryOptions);

  return data;
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<IHomeProps>> => {
  try {
    const categoriesData: OdataCollection<Category> =
      await fetcHomeCategoriesInfo();

    return {
      props: {
        categories: categoriesData?.value || []
      }
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default Home;
