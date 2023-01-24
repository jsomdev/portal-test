import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { defineMessages, useIntl } from 'react-intl';

import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { messageIds } from '@services/i18n';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { ENVIRONMENT_VARIABLES } from '@utilities/environmentVariables';
import Cart from '@widgets/cart/cart';
import { CartBreadcrumb } from '@widgets/cart/cartBreadcrumb';
import { AppLayout } from '@widgets/layouts/appLayout';
import Page from '@widgets/page/page';
import { getLocalePaths } from '@widgets/page/page.helper';

const messages = defineMessages({
  title: {
    id: messageIds.pages.cart.title,
    description: 'Cart Page Title',
    defaultMessage: 'Cart'
  }
});

const CartPage: NextPage<
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
        localePaths: getLocalePaths('cart')
      }}
    >
      <GlobalDataProvider
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>
          <CartBreadcrumb />
          <Cart title={title} />
        </AppLayout>
      </GlobalDataProvider>
    </Page>
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

export default CartPage;
