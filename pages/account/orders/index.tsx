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
import { messageIds } from '@services/i18n';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { ENVIRONMENT_VARIABLES } from '@utilities/environmentVariables';
import pagePaths from '@utilities/pagePaths';
import { AccountPage } from '@widgets/account/accountPage';
import { OrderDetail } from '@widgets/account/orders/orderDetail';
import { OrdersOverview } from '@widgets/account/orders/ordersOverview';
import { getLocalePaths } from '@widgets/page/page.helper';

const messages = defineMessages({
  ordersTitle: {
    id: messageIds.pages.account.sections.orders.title,
    description: 'Orders page title',
    defaultMessage: 'Orders'
  },
  orderTitle: {
    id: messageIds.pages.account.sections.order.title,
    description: 'Order page title',
    defaultMessage: 'Order'
  },
  viewAll: {
    id: messageIds.pages.account.overview.orders.viewAllText,
    description: 'View all orders link text',
    defaultMessage: 'View all orders'
  }
});

interface OrderParsedUrlQuery extends ParsedUrlQuery {
  id: string | undefined;
  confirmation: string | undefined;
}

const Orders: NextPage<
  Partial<Pick<GlobalDataContextProps, 'mainMenuItems' | 'siteMenuItems'>>
> = ({ siteMenuItems, mainMenuItems }) => {
  const { formatMessage } = useIntl();
  const router = useRouter();
  const query = router.query as OrderParsedUrlQuery;

  const title = query.id
    ? formatMessage(messages.orderTitle)
    : formatMessage(messages.ordersTitle);

  const localePaths = getLocalePaths(
    query.id ? pagePaths.orderDetail(query.id) : pagePaths.orders
  );

  return (
    <AccountPage
      pageTitle={router.isReady ? title : ''}
      localePaths={localePaths}
      mainMenuItems={mainMenuItems}
      siteMenuItems={siteMenuItems}
      breadCrumbItem={
        query.id
          ? {
              link: pagePaths.orders,
              text: formatMessage(messages.viewAll)
            }
          : undefined
      }
    >
      {router.isReady ? (
        query.id ? (
          <OrderDetail id={query.id} showConfirmation={!!query.confirmation} />
        ) : (
          <OrdersOverview />
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

export default Orders;
