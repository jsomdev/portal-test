import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { defineMessages, useIntl } from 'react-intl';

import { NotFoundMessage } from '@components/errors/notFoundMessage';
import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { getAudienceLocale, messageIds } from '@services/i18n';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { AppLayout } from '@widgets/layouts/appLayout';
import Page from '@widgets/page/page';

type Custom404Props = Pick<
  GlobalDataContextProps,
  'mainMenuItems' | 'siteMenuItems'
>;

const messages = defineMessages({
  title: {
    id: messageIds.pages.notFound.title,
    defaultMessage: 'Not Found'
  }
});

const Custom404: NextPage<Custom404Props> = ({
  siteMenuItems,
  mainMenuItems
}) => {
  const intl = useIntl();

  return (
    <Page
      metaProps={{
        title: intl.formatMessage(messages.title),
        noIndex: true
      }}
      i18nProps={{}}
    >
      <GlobalDataProvider
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>
          <NotFoundMessage />
        </AppLayout>
      </GlobalDataProvider>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<Custom404Props>> => {
  const locale = getAudienceLocale(context.locale);

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

export default Custom404;
