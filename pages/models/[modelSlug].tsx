// Import Swiper styles
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { defineMessages, useIntl } from 'react-intl';
import 'swiper/css';
import 'swiper/css/navigation';

import { NextLink } from '@components/link/nextLink';
import { IButtonStyles, PrimaryButton, Stack, useTheme } from '@fluentui/react';
import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { ProductPageProvider } from '@providers/product-page/productPageProvider';
import { modelIdFacet } from '@services/facet-service/facets/modelId';
import { messageIds, supportedLocales } from '@services/i18n';
import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { MultilingualStringFormatter } from '@services/i18n/formatters/multilingual-string-formatter/multilingualStringFormatter';
import { AttributeType, Model } from '@services/portal-api';
import { fetchAllAttributeTypes } from '@services/portal-api/attributeTypes';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { fetchAllModels } from '@services/portal-api/models';
import { ENVIRONMENT_VARIABLES } from '@utilities/environmentVariables';
import pagePaths from '@utilities/pagePaths';
import { rem } from '@utilities/rem';
import { generateProductStructuredData } from '@utilities/structuredData';
import { ModelBreadcrumb } from '@widgets/breadcrumbs/model-breadcrumb/modelBreadcrumb';
import { PagesHeader } from '@widgets/headers/page-header/pageHeader';
import { AppLayout } from '@widgets/layouts/appLayout';
import ContentContainerStack from '@widgets/layouts/contentContainerStack';
import { mediaQueryFrom } from '@widgets/media-queries';
import { AlternativeModels } from '@widgets/model-page/alternative-models/alternativeModels';
import Page from '@widgets/page/page';
import { getLocalePathsFromMultilingual } from '@widgets/page/page.helper';
import { ProductGeneralInformation } from '@widgets/product-page/product-general-information/generalInformation';
import { ProductSections } from '@widgets/product-page/product-sections/productSections';
import { ProductSectionKey } from '@widgets/product-page/product-sections/productSections.types';
import { ProductTopSection } from '@widgets/product-page/product-top-section/productTopSection';

export interface ModelsProps {
  model: Model;
  alternativeModels: Model[];
}

const messages = defineMessages({
  browseProducts: {
    id: messageIds.pages.model.browseAll,
    defaultMessage: 'Browse all products',
    description:
      'Button text to go to search page with this models filter active'
  }
});

const UnspecifiedModelId: string = 'ee96fcc8-6782-4a31-b986-73425dd0035e';

const Models: NextPage<
  ModelsProps &
    Partial<
      Pick<
        GlobalDataContextProps,
        'attributeTypes' | 'mainMenuItems' | 'siteMenuItems'
      >
    >
> = ({
  model,
  alternativeModels,
  attributeTypes,
  siteMenuItems,
  mainMenuItems
}) => {
  const { locale, formatMessage } = useIntl();
  const { spacing, fonts } = useTheme();
  const modelFormatter = new ProductFormatter(model, locale);
  const modelOption = modelIdFacet.options.find(
    option => option.value === model.id
  );

  const browseAllButtonStyles: IButtonStyles = {
    root: {
      height: 48,
      ...fonts.mediumPlus,
      ...mediaQueryFrom('tablet', {
        ...fonts.large,
        height: 56
      })
    }
  };
  return (
    <Page
      metaProps={{
        title: modelFormatter.formatTitle(),
        description: modelFormatter.formatDescription()
      }}
      i18nProps={{
        localePaths: getLocalePathsFromMultilingual('models', model.slug),
        structuredData: generateProductStructuredData(model, locale)
      }}
    >
      <GlobalDataProvider
        attributeTypes={attributeTypes}
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>
          <ModelBreadcrumb model={model} />
          <ProductPageProvider
            hasAlternativeModels={!!alternativeModels.length}
            isModel={true}
            product={model}
          >
            <ContentContainerStack>
              <PagesHeader title={modelFormatter.formatTitle()} />
              <ProductTopSection isModel={true} />
              {model.id !== UnspecifiedModelId && (
                <>
                  <ProductSections
                    onRenderSectionContent={section => {
                      switch (section.sectionKey) {
                        case ProductSectionKey.GeneralInformation:
                          return <ProductGeneralInformation />;

                        case ProductSectionKey.AlternativeModels:
                          return (
                            <AlternativeModels
                              alternativeModels={alternativeModels}
                            />
                          );
                        default:
                          return null;
                      }
                    }}
                  />
                  <Stack.Item
                    align="center"
                    tokens={{ margin: `0 0 ${rem(80)} 0`, padding: spacing.s1 }}
                  >
                    <NextLink
                      passHref
                      href={{
                        pathname: pagePaths.search().toString(),
                        query: {
                          [modelIdFacet.key]: modelOption?.key
                        }
                      }}
                    >
                      <PrimaryButton styles={browseAllButtonStyles}>
                        {formatMessage(messages.browseProducts, {
                          number: model.number
                        })}
                      </PrimaryButton>
                    </NextLink>
                  </Stack.Item>
                </>
              )}
            </ContentContainerStack>
          </ProductPageProvider>
        </AppLayout>
      </GlobalDataProvider>
    </Page>
  );
};

interface ModelsParsedUrlQuery extends ParsedUrlQuery {
  modelSlug: string;
}

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<ModelsParsedUrlQuery>
> => {
  const modelsData: Model[] = await fetchAllModels(undefined);

  const localizedPaths = (supportedLocales || []).map(locale => {
    const pathForLocale: {
      params: ModelsParsedUrlQuery;
      locale?: string | undefined;
    }[] = modelsData.map(model => {
      const multilingualStringFormatter = new MultilingualStringFormatter(
        locale
      );
      return {
        params: {
          modelSlug: multilingualStringFormatter.format(model.slug)
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
    ModelsProps &
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
  const { modelSlug } = context.params as ModelsParsedUrlQuery;

  const [modelsData, siteMenuData, mainMenuData, attributeTypesData] =
    await Promise.all([
      fetchAllModels(locale),
      fetchMenuItemsForSiteHeader(locale),
      fetchMenuItemsForMainHeader(locale),
      fetchAllAttributeTypes(locale)
    ]);

  const multilingualStringFormatter: MultilingualStringFormatter =
    new MultilingualStringFormatter(locale);

  const model: Model | undefined = modelsData.find(
    model => multilingualStringFormatter.format(model.slug) === modelSlug
  );

  if (!model) {
    return {
      notFound: true
    };
  }

  const alternativeModels: Model[] = modelsData
    .filter(
      possibleModel =>
        possibleModel.seriesId === model.seriesId &&
        model.id !== possibleModel.id
    )
    .map(model => ({
      image: model.image,
      name: model.name,
      number: model.number,
      slug: model.slug
    }));

  const relevantAttributeTypeCodes: string[] =
    model.attributes?.map(attribute => attribute.typeCode || '') || [];
  const filteredAttributeTypes: AttributeType[] = attributeTypesData.filter(
    attributeType =>
      relevantAttributeTypeCodes.includes(attributeType.code || '')
  );

  return {
    props: {
      model: model,
      alternativeModels,
      attributeTypes: filteredAttributeTypes,
      siteMenuItems: siteMenuData || [],
      mainMenuItems: mainMenuData || []
    }
  };
};

export default Models;
