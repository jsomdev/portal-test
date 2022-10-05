import React, { useState } from 'react';

import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage
} from 'next';
import { defineMessages, useIntl } from 'react-intl';

import { useIsAuthenticated } from '@azure/msal-react';
import { LoadingOverlay } from '@components/overlays/loadingOverlay';
import {
  DefaultButton,
  IStackItemStyles,
  IStackStyles,
  Link,
  MessageBar,
  MessageBarType,
  PrimaryButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';
import { CartItemsDialog } from '@providers/cart/cartItemsDialog';
import { GlobalDataContextProps } from '@providers/global-data/globalDataContext';
import { GlobalDataProvider } from '@providers/global-data/globalDataProvider';
import { useMe } from '@providers/user/userContext';
import { getAudience, messageIds } from '@services/i18n';
import {
  fetchMenuItemsForMainHeader,
  fetchMenuItemsForSiteHeader
} from '@services/portal-api/menuItems';
import { AddBulkCard } from '@widgets/add-bulk-card/addBulkCard';
import { CartList } from '@widgets/cart-list/cartList';
import { CartListActions } from '@widgets/cart-list/cartListActions';
import { CartSummary } from '@widgets/cart/cartSummary';
import { PagesHeader } from '@widgets/headers/page-header/pageHeader';
import { AppLayout } from '@widgets/layouts/appLayout';
import Page from '@widgets/page/page';
import { getLocalePaths } from '@widgets/page/page.helper';

const messages = defineMessages({
  title: {
    id: messageIds.pages.cart.title,
    description: 'Cart Page Title',
    defaultMessage: 'Cart'
  },
  mergeMessage: {
    id: messageIds.pages.cart.merge.message
  },
  mergeYes: {
    id: messageIds.pages.cart.merge.answerYes //TODO ward
  },
  mergeNo: {
    id: messageIds.pages.cart.merge.answerNo //TODO ward
  },
  viewProducts: {
    id: messageIds.pages.cart.merge.viewProducts //TODO ward
  },
  loadingCart: {
    id: messageIds.pages.cart.loading //TODO ward
  }
});

//TODO ward move
export interface CartStyles {
  summaryContainer: IStackStyles;
  bulkContainer: IStackItemStyles;
  itemsContainer: IStackStyles;
  listContainer: IStackStyles;
  mergeCartContainer: IStackStyles;
}

const Cart: NextPage<
  Partial<Pick<GlobalDataContextProps, 'mainMenuItems' | 'siteMenuItems'>>
> = ({ siteMenuItems, mainMenuItems }) => {
  const { formatMessage } = useIntl();
  const { spacing, effects, semanticColors } = useTheme();
  const { items, cookieBaseItems, itemsStatus, clearCookie, mergeCookie } =
    useCart();
  const { meStatus, hasPricing } = useMe();
  const isAuthenticated = useIsAuthenticated();
  const [showDialog, setShowDialog] = useState(false);

  const styles: CartStyles = {
    listContainer: { root: { maxWidth: '95%' } },
    bulkContainer: {
      root: {
        padding: spacing.l1,
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner2
      }
    },
    summaryContainer: {
      root: { flex: '2', paddingTop: 16, minWidth: '280px' }
    },
    itemsContainer: { root: { flex: '5', minWidth: '280px' } },
    mergeCartContainer: {
      root: {
        marginTop: 14
      }
    }
  };

  if (meStatus === 'loading' || itemsStatus === 'loading') {
    return <LoadingOverlay spinnerText={formatMessage(messages.loadingCart)} />;
  }

  if (itemsStatus === 'idle') {
    return null;
  }

  return (
    <Page
      title={formatMessage(messages.title)}
      description=""
      noIndex={true}
      localePaths={getLocalePaths('cart')}
    >
      <GlobalDataProvider
        siteMenuItems={siteMenuItems}
        mainMenuItems={mainMenuItems}
      >
        <AppLayout>
          <Stack.Item>{/* TODO  ward <CartBreadcrumb />*/}</Stack.Item>

          <Stack.Item>
            <PagesHeader title={formatMessage(messages.title)} />
          </Stack.Item>

          <Stack.Item>
            <Stack
              horizontal
              wrap
              tokens={{ padding: `${spacing.m} 0`, childrenGap: spacing.m }}
            >
              <Stack.Item styles={styles.itemsContainer}>
                <Stack styles={styles.listContainer}>
                  {isAuthenticated && !!cookieBaseItems.length && (
                    <Stack styles={styles.mergeCartContainer}>
                      <MessageBar
                        isMultiline={true}
                        actions={
                          <Stack horizontal wrap>
                            <DefaultButton onClick={clearCookie}>
                              {messages.mergeNo}
                            </DefaultButton>
                            <PrimaryButton onClick={mergeCookie}>
                              {messages.mergeYes}
                            </PrimaryButton>
                          </Stack>
                        }
                        messageBarType={MessageBarType.warning}
                      >
                        <Text>
                          {messages.mergeMessage}
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <Link
                            onClick={() => {
                              setShowDialog(true);
                            }}
                          >
                            {formatMessage(messages.viewProducts)}
                          </Link>
                        </Text>
                      </MessageBar>
                    </Stack>
                  )}

                  <Stack.Item>
                    <CartList
                      items={items}
                      readOnly={false}
                      status={itemsStatus}
                      showPricingColumns={
                        hasPricing === 'Customer' || hasPricing === 'Standard'
                      }
                    />
                  </Stack.Item>
                  <Stack.Item>
                    <CartListActions />
                  </Stack.Item>
                </Stack>
              </Stack.Item>
              <Stack.Item styles={styles.summaryContainer}>
                <Stack tokens={{ childrenGap: spacing.s1 }}>
                  <CartSummary />
                  <Stack.Item styles={styles.bulkContainer}>
                    <AddBulkCard />
                  </Stack.Item>
                </Stack>
              </Stack.Item>
            </Stack>
          </Stack.Item>
          {/* TODO <Stack.Item>
            <RecentlyViewedSection />
          </Stack.Item> */}
          <CartItemsDialog
            items={cookieBaseItems}
            hidden={!showDialog}
            onDismiss={() => {
              setShowDialog(false);
            }}
          />
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

export default Cart;
