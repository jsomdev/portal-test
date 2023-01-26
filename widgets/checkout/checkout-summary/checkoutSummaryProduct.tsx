import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { FontWeights, Stack, Text, useTheme } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { CartItemFormatter } from '@services/i18n/formatters/cartItemFormatter';
import { TextFormatter } from '@services/i18n/formatters/entity-formatters/textFormatter';
import { getImageLoader } from '@utilities/image-loaders/getImageLoader';
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

export const CheckoutSummaryProduct: React.FC<CheckoutSummaryProductProps> = ({
  item
}) => {
  const ITEM_HEIGHT: number = 57;
  const CHARACTERS_PER_LINE = 28;
  const { palette, spacing } = useTheme();
  const { formatNumber } = useIntl();
  const { getUnitPrice, currencyCode, status } = useProductPricing(
    item.productNumber || '',
    item.priceBreaks
  );
  const { locale } = useRouter();
  const cartItemFormatter = new CartItemFormatter(item, locale);

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
        minHeight: ITEM_HEIGHT,

        position: 'relative',
        marginTop: spacing.s1,
        marginBottom: spacing.s1,
        borderRadius: 0
      }
    },
    imageContainer: {
      root: {
        alignSelf: 'center',
        width: ITEM_HEIGHT,
        height: ITEM_HEIGHT
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
  const imageSrc =
    item.productId && item?.image?.url
      ? item?.image?.url
      : STATIC_IMAGES.cart.defaultItem;

  return (
    <Stack horizontal horizontalAlign="space-between" styles={styles.root}>
      <Stack.Item>
        <Stack horizontal tokens={{ childrenGap: spacing.s1 }}>
          <Stack.Item styles={styles.imageContainer}>
            <Image
              alt={cartItemFormatter.formatDisplayValue()}
              height={ITEM_HEIGHT}
              width={ITEM_HEIGHT}
              layout="fixed"
              src={imageSrc}
              loader={getImageLoader(imageSrc)}
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
                    CHARACTERS_PER_LINE - 1,
                    '...'
                  )}
                </Text>
              </Stack.Item>
              <Stack.Item styles={styles.productName}>
                <Text>{cartItemFormatter.formatName()}</Text>
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
