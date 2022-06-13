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
import { AttributeGroup, AttributeType } from '@services/portal-api';
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
import { AppLayout, AppLayoutProps } from '@widgets/layouts/appLayout';
import { Head } from '@widgets/metadata/head';

export interface SeriesProps {
  series: SeriesModel;
  attributeTypes: AttributeType[];
  attributeTypeGroups: AttributeGroup[];
}

const Series: NextPage<SeriesProps & AppLayoutProps> = ({
  series,
  siteMenuItems,
  mainMenuItems
}) => {
  const { pathname } = useRouter();

  return (
    <AppLayout siteMenuItems={siteMenuItems} mainMenuItems={mainMenuItems}>
      <Head pathname={pathname} title="Home" description="Home Description" />
      {series.id}
    </AppLayout>
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
      return {
        params: {
          seriesSlug: formatMultilingualString(series.slug, locale)
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
): Promise<GetStaticPropsResult<SeriesProps & AppLayoutProps>> => {
  try {
    const { locale } = context;
    const { seriesSlug } = context.params as ISeriesParsedUrlQuery;

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

    const series: SeriesModel | undefined = seriesData.find(
      series =>
        formatMultilingualString(series.slug, context.locale) === seriesSlug
    );

    if (series === undefined) {
      return {
        notFound: true
      };
    }

    return {
      props: {
        series: series,
        attributeTypeGroups: attributeGroupsData,
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
