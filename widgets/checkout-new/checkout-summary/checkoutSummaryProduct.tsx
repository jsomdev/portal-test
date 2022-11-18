import React from 'react';

import Image from 'next/image';
import { useIntl } from 'react-intl';

import { FontWeights, Stack, Text, useTheme } from '@fluentui/react';
import { CartItem } from '@providers/cart/cartContext';
import { BaseCartItem } from '@providers/cart/cartModels';
import { STATIC_IMAGES } from '@public/media/images';
import { defaultLanguage } from '@services/i18n';
import { TextFormatter } from '@services/i18n/formatters/entity-formatters/textFormatter';
import { OrderLine } from '@services/portal-api';
import { PricePrimaryText } from '@widgets/pricing/price-label/pricePrimaryText';
import { useProductPricing } from '@widgets/pricing/useProductPrice';

import {
  CheckoutSummaryProductProps,
  CheckoutSummaryProductStyles
} from './checkoutSummary.types';

const messages = {
  quantity: 'Quantity',
  quotedPrice: 'Quoted Price'
};

const formatCartItemName = (cartItem: CartItem): string => {
  if (cartItem.name?.[defaultLanguage]) {
    //TODO ward i18n
    return cartItem.name[defaultLanguage]; //TODO ward i18n
  }
  if (cartItem.productName?.[defaultLanguage]) {
    //TODO ward i18n
    return cartItem.productName[defaultLanguage]; //TODO ward i18n
  }
  return '';
};

const formatCartItemDisplayValue = (
  item: BaseCartItem | OrderLine | undefined
): string => {
  return item?.productNumber || item?.productName?.[defaultLanguage] || ''; //TODO ward i18n
};

export const CheckoutSummaryProduct: React.FC<CheckoutSummaryProductProps> = ({
  item
}) => {
  const ITEMHEIGHT: number = 57;
  const CHARACTERSPERLINE = 28;
  const { palette, spacing } = useTheme();
  const { formatNumber } = useIntl();
  const { getUnitPrice, currencyCode, status } = useProductPricing(
    item.productNumber || '',
    item.priceBreaks
  );

  const unitPrice = React.useMemo(() => {
    if (!item) {
      return undefined;
    }
    const price = (item && getUnitPrice(item?.quantity)) || undefined;
    if (!price) {
      return undefined;
    }
    return price * item.quantity;
  }, [getUnitPrice, item]);

  const styles: CheckoutSummaryProductStyles = {
    root: {
      root: {
        backgroundColor: palette.white,
        minHeight: ITEMHEIGHT,
        overflowX: 'hidden',
        position: 'relative',
        marginTop: spacing.s1,
        marginBottom: spacing.s1,
        borderRadius: 0
      }
    },
    imageContainer: {
      root: {
        alignSelf: 'center',
        width: ITEMHEIGHT,
        height: ITEMHEIGHT
      }
    },
    title: {
      root: {
        fontWeight: FontWeights.semibold,
        color: palette.neutralPrimary
      }
    },
    productName: { root: { paddingRight: 5 } },
    pricingContainer: {
      root: {
        textAlign: 'right'
      }
    }
  };
  return (
    <Stack horizontal horizontalAlign="space-between" styles={styles.root}>
      <Stack.Item>
        <Stack horizontal tokens={{ childrenGap: spacing.s1 }}>
          <Stack.Item styles={styles.imageContainer}>
            <Image
              alt={formatCartItemDisplayValue(item)}
              height={ITEMHEIGHT}
              width={ITEMHEIGHT}
              objectFit="contain"
              objectPosition="center"
              src={
                item.productId && item?.image?.url
                  ? item?.image?.url
                  : STATIC_IMAGES.cart.defaultItem
              }
            />
          </Stack.Item>
          <Stack.Item>
            <Stack
              tokens={{
                childrenGap: spacing.s2
              }}
              verticalFill={true}
            >
              <Stack.Item>
                <Text
                  title={item.productNumber || ''}
                  variant="mediumPlus"
                  styles={styles.title}
                >
                  {new TextFormatter().formatText(
                    item.productNumber || '',
                    CHARACTERSPERLINE - 1,
                    '...'
                  )}
                </Text>
              </Stack.Item>
              <Stack.Item styles={styles.productName}>
                <Text>{formatCartItemName(item)}</Text>
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <Stack
          grow
          horizontalAlign="end"
          verticalAlign="space-between"
          verticalFill={true}
          styles={styles.pricingContainer}
        >
          <Stack.Item>
            <Text variant="mediumPlus" styles={styles.title}>{`x ${
              item && item.quantity
            }`}</Text>
          </Stack.Item>
          <PricePrimaryText
            variant="medium"
            text={`${
              (unitPrice &&
                formatNumber(unitPrice, {
                  currency: currencyCode,
                  currencyDisplay: 'narrowSymbol',
                  style: 'currency'
                })) ||
              (status === 'loading' ? '' : messages.quotedPrice)
            }`}
          />
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
