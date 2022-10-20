import React, { useContext, useMemo, useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { useIsAuthenticated } from '@azure/msal-react';
import {
  ActionButton,
  Callout,
  DirectionalHint,
  IButtonStyles,
  ISpinButtonStyles,
  IStackStyles,
  PrimaryButton,
  SpinButton,
  Stack,
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
import { PriceLabel } from '@widgets/pricing/price-label/priceLabel';
import { PriceBreakList } from '@widgets/pricing/pricebreak-list/priceBreakList';
import { useProductPricing } from '@widgets/pricing/useProductPrice';

interface ProductListItemPricingProps {
  product: Pick<Product, 'number' | 'name'>;
  enablePriceBreakInfo?: boolean;
}
interface ProductListItemPricingStyles {
  container: IStackStyles;
  actionButton: IButtonStyles;
  callout: IStackStyles;
  spinButton: Partial<ISpinButtonStyles>;
  addToCartButton: IButtonStyles;
}

const messages = defineMessages({
  priceTooltipNotAuthenticated: {
    id: messageIds.pricing.tooltips.notAuthenticated,
    description: 'Tooltip to tell users to sign in to know prices',
    defaultMessage:
      'Please sign in into your account or contact your sales account manager to know your pricing.'
  },
  priceTooltipAuthenticatedQuoted: {
    id: messageIds.pricing.tooltips.quotedPrice,
    description: 'Tooltip to tell users no price is available',
    defaultMessage:
      'Please add this product to your cart and request a quotation to get your price.'
  },
  stockNotAvailable: {
    id: messageIds.pricing.stockInfo.stockNotAvailable,
    description: 'Text to tell users stock information is not available',
    defaultMessage: 'Stock information is not available'
  },
  quotedPrice: {
    id: messageIds.pricing.quotedPrice,
    description: 'Label for Quoted Price',
    defaultMessage: 'Quoted Price'
  },
  unitPriceSuffix: {
    id: messageIds.pricing.unitPriceSuffix,
    description: 'Suffix for the unit price',
    defaultMessage: '/ each'
  },
  bulkDiscountApplied: {
    id: messageIds.pricing.discounts.bulkApplied,
    description: 'Text to let the user know a bulk discount is applied',
    defaultMessage: 'Quantity discount applied'
  },
  bulkDiscountAvailable: {
    id: messageIds.pricing.discounts.bulkAvailable,
    description: 'Text to let the user know a bulk discount is available',
    defaultMessage: 'Quantity discount available'
  },
  suffix: {
    id: messageIds.pricing.unitPriceSuffix,
    description: 'Text to show after the unit price',
    defaultMessage: '/ each'
  },
  addToCart: {
    id: messageIds.pricing.addToCart,
    description: 'Button text to add a product to your cart',
    defaultMessage: 'Add to cart'
  }
});

// TODO: add stateful cart context
export const ProductListItemPricing: React.FC<ProductListItemPricingProps> = ({
  product,
  enablePriceBreakInfo = true
}) => {
  const isAuthenticated = useIsAuthenticated();
  const { formatMessage, formatNumber } = useIntl();
  const [quantity, setQuantity] = useState(1);
  const [showCallout, setShowCallout] = useState(false);
  const [lastItemAdded, setLastItemAdded] = useState<BaseCartItem | undefined>(
    undefined
  );
  const { spacing, fonts } = useTheme();
  const calloutAnchor = React.useRef<HTMLDivElement>(null);
  const {
    status: priceBreaksStatus,
    getUnitPrice,
    getBasePrice,
    currencyCode,
    priceBreaks
  } = useProductPricing(product.number || '');
  const tooltipText: string | undefined = useMemo(() => {
    if (!isAuthenticated) {
      return formatMessage(messages.priceTooltipNotAuthenticated);
    }
    if (isAuthenticated && !getBasePrice()) {
      return formatMessage(messages.priceTooltipAuthenticatedQuoted);
    }
    return undefined;
  }, [formatMessage, getBasePrice, isAuthenticated]);
  const { getQuantity, add } = useContext(CartContext);

  const cartQuantity: number | undefined = useMemo(() => {
    return getQuantity(product.number || '');
  }, [getQuantity, product.number]);

  const maxQuantityToAdd = useMemo(() => {
    return MAX_CART_QUANTITY - (cartQuantity || 0);
  }, [cartQuantity]);

  const basePrice: string | undefined = useMemo(() => {
    const price: number | undefined = getBasePrice();
    if (price === undefined) {
      return undefined;
    }
    return formatNumber(price, {
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol',
      style: 'currency'
    });
  }, [getBasePrice, currencyCode, formatNumber]);

  const unitPrice: string | undefined = useMemo(() => {
    const price = getUnitPrice(quantity + cartQuantity);
    if (price === undefined) {
      return undefined;
    }
    return formatNumber(price, {
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol',
      style: 'currency'
    });
  }, [cartQuantity, quantity, getUnitPrice, currencyCode, formatNumber]);

  // useEffect(() => {
  //   onUpdateQuantity && onUpdateQuantity(quantity, cartQuantity);
  // }, [cartQuantity, onUpdateQuantity, quantity]);

  function handleIncrement() {
    if (quantity + 1 > maxQuantityToAdd) {
      setQuantity(maxQuantityToAdd);
    } else {
      setQuantity(Number(quantity + 1));
    }
  }

  function handleDecrement() {
    if (quantity - 1 < MIN_CART_QUANTITY) {
      setQuantity(MIN_CART_QUANTITY);
    } else {
      setQuantity(Number(quantity - 1));
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
      setLastItemAdded(add(null, product.number || '', quantity, product.name));
      setQuantity(MIN_CART_QUANTITY);
    } else {
      console.warn(
        'Products can only be added to the cart using their product number'
      );
    }
  }

  const styles: ProductListItemPricingStyles = {
    container: {
      root: {
        height: '100%'
      }
    },
    actionButton: {
      root: { padding: 0, height: 22 }
    },
    callout: {
      root: {
        maxWidth: 300,
        padding: spacing.l1
      }
    },
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
      textContainer: {
        flexGrow: 1,
        display: 'block',
        flexShrink: 0
      }
    }
  };

  return (
    <>
      <Stack
        styles={styles.container}
        wrap
        verticalAlign="space-between"
        tokens={{ childrenGap: spacing.s1 }}
      >
        <Stack.Item>
          <Stack tokens={{ childrenGap: spacing.s1 }}>
            <Stack.Item>
              <PriceLabel
                primaryText={unitPrice || formatMessage(messages.quotedPrice)}
                secondaryText={unitPrice !== basePrice ? basePrice : undefined}
                status={priceBreaksStatus}
                suffix={
                  unitPrice && basePrice
                    ? formatMessage(messages.suffix)
                    : undefined
                }
                tooltipText={tooltipText}
              />
            </Stack.Item>
            {!!priceBreaks?.length &&
              priceBreaks.length > 1 &&
              enablePriceBreakInfo && (
                <Stack.Item root={{ ref: calloutAnchor }}>
                  <ActionButton
                    iconProps={{ iconName: 'Quantity' }}
                    styles={styles.actionButton}
                    allowDisabledFocus
                    onClick={() => setShowCallout(!showCallout)}
                  >
                    {basePrice !== unitPrice
                      ? formatMessage(messages.bulkDiscountApplied)
                      : formatMessage(messages.bulkDiscountAvailable)}
                  </ActionButton>
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
                          <PriceBreakList
                            priceBreaks={priceBreaks}
                            cartQuantity={cartQuantity}
                            quantity={quantity}
                          />
                        </Stack.Item>
                      </Stack>
                    </Callout>
                  )}
                </Stack.Item>
              )}
            {/* {enableStockInfo && (
              <Stack.Item>
                <ActionButton
                  iconProps={{ iconName: 'ProductionFloorManagement' }}
                  styles={styles.actionButton}
                  allowDisabledFocus
                  disabled={true}
                >
                  {messages.inStock}
                </ActionButton>
              </Stack.Item>
            )} */}
          </Stack>
        </Stack.Item>
        <Stack.Item styles={{ root: { width: 220 } }}>
          <Stack horizontal horizontalAlign="space-between">
            <Stack.Item>
              <Stack horizontal tokens={{ childrenGap: spacing.s2 }}>
                <Stack.Item>
                  <SpinButton
                    value={`${quantity}`}
                    styles={styles.spinButton}
                    inputProps={{
                      onChange: ev => {
                        handleValidate(
                          (ev.currentTarget as HTMLInputElement).value
                        );
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
                </Stack.Item>
                <Stack.Item>
                  <PrimaryButton
                    text={formatMessage(messages.addToCart)}
                    styles={styles.addToCartButton}
                    iconProps={{ iconName: 'ShoppingCart' }}
                    onClick={() => {
                      handleAddToCart();
                    }}
                  />
                </Stack.Item>
              </Stack>
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </Stack>
      {product && lastItemAdded && (
        <CartItemAddedDialog
          lastAddedItems={combineCartItemsInformation(
            [lastItemAdded],
            [product],
            [
              {
                productNumber: product.number || '',
                priceBreaks: priceBreaks || []
              }
            ]
          )}
          setLastAddedItems={setLastItemAdded}
        />
      )}
    </>
  );
};
