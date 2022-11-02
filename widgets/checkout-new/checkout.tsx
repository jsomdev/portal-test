import React, { useContext } from 'react';

import Link from 'next/link';

import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { LoadingOverlay } from '@components/overlays/loadingOverlay';
import {
  Link as FluentUILink,
  MessageBar,
  MessageBarType,
  Stack,
  StackItem,
  Text,
  useTheme
} from '@fluentui/react';
import { CartContext } from '@providers/cart/cartContext';
import { useMe } from '@providers/user/userContext';
import { customerLoginRequest } from '@services/authentication/authenticationConfiguration';
import pagePaths from '@utilities/pagePaths';
import CheckoutFormNew from '@widgets/checkout-new/checkoutForm';
import { CheckoutBreadcrumb } from '@widgets/checkout/checkout-breadcrumb/checkoutBreadcrumb';
import { useCreateOrder } from '@widgets/checkout/create-order/useCreateOrder';
import { CheckoutErrorBox } from '@widgets/checkout/shared/checkoutErrorBox';
import { CheckoutFormProvider } from '@widgets/checkout/shared/checkoutFormProvider';
import { PagesHeader } from '@widgets/headers/page-header/pageHeader';
import ContentContainerStack from '@widgets/layouts/contentContainerStack';
import BreadcrumbPortal from '@widgets/spray-portal-breadcrumb/breadcrumbPortal';

const messages = {
  title: 'Checkout',
  orderSuccess: 'Your order has been created. Redirecting...',
  creatingOrder: 'Creating your order...',
  loadingCart: 'Loading cart...',
  metaTitle: 'Checkout | Spraying Systems Co. ',
  loadingCartFailed: 'Loading cart failed!',
  loadingProductInfo: 'Loading product information...',
  loadingProductInfoFailed: 'Loading product information failed!',
  noItems: 'There were no items found in your cart with available pricing.',
  noItemsLink: 'Please return to the cart page and request a quote.',
  needSignIn: 'You need to be signed in to checkout your cart. Please ',
  unauthorized: 'You are not authorized to view this page.',
  signIn: 'sign in here.'
};

const CheckoutNew: React.FC = () => {
  const { spacing } = useTheme();
  const isAuthenticated = useIsAuthenticated();
  const { inProgress, instance } = useMsal();
  const { meStatus, isCheckoutEnabled } = useMe();
  const {
    checkoutItems,
    itemsStatus: cartInfoStatus,
    initialized: isCartInitialized
  } = useContext(CartContext);

  const orderLineProductNumbers: string[] = React.useMemo(() => {
    if (checkoutItems === undefined) {
      return [];
    }
    return checkoutItems
      .filter(item => !!item.productNumber)
      .map(item => item.productNumber) as string[];
  }, [checkoutItems]);

  const {
    create,
    status: createOrderStatus,
    error
  } = useCreateOrder(orderLineProductNumbers);

  function getSpinnerText(): string {
    if (meStatus === 'loading') {
      return messages.loadingCart;
    }
    if (cartInfoStatus === 'loading') {
      return messages.loadingProductInfo;
    }

    if (createOrderStatus === 'loading') {
      return messages.creatingOrder;
    }

    return '';
  }

  if (
    meStatus === 'loading' ||
    // Mapping of the me.cart to cartItems takes a few miliseconds. We assume that it will be initliaized ALWAYS after a successful me fetch
    (meStatus === 'success' && isCartInitialized === false) ||
    cartInfoStatus === 'loading'
  ) {
    return (
      <Stack
        verticalAlign="center"
        horizontalAlign="center"
        tokens={{ childrenGap: spacing.l1, padding: `${spacing.l1} 0 ` }}
      >
        <LoadingOverlay spinnerText={getSpinnerText()} />
      </Stack>
    );
  }
  if (!isAuthenticated && inProgress === InteractionStatus.None) {
    return (
      <MessageBar messageBarType={MessageBarType.warning}>
        {messages.needSignIn}
        <FluentUILink
          onClick={() => instance.loginRedirect(customerLoginRequest)}
        >
          {messages.signIn}
        </FluentUILink>
      </MessageBar>
    );
  }

  if (!isCheckoutEnabled) {
    return (
      <MessageBar messageBarType={MessageBarType.warning}>
        <Text>{messages.unauthorized}</Text>
      </MessageBar>
    );
  }

  return (
    <ContentContainerStack>
      {createOrderStatus === 'loading' && (
        <LoadingOverlay spinnerText={getSpinnerText()} />
      )}
      <BreadcrumbPortal>
        <CheckoutBreadcrumb />
      </BreadcrumbPortal>
      <StackItem>
        <PagesHeader title={messages.title} />
      </StackItem>
      {/* When there is an error submitting the form */}
      {error && <CheckoutErrorBox error={error} />}
      {/* When the user is not currently logging in and is not authenticated */}
      {!isAuthenticated && inProgress === InteractionStatus.None && (
        <MessageBar messageBarType={MessageBarType.warning}>
          <Text>{messages.signIn}</Text>
        </MessageBar>
      )}
      {/* When fetching the persisted cart from the /me endpoint returns an error */}
      {meStatus === 'error' && (
        <MessageBar messageBarType={MessageBarType.error}>
          <Text>{messages.loadingCartFailed}</Text>
        </MessageBar>
      )}
      {cartInfoStatus === 'error' && (
        <MessageBar messageBarType={MessageBarType.error}>
          <Text>{messages.loadingProductInfoFailed}</Text>
        </MessageBar>
      )}
      {createOrderStatus === 'success' && (
        <MessageBar messageBarType={MessageBarType.success}>
          <Text>{messages.orderSuccess}</Text>
        </MessageBar>
      )}
      {checkoutItems?.length === 0 && (
        <Stack.Item>
          <MessageBar messageBarType={MessageBarType.blocked}>
            <Text>{messages.noItems}</Text>
            <Link href={pagePaths.cart}>
              <a>
                <Text>{messages.noItemsLink}</Text>
              </a>
            </Link>
          </MessageBar>
        </Stack.Item>
      )}
      {!!checkoutItems?.length && (
        <Stack.Item>
          <CheckoutFormProvider>
            <CheckoutFormNew />
            {/*onSubmit={async (order: OrderPost) => {
                await create(order);
              }}*/}
          </CheckoutFormProvider>
        </Stack.Item>
      )}
    </ContentContainerStack>
  );
};

export default CheckoutNew;
