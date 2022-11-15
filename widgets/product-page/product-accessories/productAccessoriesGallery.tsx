import { CSSProperties } from 'react';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IStackItemStyles, Stack, useTheme } from '@fluentui/react';
import { rem } from '@utilities/rem';
import ProductCard from '@widgets/product-card-parts/productCard';
import ProductCardImage from '@widgets/product-card-parts/productCardImage';
import ProductCardTitleLink from '@widgets/product-card-parts/productCardTitleLink';

import { ProductAccessoryGalleryItem } from './productAccessories.types';

interface ProductAccessoriesGallerySwiperProps {
  items: ProductAccessoryGalleryItem[];
}
interface ProductAccessoriesGallerySwiperStyles {
  swiper: CSSProperties;
  previousButtonContainer: CSSProperties;
  nextButtonContainer: CSSProperties;
}

const NAVIGATION_SPACING: string = rem(32);
const NAVIGATION_BUTTON_MARGIN: string = `-${rem(20)}`;

export const ProductAccessoriesGallerySwiper: React.FC<
  ProductAccessoriesGallerySwiperProps
> = ({ items }) => {
  const { palette } = useTheme();
  const styles: ProductAccessoriesGallerySwiperStyles = {
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
              <ProductAccessoryGallerySlide {...item} />
            </SwiperSlide>
          );
        })}
        <div style={styles.nextButtonContainer} />
      </Swiper>

      <style>
        {`
          .product-accessories-gallery-swiper {
            height: 280px;
            background: ${palette.white};
            padding-right: ${NAVIGATION_SPACING};
            padding-left: ${NAVIGATION_SPACING};
          }
          .swiper-button-next:after {
              margin-right: ${NAVIGATION_BUTTON_MARGIN};
          }
          .swiper-button-prev:after {
              margin-left: ${NAVIGATION_BUTTON_MARGIN};
          }
          .swiper-slide {
            width: 186px;
          }`}
      </style>
    </>
  );
};

type ProductAccessoryGallerySlideProps = ProductAccessoryGalleryItem;

interface ProductAccessoryGallerySlideStyles {
  root: IStackItemStyles;
}
export const ProductAccessoryGallerySlide: React.FC<
  ProductAccessoryGallerySlideProps
> = ({ imageUrl, name, number, url }) => {
  const { spacing } = useTheme();
  const styles: ProductAccessoryGallerySlideStyles = {
    root: {
      root: {
        height: '100%',
        width: '100%'
      }
    }
  };
  return (
    <Stack.Item styles={styles.root}>
      <ProductCard
        horizontal={false}
        horizontalAlign="center"
        verticalAlign="center"
      >
        <Stack.Item>
          <ProductCardImage url={url} imageUrl={imageUrl} />
        </Stack.Item>
        <Stack tokens={{ padding: `${spacing.s1} 0`, maxWidth: '100%' }}>
          <ProductCardTitleLink number={number} url={url} name={name} />
        </Stack>
      </ProductCard>
    </Stack.Item>
  );
};
