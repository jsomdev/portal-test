import React, { useContext, useMemo, useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { useIsAuthenticated } from '@azure/msal-react';
import { FontWeights, Stack, useTheme } from '@fluentui/react';
import { CartContext } from '@providers/cart/cartContext';
import { combineCartItemsInformation } from '@providers/cart/cartHelper';
import { BaseCartItem } from '@providers/cart/cartModels';
import { messageIds } from '@services/i18n';
import { Product } from '@services/portal-api';
import { rem } from '@utilities/rem';
import { AddToCartButton } from '@widgets/add-to-cart-button/addToCartButton';
import CartItemAddedDialog from '@widgets/cart-item-added-dialog/cartItemAddedDialog';
import { mediaQueryFrom } from '@widgets/media-queries';
import { PriceLabel } from '@widgets/pricing/price-label/priceLabel';
import { PriceBreaksSummary } from '@widgets/pricing/priceBreakSummary';
import { useProductPricing } from '@widgets/pricing/useProductPrice';

interface ProductPagePricingProps {
  product: Pick<Product, 'number' | 'id' | 'name'>;
  enablePriceBreakInfo?: boolean;
  inSticky?: boolean;
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
export const ProductPagePricing: React.FC<ProductPagePricingProps> = ({
  product,
  inSticky
}) => {
  const isAuthenticated = useIsAuthenticated();
  const { spacing, fonts } = useTheme();
  const { formatMessage, formatNumber } = useIntl();
  const {
    status: priceBreaksStatus,
    getUnitPrice,
    getBasePrice,
    currencyCode,
    priceBreaks
  } = useProductPricing(product.number || '');
  const [addToCartButtonQuantity, setAddToCartButtonQuantity] = useState(1);
  const [lastItemAdded, setLastItemAdded] = useState<BaseCartItem | undefined>(
    undefined
  );
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
    const price = getUnitPrice(addToCartButtonQuantity + cartQuantity);
    if (price === undefined) {
      return undefined;
    }
    return formatNumber(price, {
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol',
      style: 'currency'
    });
  }, [
    cartQuantity,
    addToCartButtonQuantity,
    getUnitPrice,
    currencyCode,
    formatNumber
  ]);

  if (inSticky) {
    return (
      <Stack
        horizontal
        tokens={{ childrenGap: spacing.s1 }}
        verticalAlign="center"
      >
        <PriceLabel
          primaryText={unitPrice || formatMessage(messages.quotedPrice)}
          secondaryText={unitPrice !== basePrice ? basePrice : undefined}
          status={priceBreaksStatus}
          suffix={
            unitPrice && basePrice ? formatMessage(messages.suffix) : undefined
          }
          tooltipText={tooltipText}
        />
        {product.number && (
          <AddToCartButton
            productNumber={product.number}
            onQuantityChanged={setAddToCartButtonQuantity}
            onAddToCartClicked={quantityToAdd =>
              product.number
                ? setLastItemAdded(
                    add(
                      product.id || null,
                      product.number,
                      quantityToAdd,
                      product.name
                    )
                  )
                : null
            }
          />
        )}
      </Stack>
    );
  }

  return (
    <>
      <Stack tokens={{ childrenGap: spacing.s1 }}>
        <Stack.Item>
          <Stack tokens={{ childrenGap: spacing.s1 }}>
            <Stack.Item>
              <PriceLabel
                primaryText={unitPrice || formatMessage(messages.quotedPrice)}
                secondaryText={unitPrice !== basePrice ? basePrice : undefined}
                status={priceBreaksStatus}
                size={'large'}
                suffix={
                  unitPrice && basePrice
                    ? formatMessage(messages.suffix)
                    : undefined
                }
                tooltipText={tooltipText}
              />
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack
          horizontal
          horizontalAlign="space-between"
          tokens={{ maxWidth: rem(220) }}
        >
          <Stack.Item>
            {product.number && (
              <AddToCartButton
                spinButtonStyles={{
                  spinButtonWrapper: {
                    height: 48,
                    ...mediaQueryFrom('tablet', {
                      height: 42
                    })
                  }
                }}
                addButtonStyles={{
                  root: {
                    height: 48,
                    minWidth: 240,
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
                }}
                productNumber={product.number}
                onQuantityChanged={setAddToCartButtonQuantity}
                onAddToCartClicked={quantityToAdd =>
                  product.number
                    ? setLastItemAdded(
                        add(
                          product.id || null,
                          product.number,
                          quantityToAdd,
                          product.name
                        )
                      )
                    : null
                }
              />
            )}
          </Stack.Item>
        </Stack>
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
      <PriceBreaksSummary
        priceBreaks={priceBreaks}
        quantity={cartQuantity + addToCartButtonQuantity}
      />
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
