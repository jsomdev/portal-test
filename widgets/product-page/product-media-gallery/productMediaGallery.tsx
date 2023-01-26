/* eslint-disable jsx-a11y/media-has-caption */
import React, { CSSProperties, useMemo, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { Navigation, Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AppErrorBoundary } from '@components/errors/appErrorBoundary';
import { ProductImageDisclaimerTooltip } from '@components/tooltips/productImageDisclaimerTooltip';
import {
  IButtonStyles,
  IModalStyles,
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
  IconButton,
  Modal,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useProductPage } from '@providers/product-page/productPageContext';
import { useSystemOfMeasurement } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { STATIC_IMAGES } from '@public/media/images';
import { ENVIRONMENT_VARIABLES } from '@utilities/environmentVariables';
import { getImageLoader } from '@utilities/image-loaders/getImageLoader';
import { rem } from '@utilities/rem';
import { useTabletAndDesktop } from '@widgets/media-queries';
import { breakpoints } from '@widgets/media-queries/media';

import { ProductSubsectionHeader } from '../product-sections/productSubSectionHeader';
import { ProductMediaGalleryItem } from './productMediaGallery.types';
import {
  getExtraThumbnailCount,
  getExtraThumbnailIndex,
  mapResourcesToProductMediaGalleryItems
} from './productMediaGalleryHelper';
import { ProductMediaPdf } from './productMediaPdf';

export const ProductMediaGallery: React.FC = () => {
  const { resources, product } = useProductPage();
  const { locale } = useRouter();
  const { systemOfMeasurement } = useSystemOfMeasurement();
  const mediaGalleryItems: ProductMediaGalleryItem[] = useMemo(
    () =>
      mapResourcesToProductMediaGalleryItems(
        product.image,
        resources,
        systemOfMeasurement,
        locale || ENVIRONMENT_VARIABLES.defaultLocale
      ),
    [locale, product.image, resources, systemOfMeasurement]
  );
  return <ProductMediaGallerySwiper items={mediaGalleryItems} />;
};

type ProductMediaGallerySwiperProps = {
  items: ProductMediaGalleryItem[];
};

interface ProductMediaGallerySwiperStyles {
  swiper: React.CSSProperties;
  modal: Partial<IModalStyles>;
  modalContentContainer: IStackStyles;
  modalThumbnailContainer: IStackStyles;
  swiperContainer: IStackStyles;
  openModalButtonContainer: Partial<IStackStyles>;
}

export const ProductMediaGallerySwiper: React.FC<
  ProductMediaGallerySwiperProps
> = ({ items }) => {
  const [mainSwiper, setMainSwiper] = useState<SwiperClass | undefined>(
    undefined
  );
  const [modalSwiper, setModalSwiper] = useState<SwiperClass | undefined>(
    undefined
  );
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const isTabletAndDesktop = useTabletAndDesktop();
  const { palette, spacing, effects } = useTheme();
  const maxThumbnails: number = isTabletAndDesktop ? 10 : 5;
  const visibleThumbnails: number =
    items.length > maxThumbnails ? maxThumbnails - 1 : items.length;
  const showThumbnailWithOverlay: boolean = items.length > maxThumbnails;

  const styles: ProductMediaGallerySwiperStyles = {
    swiper: {
      '--swiper-navigation-color': palette.themeDark,
      '--swiper-navigation-size': rem(28)
    } as CSSProperties,
    modal: {
      main: {
        height: '95%',
        width: '95%'
      },
      scrollableContent: {
        height: '100%',
        width: '100%',
        display: 'flex',
        padding: spacing.m,
        overflow: 'hidden',
        flexDirection: 'column'
      }
    },
    modalContentContainer: {
      root: {
        height: '100%'
      }
    },
    modalThumbnailContainer: {
      root: { overflow: 'auto', padding: spacing.s1 }
    },
    swiperContainer: { root: { flex: 1, overflow: 'auto' } },
    openModalButtonContainer: {
      root: {
        zIndex: 2,
        backgroundColor: palette.white,
        borderRadius: effects.roundedCorner2,
        boxShadow: effects.elevation4,
        position: 'absolute',
        top: 5,
        right: 5,
        height: '32px'
      }
    }
  };
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        onSwiper={setMainSwiper}
        style={styles.swiper}
        initialSlide={selectedIndex}
        onSlideChange={swiper => setSelectedIndex(swiper.activeIndex)}
        slidesPerView={1}
        className="product-media-gallery-swiper"
      >
        <Stack horizontal styles={styles.openModalButtonContainer}>
          <IconButton
            disabled={showModal}
            onClick={() => setShowModal(true)}
            iconProps={{ iconName: 'MiniExpand' }}
          />
        </Stack>

        {items.map((item, index) => {
          return (
            <SwiperSlide key={item.id}>
              {!showModal && (
                <ProductMediaGallerySlide
                  mode="main"
                  item={item}
                  onItemClick={() => setShowModal(true)}
                  isActive={selectedIndex === index}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Stack
        horizontal
        tokens={{ childrenGap: spacing.s2, padding: `${spacing.s1} 0` }}
      >
        {items.slice(0, visibleThumbnails).map((item, index) => (
          <ProductMediaGalleryThumbnail
            key={item.id}
            {...item}
            onClick={() => mainSwiper?.slideTo(index)}
            isSelected={selectedIndex === index}
            index={index}
          />
        ))}
        {showThumbnailWithOverlay && (
          <ProductMediaGalleryThumbnail
            {...items[getExtraThumbnailIndex(items.length, maxThumbnails)]}
            onClick={() => {
              setSelectedIndex(
                getExtraThumbnailIndex(items.length, maxThumbnails)
              );
              setShowModal(true);
            }}
            isSelected={selectedIndex >= maxThumbnails - 1}
            hasDisclaimer={false}
            numberOverlay={getExtraThumbnailCount(items.length, maxThumbnails)}
            index={-1}
          />
        )}
      </Stack>
      <Modal
        isOpen={showModal}
        isBlocking
        styles={styles.modal}
        onDismiss={() => setShowModal(false)}
      >
        <Stack.Item tokens={{ padding: spacing.s1 }}>
          <Stack horizontal horizontalAlign="space-between">
            <Stack.Item>
              <ProductSubsectionHeader
                title={items[modalSwiper?.activeIndex || 0]?.alt}
              />
            </Stack.Item>
            <Stack.Item>
              <IconButton
                iconProps={{ iconName: 'ChromeClose' }}
                onClick={() => setShowModal(false)}
              />
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item styles={styles.swiperContainer}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            onSwiper={setModalSwiper}
            initialSlide={selectedIndex}
            style={styles.swiper}
            onSlideChange={swiper => {
              mainSwiper?.slideTo(swiper.activeIndex);
            }}
            slidesPerView={1}
            className="product-media-gallery-modal-swiper"
          >
            {items.map((item, index) => {
              return (
                <SwiperSlide key={item.id}>
                  <ProductMediaGallerySlide
                    mode="modal"
                    item={item}
                    onItemClick={() => setShowModal(true)}
                    isActive={selectedIndex === index}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack.Item>
        <Stack.Item>
          <Stack
            horizontal
            wrap={false}
            styles={styles.modalThumbnailContainer}
            verticalAlign="center"
            tokens={{ childrenGap: spacing.s2 }}
          >
            {items.map((item, index) => (
              <ProductMediaGalleryThumbnail
                key={item.id}
                {...item}
                onClick={() => modalSwiper?.slideTo(index)}
                isSelected={selectedIndex === index}
                index={index}
              />
            ))}
          </Stack>
        </Stack.Item>
      </Modal>
      <style>
        {`
          .product-media-gallery-swiper {
            height: 400px;
            background: ${palette.white};
          }
          .product-media-gallery-modal-swiper {
            height: 100%;
            background: ${palette.white};
          }
          .product-media-gallery-modal-swiper .swiper-slide,.product-media-gallery-swiper .swiper-slide {
            display: flex;
            height: 100%;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

type ProductMediaGallerySlideProps = {
  item: ProductMediaGalleryItem;
  isActive: boolean;
  onItemClick: (item: ProductMediaGalleryItem) => void;
  mode: 'main' | 'modal';
};

interface ImageSlideStyles {
  image: CSSProperties;
  tooltip: IStackStyles;
}
export const ProductMediaGallerySlide: React.FC<
  ProductMediaGallerySlideProps
> = ({ item, isActive, mode, onItemClick }) => {
  if (!isActive) {
    return <div key={item.id} />;
  }

  const imageStyles: ImageSlideStyles = {
    image: {
      cursor: mode === 'main' ? 'zoom-in' : 'grabbing'
    },
    tooltip: {
      root: {
        position: 'absolute',
        left: 5,
        bottom: 5
      }
    }
  };

  if (item.type === 'image') {
    const isFallback: boolean =
      item.src ===
      `https://spray.widen.net/content/p8mwdittdw/web/SSCo_Brands_icon.jpeg`;
    return (
      <>
        <Image
          layout="fill"
          style={imageStyles.image}
          priority={isActive}
          src={item.src}
          onClick={() => onItemClick(item)}
          alt={item.alt}
          objectPosition="center"
          objectFit="contain"
          loader={getImageLoader(item.src)}
          sizes={
            mode === 'main'
              ? `(max-width: ${breakpoints.tablet}) 100vw, 850px`
              : '100vw'
          }
        />
        {!isFallback && (
          <Stack.Item styles={imageStyles.tooltip}>
            <ProductImageDisclaimerTooltip />
          </Stack.Item>
        )}
      </>
    );
  }

  const cadenasStyle: React.CSSProperties = {
    border: 'none',
    height: '95%',
    margin: 'auto',
    width: '100%'
  };

  if (item.type === 'cadenas') {
    return (
      <iframe
        key={item.id}
        title={item.alt}
        style={cadenasStyle}
        src={item.src}
      />
    );
  }

  const videoPlayerContainerStyles: React.CSSProperties = {
    width: '100%',
    height: '100%',
    position: 'relative'
  };

  const videoStyles: React.CSSProperties = {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
    alignItems: 'center'
  };

  if (item.type === 'video') {
    return (
      <div key={item.id} style={videoPlayerContainerStyles}>
        <video
          controlsList="nodownload"
          controls={true}
          disablePictureInPicture={false}
          height="100%"
          src={item.src}
          width="auto"
          style={videoStyles}
        ></video>
      </div>
    );
  }

  if (item.type === 'pdf') {
    return (
      <AppErrorBoundary>
        <ProductMediaPdf
          key={item.id}
          modal={mode === 'modal'}
          item={item}
          onDocumentClick={() => {
            onItemClick(item);
          }}
        />
      </AppErrorBoundary>
    );
  }
  return <div key={item.id} />;
};

interface ProductMediaGalleryThumbnailStyles {
  root: IStackItemStyles;
  button: IButtonStyles;
  overlay: IStackStyles;
  overlayText: ITextStyles;
}

type ProductMediaGalleryThumbnailProps = ProductMediaGalleryItem & {
  onClick: () => void;
  numberOverlay?: number | undefined;
  isSelected: boolean;
  index: number;
};

function optimizeBackgroundSrc(src: string | undefined, width: number) {
  if (!src) {
    return undefined;
  }
  const imageLoader = getImageLoader(src);
  if (imageLoader) {
    return imageLoader({ src, width, quality: 75 });
  }
  return src;
}

export const ProductMediaGalleryThumbnail: React.FC<
  ProductMediaGalleryThumbnailProps
> = ({
  id,
  alt,
  thumbnailSrc,
  src,
  onClick,
  isSelected,
  type,
  numberOverlay
}) => {
  const { palette, fonts, effects } = useTheme();

  const styles: ProductMediaGalleryThumbnailStyles = {
    root: {
      root: {
        flex: 1,
        minWidth: rem(48),
        maxWidth: rem(80),
        position: 'relative',
        background: 'transparent',
        aspectRatio: '1 / 1 '
      }
    },
    overlay: {
      root: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        maxHeight: rem(80),
        aspectRatio: '1 / 1 ',
        cursor: 'pointer',
        background: 'rgba(0,0,0,0.5)',
        borderRadius: effects.roundedCorner2
      }
    },
    overlayText: {
      root: {
        ...fonts.xLarge,
        color: palette.white,
        textShadow: '2px 3px 5px rgba(0,0,0,0.5)'
      }
    },
    button: {
      flexContainer: {
        height: '100%',
        width: '100%',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        opacity: 0.7
      },
      root: {
        position: 'relative',
        height: '100%',
        width: '100%',
        borderRadius: effects.roundedCorner2,
        border: `1px solid ${
          isSelected ? palette.themePrimary : palette.neutralLight
        }`,
        backgroundImage:
          type === 'video'
            ? `url('${
                STATIC_IMAGES.product.display.playMovieThumbnail.src
              }'), url('${optimizeBackgroundSrc(thumbnailSrc, 80)}') `
            : `url('${optimizeBackgroundSrc(thumbnailSrc || src, 80)}') `,
        '@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)':
          {
            backgroundImage:
              type === 'video'
                ? `url('${
                    STATIC_IMAGES.product.display.playMovieThumbnail.src
                  }'), url('${optimizeBackgroundSrc(
                    thumbnailSrc || src,
                    160
                  )}') `
                : `url('${optimizeBackgroundSrc(thumbnailSrc || src, 160)}') `
          },
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
        backgroundPosition: 'center center'
      },
      rootPressed: {
        selectors: {
          ' > * ': {
            position: 'unset'
          }
        }
      }
    }
  };
  return (
    <Stack.Item key={id} styles={styles.root}>
      <IconButton
        onClick={onClick}
        title={alt}
        key={id}
        styles={styles.button}
      />
      {numberOverlay && numberOverlay > 1 && (
        <Stack
          verticalAlign="center"
          onClick={onClick}
          horizontalAlign="center"
          styles={styles.overlay}
        >
          <Text styles={styles.overlayText}>{`+ ${numberOverlay}`}</Text>
        </Stack>
      )}
    </Stack.Item>
  );
};
