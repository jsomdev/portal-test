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
import { fetchAllAttributeGroups } from '@services/portal-api/attributeGroups';
import { fetchAllAttributeTypes } from '@services/portal-api/attributeTypes';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { Series as SeriesModel } from '@services/portal-api/models/Series';
import {
  fetchAllSeries,
  fetchSeriesForStaticPaths
} from '@services/portal-api/series';
import { AppLayout } from '@widgets/layouts/appLayout';
import { Head } from '@widgets/metadata/head';

export interface SeriesProps {
  series: SeriesModel;
}

const Series: NextPage<
  SeriesProps &
    Partial<
      Pick<
        GlobalDataContextProps,
        'attributeGroups' | 'attributeTypes' | 'mainMenuItems' | 'siteMenuItems'
      >
    >
> = ({ series, siteMenuItems, mainMenuItems }) => {
  const { pathname } = useRouter();

  return (
    <GlobalDataProvider
      siteMenuItems={siteMenuItems}
      mainMenuItems={mainMenuItems}
    >
      <AppLayout>
        <Head pathname={pathname} title="Home" description="Home Description" />
        {series.id}
      </AppLayout>
    </GlobalDataProvider>
  );
};

interface ISeriesParsedUrlQuery extends ParsedUrlQuery {
  seriesSlug: string;
}

export const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
): Promise<GetStaticPathsResult<ISeriesParsedUrlQuery>> => {
  const seriesData = await fetchSeriesForStaticPaths();

  const localizedPaths = (context.locales || []).map(locale => {
    const pathForLocale: {
      params: ISeriesParsedUrlQuery;
      locale?: string | undefined;
    }[] = seriesData.value.map(series => {
      const multilingualStringFormatter = new MultilingualStringFormatter(
        locale
      );
      return {
        params: {
          seriesSlug: multilingualStringFormatter.format(series.slug)
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
    SeriesProps &
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
    const { seriesSlug } = context.params as ISeriesParsedUrlQuery;
    const multilingualStringFormatter = new MultilingualStringFormatter(locale);
    const [
      seriesData,
      siteMenuData,
      mainMenuData,
      attributeTypesData,
      attributeGroupsData
    ] = await Promise.all([
      fetchAllSeries(),
      fetchMenuItemsForSiteHeader(getAudience(locale)),
      fetchMenuItemsForMainHeader(getAudience(locale)),
      fetchAllAttributeTypes(),
      fetchAllAttributeGroups()
    ]);

    const series: SeriesModel | undefined = seriesData.find(series => {
      return multilingualStringFormatter.format(series.slug) === seriesSlug;
    });

    if (series === undefined) {
      return {
        notFound: true
      };
    }

    return {
      props: {
        series: series,
        attributeGroups: attributeGroupsData,
        attributeTypes: attributeTypesData,
        siteMenuItems: siteMenuData,
        mainMenuItems: mainMenuData
      }
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default Series;
