import { useEffect } from 'react';

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
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { ProductBookmarkButton } from '@components/buttons/bookmarkButton';
import { Stack, useTheme } from '@fluentui/react';
import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { ProductPageProvider } from '@providers/product-page/productPageProvider';
import { useRecentlyViewedProducts } from '@providers/recently-viewed/recentlyViewedContext';
import { getAudience } from '@services/i18n';
import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { MultilingualStringFormatter } from '@services/i18n/formatters/multilingual-string-formatter/multilingualStringFormatter';
import { Model, Product, Series } from '@services/portal-api';
import { fetchAllAttributeGroups } from '@services/portal-api/attributeGroups';
import { fetchAllAttributeTypes } from '@services/portal-api/attributeTypes';
import { fetchAllConditionTypes } from '@services/portal-api/conditionTypes';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { fetchAllModels } from '@services/portal-api/models';
import { fetchProductForProductPage } from '@services/portal-api/products';
import { fetchAllSeries } from '@services/portal-api/series';
import { generateProductStructuredData } from '@utilities/structuredData';
import { PagesHeader } from '@widgets/headers/page-header/pageHeader';
import { AppLayout } from '@widgets/layouts/appLayout';
import ContentContainerStack from '@widgets/layouts/contentContainerStack';
import Page from '@widgets/page/page';
import { getLocalePathsFromMultilingual } from '@widgets/page/page.helper';
import { ProductAccessories } from '@widgets/product-page/product-accessories/productAccessories';
import { ProductDownloads } from '@widgets/product-page/product-downloads/productDownloads';
import { ProductGeneralInformation } from '@widgets/product-page/product-general-information/generalInformation';
import { ProductPerformance } from '@widgets/product-page/product-performance/productPerformance';
import { ProductSections } from '@widgets/product-page/product-sections/productSections';
import { ProductSectionKey } from '@widgets/product-page/product-sections/productSections.types';
import { ProductSpecifications } from '@widgets/product-page/product-specifications/productSpecifications';
import { ProductStickyHeader } from '@widgets/product-page/product-sticky/productStickyHeader';
import { ProductStickyThumb } from '@widgets/product-page/product-sticky/productStickyThumb';
import { ProductTopSection } from '@widgets/product-page/product-top-section/productTopSection';

export interface ProductsProps {
  product: Product;
  series: Series | undefined;
  model: Model | undefined;
}

const Products: NextPage<
  ProductsProps &
    Partial<
      Pick<
        GlobalDataContextProps,
        | 'attributeGroups'
        | 'conditionTypes'
        | 'attributeTypes'
        | 'mainMenuItems'
        | 'siteMenuItems'
      >
    >
> = ({
  product,
  attributeGroups,
  attributeTypes,
  conditionTypes,
  siteMenuItems,
  mainMenuItems
}) => {
  const { locale } = useRouter();
  const { registerView } = useRecentlyViewedProducts();
  const { spacing } = useTheme();
  const productFormatter = new ProductFormatter(product, locale);

  useEffect(() => {
    registerView({ id: product.id, lastViewedOn: new Date() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Page
      metaProps={{
        title: productFormatter.formatTitle(),
        description: productFormatter.formatDescription()
      }}
      i18nProps={{
        localePaths: getLocalePathsFromMultilingual('products', product.slug),
        structuredData: generateProductStructuredData(product, locale)
      }}
    >
      <GlobalDataProvider
        attributeGroups={attributeGroups}
        attributeTypes={attributeTypes}
        conditionTypes={conditionTypes}
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>
          <ProductPageProvider product={product}>
            <ProductStickyHeader product={product} />
            <ProductStickyThumb product={product} />
            <ContentContainerStack
              outerStackProps={{
                tokens: {
                  padding: `${spacing.l2} 0 ${spacing.l1} 0`
                }
              }}
            >
              <Stack horizontal>
                <PagesHeader title={productFormatter.formatTitle()} />
                <ProductBookmarkButton productId={product.id} />
              </Stack>
              <ProductTopSection />
              <ProductSections
                onRenderSectionContent={section => {
                  switch (section.sectionKey) {
                    case ProductSectionKey.GeneralInformation:
                      return <ProductGeneralInformation />;
                    case ProductSectionKey.ProductDownloads:
                      return <ProductDownloads />;
                    case ProductSectionKey.ProductAttributes:
                      return <ProductSpecifications />;
                    case ProductSectionKey.ProductAccessories:
                      return <ProductAccessories />;
                    case ProductSectionKey.ProductPerformance:
                      return <ProductPerformance />;
                    default:
                      return null;
                  }
                }}
              />
            </ContentContainerStack>
          </ProductPageProvider>
        </AppLayout>
      </GlobalDataProvider>
    </Page>
  );
};

interface ProductsParsedUrlQuery extends ParsedUrlQuery {
  productSlug: string;
}

export const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
): Promise<GetStaticPathsResult<ProductsParsedUrlQuery>> => {
  // const productsData = await fetchProductsForStaticPaths();
  const productsData: Product[] = [];

  const localizedPaths = (context.locales || []).map(locale => {
    const pathForLocale: {
      params: ProductsParsedUrlQuery;
      locale?: string | undefined;
    }[] = productsData.map(product => {
      const multilingualStringFormatter = new MultilingualStringFormatter(
        locale
      );
      return {
        params: {
          productSlug: multilingualStringFormatter.format(product.slug)
        },
        locale
      };
    });
    return pathForLocale;
  });

  return { paths: localizedPaths.flat(), fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<
  GetStaticPropsResult<
    ProductsProps &
      Partial<
        Pick<
          GlobalDataContextProps,
          | 'attributeGroups'
          | 'attributeTypes'
          | 'conditionTypes'
          | 'mainMenuItems'
          | 'siteMenuItems'
        >
      >
  >
> => {
  const { locale } = context;
  const { productSlug } = context.params as ProductsParsedUrlQuery;

  const [
    productData,
    seriesData,
    modelsData,
    siteMenuData,
    mainMenuData,
    attributeTypesData,
    attributeTypeGroupsData,
    conditionTypesData
  ] = await Promise.all([
    fetchProductForProductPage(productSlug),
    fetchAllSeries(),
    fetchAllModels(),
    fetchMenuItemsForSiteHeader(getAudience(locale)),
    fetchMenuItemsForMainHeader(getAudience(locale)),
    fetchAllAttributeTypes(),
    fetchAllAttributeGroups(),
    fetchAllConditionTypes()
  ]);

  if (!productData) {
    return {
      notFound: true
    };
  }

  const series: Series | undefined = seriesData.find(
    series => series.id === productData.model?.seriesId
  );
  const model: Model | undefined = modelsData.find(
    model => model.id === productData.modelId
  );

  return {
    props: {
      product: productData,
      series: series,
      model: model,
      attributeGroups: attributeTypeGroupsData,
      attributeTypes: attributeTypesData,
      siteMenuItems: siteMenuData || [],
      mainMenuItems: mainMenuData || [],
      conditionTypes: conditionTypesData
    }
  };
};

export default Products;
