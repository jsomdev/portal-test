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

import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { getAudience } from '@services/i18n';
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
import { AppLayout } from '@widgets/layouts/appLayout';
import Page from '@widgets/page/page';
import { getLocalePathsFromMultilingual } from '@widgets/page/page.helper';

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
> = ({ product, siteMenuItems, mainMenuItems }) => {
  const { locale } = useRouter();
  const multilingualStringFormatter = new MultilingualStringFormatter(locale);
  return (
    <Page
      title={multilingualStringFormatter.format(product.name)}
      description={multilingualStringFormatter.format(product.description)}
      localePaths={getLocalePathsFromMultilingual('products', product.slug)}
    >
      <GlobalDataProvider
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>{product.number}</AppLayout>
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
