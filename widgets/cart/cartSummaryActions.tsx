import React, { useState } from 'react';

import { useRouter } from 'next/dist/client/router';

import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import {
  ActionButton,
  Callout,
  DefaultButton,
  DirectionalHint,
  FontSizes,
  PrimaryButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';
import { useMe } from '@providers/user/userContext';
import { customerLoginRequest } from '@services/authentication/authenticationConfiguration';
import pagePaths from '@utilities/pagePaths';

import { CartSummaryActionsStyles } from './cartSummary.types';

const messages = {
  continue: 'Continue',
  request: 'Request for quotation',
  proceed: 'Proceed to checkout',
  signIn: 'Sign in to continue',
  quotedPriceWarning: 'Your cart contains items with quoted prices.',
  completeProfile: 'Complete your profile for pricing details.',
  quotedPriceWarningTooltip:
    'Items that have a quoted price will be excluded from the checkout process when you proceed to place your order. They will remain in your shopping cart for future use until you send them in for quotation.'
};
export const CartSummaryActions: React.FC = () => {
  const { itemsStatus, checkoutItems, quoteItems } = useCart();
  const calloutAnchor = React.useRef<HTMLDivElement>(null);
  const [showCallout, setShowCallout] = useState(false);
  const { spacing } = useTheme();
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const { isCheckoutEnabled, isRequestForQuoteEnabled } = useMe();
  const { push } = useRouter();

  const styles: CartSummaryActionsStyles = {
    request: {
      root: {}
    },
    primaryButton: {
      root: {
        width: '100%',
        padding: `${spacing.l1} ${spacing.m}`
      }
    },
    defaultButton: {
      root: {
        width: '100%'
      }
    },
    tooltipHost: {
      root: { display: 'flex', opacity: 0.8 }
    },
    callout: {
      root: {
        maxWidth: 300,
        padding: spacing.l1
      }
    },
    calloutAnchor: {
      root: { padding: 0, height: 'auto' },
      textContainer: {},
      label: {
        lineHeight: FontSizes.size20,
        textAlign: 'left'
      }
    }
  };

  if (itemsStatus === 'loading' || itemsStatus === 'error') {
    return (
      <Stack>
        <Stack.Item>
          <Stack styles={styles.request} tokens={{ childrenGap: spacing.s1 }}>
            <Stack.Item>
              <PrimaryButton
                text={messages.continue}
                styles={styles.primaryButton}
                disabled={true}
              />
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </Stack>
    );
  }

  //Empty
  if (
    quoteItems.length < 1 &&
    checkoutItems.length < 1 &&
    itemsStatus === 'success'
  )
    return (
      <Stack>
        <Stack.Item>
          <Stack styles={styles.request} tokens={{ childrenGap: spacing.s1 }}>
            <Stack.Item>
              <PrimaryButton
                text={messages.continue}
                styles={styles.primaryButton}
                disabled={true}
              />
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </Stack>
    );

  //Only priced items
  if (
    quoteItems.length < 1 &&
    checkoutItems.length > 0 &&
    itemsStatus === 'success'
  )
    return (
      <Stack styles={styles.request} tokens={{ childrenGap: spacing.s1 }}>
        <Stack.Item>
          abc
          <PrimaryButton
            text={messages.proceed}
            onClick={event => {
              event.preventDefault();
              push(pagePaths.checkout);
            }}
            styles={styles.primaryButton}
            disabled={checkoutItems.length < 1 || !isCheckoutEnabled}
          />
        </Stack.Item>
      </Stack>
    );

  //Only quoted items
  if (
    (quoteItems.length > 0 &&
      checkoutItems.length < 1 &&
      itemsStatus === 'success') ||
    itemsStatus === 'idle'
  )
    return (
      <Stack styles={styles.request} tokens={{ childrenGap: spacing.s1 }}>
        {isAuthenticated && (
          <Stack.Item>
            <PrimaryButton
              text={messages.request}
              onClick={event => {
                event.preventDefault();
                push(pagePaths.quoteRequest);
              }}
              disabled={!quoteItems.length || !isRequestForQuoteEnabled}
              styles={styles.primaryButton}
            />
          </Stack.Item>
        )}
        {!isAuthenticated && (
          <PrimaryButton
            text={messages.signIn}
            onClick={() => instance.loginRedirect(customerLoginRequest)}
            disabled={!quoteItems.length}
            styles={styles.primaryButton}
          />
        )}
      </Stack>
    );

  //Both quoted & priced items
  if (
    quoteItems.length > 0 &&
    checkoutItems.length > 0 &&
    itemsStatus === 'success'
  )
    return (
      <Stack>
        <Stack.Item>
          <Stack styles={styles.request} tokens={{ childrenGap: spacing.s1 }}>
            <Stack.Item>
              <PrimaryButton
                text={messages.proceed}
                onClick={event => {
                  event.preventDefault();
                  push(pagePaths.checkout);
                }}
                styles={styles.primaryButton}
                disabled={checkoutItems.length < 1 || !isCheckoutEnabled}
              />
            </Stack.Item>
            <Stack.Item>
              <DefaultButton
                text={messages.request}
                onClick={event => {
                  event.preventDefault();
                  push(pagePaths.quoteRequest);
                }}
                styles={styles.defaultButton}
                disabled={quoteItems.length < 1 || !isRequestForQuoteEnabled}
              />
            </Stack.Item>
            {quoteItems.length > 0 && (
              <Stack.Item>
                <Stack
                  horizontal
                  verticalAlign="center"
                  tokens={{ childrenGap: spacing.s2 }}
                  root={{ ref: calloutAnchor }}
                >
                  <ActionButton
                    iconProps={{ iconName: 'Warning' }}
                    styles={styles.calloutAnchor}
                    allowDisabledFocus
                    onClick={() => setShowCallout(!showCallout)}
                  >
                    {messages.quotedPriceWarning}
                  </ActionButton>
                </Stack>
                {showCallout && (
                  <Callout
                    directionalHint={DirectionalHint.leftCenter}
                    onDismiss={() => setShowCallout(false)}
                    target={calloutAnchor}
                    gapSpace={3}
                    isBeakVisible={true}
                  >
                    <Stack
                      tokens={{ childrenGap: spacing.l1 }}
                      styles={styles.callout}
                    >
                      <Stack.Item>
                        <Text>{messages.quotedPriceWarningTooltip}</Text>
                      </Stack.Item>
                    </Stack>
                  </Callout>
                )}
              </Stack.Item>
            )}
          </Stack>
        </Stack.Item>
      </Stack>
    );

  return (
    <Stack>
      <Stack.Item>
        <Stack styles={styles.request} tokens={{ childrenGap: spacing.s1 }}>
          <Stack.Item>
            <PrimaryButton
              text={messages.continue}
              styles={styles.primaryButton}
              disabled={true}
            />
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
