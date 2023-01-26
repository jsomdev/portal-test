import { CSSProperties } from 'react';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IStackItemStyles, Stack, useTheme } from '@fluentui/react';
import { rem } from '@utilities/rem';
import { ModelCard } from '@widgets/model-card-parts/modelCard';
import { ModelCardImage } from '@widgets/model-card-parts/modelCardImage';
import { ModelCardTitleLink } from '@widgets/model-card-parts/modelCardTitleLink';

import { ModelGalleryItem } from './alternativeModelsHelper';

interface ModelsGallerySwiperProps {
  items: ModelGalleryItem[];
}
interface ModelsGallerySwiperStyles {
  swiper: CSSProperties;
  previousButtonContainer: CSSProperties;
  nextButtonContainer: CSSProperties;
}

const NAVIGATION_SPACING: string = rem(32);
const NAVIGATION_BUTTON_MARGIN: string = `-${rem(20)}`;

export const ModelsGallerySwiper: React.FC<ModelsGallerySwiperProps> = ({
  items
}) => {
  const { palette } = useTheme();
  const styles: ModelsGallerySwiperStyles = {
    nextButtonContainer: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: NAVIGATION_SPACING,
      zIndex: 1,
      background: 'white'
    },
    previousButtonContainer: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: NAVIGATION_SPACING,
      zIndex: 1,
      background: 'white'
    },
    swiper: {
      '--swiper-navigation-color': palette.themeDark,
      '--swiper-navigation-size': rem(24)
    } as CSSProperties
  };
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={24}
        style={styles.swiper}
        slidesPerView={'auto'}
        className="product-accessories-gallery-swiper"
      >
        <div style={styles.previousButtonContainer} />
        {items.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <ModelGallerySlide {...item} />
            </SwiperSlide>
          );
        })}
        <div style={styles.nextButtonContainer} />
      </Swiper>

      <style>
        {`
          .product-accessories-gallery-swiper {
            height: 320px;
            background: ${palette.white};
            padding-right: ${NAVIGATION_SPACING};
            padding-left: ${NAVIGATION_SPACING};
          }
          .product-accessories-gallery-swiper .swiper-button-next:after {
            margin-right: ${NAVIGATION_BUTTON_MARGIN};
          }
          .product-accessories-gallery-swiper .swiper-button-prev:after {
            margin-left: ${NAVIGATION_BUTTON_MARGIN};
          }
          .product-accessories-gallery-swiper .swiper-slide {
            width: 260px;
          }
        `}
      </style>
    </>
  );
};

type ModelGallerySlideProps = ModelGalleryItem;

interface ModelGallerySlideStyles {
  root: IStackItemStyles;
}
export const ModelGallerySlide: React.FC<ModelGallerySlideProps> = ({
  imageUrl,
  name,
  number,
  url
}) => {
  const { spacing } = useTheme();
  const styles: ModelGallerySlideStyles = {
    root: {
      root: {
        height: '100%',
        width: '100%'
      }
    }
  };
  return (
    <Stack.Item styles={styles.root}>
      <ModelCard>
        <Stack>
          <Stack.Item
            styles={{
              root: {
                flex: 1,
                margin: 'auto'
              }
            }}
          >
            <ModelCardImage url={url} imageUrl={imageUrl} />
          </Stack.Item>
          <Stack
            styles={{
              root: {
                minHeight: rem(100)
              }
            }}
            tokens={{ padding: `${spacing.s1} 0`, maxWidth: '100%' }}
          >
            <ModelCardTitleLink number={number} url={url} name={name} />
          </Stack>
        </Stack>
      </ModelCard>
    </Stack.Item>
  );
};
