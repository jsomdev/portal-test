import React from 'react';

import Image from 'next/image';

import { OptionalLink } from '@components/link/optionalLink';
import { IStackStyles, Stack } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import productImageLoader from '@utilities/image-loaders/productImageLoader';
import { mediaQueryFrom } from '@widgets/media-queries';
import { ProductCardViewModel } from '@widgets/product-card-parts/productCardViewModel';

type ProductCardImageProps = Pick<ProductCardViewModel, 'url' | 'imageUrl'>;

type ProductCardImageStyles = {
  root: IStackStyles;
};

const ProductCardImage: React.FC<ProductCardImageProps> = ({
  url,
  imageUrl
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
      <OptionalLink href={url}>
        <a>
          <Image
            src={imageUrl || STATIC_IMAGES.app.noImageAvailable}
            alt={''}
            width={160}
            height={160}
            layout="intrinsic"
            objectFit="contain"
            objectPosition="center"
            loader={productImageLoader}
          />
        </a>
      </OptionalLink>
    </Stack>
  );
};

export default ProductCardImage;
