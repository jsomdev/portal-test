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
import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { mapCategoryIdToExternalFilter } from '@services/facet-service/facet-helpers/facetCombiner';
import { FacetResult } from '@services/facet-service/models/facet/facetResult';
import { CategoryFormatter } from '@services/i18n/formatters/entity-formatters/categoryFormatter';
import { getAudience } from '@services/i18n/helper';
import { messageIds } from '@services/i18n/ids';
import { Category as CategoryModel, Model, Series } from '@services/portal-api';
import { fetchAllAttributeGroups } from '@services/portal-api/attributeGroups';
import { fetchAllAttributeTypes } from '@services/portal-api/attributeTypes';
import { ExternalFilter } from '@services/portal-api/base/types';
import { fetchAllCategories } from '@services/portal-api/categories';
import {
  fetchCountByModelSeries,
  fetchFacetResults
} from '@services/portal-api/finder';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { fetchAllModels } from '@services/portal-api/models';
import { fetchAllSeries } from '@services/portal-api/series';
import { mapModelsSeriesGroupingToSeriesGroupingResult } from '@widgets/finder/helper';
import { SeriesGroupingResult } from '@widgets/finder/types';
import { AppLayout } from '@widgets/layouts/appLayout';
import { Head } from '@widgets/metadata/head';

export interface CategoryProps {
  category: CategoryModel;
  series: Series[];
  models: Model[];
  initialFacetResults: FacetResult[];
  initialSeriesGroupingResults: SeriesGroupingResult[];
}

const Category: NextPage<
  CategoryProps &
    Partial<
      Pick<
        GlobalDataContextProps,
        'attributeGroups' | 'attributeTypes' | 'mainMenuItems' | 'siteMenuItems'
      >
    >
> = ({
  category,
  siteMenuItems,
  mainMenuItems,
  initialFacetResults,
  initialSeriesGroupingResults
}) => {
  const router = useRouter();
  const { formatMessage, locale } = useIntl();
  const categoryFormatter: CategoryFormatter = new CategoryFormatter(
    category,
    locale
  );

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

  return (
    <GlobalDataProvider
      siteMenuItems={siteMenuItems}
      mainMenuItems={mainMenuItems}
    >
      <AppLayout>
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
        ></FacetsProvider>
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
): Promise<
  GetStaticPropsResult<
    CategoryProps &
      Partial<
        Pick<
          GlobalDataContextProps,
          | 'attributeGroups'
          | 'attributeTypes'
          | 'mainMenuItems'
          | 'siteMenuItems'
        >
      >
  >
> => {
  try {
    const { locale } = context;

    const { categorySlug } = context.params as CategoryParsedUrlQuery;
    const [
      seriesData,
      modelsData,
      categoriesData,
      siteMenuData,
      mainMenuData,
      attributeTypesData,
      attributeTypeGroupsData
    ] = await Promise.all([
      fetchAllSeries(),
      fetchAllModels(),
      fetchAllCategories(),
      fetchMenuItemsForSiteHeader(getAudience(locale)),
      fetchMenuItemsForMainHeader(getAudience(locale)),
      fetchAllAttributeTypes(),
      fetchAllAttributeGroups()
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
    const categoryFilter: ExternalFilter | undefined =
      mapCategoryIdToExternalFilter(category.id);
    const encodedCategoryFilter: string = encodeURIComponent(
      JSON.stringify([categoryFilter])
    );
    const [modelsSeriesGrouping, facetResults] = await Promise.all([
      fetchCountByModelSeries(encodedCategoryFilter),
      fetchFacetResults(encodedCategoryFilter)
    ]);

    const seriesGroupingResult =
      mapModelsSeriesGroupingToSeriesGroupingResult(modelsSeriesGrouping);

    return {
      props: {
        attributeGroups: attributeTypeGroupsData,
        attributeTypes: attributeTypesData,
        series: seriesData,
        models: modelsData,
        initialSeriesGroupingResults: seriesGroupingResult,
        initialFacetResults: facetResults,
        category,
        siteMenuItems: siteMenuData,
        mainMenuItems: mainMenuData
      }
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default Category;
