import { useMemo } from 'react';

import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { useRouter } from 'next/dist/client/router';
import { ParsedUrlQuery } from 'querystring';
import { useIntl } from 'react-intl';

import { useTheme } from '@fluentui/react';
import { getInitialFacetsFromFiles } from '@providers/facets/facetsHelper';
import { FacetsProvider } from '@providers/facets/facetsProvider';
import { FinderOperatingConditionsConfiguration } from '@providers/finder/finderContext';
import { FinderProvider } from '@providers/finder/finderProvider';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { mapCategoryIdToExternalFilter } from '@services/facet-service/facet-helpers/facetCombiner';
import { liquidFlowRateFacet } from '@services/facet-service/facets/range-facets/liquidFlowRate';
import { liquidPressureFacet } from '@services/facet-service/facets/range-facets/liquidPressure';
import { liquidSpecificGravityFacet } from '@services/facet-service/facets/range-facets/liquidSpecificGravity';
import { sprayAngleFacet } from '@services/facet-service/facets/range-facets/sprayAngle';
import { FacetFactory } from '@services/facet-service/factory/facetFactory';
import { supportedLocales } from '@services/i18n';
import { CategoryFormatter } from '@services/i18n/formatters/entity-formatters/categoryFormatter';
import { TextFormatter } from '@services/i18n/formatters/entity-formatters/textFormatter';
import {
  AttributeGroup,
  AttributeType,
  Category as CategoryModel,
  Setting
} from '@services/portal-api';
import { fetchAllAttributeTypes } from '@services/portal-api/attributeTypes';
import { fetchAllCategories } from '@services/portal-api/categories';
import { SETTINGKEYS } from '@services/portal-api/constants';
import { FacetedSearchOdataCollection } from '@services/portal-api/faceted-search/types';
import { fetchFacetedSearchResults } from '@services/portal-api/finder';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { CategoriesBreadcrumb } from '@widgets/breadcrumbs/categories-breadcrumb/categoriesBreadcrumb';
import {
  ResultView,
  ResultViewType
} from '@widgets/finder/result-view/resultView';
import { AppLayout, AppLayoutProps } from '@widgets/layouts/appLayout';
import ContentContainerStack, {
  ContentContainerStyles
} from '@widgets/layouts/contentContainerStack';
import Page from '@widgets/page/page';
import { getLocalePathsFromMultilingual } from '@widgets/page/page.helper';
import { RecentlyViewedProductsContentContainerStack } from '@widgets/recently-viewed-gallery/recentlyViewedProducts';

type CategoryProps = {
  category: CategoryModel;
  initialViewAs: ResultViewType;
  finderOperatingConditionsConfiguration: FinderOperatingConditionsConfiguration | null;
  attributeTypes: AttributeType[];
  attributeTypeGroups: AttributeGroup[];
} & AppLayoutProps;

interface CategoryStyles {
  recentlyViewedContainer: Partial<ContentContainerStyles>;
}

const Category: NextPage<CategoryProps> = ({
  category,
  siteMenuItems,
  mainMenuItems,
  attributeTypeGroups,
  finderOperatingConditionsConfiguration,
  attributeTypes,
  initialViewAs
}) => {
  const router = useRouter();
  const { locale } = useIntl();
  const { semanticColors, spacing } = useTheme();
  const categoryFormatter: CategoryFormatter = new CategoryFormatter(
    category,
    locale
  );
  const viewAs: ResultViewType = useMemo(() => {
    if (router.asPath.includes('?')) {
      return 'list';
    }
    return initialViewAs;
  }, [initialViewAs, router.asPath]);

  const styles: CategoryStyles = {
    recentlyViewedContainer: {
      outerContainer: {
        root: {
          padding: `${spacing.m} 0`,
          borderTop: `2px solid ${semanticColors.variantBorder}`
        }
      }
    }
  };
  return (
    <Page
      metaProps={{
        title: categoryFormatter.formatName(),
        description: categoryFormatter.formatDescription(),
        image: categoryFormatter.formatImageSrc(),
        imageAlt: categoryFormatter.formatImageCaption()
      }}
      i18nProps={{
        localePaths: getLocalePathsFromMultilingual('categories', category.slug)
      }}
    >
      <GlobalDataProvider
        category={category}
        attributeGroups={attributeTypeGroups}
        attributeTypes={attributeTypes}
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>
          <CategoriesBreadcrumb category={category} />
          <FacetsProvider
            preFilters={{
              categoryId: category.id,
              searchQuery: router.query.query?.toString()
            }}
            initialFacets={getInitialFacetsFromFiles([], router.query)}
          >
            <FinderProvider
              initialData={undefined}
              operatingConditionsConfiguration={
                finderOperatingConditionsConfiguration || undefined
              }
            >
              <ContentContainerStack>
                <ResultView
                  viewAs={viewAs}
                  category={category}
                  searchQuery={router.query.query?.toString()}
                />
              </ContentContainerStack>
              <RecentlyViewedProductsContentContainerStack
                outerStackProps={{
                  styles: styles.recentlyViewedContainer.outerContainer
                }}
              />
            </FinderProvider>
          </FacetsProvider>
        </AppLayout>
      </GlobalDataProvider>
    </Page>
  );
};

