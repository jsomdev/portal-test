import React from 'react';

import { ImageProps } from 'next/dist/client/image';
import Image from 'next/image';

import { NextLink } from '@components/link/nextLink';
import { IStackStyles, Stack } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import productImageLoader from '@utilities/image-loaders/widenImageLoader';
import { mediaQueryFrom } from '@widgets/media-queries';
import { ProductCardViewModel } from '@widgets/product-card-parts/productCardViewModel';

type ProductCardImageProps = Pick<ProductCardViewModel, 'url' | 'imageUrl'> & {
  fallbackImageUrl?: ImageProps['src'];
};

type ProductCardImageStyles = {
  root: IStackStyles;
};

const ProductCardImage: React.FC<ProductCardImageProps> = ({
  url,
  imageUrl,
  fallbackImageUrl
}) => {
  const styles: ProductCardImageStyles = {
    root: {
      root: {
        position: 'relative',
        width: 120,
        height: 120,
        ...mediaQueryFrom('tablet', {
          width: 160,
          height: 160
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
            width={160}
            height={160}
            layout="intrinsic"
            objectFit="contain"
            objectPosition="center"
            loader={productImageLoader}
          />
        </a>
      </NextLink>
    </Stack>
  );
};

export default ProductCardImage;
