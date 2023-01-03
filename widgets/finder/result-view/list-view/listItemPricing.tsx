import React, { useCallback, useContext, useMemo, useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { useIsAuthenticated } from '@azure/msal-react';
import {
  ActionButton,
  Callout,
  DirectionalHint,
  IButtonStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { CartContext } from '@providers/cart/cartContext';
import { messageIds } from '@services/i18n';
import { Product } from '@services/portal-api';
import { AddToCartButton } from '@widgets/add-to-cart-button/addToCartButton';
import { PriceLabel } from '@widgets/pricing/price-label/priceLabel';
import { PriceBreakList } from '@widgets/pricing/pricebreak-list/priceBreakList';
import { useProductPricing } from '@widgets/pricing/useProductPrice';

interface ProductListItemPricingProps {
  product: Pick<Product, 'id' | 'number' | 'name'>;
  hidePriceBreaks?: boolean;
  hidePriceInfo?: boolean;
  hideAddToCart?: boolean;
}
interface ProductListItemPricingStyles {
  container: IStackStyles;
  actionButton: IButtonStyles;
  callout: IStackStyles;
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
  hidePriceBreaks = false,
  hideAddToCart = false,
  hidePriceInfo = false
}) => {
  const isAuthenticated = useIsAuthenticated();
  const { formatMessage, formatNumber } = useIntl();
  const { getQuantity } = useContext(CartContext);
  const [addToCartButtonQuantity, setAddToCartButtonQuantity] = useState(1);
  const [showCallout, setShowCallout] = useState(false);

  const { spacing } = useTheme();
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
            {!hidePriceInfo && (
              <Stack.Item>
                <PriceLabel
                  primaryText={unitPrice || formatMessage(messages.quotedPrice)}
                  secondaryText={
                    unitPrice !== basePrice ? basePrice : undefined
                  }
                  status={priceBreaksStatus}
                  suffix={
                    unitPrice && basePrice
                      ? formatMessage(messages.suffix)
                      : undefined
                  }
                  tooltipText={tooltipText}
                />
              </Stack.Item>
            )}
            {!!priceBreaks?.length &&
              priceBreaks.length > 1 &&
              !hidePriceBreaks && (
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
                            quantity={addToCartButtonQuantity}
                          />
                        </Stack.Item>
                      </Stack>
                    </Callout>
                  )}
                </Stack.Item>
              )}
          </Stack>
        </Stack.Item>
        {!hideAddToCart && (
          <Stack.Item styles={{ root: { width: 220 } }}>
            <Stack horizontal horizontalAlign="space-between">
              <Stack.Item>
                {product.number && (
                  <AddToCartButton
                    product={product}
                    onQuantityChanged={setAddToCartButtonQuantity}
                  />
                )}
              </Stack.Item>
            </Stack>
          </Stack.Item>
        )}
      </Stack>
    </>
  );
};
