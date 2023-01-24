import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { defineMessages, useIntl } from 'react-intl';

import { Stack } from '@fluentui/react';
import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { messageIds } from '@services/i18n';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { ENVIRONMENT_VARIABLES } from '@utilities/environmentVariables';
import pagePaths from '@utilities/pagePaths';
import { AccountPage } from '@widgets/account/accountPage';
import { QuoteDetail } from '@widgets/account/quotes/quoteDetail';
import { QuotesOverview } from '@widgets/account/quotes/quotesOverview';
import { getLocalePaths } from '@widgets/page/page.helper';

const messages = defineMessages({
  quotesTitle: {
    id: messageIds.pages.account.sections.quotes.title,
    description: 'Quotes page title',
    defaultMessage: 'Quotes'
  },

  quoteTitle: {
    id: messageIds.pages.account.sections.quote.title,
    description: 'Quote page title',
    defaultMessage: 'Quote'
  },
  viewAll: {
    id: messageIds.pages.account.quotes.viewAll,
    description: 'View all quote link text',
    defaultMessage: 'View all quotes'
  }
});

interface QuotesParsedUrlQuery extends ParsedUrlQuery {
  id: string | undefined;
}

const Quotes: NextPage<
  Partial<Pick<GlobalDataContextProps, 'mainMenuItems' | 'siteMenuItems'>>
> = ({ siteMenuItems, mainMenuItems }) => {
  const { formatMessage } = useIntl();
  const router = useRouter();
  const query = router.query as QuotesParsedUrlQuery;

  const title = query.id
    ? formatMessage(messages.quoteTitle)
    : formatMessage(messages.quotesTitle);

  const localePaths =
    router.isReady && query.id
      ? getLocalePaths(pagePaths.quoteDetail(query.id))
      : getLocalePaths(pagePaths.quotes);

  return (
    <AccountPage
      mainMenuItems={mainMenuItems}
      siteMenuItems={siteMenuItems}
      pageTitle={router.isReady ? title : ''}
      localePaths={localePaths}
      breadCrumbItem={
        query.id
          ? {
              link: pagePaths.quotes,
              text: formatMessage(messages.viewAll)
            }
          : undefined
      }
    >
      {router.isReady ? (
        query.id ? (
          <Stack>
            <QuoteDetail id={query.id} />
          </Stack>
        ) : (
          <QuotesOverview />
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
  const { locale: contextLocale } = context;
  let locale = contextLocale;
  if (locale === ENVIRONMENT_VARIABLES.defaultLocale || locale === 'default') {
    locale = 'en-us';
  }
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

export default Quotes;
