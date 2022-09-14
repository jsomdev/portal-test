import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { useRouter } from 'next/dist/client/router';
import { ParsedUrlQuery } from 'querystring';
import { defineMessages, useIntl } from 'react-intl';

import { getInitialFacetsFromFiles } from '@providers/facets/facetsHelper';
import { FacetsProvider } from '@providers/facets/facetsProvider';
import { FinderProvider } from '@providers/finder/finderProvider';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { mapCategoryIdToExternalFilter } from '@services/facet-service/facet-helpers/facetCombiner';
import { FacetFactory } from '@services/facet-service/factory/facetFactory';
import { CategoryFormatter } from '@services/i18n/formatters/entity-formatters/categoryFormatter';
import { getAudience } from '@services/i18n/helper';
import { messageIds } from '@services/i18n/ids';
import {
  AttributeGroup,
  AttributeType,
  Category as CategoryModel
} from '@services/portal-api';
import { fetchAllAttributeTypes } from '@services/portal-api/attributeTypes';
import { fetchAllCategories } from '@services/portal-api/categories';
import { FacetedSearchOdataCollection } from '@services/portal-api/faceted-search/types';
import { fetchFacetedSearchResults } from '@services/portal-api/finder';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { formatCamelCase } from '@utilities/formatText';
import { ResultView } from '@widgets/finder/result-view/resultView';
import { AppLayout, AppLayoutProps } from '@widgets/layouts/appLayout';
import { Head } from '@widgets/metadata/head';

export interface CategoryProps {
  category: CategoryModel;
  attributeTypes: AttributeType[];
  attributeTypeGroups: AttributeGroup[];
}

const messages = defineMessages({
  headTitle: {
    id: messageIds.pages.category.headTitle,
    description: 'Page metadata title',
    defaultMessage: 'Welcome'
  },
  headDescription: {
    id: messageIds.pages.category.headDescription,
    description: 'Page metadata description',
    defaultMessage: 'Experts in Spray Technology | Spraying Systems Co.'
  }
});

const Category: NextPage<CategoryProps & AppLayoutProps> = ({
  category,
  siteMenuItems,
  mainMenuItems,
  attributeTypeGroups,
  attributeTypes
}) => {
  const router = useRouter();
  const { formatMessage, locale } = useIntl();
  const categoryFormatter: CategoryFormatter = new CategoryFormatter(
    category,
    locale
  );

  return (
    <GlobalDataProvider
      category={category}
      attributeGroups={attributeTypeGroups}
      attributeTypes={attributeTypes}
    >
      <AppLayout siteMenuItems={siteMenuItems} mainMenuItems={mainMenuItems}>
        <Head
          pathname={router.pathname}
          title={formatMessage(messages.headTitle, {
            name: categoryFormatter.formatName()
          })}
          description={formatMessage(messages.headDescription)}
        />
        <FacetsProvider
          preFilters={{
            categoryId: category?.id
          }}
          initialFacets={getInitialFacetsFromFiles([], router.query)}
        >
          <FinderProvider initialData={undefined}>
            <ResultView category={category} />
          </FinderProvider>
        </FacetsProvider>
      </AppLayout>
    </GlobalDataProvider>
  );
};

interface CategoryParsedUrlQuery extends ParsedUrlQuery {
  categorySlug: string[] | undefined;
}

export const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
): Promise<GetStaticPathsResult<CategoryParsedUrlQuery>> => {
  const categoriesData: CategoryModel[] = await fetchAllCategories();

  const localizedPaths = (context.locales || []).map(locale => {
    const pathForLocale: {
      params: CategoryParsedUrlQuery;
      locale?: string | undefined;
    }[] = categoriesData.map(category => {
      const categoryFormatter: CategoryFormatter = new CategoryFormatter(
        category,
        locale
      );
      return {
        params: {
          categorySlug: [categoryFormatter.formatSlug()]
        },
        locale
      };
    });
    return pathForLocale;
  });

  return { paths: localizedPaths.flat(), fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<CategoryProps & AppLayoutProps>> => {
  try {
    const { locale } = context;

    const { categorySlug } = context.params as CategoryParsedUrlQuery;
    const [
      categoriesData,
      siteMenuData,
      mainMenuData,
      attributeTypesData
      // attributeTypeGroupsData
    ] = await Promise.all([
      fetchAllCategories(),
      fetchMenuItemsForSiteHeader(getAudience(locale)),
      fetchMenuItemsForMainHeader(getAudience(locale)),
      fetchAllAttributeTypes()
      // fetchAllAttributeGroups()
    ]);

    const category: CategoryModel | undefined = categoriesData.find(
      category => {
        const categoryFormatter: CategoryFormatter = new CategoryFormatter(
          category,
          locale
        );
        return categoryFormatter.formatSlug() === categorySlug?.[0];
      }
    );

    if (category === undefined || category.id === undefined) {
      return {
        notFound: true
      };
    }
    const categoryFilter: string | undefined = mapCategoryIdToExternalFilter(
      category.id
    );
    const encodedCategoryFilter: string = encodeURIComponent(
      JSON.stringify([categoryFilter])
    );

    const initialSearchResults: FacetedSearchOdataCollection =
      await fetchFacetedSearchResults(
        encodedCategoryFilter,
        'null',
        undefined,
        10,
        0
      );

    const usedAttributeTypeCodes: string[] = Object.keys(
      initialSearchResults['@search.facets']
    );
    const filteredAttributeTypes: AttributeType[] = attributeTypesData.filter(
      attributeType =>
        usedAttributeTypeCodes.includes(
          formatCamelCase(attributeType.code || '')
        )
    );

    const usedFacetCodes: string[] = Object.values(
      FacetFactory.getFacetsFromFiles([])
    ).map(facet => formatCamelCase(facet.attributeTypeCode));

    Object.keys(initialSearchResults['@search.facets']).forEach(key => {
      if (!usedFacetCodes.includes(key)) {
        delete initialSearchResults['@search.facets'][key];
      }
    });

    const props = {
      attributeTypeGroups: [],
      attributeTypes: filteredAttributeTypes,
      category,
      siteMenuItems: siteMenuData,
      mainMenuItems: mainMenuData
    };

    return {
      props
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default Category;
