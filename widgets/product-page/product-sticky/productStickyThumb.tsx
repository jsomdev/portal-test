import React, { useCallback, useState } from 'react';

import { StickyThumbContainer } from '@components/sticky/stickyThumbContainer';
import {
  FontWeights,
  IButtonStyles,
  ISpinButtonStyles,
  useTheme
} from '@fluentui/react';
import { useCart } from '@providers/cart/cartContext';
import { combineCartItemsInformation } from '@providers/cart/cartHelper';
import { BaseCartItem } from '@providers/cart/cartModels';
import { Product } from '@services/portal-api';
import { AddToCartButton } from '@widgets/add-to-cart-button/addToCartButton';
import CartItemAddedDialog from '@widgets/cart-item-added-dialog/cartItemAddedDialog';
import {
  mediaQueryFrom,
  useBetweenMobileAndTablet
} from '@widgets/media-queries';

interface ProductStickyThumbStyles {
  addToCartButton: Partial<IButtonStyles>;
  spinButton: Partial<ISpinButtonStyles>;
}

export interface ProductStickyThumbProps {
  product: Product | undefined;
}

/**
 * Displays a sticky thumb with the add to cart button on mobile
 */
export const ProductStickyThumb: React.FC<ProductStickyThumbProps> = ({
  product
}) => {
  const [lastAddedBaseCartItem, setLastAddedBaseCartItem] = useState<
    BaseCartItem | undefined
  >(undefined);
  const { add } = useCart();
  const { fonts } = useTheme();
  const isMobileTablet = useBetweenMobileAndTablet();
  const handleAddToCart = useCallback(
    (quantityToAdd: number) => {
      if (product?.number) {
        setLastAddedBaseCartItem(
          add(product.id || null, product.number, quantityToAdd, product.name)
        );
      }
    },
    [add, product]
  );
  const combineLastAddedBaseCartItemToCartItem = useCallback(() => {
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

  if (!product || !product.number || !isMobileTablet) {
    return null;
  }

  const styles: ProductStickyThumbStyles = {
    spinButton: {
      spinButtonWrapper: {
        height: 48,
        ...mediaQueryFrom('tablet', {
          height: 42
        })
      }
    },
    addToCartButton: {
      root: {
        height: 48,
        width: '100%',
        ...mediaQueryFrom('tablet', {
          height: 42
        })
      },
      label: {
        ...fonts.large,
        fontWeight: FontWeights.regular
      },

      textContainer: {
        flexGrow: 1,
        display: 'block',
        flexShrink: 0
      }
    }
  };

  return (
    <StickyThumbContainer>
      <AddToCartButton
        spinButtonStyles={styles.spinButton}
        addButtonStyles={styles.addToCartButton}
        productNumber={product.number}
        onQuantityChanged={() => null}
        onAddToCartClicked={handleAddToCart}
      />
      {product && lastAddedBaseCartItem && (
        <CartItemAddedDialog
          lastAddedItems={combineLastAddedBaseCartItemToCartItem()}
          setLastAddedItems={setLastAddedBaseCartItem}
        />
      )}
    </StickyThumbContainer>
  );
};
