import {
  GetStaticPaths,
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
  Model as ModelModel,
  Series
} from '@services/portal-api';
import { fetchAllAttributeGroups } from '@services/portal-api/attributeGroups';
import { fetchAllAttributeTypes } from '@services/portal-api/attributeTypes';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { fetchAllModels } from '@services/portal-api/models';
import { fetchAllSeries } from '@services/portal-api/series';
import { AppLayout, AppLayoutProps } from '@widgets/layouts/appLayout';
import { Head } from '@widgets/metadata/head';

export interface ModelProps {
  model: ModelModel;
  series: Series | undefined;
  attributeTypes: AttributeType[];
  attributeTypeGroups: AttributeGroup[];
}

const Model: NextPage<ModelProps & AppLayoutProps> = ({
  model,
  siteMenuItems,
  mainMenuItems
}) => {
  const { pathname } = useRouter();

  return (
    <AppLayout siteMenuItems={siteMenuItems} mainMenuItems={mainMenuItems}>
      <Head pathname={pathname} title="Home" description="Home Description" />
      {model.id}
    </AppLayout>
  );
};

interface IModelParsedUrlQuery extends ParsedUrlQuery {
  modelSlug: string;
}

export const getStaticPaths: GetStaticPaths = async context => {
  const modelsData = await fetchAllModels();
  const localizedPaths = (context.locales || []).map(locale => {
    const pathForLocale: {
      params: IModelParsedUrlQuery;
      locale?: string | undefined;
    }[] = modelsData.map(model => {
      return {
        params: {
          modelSlug: formatMultilingualString(model.slug, locale)
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
): Promise<GetStaticPropsResult<ModelProps & AppLayoutProps>> => {
  try {
    const { locale } = context;
    const { modelSlug } = context.params as IModelParsedUrlQuery;

    const [
      modelsData,
      seriesData,
      siteMenuData,
      mainMenuData,
      attributeTypesData,
      attributeTypeGroupsData
    ] = await Promise.all([
      fetchAllModels(),
      fetchAllSeries(),
      fetchMenuItemsForSiteHeader(getAudience(locale)),
      fetchMenuItemsForMainHeader(getAudience(locale)),
      fetchAllAttributeTypes(),
      fetchAllAttributeGroups()
    ]);

    const model: ModelModel | undefined = modelsData.find(
      model =>
        formatMultilingualString(model.slug, context.locale) === modelSlug
    );

    if (model === undefined) {
      return {
        notFound: true
      };
    }

    const series: Series | undefined = seriesData.find(
      series => series.id === model.seriesId
    );

    return {
      props: {
        model: model,
        series: series,
        attributeTypeGroups: attributeTypeGroupsData,
        attributeTypes: attributeTypesData,
        siteMenuItems: siteMenuData,
        mainMenuItems: mainMenuData
      }
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default Model;