interface CategoryParsedUrlQuery extends ParsedUrlQuery {
  categorySlug: string[] | undefined;
}

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<CategoryParsedUrlQuery>
> => {
  const categoriesData: CategoryModel[] = await fetchAllCategories(undefined);

  const localizedPaths = (supportedLocales || []).map(locale => {
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
): Promise<GetStaticPropsResult<CategoryProps>> => {
  const { locale } = context;

  const { categorySlug } = context.params as CategoryParsedUrlQuery;

  const [categoriesData, siteMenuData, mainMenuData, attributeTypesData] =
    await Promise.all([
      fetchAllCategories(locale),
      fetchMenuItemsForSiteHeader(locale),
      fetchMenuItemsForMainHeader(locale),
      fetchAllAttributeTypes(locale)
    ]);

  const category: CategoryModel | undefined = categoriesData.find(category => {
    const categoryFormatter: CategoryFormatter = new CategoryFormatter(
      category,
      locale
    );
    return (
      categoryFormatter.formatSlug().toLowerCase() ===
      categorySlug?.[0]?.toLowerCase()
    );
  });

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

  let initialSearchResults: FacetedSearchOdataCollection | undefined =
    undefined;

  try {
    const data = await fetchFacetedSearchResults(
      encodedCategoryFilter,
      'null',
      undefined,
      10,
      0
    );
    initialSearchResults = data;
  } catch (e) {
    console.warn('error fetching initial results');
  }

  const usedAttributeTypeCodes: string[] = Object.keys(
    initialSearchResults?.['@search.facets'] || {}
  );
  const textFormatter = new TextFormatter();
  const filteredAttributeTypes: AttributeType[] = attributeTypesData.filter(
    attributeType =>
      [
        ...usedAttributeTypeCodes,
        textFormatter.formatCamelCase(liquidFlowRateFacet.attributeTypeCode),
        textFormatter.formatCamelCase(liquidPressureFacet.attributeTypeCode),
        textFormatter.formatCamelCase(
          liquidSpecificGravityFacet.attributeTypeCode
        ),
        textFormatter.formatCamelCase(sprayAngleFacet.attributeTypeCode)
      ].includes(textFormatter.formatCamelCase(attributeType.code || ''))
  );

  const usedFacetCodes: string[] = Object.values(
    FacetFactory.getFacetsFromFiles([])
  ).map(facet => textFormatter.formatCamelCase(facet.attributeTypeCode));

  Object.keys(initialSearchResults?.['@search.facets'] || {}).forEach(key => {
    if (!usedFacetCodes.includes(key)) {
      delete initialSearchResults?.['@search.facets'][key];
    }
  });

  const categoryChildren: CategoryModel[] = categoriesData.filter(
    cat => cat.parentId === category.id
  );

  let operatingConditionsConfiguration: FinderOperatingConditionsConfiguration | null =
    null;

  const operatingConditionsSetting: Setting | undefined =
    category.settings?.find(
      setting => setting.key === SETTINGKEYS.operatingConditions
    );

  if (operatingConditionsSetting) {
    operatingConditionsConfiguration = {
      enableSprayAngle: !!operatingConditionsSetting?.value?.enableSprayAngle,
      enableTheoreticalFlow:
        !!operatingConditionsSetting?.value?.enableTheoreticalFlow
    };
  }

  const props: CategoryProps = {
    attributeTypeGroups: [],
    attributeTypes: filteredAttributeTypes,
    category: {
      ...category,
      children: categoryChildren
    },
    initialViewAs: categoryChildren.length ? 'overview' : 'list',
    finderOperatingConditionsConfiguration: operatingConditionsConfiguration,
    siteMenuItems: siteMenuData,
    mainMenuItems: mainMenuData
  };

  return {
    props
  };
};

export default Category;
