import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { defineMessages, useIntl } from 'react-intl';

import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { messageIds, supportedLocales } from '@services/i18n';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import pagePaths from '@utilities/pagePaths';
import { AppLayout } from '@widgets/layouts/appLayout';
import Page from '@widgets/page/page';
import { getLocalePaths } from '@widgets/page/page.helper';
import { RequestForQuote } from '@widgets/request-for-quote/requestForQuote';
import { RequestForQuoteBreadcrumb } from '@widgets/request-for-quote/requestForQuoteBreadcrumb';

const messages = defineMessages({
  title: {
    id: messageIds.pages.requestForQuote.title,
    description: 'RequestForQuote Page Title',
    defaultMessage: 'Request For Quote'
  }
});

const RequestForQuotePage: NextPage<
  Partial<Pick<GlobalDataContextProps, 'mainMenuItems' | 'siteMenuItems'>>
> = ({ siteMenuItems, mainMenuItems }) => {
  const { formatMessage } = useIntl();
  const title = formatMessage(messages.title);
  return (
    <Page
      metaProps={{
        title: title,
        description: '',
        noIndex: true
      }}
      i18nProps={{
        localePaths: getLocalePaths(pagePaths.requestForQuote)
      }}
    >
      <GlobalDataProvider
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>
          <RequestForQuoteBreadcrumb />
          <RequestForQuote />
        </AppLayout>
      </GlobalDataProvider>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const localizedPaths = (supportedLocales || []).map(locale => {
      return {
        locale,
        params: {}
      };
    });

    return { paths: localizedPaths, fallback: 'blocking' };
  };

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<
  GetStaticPropsResult<
    Partial<Pick<GlobalDataContextProps, 'mainMenuItems' | 'siteMenuItems'>>
  >
> => {
  const { locale } = context;
  const [siteMenuData, mainMenuData] = await Promise.all([
    fetchMenuItemsForSiteHeader(locale),
    fetchMenuItemsForMainHeader(locale)
  ]);

  return {
    props: {
      siteMenuItems: siteMenuData || [],
      mainMenuItems: mainMenuData || []
    }
  };
};

export default RequestForQuotePage;
