import React, { useMemo } from 'react';

import {
  List,
  Shimmer,
  ShimmerElementType,
  ShimmerElementsGroup,
  Stack,
  useTheme
} from '@fluentui/react';
import { CartItem, useCart } from '@providers/cart/cartContext';
import { sortCartItemsByProductNumber } from '@widgets/cart-list/cartList.helper';

import { CheckoutSummaryProductListStyles } from './checkoutSummary.types';
import { CheckoutSummaryProduct } from './checkoutSummaryProduct';

export const CheckoutSummaryProductsList: React.FC<{ items: CartItem[] }> = ({
  items
}) => {
  const { semanticColors, spacing } = useTheme();
  const { itemsStatus } = useCart();
  const sortedItems = useMemo(
    () => items.sort(sortCartItemsByProductNumber),
    [items]
  );
  const styles: CheckoutSummaryProductListStyles = {
    listItem: {
      root: {
        selectors: {
          '.ms-List-page > div + div, .ms-List-page + .ms-List-page > div': {
            borderTop: `1px solid ${semanticColors.variantBorder}`
          }
        }
      }
    },
    shimmer: {
      root: {
        margin: `${spacing.l1} 0`
      }
    },
    list: {
      root: {
        maxHeight: 300,
        overflow: 'auto',
        paddingRight: '8px'
      }
    }
  };

  return (
    <Stack
      grow
      className="list-scroll"
      styles={items.length > 3 ? styles.list : undefined}
    >
      <Stack.Item styles={styles.listItem}>
        <Stack>
          {itemsStatus === 'loading' && sortedItems && (
            <List
              items={sortedItems}
              onRenderCell={item => {
                return item ? (
                  <Shimmer
                    styles={styles.shimmer}
                    customElementsGroup={
                      <ShimmerElementsGroup
                        width={'100%'}
                        shimmerElements={[
                          {
                            type: ShimmerElementType.line,
                            height: 46,
                            width: '100%'
                          }
                        ]}
                      />
                    }
                    width="100%"
                  />
                ) : null;
              }}
            />
          )}
          <List
            items={sortedItems}
            onRenderCell={item => {
              return item ? <CheckoutSummaryProduct item={item} /> : null;
            }}
          />
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
