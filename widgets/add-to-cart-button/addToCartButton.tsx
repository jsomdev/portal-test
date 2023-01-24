import React, { useContext, useEffect, useMemo, useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  FontWeights,
  IButtonStyles,
  ISpinButtonStyles,
  PrimaryButton,
  SpinButton,
  Stack,
  mergeStyleSets,
  useTheme
} from '@fluentui/react';
import {
  MAX_CART_QUANTITY,
  MIN_CART_QUANTITY
} from '@providers/cart/cartConstants';
import { CartContext } from '@providers/cart/cartContext';
import { combineCartItemsInformation } from '@providers/cart/cartHelper';
import { BaseCartItem } from '@providers/cart/cartModels';
import { messageIds } from '@services/i18n';
import { Product } from '@services/portal-api';
import CartItemAddedDialog from '@widgets/cart-item-added-dialog/cartItemAddedDialog';
import { mediaQueryFrom } from '@widgets/media-queries';

interface AddToCartButtonProps {
  product: Product;
  onQuantityChanged: (newQuantity: number) => void;
  spinButtonStyles?: Partial<ISpinButtonStyles>;
  addButtonStyles?: Partial<IButtonStyles>;
}

interface AddToCartButtonStyles {
  spinButton: Partial<ISpinButtonStyles>;
  addToCartButton: IButtonStyles;
}

const messages = defineMessages({
  addToCart: {
    id: messageIds.pricing.addToCart,
    description: 'Button text to add a product to your cart',
    defaultMessage: 'Add to cart'
  }
});

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  onQuantityChanged,
  spinButtonStyles,
  addButtonStyles,
  product
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { spacing, fonts } = useTheme();
  const { getQuantity, add } = useContext(CartContext);
  const { formatMessage } = useIntl();

  const cartQuantity: number | undefined = useMemo(() => {
    return getQuantity(product.number || '');
  }, [getQuantity, product]);

  const maxQuantityToAdd = useMemo(() => {
    return MAX_CART_QUANTITY - (cartQuantity || 0);
  }, [cartQuantity]);

  const [lastAddedBaseCartItem, setLastAddedBaseCartItem] = useState<
    BaseCartItem | undefined
  >(undefined);

  const lastAddedCartItem = useMemo(() => {
    if (!lastAddedBaseCartItem || !product) {
      return [];
    }
    return combineCartItemsInformation(
      [lastAddedBaseCartItem],
      [product],
      [
        {
          productNumber: product.number || '',
          priceBreaks: []
        }
      ]
    );
  }, [lastAddedBaseCartItem, product]);

  function handleIncrement() {
    if (quantity + 1 > maxQuantityToAdd) {
      setQuantity(maxQuantityToAdd);
    } else {
      setQuantity(quantity + 1);
    }
  }

  function handleDecrement() {
    if (quantity - 1 < MIN_CART_QUANTITY) {
      setQuantity(MIN_CART_QUANTITY);
    } else {
      setQuantity(quantity - 1);
    }
  }

  function handleValidate(value: string) {
    if (isNaN(Number(value))) {
      return;
    }

    if (Number(value) < MIN_CART_QUANTITY) {
      setQuantity(MIN_CART_QUANTITY);
      return;
    }

    setQuantity(Number(value));
  }

  function handleAddToCart() {
    if (product.number) {
      let quantityToAdd = quantity;
      if (quantity > maxQuantityToAdd) {
        quantityToAdd = maxQuantityToAdd;
      }
      setQuantity(MIN_CART_QUANTITY);

      setLastAddedBaseCartItem(
        add(product.id || null, product.number, quantityToAdd, product.name)
      );
    } else {
      console.warn(
        'Products can only be added to the cart using their product number'
      );
    }
  }

  useEffect(() => {
    onQuantityChanged(quantity);
  }, [onQuantityChanged, quantity]);

  const styles: AddToCartButtonStyles = {
    spinButton: {
      root: {
        width: 70,
        minWidth: 70
      },

      input: {
        minWidth: 47,
        flexGrow: 0,
        fontSize: fonts.mediumPlus.fontSize
      },
      spinButtonWrapper: {
        width: 70,
        height: 40,
        minWidth: 70,
        ...mediaQueryFrom('tablet', {
          height: 32
        })
      }
    },
    addToCartButton: {
      root: {
        height: 40,
        ...mediaQueryFrom('tablet', {
          height: 32
        })
      },
      label: {
        fontWeight: FontWeights.semibold
      },
      textContainer: {
        flexGrow: 1,
        display: 'block',
        flexShrink: 0
      }
    }
  };
  return (
    <>
      {product.number && lastAddedBaseCartItem && (
        <CartItemAddedDialog
          lastAddedItems={lastAddedCartItem}
          setLastAddedItems={setLastAddedBaseCartItem}
        />
      )}
      <Stack horizontal tokens={{ childrenGap: spacing.s2 }}>
        <SpinButton
          value={`${quantity}`}
          styles={mergeStyleSets(styles.spinButton, spinButtonStyles)}
          inputProps={{
            onChange: ev => {
              handleValidate((ev.currentTarget as HTMLInputElement).value);
            }
          }}
          onIncrement={() => {
            handleIncrement();
          }}
          onDecrement={() => {
            handleDecrement();
          }}
          onValidate={(value: string) => {
            handleValidate(value);
          }}
        />
        <PrimaryButton
          text={formatMessage(messages.addToCart)}
          styles={mergeStyleSets(styles.addToCartButton, addButtonStyles)}
          iconProps={{ iconName: 'ShoppingCart' }}
          onClick={() => {
            handleAddToCart();
          }}
        />
      </Stack>
    </>
  );
};
