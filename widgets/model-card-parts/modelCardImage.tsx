import React from 'react';

import { ImageProps } from 'next/dist/client/image';
import Image from 'next/image';

import { NextLink } from '@components/link/nextLink';
import { IStackStyles, Stack } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { getImageLoader } from '@utilities/image-loaders/getImageLoader';
import { mediaQueryFrom } from '@widgets/media-queries';
import { ModelCardViewModel } from '@widgets/model-card-parts/modelCardViewModel';

type ModelCardImageProps = Pick<ModelCardViewModel, 'url' | 'imageUrl'> & {
  fallbackImageUrl?: ImageProps['src'];
};

type ModelCardImageStyles = {
  root: IStackStyles;
};

export const ModelCardImage: React.FC<ModelCardImageProps> = ({
  url,
  imageUrl,
  fallbackImageUrl
}) => {
  const styles: ModelCardImageStyles = {
    root: {
      root: {
        position: 'relative',
        margin: 'auto',
        width: 80,
        height: 80,
        ...mediaQueryFrom('tablet', {
          width: 120,
          height: 120
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
            width={120}
            height={120}
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
