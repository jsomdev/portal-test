import React from 'react';

import { defineMessages } from 'react-intl';
import { Link } from 'react-router-dom';

import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import {
  Link as FluentUILink,
  MessageBar,
  MessageBarType,
  Stack,
  StackItem,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';

import { LoadingOverlay } from '../../../components/overlays/loadingOverlay';
import { PagesHeader } from '../../../components/pages-header/pagesHeader';
import { QuoteRequestBreadcrumb } from '../../../components/spray-portal-breadcrumb/quote-request-breadcrumb/quoteRequestBreadcrumb';
import { STATIC_IMAGES } from '../../../media/images';
import { QuoteRequest as QuoteRequestModel } from '../../../services/portal-api/models/QuoteRequest';
import { formatLocationHref } from '../../../utilities/formatHref';
import { useCreateQuoteRequest } from '../../../utilities/useCreateQuote';
import { customerLoginRequest } from '../../providers/authentication/authConfig';
import { useCart } from '../../providers/cart/cartContext';
import { useMe } from '../../providers/user/userContext';
import { PageContainer } from '../pageContainer';
import { pageRoutePaths } from '../pagesHelper';
import { QuoteRequestFormValues } from './quoteRequest.types';
import { QuoteRequestErrorMessage } from './quoteRequestErrorMessage';
import { QuoteRequestForm } from './quoteRequestForm';
import { mapQuoteRequestFormValuesToQuoteRequest } from './quoteRequestHelper';

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
  creatingRequest: {
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
  needSignIn: {
    id: messageIds.pages.requestForQuote.needSignIn,
    description: 'Text with action to sign in',
    defaultMessage:
      'You need to be signed in to place a quote request. Please {signInText}'
  }
});

// const messages = {
//   title: 'Quote Request',
//   submitting: 'Submitting your request...',
//   metaTitle: 'Quote Request | Spraying Systems Co. ',
//   metaDescription: 'Complete your personal details to make a quote request.',
//   requestSuccess: 'Your request has been created. Redirecting...',
//   requestFailed:
//     'Something unexpected happened! Please contact customer support.',
//   creatingRequest: 'Creating your request...',
//   loadingCart: 'Loading cart...',
//   loadingCartFailed: 'Loading cart failed!',
//   loadingProductInfo: 'Loading product information...',
//   loadingProductsFailed: 'Loading product information failed',
//   needSignIn: 'You need to be signed in to place a quote request. Please ',
//   signIn: 'sign in here.',
//   redirecting: 'Redirecting to login',
//   noItems:
//     'There were no items found in your cart that are eligible for quotation.',
//   noItemsLink:
//     'Please return to the cart page and proceed to request a price if you have items with quoted pricing.'
// };

const QuoteRequest: React.FC = () => {
  const { spacing } = useTheme();
  const { quoteItems, initialized, itemsStatus: cartInfoStatus } = useCart();
  const { meStatus } = useMe();
  const isAuthenticated = useIsAuthenticated();
  const { inProgress, instance } = useMsal();

  const { create, status: createRequestStatus } = useCreateQuoteRequest(
    quoteItems.map(item => item.productNumber || '')
  );

  function submitRequest(values: QuoteRequestFormValues) {
    const request: QuoteRequestModel = mapQuoteRequestFormValuesToQuoteRequest(
      values,
      quoteItems
    );
    create(request);
  }

  function getSpinnerText(): string {
    if (meStatus === 'loading') {
      return messages.loadingCart;
    }
    if (cartInfoStatus === 'loading') {
      return messages.loadingProductInfo;
    }
    if (createRequestStatus === 'loading') {
      return messages.creatingRequest;
    }
    if (inProgress === InteractionStatus.Login) {
      return messages.redirecting;
    }

    return '';
  }

  if (
    meStatus === 'loading' ||
    // Mapping of the me.cart to cartItems takes a few miliseconds. We assume that it will be initliaized ALWAYS after a successful me fetch
    (meStatus === 'success' && initialized === false) ||
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
        {messages.needSignIn}
        <FluentUILink
          onClick={ev => instance.loginRedirect(customerLoginRequest)}
        >
          {messages.signIn}
        </FluentUILink>
      </MessageBar>
    );
  }

  return (
    <Stack>
      {createRequestStatus === 'loading' && (
        <LoadingOverlay spinnerText={getSpinnerText()} />
      )}
      <PageContainer
        metaTitle={messages.metaTitle}
        metaImage={STATIC_IMAGES.app.smallLogo}
        metaDescription={messages.metaDescription}
      >
        <Stack.Item>
          <QuoteRequestBreadcrumb />
        </Stack.Item>
        <StackItem>
          <PagesHeader title={messages.title} />
        </StackItem>
        <Stack tokens={{ childrenGap: spacing.s1 }}>
          <Stack.Item>
            {/* When there is an error submitting the quote request */}
            {createRequestStatus === 'error' && <QuoteRequestErrorMessage />}

            {/* When fetching the persisted cart from the /me endpoint returns an error */}
            {meStatus === 'error' && (
              <MessageBar messageBarType={MessageBarType.error}>
                <Text>{messages.loadingCartFailed}</Text>
              </MessageBar>
            )}

            {cartInfoStatus === 'error' && (
              <MessageBar messageBarType={MessageBarType.error}>
                <Text>{messages.loadingProductsFailed}</Text>
              </MessageBar>
            )}
            {quoteItems?.length === 0 && (
              <Stack.Item>
                <MessageBar messageBarType={MessageBarType.blocked}>
                  <Text>{messages.noItems}</Text>
                  <Link
                    to={formatLocationHref(pageRoutePaths.cart, false)}
                    href={formatLocationHref(pageRoutePaths.cart, true)}
                  >
                    <Text>{messages.noItemsLink}</Text>
                  </Link>
                </MessageBar>
              </Stack.Item>
            )}
            {!!quoteItems.length && (
              <QuoteRequestForm
                items={quoteItems}
                onSubmit={values => {
                  if (quoteItems) {
                    submitRequest(values);
                  }
                }}
              />
            )}
          </Stack.Item>
        </Stack>
      </PageContainer>
    </Stack>
  );
};

export default QuoteRequest;
