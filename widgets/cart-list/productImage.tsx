import React, { CSSProperties } from 'react';

import Image from 'next/image';

import { OptionalLink } from '@components/link/optionalLink';
import { ProductImageDisclaimerTooltip } from '@components/tooltips/productImageDisclaimerTooltip';
import {
  IImageStyles,
  IStackItemStyles,
  IStackStyles,
  Stack
} from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';

type ProductImageProps = {
  productUrl?: string;
  imageAlt?: string;
  imageUrl?: string;
};

type ProductItemBaseStyles = {
  image: Partial<IImageStyles>;
  root: IStackStyles;
  imageContainer: IStackStyles;
  disclaimerWrapper: IStackItemStyles;
  link: CSSProperties;
};

const ProductImage: React.FC<ProductImageProps> = ({
  productUrl,
  imageAlt,
  imageUrl
}) => {
  const styles: ProductItemBaseStyles = {
    root: {
      root: {
        position: 'relative',
        height: 152,
        width: 152,
        overflow: 'hidden'
      }
    },
    image: {
      image: {
        cursor: (!productUrl && 'default') || 'pointer'
      }
    },
    link: {
      pointerEvents: !productUrl ? 'none' : 'auto',
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
        <OptionalLink href={productUrl}>
          <a>
            <Image
              layout={'fill'}
              objectFit={'contain'}
              alt={imageAlt}
              src={imageUrl || STATIC_IMAGES.app.noImageAvailable}
            />
          </a>
        </OptionalLink>
      </Stack>
      <Stack.Item styles={styles.disclaimerWrapper}>
        <ProductImageDisclaimerTooltip />
      </Stack.Item>
    </Stack>
  );
};

export default ProductImage;
