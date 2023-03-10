import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { defineMessages, useIntl } from 'react-intl';

import { getInitialFacetsFromFiles } from '@providers/facets/facetsHelper';
import { FacetsProvider } from '@providers/facets/facetsProvider';
import { FinderProvider } from '@providers/finder/finderProvider';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { messageIds } from '@services/i18n';
import { AttributeType } from '@services/portal-api';
import { fetchAllAttributeTypes } from '@services/portal-api/attributeTypes';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import pagePaths from '@utilities/pagePaths';
import { SearchBreadcrumb } from '@widgets/breadcrumbs/search-breadcrumb/searchBreadcrumb';
import { ResultView } from '@widgets/finder/result-view/resultView';
import { AppLayout, AppLayoutProps } from '@widgets/layouts/appLayout';
import ContentContainerStack from '@widgets/layouts/contentContainerStack';
import Page from '@widgets/page/page';
import { getLocalePaths } from '@widgets/page/page.helper';

type SearchProps = {
  attributeTypes: AttributeType[];
} & AppLayoutProps;

const messages = defineMessages({
  headTitle: {
    id: messageIds.pages.search.headTitle,
    description: 'Page metadata title',
    defaultMessage: 'Search {query}'
  },
  title: {
    id: messageIds.pages.search.title,
    description: 'Page title',
    defaultMessage: `Search results for: '{query}'`
  },
  titleBrowseAll: {
    id: messageIds.pages.category.titleWithoutSearchOrCategory,
    defaultMessage: 'Browse all products'
  },
  headDescription: {
    id: messageIds.pages.search.headDescription,
    description: 'Page metadata description',
    defaultMessage: 'Experts in Spray Technology | Spraying Systems Co.'
  }
});

const Search: NextPage<SearchProps> = ({
  siteMenuItems,
  mainMenuItems,
  attributeTypes
}) => {
  const { formatMessage } = useIntl();
  const { query, asPath } = useRouter();
  return (
    <Page
      metaProps={{
        title: query.query
          ? formatMessage(messages.headTitle, {
              searchQuery: `'${query.query?.toString()}'`
            })
          : formatMessage(messages.titleBrowseAll),
        description: formatMessage(messages.headDescription),
        noIndex: true
      }}
      i18nProps={{
        localePaths: getLocalePaths(pagePaths.search(query.query?.toString()))
      }}
    >
      <GlobalDataProvider
        attributeTypes={attributeTypes}
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>
          <SearchBreadcrumb
            lastSearch={
              query.query
                ? {
                    text: formatMessage(messages.title, {
                      searchQuery: query.query?.toString()
                    }),
                    url: asPath
                  }
                : undefined
            }
          />
          <FacetsProvider
            preFilters={{
              searchQuery: query.query?.toString() || ''
            }}
            initialFacets={getInitialFacetsFromFiles([], query)}
          >
            <FinderProvider initialData={undefined}>
              <ContentContainerStack>
                <ResultView
                  viewAs={'list'}
                  searchQuery={query.query?.toString()}
                />
              </ContentContainerStack>
            </FinderProvider>
          </FacetsProvider>
        </AppLayout>
      </GlobalDataProvider>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<SearchProps>> => {
  const { locale } = context;

  const [siteMenuData, mainMenuData, attributeTypesData] = await Promise.all([
    fetchMenuItemsForSiteHeader(locale),
    fetchMenuItemsForMainHeader(locale),
    fetchAllAttributeTypes(locale)
  ]);

  const props: SearchProps = {
    attributeTypes: attributeTypesData,
    siteMenuItems: siteMenuData,
    mainMenuItems: mainMenuData
  };

  return {
    props
  };
};

export default Search;
