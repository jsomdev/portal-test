import React, { useMemo } from 'react';

import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import {
  DefaultButton,
  IButtonStyles,
  IModalStyles,
  IStackItemStyles,
  IconButton,
  List,
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
import { messageIds } from '@services/i18n';
import pagePaths from '@utilities/pagePaths';
import { rem } from '@utilities/rem';
import CartItemAddedCard from '@widgets/cart-item-added-dialog/cartItemAddedCard';
import { mapCartItemsToCartItemViewModels } from '@widgets/cart/cart.helper';

interface CartListConfirmationProps {
  lastAddedItems: CartItem[] | undefined;
  setLastAddedItems: (value: undefined) => void;
}

interface CartListConfirmationStyles {
  modalContent: Partial<IModalStyles>;
  modalContinueButton: IButtonStyles;
  modalCartButton: IButtonStyles;
  listWrapperStyles: IStackItemStyles;
}

const messages = defineMessages({
  productAdded: {
    id: messageIds.pages.cart.addedToCart,
    description: 'Message to display when product is added to cart',
    defaultMessage: 'Added to cart'
  },
  limitReached: {
    id: messageIds.pages.cart.limitReached,
    description:
      'Message to display when max quantity in cart of certain product is reached',
    defaultMessage: `Your cart has reached its limit for Product ''{productNumber}''. {quantityAdded} {quantityAdded, plural, one {item has} other {items have}} been added to your cart`
  },
  goToCart: {
    id: messageIds.pages.cart.goToCart,
    description: 'Label on button to go to cart',
    defaultMessage: 'Go to cart'
  },
  continueShopping: {
    id: messageIds.pages.cart.continueShopping,
    description: 'Label on button to continue shopping',
    defaultMessage: 'Continue shopping'
  }
});

const CartItemAddedDialog: React.FC<CartListConfirmationProps> = ({
  lastAddedItems,
  setLastAddedItems
}) => {
  const { formatMessage } = useIntl();
  const { push, locale } = useRouter();
  const { getQuantity } = useCart();
  const { warningMessages, filteredItems } = useMemo(() => {
    const warningMessages: string[] = [];
    const filteredItems: CartItem[] = [];
    lastAddedItems?.forEach(item => {
      if (getQuantity(item.productNumber || undefined) >= MAX_CART_QUANTITY) {
        warningMessages.push(
          formatMessage(messages.limitReached, {
            productNumber: item.productNumber,
            quantityAdded: item.quantity
          })
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
  }, [formatMessage, getQuantity, lastAddedItems]);
  const { spacing, palette, fonts } = useTheme();

  const styles: CartListConfirmationStyles = {
    modalContent: {
      main: {
        width: rem(840),
        maxWidth: '90vw',
        padding: spacing.l1,
        height: 'auto',
        maxHeight: rem(700),
        minWidth: 'auto'
      }
    },
    modalContinueButton: {
      root: {
        fontSize: fonts.small.fontSize
      }
    },
    modalCartButton: {
      labelHovered: {
        color: palette.white
      }
    },
    listWrapperStyles: { root: { overflow: 'auto', maxHeight: rem(400) } }
  };

  const items = useMemo(
    () =>
      mapCartItemsToCartItemViewModels(filteredItems, locale).map(item => ({
        ...item,
        product: {
          ...item.product,
          url: undefined //remove url from product, so it is not clickable here
        }
      })),
    [filteredItems, locale]
  );

  return (
    <>
      <Modal
        isOpen={!!lastAddedItems?.length}
        isBlocking={false}
        onDismiss={() => setLastAddedItems(undefined)}
        styles={styles.modalContent}
      >
        <Stack tokens={{ childrenGap: rem(16) }}>
          <Stack.Item>
            <Stack horizontal horizontalAlign="space-between">
              <Stack.Item>
                <Text variant="xLarge">
                  {formatMessage(messages.productAdded)}
                </Text>
              </Stack.Item>
              <Stack.Item>
                <IconButton
                  iconProps={{ iconName: 'ChromeClose' }}
                  onClick={() => setLastAddedItems(undefined)}
                />
              </Stack.Item>
            </Stack>
          </Stack.Item>
          {!!warningMessages?.length && (
            <Stack.Item>
              <Stack
                tokens={{ padding: `${spacing.s1} 0`, childrenGap: spacing.s2 }}
              >
                {warningMessages?.map(warningMessage => (
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
              <List
                items={items}
                getKey={item => item.product.number}
                onRenderCell={item => item && <CartItemAddedCard item={item} />}
              />
            </Stack.Item>
          )}
          <Stack.Item>
            <Stack horizontalAlign="space-between" horizontal wrap>
              <Stack.Item>
                <DefaultButton
                  iconProps={{
                    iconName: 'ChevronLeft',
                    styles: styles.modalContinueButton
                  }}
                  text={formatMessage(messages.continueShopping)}
                  onClick={() => setLastAddedItems(undefined)}
                />
              </Stack.Item>
              <Stack.Item>
                <PrimaryButton
                  text={formatMessage(messages.goToCart)}
                  styles={styles.modalCartButton}
                  href={pagePaths.cart}
                  onClick={ev => {
                    ev.preventDefault();
                    push(pagePaths.cart);
                  }}
                />
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </Modal>
    </>
  );
};

export default CartItemAddedDialog;
