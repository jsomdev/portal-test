import { CSSProperties } from 'react';

import Image from 'next/image';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  FontWeights,
  IImageStyles,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';

import { ProductDownloadsGalleryItem } from './productDownloads.types';

interface ProductDownloadsGallerySwiperProps {
  items: ProductDownloadsGalleryItem[];
}
interface ProductDownloadsGallerySwiperStyles {
  swiper: CSSProperties;
  previousButtonBackground: CSSProperties;
  nextButtonBackground: CSSProperties;
}

const NAVIGATION_SPACING: string = rem(32);
const NAVIGATION_BUTTON_MARGIN: string = `-${rem(20)}`;

export const ProductDownloadsGallerySwiper: React.FC<
  ProductDownloadsGallerySwiperProps
> = ({ items }) => {
  const { palette } = useTheme();
  const styles: ProductDownloadsGallerySwiperStyles = {
    nextButtonBackground: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: NAVIGATION_SPACING,
      zIndex: 1,
      background: 'white'
    },
    previousButtonBackground: {
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
        className="product-downloads-gallery-swiper"
      >
        <div style={styles.previousButtonBackground} />
        {items.map(item => {
          return (
            <SwiperSlide key={item.resource.id}>
              <ProductDownloadGallerySlide {...item} />
            </SwiperSlide>
          );
        })}
        <div style={styles.nextButtonBackground} />
      </Swiper>

      <style>
        {`
          .product-downloads-gallery-swiper {
            height: 240px;
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
            width: ${rem(168)};
          }
        `}
      </style>
    </>
  );
};

type ProductDownloadGallerySlideProps = ProductDownloadsGalleryItem;

interface ProductDownloadGallerySlideStyles {
  imageContainer: Partial<IImageStyles>;
  root: IStackStyles;
  link: CSSProperties;
  title: ITextStyles;
  textContainer: IStackStyles;
}
export const ProductDownloadGallerySlide: React.FC<
  ProductDownloadGallerySlideProps
> = ({ src, imageSrc: imageSrc, text, title, children }) => {
  const { spacing, palette, semanticColors, effects } = useTheme();

  const styles: ProductDownloadGallerySlideStyles = {
    link: { width: '100%', height: '100%' },
    root: {
      root: {
        backgroundColor: palette.white,
        position: 'relative',
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner4
      }
    },
    title: {
      root: {
        fontWeight: FontWeights.semibold,
        color: palette.neutralPrimary,
        cursor: 'pointer',
        wordBreak: 'break-word',
        selectors: {
          '&:hover': {
            color: palette.themeDarker
          }
        },
        marginTop: spacing.s1,
        display: 'flex'
      }
    },
    textContainer: {
      root: { flex: 1 }
    },
    imageContainer: {
      root: {
        position: 'relative',
        height: 152,
        width: '100%',
        overflow: 'hidden',
        backgroundColor: palette.white,
        borderRadius: effects.roundedCorner4,
        flex: 1,
        marginTop: spacing.s1,
        cursor: 'pointer'
      }
    }
  };

  return (
    <a href={src} target="_blank" rel="noreferrer" style={styles.link}>
      <Stack wrap styles={styles.root}>
        <Stack horizontalAlign="center" styles={styles.imageContainer}>
          <Image
            alt={text || ''}
            unoptimized={true}
            width={144}
            height={144}
            src={imageSrc}
          />
        </Stack>

        <Stack
          tokens={{
            padding: `${spacing.s2} ${spacing.s1}`,
            childrenGap: `${spacing.s2} 0`
          }}
          grow
          styles={styles.textContainer}
        >
          <Text variant="large" styles={styles.title}>
            {title}
          </Text>
          <Text>{text}</Text>
        </Stack>
        {children}
      </Stack>
    </a>
  );
};
