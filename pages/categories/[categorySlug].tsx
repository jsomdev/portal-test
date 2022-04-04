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

import { mapCategoryIdToExternalFilter } from '@services/facet-service/facet-helpers/facetCombiner';
import { FacetResult } from '@services/facet-service/models/facet/facetResult';
import { formatMultilingualString } from '@services/i18n/helper';
import { messageIds } from '@services/i18n/ids';
import {
  AttributeGroup,
  AttributeType,
  Category as CategoryModel,
  Model,
  Series
} from '@services/portal-api';
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
import { AppLayout, AppLayoutProps } from '@widgets/layouts/appLayout';
import { Head } from '@widgets/metadata/head';

export interface CategoryProps {
  category: CategoryModel | undefined;
  series: Series[];
  models: Model[];
  attributeTypes: AttributeType[];
  attributeTypeGroups: AttributeGroup[];
  initialFacetResults: FacetResult[];
  initialSeriesGroupingResults: SeriesGroupingResult[];
}

const Category: NextPage<CategoryProps & AppLayoutProps> = ({
  category,
  siteMenuItems,
  mainMenuItems
}) => {
  const { pathname } = useRouter();
  const { formatMessage, locale } = useIntl();
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
    <AppLayout siteMenuItems={siteMenuItems} mainMenuItems={mainMenuItems}>
      <Head
        pathname={pathname}
        title={formatMessage(messages.headTitle, {
          name: formatMultilingualString(category?.name, locale)
        })}
        description={formatMessage(messages.headDescription)}
      />
      {category?.name?.en}
    </AppLayout>
  );
};

interface CategoryParsedUrlQuery extends ParsedUrlQuery {
  categorySlug: string | undefined;
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
      return {
        params: {
          categorySlug: formatMultilingualString(category.slug, locale)
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
      fetchMenuItemsForSiteHeader(),
      fetchMenuItemsForMainHeader(),
      fetchAllAttributeTypes(),
      fetchAllAttributeGroups()
    ]);

    const category: CategoryModel | undefined = categoriesData.find(
      category =>
        formatMultilingualString(category.slug, context.locale) === categorySlug
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
        attributeTypeGroups: attributeTypeGroupsData,
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
