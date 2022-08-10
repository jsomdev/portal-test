import {
  GetStaticPaths,
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
import { Model as ModelModel, Series } from '@services/portal-api';
import { fetchAllAttributeGroups } from '@services/portal-api/attributeGroups';
import { fetchAllAttributeTypes } from '@services/portal-api/attributeTypes';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { fetchAllModels } from '@services/portal-api/models';
import { fetchAllSeries } from '@services/portal-api/series';
import { AppLayout } from '@widgets/layouts/appLayout';
import { Head } from '@widgets/metadata/head';

export interface ModelProps {
  model: ModelModel;
  series: Series | undefined;
}

const Model: NextPage<
  ModelProps &
    Partial<
      Pick<
        GlobalDataContextProps,
        'attributeGroups' | 'attributeTypes' | 'mainMenuItems' | 'siteMenuItems'
      >
    >
> = ({ model, siteMenuItems, mainMenuItems }) => {
  const { pathname } = useRouter();

  return (
    <GlobalDataProvider
      siteMenuItems={siteMenuItems}
      mainMenuItems={mainMenuItems}
    >
      <AppLayout>
        <Head pathname={pathname} title="Home" description="Home Description" />
        {model.id}
      </AppLayout>
    </GlobalDataProvider>
  );
};

interface IModelParsedUrlQuery extends ParsedUrlQuery {
  modelSlug: string;
}

export const getStaticPaths: GetStaticPaths = async context => {
  const modelsData = await fetchAllModels();
  const localizedPaths = (context.locales || []).map(locale => {
    const multilingualFormatter = new MultilingualStringFormatter(locale);
    const pathForLocale: {
      params: IModelParsedUrlQuery;
      locale?: string | undefined;
    }[] = modelsData.map(model => {
      return {
        params: {
          modelSlug: multilingualFormatter.format(model.slug)
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
    ModelProps &
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
    const { modelSlug } = context.params as IModelParsedUrlQuery;
    const multilingualFormatter = new MultilingualStringFormatter(locale);
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
      model => multilingualFormatter.format(model.slug) === modelSlug
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
        attributeGroups: attributeTypeGroupsData,
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
