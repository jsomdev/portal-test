//TODO remove this and create specific CartItem Component: 14866 https://dev.azure.com/itssco/SSCo/_workitems/edit/14866
import React, { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ProductImageDisclaimerTooltip } from '@components/tooltips/productImageDisclaimerTooltip';
import { Stack } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';

import {
  ProductItemBaseProps,
  ProductItemBaseStyles
} from './productItemBase.types';

export const ProductItemBase: FC<ProductItemBaseProps> = ({
  productId,
  width = 152,
  height = 152,
  imageUrl,
  fallbackImageUrl = STATIC_IMAGES.app.noImageAvailable,
  imageAlt,
  onRenderBottomLeft = null,
  onRenderTopLeft = null
}) => {
  const styles: ProductItemBaseStyles = {
    root: {
      root: {
        position: 'relative',
        height: height,
        width: width,
        overflow: 'hidden'
      }
    },
    image: {
      image: {
        cursor: (!productId && 'default') || 'pointer'
      }
    },
    link: {
      pointerEvents: !productId ? 'none' : 'auto',
      height: '100%',
      width: '100%'
    },
    imageContainer: {
      root: { position: 'absolute', width: '100%', height: '100%' }
    },
    disclaimerWrapper: { root: { position: 'absolute', bottom: 8, left: 8 } }
  };
  return (
    <Stack horizontal horizontalAlign="center" styles={styles.root}>
      <Stack horizontalAlign="center" styles={styles.imageContainer}>
        <Link href={'/TODO'}>
          <a>
            <Image
              layout={'fill'}
              objectFit={'contain'}
              alt={imageAlt}
              src={imageUrl || fallbackImageUrl}
            />
          </a>
        </Link>
      </Stack>
      {onRenderTopLeft && onRenderTopLeft()}
      {onRenderBottomLeft && onRenderBottomLeft()}
      <Stack.Item styles={styles.disclaimerWrapper}>
        <ProductImageDisclaimerTooltip />
      </Stack.Item>
    </Stack>
  );
};
