import React from 'react';

import { OptionalLink } from '@components/link/optionalLink';
import {
  FontWeights,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { CartItemProductViewModel } from '@widgets/cart-list/cartList.types';
import ProductImage from '@widgets/cart-list/productImage';

type ProductItemStyles = {
  title?: ITextStyles;
  description?: ITextStyles;
};

type CartItemProductProps = {
  product: CartItemProductViewModel;
};

export const CartItemProduct: React.FC<CartItemProductProps> = ({
  product
}) => {
  const { palette, spacing } = useTheme();

  const styles: ProductItemStyles = {
    title: {
      root: {
        fontWeight: FontWeights.semibold,
        color: palette.neutralPrimary,
        wordBreak: 'break-word',
        '&:hover': {
          color: product.id ? palette.themePrimary : undefined
        }
      }
    },
    description: {
      root: {
        '&:hover': {
          color: (!product.id && palette.neutralPrimary) || undefined
        }
      }
    }
  };
  return (
    <Stack wrap horizontal verticalAlign="center">
      <Stack.Item>
        <ProductImage
          productUrl={product.url}
          imageUrl={product.image?.url}
          imageAlt={product.title}
        />
      </Stack.Item>
      <Stack.Item>
        <OptionalLink href={product.url}>
          <a>
            <Stack
              tokens={{
                padding: `${spacing.s2} ${spacing.s1}`,
                childrenGap: `${spacing.s2} 0`
              }}
              grow
            >
              <Stack.Item>
                <Text variant="large" styles={styles.title}>
                  {product.title}
                </Text>
              </Stack.Item>
              <Stack.Item>
                <Text styles={styles.description}>{product.description}</Text>
              </Stack.Item>
            </Stack>
          </a>
        </OptionalLink>
      </Stack.Item>
    </Stack>
  );
};
