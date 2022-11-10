import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { getAudience, messageIds } from '@services/i18n';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { AccountPage } from '@widgets/account/accountPage';
import { QuoteDetail } from '@widgets/account/quotes/quoteDetail';
import { getLocalePaths } from '@widgets/page/page.helper';

const messages = defineMessages({
  title: {
    id: messageIds.pages.account.sections.quotes.title,
    description: 'Quote page title',
    defaultMessage: 'Quote'
  }
});

const Quote: NextPage<
  Partial<Pick<GlobalDataContextProps, 'mainMenuItems' | 'siteMenuItems'>>
> = ({ siteMenuItems, mainMenuItems }) => {
  const { formatMessage } = useIntl();
  const { query } = useRouter();

  return (
    <AccountPage
      mainMenuItems={mainMenuItems}
      siteMenuItems={siteMenuItems}
      metaTitle={formatMessage(messages.title)}
      pageTitle={formatMessage(messages.title)}
      localePaths={getLocalePaths(`account/quotes/${query.quoteId}`)}
    >
      <QuoteDetail id={query.quoteId as string} />
    </AccountPage>
  );
};

//TODO find solution to use getStaticProps

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
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

export default Quote;
