import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { defineMessages, useIntl } from 'react-intl';

import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { getAudience, messageIds } from '@services/i18n';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import pagePaths from '@utilities/pagePaths';
import { AccountPage } from '@widgets/account/accountPage';
import { QuoteRequestDetail } from '@widgets/account/quote-requests/quoteRequestDetail';
import { QuoteRequestsOverview } from '@widgets/account/quote-requests/quoteRequestsOverview';
import { getLocalePaths } from '@widgets/page/page.helper';

const messages = defineMessages({
  quoteRequestsTitle: {
    id: messageIds.pages.account.sections.quoteRequests.title,
    description: 'Quote requests page title',
    defaultMessage: 'Quote Requests'
  },
  quoteRequestTitle: {
    id: messageIds.pages.account.sections.quoteRequest.title,
    description: 'Quote request page title',
    defaultMessage: 'Quote Request'
  },
  viewAll: {
    id: messageIds.pages.account.quoteRequests.viewAll,
    description: 'View all quote requests link text',
    defaultMessage: 'View all quote requests'
  }
});

interface QuoteRequestsParsedUrlQuery extends ParsedUrlQuery {
  id: string | undefined;
  confirmation: string | undefined;
}

const QuoteRequests: NextPage<
  Partial<Pick<GlobalDataContextProps, 'mainMenuItems' | 'siteMenuItems'>>
> = ({ siteMenuItems, mainMenuItems }) => {
  const { formatMessage } = useIntl();
  const router = useRouter();
  const query = router.query as QuoteRequestsParsedUrlQuery;

  const title = query.id
    ? formatMessage(messages.quoteRequestTitle)
    : formatMessage(messages.quoteRequestsTitle);

  const localePaths = getLocalePaths(
    pagePaths.quoteRequests(query.id).toString()
  );

  return (
    <AccountPage
      mainMenuItems={mainMenuItems}
      siteMenuItems={siteMenuItems}
      pageTitle={router.isReady ? title : ''}
      localePaths={localePaths}
      breadCrumbItem={
        query.id
          ? {
              link: pagePaths.quoteRequests()?.toString(),
              text: formatMessage(messages.viewAll)
            }
          : undefined
      }
    >
      {router.isReady ? (
        query.id ? (
          <QuoteRequestDetail
            id={query.id}
            showConfirmation={!!query.confirmation}
          />
        ) : (
          <QuoteRequestsOverview />
        )
      ) : null}
    </AccountPage>
  );
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
    fetchMenuItemsForSiteHeader(getAudience(locale)),
    fetchMenuItemsForMainHeader(getAudience(locale))
  ]);

  return {
    props: {
      siteMenuItems: siteMenuData || [],
      mainMenuItems: mainMenuData || []
    }
  };
};

export default QuoteRequests;
