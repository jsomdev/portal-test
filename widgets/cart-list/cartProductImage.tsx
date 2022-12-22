import React from 'react';

import { ImageProps } from 'next/dist/client/image';
import Image from 'next/image';

import { NextLink } from '@components/link/nextLink';
import { IStackStyles, Stack } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import widenImageLoader from '@utilities/image-loaders/widenImageLoader';
import { mediaQueryFrom } from '@widgets/media-queries';
import { ProductCardViewModel } from '@widgets/product-card-parts/productCardViewModel';

type ProductCardImageProps = Pick<ProductCardViewModel, 'url' | 'imageUrl'> & {
  fallbackImageUrl?: ImageProps['src'];
};

type ProductCardImageStyles = {
  root: IStackStyles;
};

const CartProductImage: React.FC<ProductCardImageProps> = ({
  url,
  imageUrl,
  fallbackImageUrl
}) => {
  const largeSize = 120;
  const mediumSize = 80;
  const smallSize = 40;
  const styles: ProductCardImageStyles = {
    root: {
      root: {
        position: 'relative',
        minWidth: smallSize,
        width: smallSize,
        height: smallSize,
        ...mediaQueryFrom('largePhone', {
          width: mediumSize,
          height: mediumSize,
          minWidth: mediumSize
        }),
        ...mediaQueryFrom('tablet', {
          width: largeSize,
          height: largeSize,
          minWidth: largeSize
        })
      }
    }
  };
  return (
    <Stack styles={styles.root}>
      <NextLink href={url}>
        <a>
          <Image
            src={
              imageUrl || fallbackImageUrl || STATIC_IMAGES.app.noImageAvailable
            }
            alt={''}
            width={largeSize}
            height={largeSize}
            layout="intrinsic"
            objectFit="contain"
            objectPosition="center"
            loader={widenImageLoader}
          />
        </a>
      </NextLink>
    </Stack>
  );
};

export default CartProductImage;
