import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { defineMessages, useIntl } from 'react-intl';

import { ErrorMessage } from '@components/errors/errorMessage';
import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { messageIds } from '@services/i18n';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { AppLayout } from '@widgets/layouts/appLayout';
import Page from '@widgets/page/page';

type Custom500Props = Partial<
  Pick<GlobalDataContextProps, 'mainMenuItems' | 'siteMenuItems'>
>;

const messages = defineMessages({
  title: {
    id: messageIds.pages.error.title,
    defaultMessage: '500 – Internal Server Error'
  }
});

const Custom500: NextPage<Custom500Props> = ({
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
      {siteMenuItems && mainMenuItems ? (
        <GlobalDataProvider
          siteMenuItems={siteMenuItems}
          mainMenuItems={mainMenuItems}
        >
          <AppLayout>
            <ErrorMessage showHomepageLink />
          </AppLayout>
        </GlobalDataProvider>
      ) : (
        <ErrorMessage showLogo />
      )}
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<Custom500Props>> => {
  const { locale } = context;

  try {
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
  } catch (error) {
    return {
      props: {}
    };
  }
};

export default Custom500;
