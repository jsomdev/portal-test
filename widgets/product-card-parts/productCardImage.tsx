import React from 'react';

import { ImageProps } from 'next/dist/client/image';
import Image from 'next/image';

import { NextLink } from '@components/link/nextLink';
import { IStackStyles, Stack } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { getImageLoader } from '@utilities/image-loaders/getImageLoader';
import { mediaQueryFrom } from '@widgets/media-queries';
import { ProductCardViewModel } from '@widgets/product-card-parts/productCardViewModel';

type ProductCardImageProps = Pick<ProductCardViewModel, 'url' | 'imageUrl'> & {
  fallbackImageUrl?: ImageProps['src'];
  size?: ProductCardImageSize;
};

type ProductCardImageStyles = {
  root: IStackStyles;
};

type ProductCardImageSize = 'small' | 'default';

function getWidth(size: ProductCardImageSize): number {
  switch (size) {
    case 'small':
      return 60;
    default:
      return 160;
  }
}

const ProductCardImage: React.FC<ProductCardImageProps> = ({
  url,
  imageUrl,
  size = 'default',
  fallbackImageUrl
}) => {
  const styles: ProductCardImageStyles = {
    root: {
      root: {
        position: 'relative',
        width: getWidth(size) * 0.75,
        height: getWidth(size) * 0.75,
        ...mediaQueryFrom('tablet', {
          width: getWidth(size),
          height: getWidth(size)
        })
      }
    }
  };

  const src =
    imageUrl || fallbackImageUrl || STATIC_IMAGES.app.noImageAvailable;
  return (
    <Stack styles={styles.root}>
      <NextLink href={url}>
        <a>
          <Image
            src={src}
            alt={''}
            width={getWidth(size)}
            height={getWidth(size)}
            layout="intrinsic"
            objectFit="contain"
            objectPosition="center"
            loader={getImageLoader(src)}
          />
        </a>
      </NextLink>
    </Stack>
  );
};

export default ProductCardImage;
