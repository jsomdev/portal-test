import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { NextLink } from '@components/link/nextLink';
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
import { useCart } from '@providers/cart/cartContext';
import { useMe } from '@providers/user/userContext';
import { customerLoginRequest } from '@services/authentication/authenticationConfiguration';
import { messageIds } from '@services/i18n';
import pagePaths from '@utilities/pagePaths';
import { CheckoutBreadcrumb } from '@widgets/checkout/checkout-breadcrumb/checkoutBreadcrumb';
import { CheckoutForm } from '@widgets/checkout/checkoutForm';
import { CheckoutProvider } from '@widgets/checkout/checkoutProvider/checkoutProvider';
import { useCreateOrder } from '@widgets/checkout/create-order/useCreateOrder';
import { CheckoutErrorBox } from '@widgets/checkout/shared/checkoutErrorBox';
import { PagesHeader } from '@widgets/headers/page-header/pageHeader';
import ContentContainerStack from '@widgets/layouts/contentContainerStack';
import BreadcrumbPortal from '@widgets/spray-portal-breadcrumb/breadcrumbPortal';

const messages = defineMessages({
  title: {
    id: messageIds.pages.checkout.title,
    defaultMessage: 'Checkout'
  },
  orderSuccess: {
    id: messageIds.pages.checkout.orderSuccess,
    defaultMessage: 'Your order has been created. Redirecting...'
  },
  creatingOrder: {
    id: messageIds.pages.checkout.creatingOrder,
    defaultMessage: 'Creating your order...'
  },
  loadingCart: {
    id: messageIds.pages.checkout.loadingCart,
    defaultMessage: 'Loading cart...'
  },
  loadingCartFailed: {
    id: messageIds.pages.checkout.loadingCartFailed,
    defaultMessage: 'Loading cart failed!'
  },
  loadingProductInformation: {
    id: messageIds.pages.checkout.loadingProductInfo,
    defaultMessage: 'Loading product information...'
  },
  loadingProductInfoFailed: {
    id: messageIds.pages.checkout.loadingProductInfoFailed,
    defaultMessage: 'Loading product information failed!'
  },
  noItems: {
    id: messageIds.pages.checkout.noItems,
    defaultMessage:
      'There were no items found in your cart with available pricing.'
  },
  noItemsLink: {
    id: messageIds.pages.checkout.noItemsLink,
    defaultMessage: 'Please return to the cart page and request a quote.'
  },
  needsSignIn: {
    id: messageIds.pages.checkout.needsSignIn,
    defaultMessage:
      'You need to be signed in to checkout your cart. Please {signInText}'
  },
  signInText: {
    id: messageIds.pages.checkout.signInText,
    defaultMessage: 'sign in here.'
  },
  unauthorized: {
    id: messageIds.pages.checkout.unauthorized,
    defaultMessage: 'You are not authorized to view this page.'
  }
});

export const Checkout: React.FC = () => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
  const isAuthenticated = useIsAuthenticated();
  const { inProgress, instance } = useMsal();
  const { meStatus, isCheckoutEnabled } = useMe();
  const {
    checkoutItems,
    itemsStatus: cartInfoStatus,
    initialized: isCartInitialized
  } = useCart();

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
      return formatMessage(messages.loadingCart);
    }
    if (cartInfoStatus === 'loading') {
      return formatMessage(messages.loadingProductInformation);
    }

    if (createOrderStatus === 'loading') {
      return formatMessage(messages.creatingOrder);
    }

    return '';
  }

  if (
    meStatus === 'loading' ||
    // Mapping of the me.cart to cartItems takes a few miliseconds. We assume that it will be initliaized ALWAYS after a successful me fetch
    (meStatus === 'success' && isCartInitialized === false) ||
    cartInfoStatus === 'loading' ||
    inProgress === InteractionStatus.Login
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
        {formatMessage(messages.needsSignIn, {
          signInText: (
            <FluentUILink
              onClick={() => instance.loginRedirect(customerLoginRequest)}
            >
              {formatMessage(messages.signInText)}
            </FluentUILink>
          )
        })}
      </MessageBar>
    );
  }

  if (!isCheckoutEnabled) {
    return (
      <MessageBar messageBarType={MessageBarType.warning}>
        <Text>{formatMessage(messages.unauthorized)}</Text>
      </MessageBar>
    );
  }

  return (
    <ContentContainerStack
      innerStackProps={{ tokens: { childrenGap: spacing.l1 } }}
    >
      {createOrderStatus === 'loading' && (
        <LoadingOverlay spinnerText={getSpinnerText()} />
      )}
      <StackItem>
        <PagesHeader title={formatMessage(messages.title)} />
      </StackItem>
      <BreadcrumbPortal>
        <CheckoutBreadcrumb />
      </BreadcrumbPortal>
      {/* When there is an error submitting the form */}
      {error && <CheckoutErrorBox error={error} />}
      {/* When the user is not currently logging in and is not authenticated */}
      {!isAuthenticated && inProgress === InteractionStatus.None && (
        <MessageBar messageBarType={MessageBarType.warning}>
          <Text>{formatMessage(messages.signInText)}</Text>
        </MessageBar>
      )}
      {/* When fetching the persisted cart from the /me endpoint returns an error */}
      {meStatus === 'error' && (
        <MessageBar messageBarType={MessageBarType.error}>
          <Text>{formatMessage(messages.loadingCartFailed)}</Text>
        </MessageBar>
      )}
      {cartInfoStatus === 'error' && (
        <MessageBar messageBarType={MessageBarType.error}>
          <Text>{formatMessage(messages.loadingProductInfoFailed)}</Text>
        </MessageBar>
      )}
      {createOrderStatus === 'success' && (
        <MessageBar messageBarType={MessageBarType.success}>
          <Text>{formatMessage(messages.orderSuccess)}</Text>
        </MessageBar>
      )}
      {checkoutItems?.length === 0 && (
        <Stack.Item>
          <MessageBar messageBarType={MessageBarType.blocked}>
            <Text>{messages.noItems}</Text>
            <NextLink href={pagePaths.cart}>
              <a>
                <Text>{formatMessage(messages.noItemsLink)}</Text>
              </a>
            </NextLink>
          </MessageBar>
        </Stack.Item>
      )}
      {!!checkoutItems?.length && (
        <Stack.Item>
          <CheckoutProvider>
            <CheckoutForm onCreateOrder={create} />
          </CheckoutProvider>
        </Stack.Item>
      )}
    </ContentContainerStack>
  );
};
