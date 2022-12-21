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
  const largeImageSize = 100;
  const styles: ProductCardImageStyles = {
    root: {
      root: {
        position: 'relative',
        width: 46,
        height: 46,
        ...mediaQueryFrom('tablet', {
          width: largeImageSize,
          height: largeImageSize
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
            width={largeImageSize}
            height={largeImageSize}
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
