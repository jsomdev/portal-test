import React, { useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { PortalMessageBar } from '@components/messages/portalMessageBar';
import { LoadingOverlay } from '@components/overlays/loadingOverlay';
import {
  Link as FluentUILink,
  MessageBarType,
  Stack,
  StackItem,
  Text,
  useTheme
} from '@fluentui/react';
import { customerLoginRequest } from '@services/authentication/authenticationConfiguration';
import { messageIds } from '@services/i18n';
import { PagesHeader } from '@widgets/headers/page-header/pageHeader';
import ContentContainerStack from '@widgets/layouts/contentContainerStack';

import { useCart } from '../../providers/cart/cartContext';
import { useMe } from '../../providers/user/userContext';
import { RequestForQuoteProvider } from './providers/requestForQuoteProvider';
import { useCreateQuoteRequest } from './providers/useCreateQuoteRequest';
import { RequestForQuoteErrorMessage } from './requestForQuoteError';
import { RequestForQuoteForm } from './requestForQuoteForm';

const messages = defineMessages({
  title: {
    id: messageIds.pages.requestForQuote.title,
    description: 'Title text for the request for quote page',
    defaultMessage: 'Quote request'
  },
  submitting: {
    id: messageIds.pages.requestForQuote.submitting,
    description: 'Spinner text while submitting the request',
    defaultMessage: 'Submitting your request'
  },
  requestFailed: {
    id: messageIds.pages.requestForQuote.requestFailed,
    description:
      'Error message to show to the user when the quote request failed',
    defaultMessage:
      'Something unexpected happened while processing your request! Please contact customer support.'
  },
  requestSuccess: {
    id: messageIds.pages.requestForQuote.requestSuccess,
    description: 'Spinner text while redirecting you to the new quote request',
    defaultMessage: 'Your request has been created. Redirecting...'
  },
  creatingRequestForQuotet: {
    id: messageIds.pages.requestForQuote.creatingRequest,
    description: 'Spinner text while creating the new quote request',
    defaultMessage: 'Creating your request...'
  },
  loadingCart: {
    id: messageIds.pages.cart.loading,
    description: 'Text to show while loading cart',
    defaultMessage: 'Loading cart...'
  },
  loadingCartFailed: {
    // TODO: fix description
    id: messageIds.pages.cart.list.cartError,
    description: 'Spinner text while redirecting you to the new quote request',
    defaultMessage: 'Your request has been created. Redirecting...'
  },
  loadingCartProductInformation: {
    id: messageIds.pages.cart.list.loading,
    description:
      'Spinner text to show while product information for the cart is loading',
    defaultMessage: 'Loading product information...'
  },
  needsSignIn: {
    id: messageIds.pages.requestForQuote.needSignIn,
    description: 'Text with action to sign in',
    defaultMessage:
      'You need to be signed in to place a quote request. Please {signInText}'
  },
  signInText: {
    id: messageIds.pages.requestForQuote.signInText,
    description: 'Action text to sign in',
    defaultMessage: 'sign in here.'
  },
  redirectingLogin: {
    id: messageIds.pages.requestForQuote.redirectingLogin,
    description: 'Action text to sign in',
    defaultMessage: 'sign in here.'
  },
  noItems: {
    id: messageIds.pages.requestForQuote.noItems,
    description: 'Info text when there are no items to request for quote',
    defaultMessage:
      'There were no items found in your cart that are eligible for quotation.'
  }
});

export const RequestForQuote: React.FC = () => {
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
  const {
    quoteItems,
    initialized: isCartInitialized,
    itemsStatus: cartInfoStatus
  } = useCart();
  const { meStatus } = useMe();
  const isAuthenticated = useIsAuthenticated();
  const { inProgress, instance } = useMsal();

  const quoteLineProductNumbers: string[] = useMemo(() => {
    return quoteItems
      .filter(item => !!item.productNumber)
      .map(item => item.productNumber) as string[];
  }, [quoteItems]);

  const { create, status: createRequestStatus } = useCreateQuoteRequest(
    quoteLineProductNumbers
  );

  function getSpinnerText(): string {
    if (meStatus === 'loading') {
      return formatMessage(messages.loadingCart);
    }
    if (cartInfoStatus === 'loading') {
      return formatMessage(messages.loadingCartProductInformation);
    }

    if (createRequestStatus === 'loading') {
      return formatMessage(messages.creatingRequestForQuotet);
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
      <PortalMessageBar messageBarType={MessageBarType.warning}>
        {formatMessage(messages.needsSignIn, {
          signInText: (
            <FluentUILink
              onClick={() => instance.loginRedirect(customerLoginRequest)}
            >
              {formatMessage(messages.signInText)}
            </FluentUILink>
          )
        })}
      </PortalMessageBar>
    );
  }

  return (
    <ContentContainerStack
      innerStackProps={{ tokens: { childrenGap: spacing.l1 } }}
    >
      {createRequestStatus === 'loading' && (
        <LoadingOverlay spinnerText={getSpinnerText()} />
      )}
      <StackItem>
        <PagesHeader title={formatMessage(messages.title)} />
      </StackItem>

      {/* When there is an error submitting the form */}
      {createRequestStatus === 'error' && <RequestForQuoteErrorMessage />}
      {/* When the user is not currently logging in and is not authenticated */}
      {!isAuthenticated && inProgress === InteractionStatus.None && (
        <PortalMessageBar messageBarType={MessageBarType.warning}>
          <Text>{formatMessage(messages.signInText)}</Text>
        </PortalMessageBar>
      )}
      {/* When fetching the persisted cart from the /me endpoint returns an error */}
      {meStatus === 'error' && (
        <PortalMessageBar messageBarType={MessageBarType.error}>
          <Text>{formatMessage(messages.loadingCartFailed)}</Text>
        </PortalMessageBar>
      )}
      {cartInfoStatus === 'error' && (
        <PortalMessageBar messageBarType={MessageBarType.error}>
          <Text>{formatMessage(messages.loadingCartProductInformation)}</Text>
        </PortalMessageBar>
      )}
      {createRequestStatus === 'success' && (
        <PortalMessageBar messageBarType={MessageBarType.success}>
          <Text>{formatMessage(messages.requestSuccess)}</Text>
        </PortalMessageBar>
      )}

      {!!quoteItems?.length && (
        <Stack.Item>
          <RequestForQuoteProvider>
            <RequestForQuoteForm onCreateRequest={create} />
          </RequestForQuoteProvider>
        </Stack.Item>
      )}
    </ContentContainerStack>
  );
};
