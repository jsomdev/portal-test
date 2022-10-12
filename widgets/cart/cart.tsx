import React, { useState } from 'react';

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
import { useMe } from '@providers/user/userContext';
import { messageIds } from '@services/i18n';
import { AddBulkCard } from '@widgets/add-bulk-card/addBulkCard';
import { CartList } from '@widgets/cart-list/cartList';
import { CartListActions } from '@widgets/cart-list/cartListActions';
import { CartMergeDialog } from '@widgets/cart-merge-dialog/cartMergeDialog';
import { CartSummary } from '@widgets/cart/cartSummary';
import { PagesHeader } from '@widgets/headers/page-header/pageHeader';
import ContentContainerStack from '@widgets/layouts/contentContainerStack';

const messages = defineMessages({
  mergeMessage: {
    id: messageIds.pages.cart.merge.message,
    defaultMessage:
      'You have added products to your cart while you were logged out. Do you want us to add them to your cart?',
    description: 'Message displayed when the user has a cart to merge'
  },
  mergeYes: {
    id: messageIds.data.boolean.true,
    defaultMessage: 'Yes',
    description: 'Answer to merge the cart with Yes'
  },
  mergeNo: {
    id: messageIds.data.boolean.false,
    defaultMessage: 'No',
    description: 'Answer to merge the cart with No'
  },
  viewProducts: {
    id: messageIds.pages.cart.merge.viewProducts,
    defaultMessage: 'View products',
    description: 'View products in cart to merge'
  },
  loadingCart: {
    id: messageIds.pages.cart.loading,
    defaultMessage: 'Loading cart...',
    description: 'Loading cart message'
  }
});

export interface CartStyles {
  summaryContainer: IStackStyles;
  bulkContainer: IStackItemStyles;
  itemsContainer: IStackStyles;
  listContainer: IStackStyles;
  mergeCartContainer: IStackStyles;
}

type CartProps = {
  title: string;
};

const Cart: React.FC<CartProps> = ({ title }) => {
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
    <ContentContainerStack>
      <Stack.Item>{/* TODO ward <CartBreadcrumb />*/}</Stack.Item>

      <Stack.Item>
        <PagesHeader title={title} />
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
                          {formatMessage(messages.mergeNo)}
                        </DefaultButton>
                        <PrimaryButton onClick={mergeCookie}>
                          {formatMessage(messages.mergeYes)}
                        </PrimaryButton>
                      </Stack>
                    }
                    messageBarType={MessageBarType.warning}
                  >
                    <Text>
                      {formatMessage(messages.mergeMessage)}
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
      {/* TODO https://dev.azure.com/itssco/SSCo/_workitems/edit/14867
       <Stack.Item>
          <RecentlyViewedSection />
        </Stack.Item>
        */}
      <CartMergeDialog
        items={cookieBaseItems}
        hidden={!showDialog}
        onDismiss={() => {
          setShowDialog(false);
        }}
      />
    </ContentContainerStack>
  );
};

export default Cart;
