import React, { useMemo } from 'react';

import { useIsAuthenticated } from '@azure/msal-react';
import {
  DefaultButton,
  FontSizes,
  IconButton,
  MessageBar,
  MessageBarType,
  Modal,
  PrimaryButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { MAX_CART_QUANTITY } from '@providers/cart/cartConstants';
import { CartItem, useCart } from '@providers/cart/cartContext';
import { useClaims } from '@services/authentication/claims';

import { CartList } from './cartList';
import {
  CartListConfirmationProps,
  CartListConfirmationStyles
} from './cartList.types';

const messages = {
  productAdded: 'Added to cart',
  limitReached: (productNumber: string, quantityAdded: number) =>
    `Your cart has reached its limit for Product '${productNumber}'. ${quantityAdded} item(s) have been added to your cart`,

  goToCart: 'Go to cart',
  continueShopping: 'Continue shopping'
};
export const CartListConfirmation: React.FC<CartListConfirmationProps> = ({
  lastAddedItems,
  setLastAddedItems,
  children
}) => {
  //TODO ward const { toPath } = useNavigate();
  const { getQuantity } = useCart();
  const isAuthenticated = useIsAuthenticated();
  const { isVerifiedCustomer: isVerified, isEmployee } = useClaims();
  const { warningMessages, filteredItems } = useMemo(() => {
    const warningMessages: string[] = [];
    const filteredItems: CartItem[] = [];
    lastAddedItems?.forEach(item => {
      if (getQuantity(item.productNumber || undefined) >= MAX_CART_QUANTITY) {
        warningMessages.push(
          messages.limitReached(item.productNumber || '', item.quantity)
        );
      }
      if (item.quantity > 0) {
        filteredItems.push(item);
      }
    });
    return {
      warningMessages,
      filteredItems
    };
  }, [getQuantity, lastAddedItems]);
  const { spacing, palette } = useTheme();

  const showPricingColumns: boolean = useMemo(() => {
    return isAuthenticated && (isVerified || isEmployee);
  }, [isAuthenticated, isEmployee, isVerified]);

  const styles: CartListConfirmationStyles = {
    modalContent: {
      main: {
        width: 840,
        maxWidth: '90vw',
        padding: spacing.l1,
        height: 'auto',
        maxHeight: 700,
        minWidth: 'auto'
      }
    },
    modalContinueButton: {
      root: {
        fontSize: FontSizes.small
      }
    },
    modalCartButton: {
      labelHovered: {
        color: palette.white
      }
    },
    listWrapperStyles: { root: { overflow: 'auto', maxHeight: 400 } }
  };

  return (
    <Modal
      isOpen={!!lastAddedItems?.length}
      isBlocking={false}
      onDismiss={() => setLastAddedItems(undefined)}
      styles={styles.modalContent}
    >
      <Stack>
        <Stack.Item>
          <Stack horizontal horizontalAlign="space-between">
            <Stack.Item>
              <Text variant="xLarge">{messages.productAdded}</Text>
            </Stack.Item>
            <Stack.Item>
              <IconButton
                iconProps={{ iconName: 'ChromeClose' }}
                onClick={() => setLastAddedItems(undefined)}
              />
            </Stack.Item>
          </Stack>
        </Stack.Item>
        {warningMessages?.length && (
          <Stack.Item>
            <Stack
              tokens={{ padding: `${spacing.s1} 0`, childrenGap: spacing.s2 }}
            >
              {warningMessages?.map((warningMessage, index) => (
                <MessageBar
                  messageBarType={MessageBarType.warning}
                  key={warningMessage}
                >
                  {warningMessage}
                </MessageBar>
              ))}
            </Stack>
          </Stack.Item>
        )}
        {filteredItems?.length && (
          <Stack.Item
            root={{ className: 'list-scroll' }}
            styles={styles.listWrapperStyles}
          >
            <CartList
              items={filteredItems}
              readOnly={true}
              showPricingColumns={showPricingColumns}
            />
          </Stack.Item>
        )}
        <Stack.Item>
          <Stack
            horizontalAlign="space-between"
            horizontal
            wrap
            tokens={{ padding: `${spacing.m} 0 0 0` }}
          >
            <Stack.Item tokens={{ padding: `${spacing.m} 0 0 0` }}>
              <DefaultButton
                iconProps={{
                  iconName: 'ChevronLeft',
                  styles: styles.modalContinueButton
                }}
                text={messages.continueShopping}
                onClick={() => setLastAddedItems(undefined)}
              />
            </Stack.Item>
            <Stack.Item tokens={{ padding: `${spacing.m} 0 0 0` }}>
              <PrimaryButton
                text={messages.goToCart}
                styles={styles.modalCartButton}
                href={
                  '' /*TODO ward formatLocationHref(pageRoutePaths.cart, true) */
                }
                onClick={e => {
                  e.preventDefault();
                  //TODO ward toPath(formatLocationHref(pageRoutePaths.cart, false), e);
                }}
              />
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </Stack>
    </Modal>
  );
};
