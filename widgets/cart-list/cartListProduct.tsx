//TODO remove this and create specific CartItem Component: 14866 https://dev.azure.com/itssco/SSCo/_workitems/edit/14866
import React from 'react';

import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { ProductItem } from '@components/product-items/product-item/productItem';
import { Stack, Text } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { defaultLanguage } from '@services/i18n';
import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { formatCartItemDisplayValue } from '@utilities/formatText';

import { CartListColumnProps } from './cartList.types';

export const CartItemsListProduct: React.FC<CartListColumnProps> = ({
  item
}) => {
  const { locale } = useRouter();
  const productFormatter = new ProductFormatter(item, locale);
  const productUrl = productFormatter.formatUrl();
  const name: string = item?.productName?.[defaultLanguage] || '';

  const styles: React.CSSProperties = {
    pointerEvents: item.productId ? 'auto' : 'none'
  };

  return (
    <Stack>
      <ProductItem
        description={name}
        product={item}
        productAttributes={item.attributes || []}
        productId={item.productId || ''}
        title={formatCartItemDisplayValue(item)}
        horizontal={true}
        imageUrl={
          item.productId ? item.image?.url : STATIC_IMAGES.cart.defaultItem
        }
        onRenderBody={(titleProps, descriptionProps) => {
          return (
            <Stack.Item styles={{ root: { height: '100%', width: '100%' } }}>
              <Stack
                verticalAlign="center"
                styles={{ root: { height: '100%', width: '100%' } }}
              >
                {productUrl ? (
                  <Link href={productUrl} style={styles}>
                    <a>
                      <Text {...titleProps} />
                    </a>
                  </Link>
                ) : (
                  <Text {...titleProps} />
                )}
                <Stack.Item>
                  <Text {...descriptionProps} />
                </Stack.Item>
              </Stack>
            </Stack.Item>
          );
        }}
        styles={{
          root: {
            root: {
              border: 'none'
            }
          }
        }}
      />
    </Stack>
  );
};
