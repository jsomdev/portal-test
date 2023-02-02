import React, { useEffect } from 'react';

import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { useRouter } from 'next/dist/client/router';
import { ParsedUrlQuery } from 'querystring';
import 'swiper/css';
import 'swiper/css/navigation';

import { ProductBookmarkButton } from '@components/buttons/bookmarkButton';
import { Stack, useTheme } from '@fluentui/react';
import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { ProductPageProvider } from '@providers/product-page/productPageProvider';
import { useRecentlyViewedProducts } from '@providers/recently-viewed/recentlyViewedContext';
import { supportedLocales } from '@services/i18n';
import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { MultilingualStringFormatter } from '@services/i18n/formatters/multilingual-string-formatter/multilingualStringFormatter';
import {
  AttributeGroup,
  AttributeType,
  ConditionType,
  Model,
  Product
} from '@services/portal-api';
import { fetchAllAttributeGroups } from '@services/portal-api/attributeGroups';
import { fetchAllAttributeTypes } from '@services/portal-api/attributeTypes';
import { fetchAllConditionTypes } from '@services/portal-api/conditionTypes';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { fetchAllModels } from '@services/portal-api/models';
import { fetchProductForProductPage } from '@services/portal-api/products';
import { generateProductStructuredData } from '@utilities/structuredData';
import { ProductBreadcrumb } from '@widgets/breadcrumbs/product-breadcrumb/productBreadcrumb';
import { PagesHeader } from '@widgets/headers/page-header/pageHeader';
import { AppLayout } from '@widgets/layouts/appLayout';
import ContentContainerStack, {
  ContentContainerStyles
} from '@widgets/layouts/contentContainerStack';
import { Mobile } from '@widgets/media-queries';
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
import { ProductSubHeader } from '@widgets/product-page/productSubHeader';
import { RecentlyViewedProducts } from '@widgets/recently-viewed-gallery/recentlyViewedProducts';

export interface ProductsProps {
  product: Product;
  model: Model | null;
}

interface ProductStyles {
  recentlyViewedContainer: Partial<ContentContainerStyles>;
}

const RecentlyViewOnProductPage: React.FC<{
  productId: string | undefined;
}> = ({ productId }) => {
  const { semanticColors, spacing } = useTheme();
  const { registerView, products } = useRecentlyViewedProducts();

  useEffect(() => {
    registerView({ id: productId, lastViewedOn: new Date() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  const styles: ProductStyles = {
    recentlyViewedContainer: {
      outerContainer: {
        root: {
          padding: `${spacing.m} 0`,
          borderTop: `2px solid ${semanticColors.variantBorder}`
        }
      }
    }
  };
  const productsWithoutCurrentProduct =
    products?.filter(recentProduct => recentProduct.id !== productId) || [];

  if (productsWithoutCurrentProduct.length === 0) {
    return null;
  }
  return (
    <ContentContainerStack
      outerStackProps={{
        styles: styles.recentlyViewedContainer.outerContainer
      }}
    >
      <RecentlyViewedProducts
        products={productsWithoutCurrentProduct.filter(
          recentProduct => recentProduct.id !== productId
        )}
      />
    </ContentContainerStack>
  );
};
const ProductPage: NextPage<
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
  model,
  attributeGroups,
  attributeTypes,
  conditionTypes,
  siteMenuItems,
  mainMenuItems
}) => {
  const { locale } = useRouter();

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
        conditionTypes={conditionTypes}
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>
          <ProductBreadcrumb product={product} model={model} />
          <ProductPageProvider product={product}>
            <ProductStickyHeader product={product} />
            <Mobile>
              <ProductStickyThumb product={product} />
            </Mobile>
            <ContentContainerStack>
              <Stack horizontal>
                <PagesHeader title={productFormatter.formatTitle()} />
                <ProductBookmarkButton productId={product.id} />
              </Stack>
              <ProductSubHeader model={model} />
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
            <RecentlyViewOnProductPage productId={product.id} />
          </ProductPageProvider>
        </AppLayout>
      </GlobalDataProvider>
    </Page>
  );
};

interface ProductsParsedUrlQuery extends ParsedUrlQuery {
  productSlug: string;
}

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<ProductsParsedUrlQuery>
> => {
  // const productsData = await fetchProductsForStaticPaths();
  const productsData: Product[] = [];

  const localizedPaths = (supportedLocales || []).map(locale => {
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
    modelsData,
    siteMenuData,
    mainMenuData,
    attributeTypesData,
    attributeTypeGroupsData,
    conditionTypesData
  ] = await Promise.all([
    fetchProductForProductPage(productSlug, locale),
    fetchAllModels(locale),
    fetchMenuItemsForSiteHeader(locale),
    fetchMenuItemsForMainHeader(locale),
    fetchAllAttributeTypes(locale),
    fetchAllAttributeGroups(locale),
    fetchAllConditionTypes(locale)
  ]);

  if (!productData) {
    return {
      notFound: true
    };
  }

  const model: Model | undefined = modelsData.find(
    model => model.id === productData.modelId
  );

  const relevantAttributeTypeCodes: string[] =
    (productData.attributes || [])
      .map(attribute => attribute.typeCode || '')
      .concat(
        (productData.options || []).map(option => option.typeCode || '')
      ) || [];
  const filteredAttributeTypes: AttributeType[] = attributeTypesData.filter(
    attributeType =>
      relevantAttributeTypeCodes.includes(attributeType.code || '')
  );

  const relevantAttributeGroupCodes: string[] =
    productData.attributes?.map(attribute => attribute.groupCode || '') || [];
  const filteredAttributeGroups: AttributeGroup[] =
    attributeTypeGroupsData.filter(attributeGroup =>
      relevantAttributeGroupCodes.includes(attributeGroup.code || '')
    );

  const relevantConditionTypeCodes: string[] =
    productData.attributes
      ?.map(
        attribute =>
          attribute.conditions?.map(condition => condition.typeCode || '') || []
      )
      ?.flat() || [];
  const filteredConditionTypes: ConditionType[] = conditionTypesData.filter(
    conditionType =>
      relevantConditionTypeCodes.includes(conditionType.code || '')
  );
  return {
    props: {
      product: productData,
      model: model
        ? {
            name: model?.name,
            slug: model?.slug,
            number: model?.number
          }
        : null,
      attributeGroups: filteredAttributeGroups,
      attributeTypes: filteredAttributeTypes,
      siteMenuItems: siteMenuData || [],
      mainMenuItems: mainMenuData || [],
      conditionTypes: filteredConditionTypes
    }
  };
};

export default ProductPage;
