import React from 'react';

import Link from 'next/link';

import { ProductItem } from '@components/product-items/product-item/productItem';
import { Stack, Text } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { defaultLanguage } from '@services/i18n';
import { formatDesignHref } from '@utilities/formatHref';
import { formatCartItemDisplayValue } from '@utilities/formatText';

import { CartListColumnProps } from './cartList.types';

export const CartItemsListProduct: React.FC<CartListColumnProps> = ({
  item
}) => {
  //TODO ward const { getLocationDescriptor } = useNavigate();
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
        path={
          '' /* TODO ward getLocationDescriptor(formatDesignHref(item, false), {
          persistSearchParams: 'some',
          searchParamKeys: [URLSEARCHPARAMSKEYS.search]
        })*/
        }
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
                {/* TODO ward
                      *   to={getLocationDescriptor(formatDesignHref(item, false), {
                    persistSearchParams: 'some',
                    searchParamKeys: [URLSEARCHPARAMSKEYS.search]
                  })}*/}
                <Link href={formatDesignHref(item, true)} style={styles}>
                  <a>
                    <Text {...titleProps} />
                  </a>
                </Link>
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
