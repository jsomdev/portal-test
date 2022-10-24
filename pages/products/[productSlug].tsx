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
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Stack, useTheme } from '@fluentui/react';
import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { getAudience } from '@services/i18n';
import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { MultilingualStringFormatter } from '@services/i18n/formatters/multilingual-string-formatter/multilingualStringFormatter';
import { Model, Product, Series } from '@services/portal-api';
import { fetchAllAttributeGroups } from '@services/portal-api/attributeGroups';
import { fetchAllAttributeTypes } from '@services/portal-api/attributeTypes';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { fetchAllModels } from '@services/portal-api/models';
import {
  fetchProductForProductPage,
  fetchProductsForStaticPaths
} from '@services/portal-api/products';
import { fetchAllSeries } from '@services/portal-api/series';
import { generateProductStructuredData } from '@utilities/structuredData';
import { PagesHeader } from '@widgets/headers/page-header/pageHeader';
import { AppLayout } from '@widgets/layouts/appLayout';
import ContentContainerStack from '@widgets/layouts/contentContainerStack';
import Page from '@widgets/page/page';
import { getLocalePathsFromMultilingual } from '@widgets/page/page.helper';
import { ProductSections } from '@widgets/product-page/product-sections/productSections';
import { ProductPageProvider } from '@widgets/product-page/productPageProvider';

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
        'attributeGroups' | 'attributeTypes' | 'mainMenuItems' | 'siteMenuItems'
      >
    >
> = ({
  product,
  attributeGroups,
  attributeTypes,
  siteMenuItems,
  mainMenuItems
}) => {
  const { locale } = useRouter();
  const { spacing } = useTheme();
  const productFormatter = new ProductFormatter(product, locale);

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
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>
          <ProductPageProvider product={product}>
            <ContentContainerStack>
              <Stack
                tokens={{
                  padding: `${spacing.l2} 0 ${spacing.l1} 0`
                }}
              >
                <PagesHeader title={productFormatter.formatTitle()} />
                {/* TODO Top Section */}
                <ProductSections
                  // TODO Section Content
                  onRenderSectionContent={section => <p>{section.title}</p>}
                />
              </Stack>
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
  const productsData = await fetchProductsForStaticPaths();

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
    attributeTypeGroupsData
  ] = await Promise.all([
    fetchProductForProductPage(productSlug),
    fetchAllSeries(),
    fetchAllModels(),
    fetchMenuItemsForSiteHeader(getAudience(locale)),
    fetchMenuItemsForMainHeader(getAudience(locale)),
    fetchAllAttributeTypes(),
    fetchAllAttributeGroups()
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
      mainMenuItems: mainMenuData || []
    }
  };
};

export default Products;
