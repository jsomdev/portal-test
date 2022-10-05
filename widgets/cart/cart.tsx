import React, { ComponentType, useState } from 'react';

import { Route, Switch, useRouteMatch } from 'react-router';

import { useIsAuthenticated } from '@azure/msal-react';
import {
  DefaultButton,
  Link,
  MessageBar,
  MessageBarType,
  PrimaryButton,
  Stack,
  Text,
  useTheme,
} from '@fluentui/react';

import { LoadingOverlay } from '../../../components/overlays/loadingOverlay';
import { PagesHeader } from '../../../components/pages-header/pagesHeader';
import { CartBreadcrumb } from '../../../components/spray-portal-breadcrumb/cart-breadcrumb/cartBreadcrumb';
import { STATIC_IMAGES } from '../../../media/images';
import { retry } from '../../../utilities/retry';
import { CartContext } from '../../providers/cart/cartContext';
import { CartItemsDialog } from '../../providers/cart/cartItemsDialog';
import { useMe } from '../../providers/user/userContext';
import { PageContainer } from '../pageContainer';
import { pageRoutePaths } from '../pagesHelper';
import { AddBulkCard } from '../shared/add-bulk-card/addBulkCard';
import { CartList } from '../shared/cart-list/cartList';
import { CartListActions } from '../shared/cart-list/cartListActions';
import { RecentlyViewedSection } from '../shared/recently-viewed/recentlyViewedSection';
import { CartStyles } from './cart.types';
import { CartSummary } from './cartSummary';

const QuoteRequest = React.lazy(() =>
  retry<{ default: ComponentType<unknown> }>(
    () =>
      import(
        /* webpackChunkName: "QuoteRequest" */ '../quote-request/quoteRequest'
      ),
    (error) => window.location.reload()
  )
);

const Checkout = React.lazy(() =>
  retry<{ default: ComponentType<unknown> }>(
    () => import(/* webpackChunkName: "Checkout" */ '../checkout/checkout'),
    (error) => window.location.reload()
  )
);

const messages = {
  loadingCart: 'Loading cart...',
  title: 'Shopping Cart',
  metaImageAlt: 'Product cart item',
  metaTitle: 'Cart | Spraying Systems Co.',
  metaDescription: 'Checkout your products or request a quote.',
  loadingProducts: 'Loading product information...',
  mergeTitle: 'Your cart requires attention!',
  mergeMessage:
    'You have added products to your cart while you were logged out. Do you want us to add them to your cart? ',
  no: 'No',
  yes: 'Yes',
  viewItems: 'View products',
};
const Cart: React.FC = () => {
  const { spacing, effects, semanticColors } = useTheme();
  const { path } = useRouteMatch();
  const {
    items,
    cookieBaseItems,
    itemsStatus,
    clearCookie,
    mergeCookie,
  } = React.useContext(CartContext);
  const { meStatus, hasPricing } = useMe();
  const isAuthenticated = useIsAuthenticated();
  const [showDialog, setShowDialog] = useState(false);

  const styles: CartStyles = {
    listContainer: { root: { maxWidth: '95%' } },
    bulkContainer: {
      root: {
        padding: spacing.l1,
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner2,
      },
    },
    summaryContainer: {
      root: { flex: '2', paddingTop: 16, minWidth: '280px' },
    },
    itemsContainer: { root: { flex: '5', minWidth: '280px' } },
    mergeCartContainer: {
      root: {
        marginTop: 14,
      },
    },
  };

  if (meStatus === 'loading') {
    return <LoadingOverlay spinnerText={messages.loadingCart} />;
  }

  if (itemsStatus === 'loading') {
    return <LoadingOverlay spinnerText={messages.loadingCart} />;
  }

  if (itemsStatus === 'idle') {
    return null;
  }
  return (
    <Switch>
      <Route path={pageRoutePaths.quoteRequest}>
        <QuoteRequest />
      </Route>

      <Route path={pageRoutePaths.checkout}>
        <Checkout />
      </Route>
      <Route exact path={path}>
        <PageContainer
          metaTitle={messages.metaTitle}
          metaDescription={messages.metaDescription}
          metaImage={STATIC_IMAGES.cart.defaultItem}
          metaImageAlt={messages.metaImageAlt}
        >
          <Stack.Item>
            <CartBreadcrumb />
          </Stack.Item>
          <Stack.Item>
            <PagesHeader title={messages.title} />
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
                              {messages.no}
                            </DefaultButton>
                            <PrimaryButton onClick={mergeCookie}>
                              {messages.yes}
                            </PrimaryButton>
                          </Stack>
                        }
                        messageBarType={MessageBarType.warning}
                      >
                        <Text>
                          {messages.mergeMessage}
                          <Link
                            onClick={(ev) => {
                              setShowDialog(true);
                            }}
                          >
                            {messages.viewItems}
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
          <Stack.Item>
            <RecentlyViewedSection />
          </Stack.Item>
          <CartItemsDialog
            items={cookieBaseItems}
            hidden={!showDialog}
            onDismiss={() => {
              setShowDialog(false);
            }}
          />
        </PageContainer>
      </Route>
    </Switch>
  );
};

export default Cart;
