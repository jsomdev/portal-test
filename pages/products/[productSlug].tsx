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

import { formatMultilingualString, getAudience } from '@services/i18n';
import {
  AttributeGroup,
  AttributeType,
  Model,
  Product,
  Series
} from '@services/portal-api';
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
import { AppLayout, AppLayoutProps } from '@widgets/layouts/appLayout';
import { Head } from '@widgets/metadata/head';

export interface ProductsProps {
  product: Product;
  series: Series | undefined;
  model: Model | undefined;
  attributeTypes: AttributeType[];
  attributeTypeGroups: AttributeGroup[];
}

const Products: NextPage<ProductsProps & AppLayoutProps> = ({
  product,
  siteMenuItems,
  mainMenuItems
}) => {
  const { pathname } = useRouter();

  return (
    <AppLayout siteMenuItems={siteMenuItems} mainMenuItems={mainMenuItems}>
      <Head
        pathname={pathname}
        title="Product"
        description={product.name?.en || ''}
      />
      {product.number}
    </AppLayout>
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
      return {
        params: {
          productSlug: formatMultilingualString(product.slug, locale)
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
): Promise<GetStaticPropsResult<ProductsProps & AppLayoutProps>> => {
  try {
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
        attributeTypeGroups: attributeTypeGroupsData,
        attributeTypes: attributeTypesData,
        siteMenuItems: siteMenuData || [],
        mainMenuItems: mainMenuData || []
      }
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default Products;
