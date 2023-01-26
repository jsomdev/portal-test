import { CSSProperties } from 'react';
import React from 'react';

import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IStackItemStyles, Stack, useTheme } from '@fluentui/react';
import { rem } from '@utilities/rem';
import ProductCard from '@widgets/product-card-parts/productCard';
import ProductCardImage from '@widgets/product-card-parts/productCardImage';
import ProductCardTitleLink from '@widgets/product-card-parts/productCardTitleLink';

import { RecentlyViewedProductGalleryItem } from './recentlyViewedGallery.types';

interface RecentlyViewedProductsGallerySwiperProps {
  items: RecentlyViewedProductGalleryItem[];
}
interface RecentlyViewedProductsGallerySwiperStyles {
  swiper: CSSProperties;
  previousButtonContainer: CSSProperties;
  nextButtonContainer: CSSProperties;
}

const NAVIGATION_SPACING: string = rem(32);
const NAVIGATION_BUTTON_MARGIN: string = `-${rem(20)}`;

export const RecentlyViewedProductsGallerySwiper: React.FC<
  RecentlyViewedProductsGallerySwiperProps
> = ({ items }) => {
  const { palette } = useTheme();
  const styles: RecentlyViewedProductsGallerySwiperStyles = {
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
        className="recently-viewed-products-gallery-swiper"
      >
        <div style={styles.previousButtonContainer} />
        {items.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <RecentlyViewedProductGallerySlide {...item} />
            </SwiperSlide>
          );
        })}
        <div style={styles.nextButtonContainer} />
      </Swiper>

      <style>
        {`
          .recently-viewed-products-gallery-swiper {
            height: 280px;
            background: ${palette.white};
            padding-right: ${NAVIGATION_SPACING};
            padding-left: ${NAVIGATION_SPACING};
          }
          .recently-viewed-products-gallery-swiper .swiper-button-next:after {
            margin-right: ${NAVIGATION_BUTTON_MARGIN};
          }
          .recently-viewed-products-gallery-swiper .swiper-button-prev:after {
            margin-left: ${NAVIGATION_BUTTON_MARGIN};
          }
          .recently-viewed-products-gallery-swiper .swiper-slide {
            width: 214px;
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
};

type RecentlyViewedProductGallerySlideProps = RecentlyViewedProductGalleryItem;

interface RecentlyViewedProductGallerySlideStyles {
  root: IStackItemStyles;
}
export const RecentlyViewedProductGallerySlide: React.FC<
  RecentlyViewedProductGallerySlideProps
> = ({ imageUrl, name, number, url }) => {
  const { spacing } = useTheme();
  const styles: RecentlyViewedProductGallerySlideStyles = {
    root: {
      root: {
        width: '100%',
        height: '100%',
        '& > div': {
          height: '100%'
        }
      }
    }
  };
  return (
    <Stack.Item styles={styles.root}>
      <ProductCard
        horizontal={false}
        horizontalAlign="center"
        verticalAlign="start"
        wrap={false}
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
