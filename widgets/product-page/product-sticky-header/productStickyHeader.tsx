import React from 'react';

import Image from 'next/image';
import { useIntl } from 'react-intl';

import { ProductBookmarkButton } from '@components/buttons/bookmarkButton';
import {
  FontWeights,
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { Product } from '@services/portal-api';
import widenImageLoader from '@utilities/image-loaders/widenImageLoader';
import { usePageScroll } from '@utilities/scrollToTop';
import { MAIN_HEADER_HEIGHT } from '@widgets/headers/main-header/mainHeader';
import { SITE_HEADER_HEIGHT } from '@widgets/headers/site-header/siteHeader';
import ContentContainerStack from '@widgets/layouts/contentContainerStack';
import { useTabletAndDesktop } from '@widgets/media-queries';

import { ProductPagePricing } from '../productPagePricing';

interface ProductStickyHeaderStyles {
  headerWrapper: IStackStyles;
  headerActions: IStackItemStyles;
  headerText: IStackItemStyles;
  titleWrapper: IStackItemStyles;
  productNumber: ITextStyles;
}

export interface ProductStickyHeaderProps {
  product: Product | undefined;
}

/**
 * Displays a sticky header that contains the default product image, product name and description.
 * It also includes the pricing and add to cart functionality and a bookmark button.
 * By default it is hidden until the user scrolls past a certain breakpoint
 * and then it utilizes 'position: sticky' to stay on top of the content while the user scrolls the page
 */
export const ProductStickyHeader: React.FC<ProductStickyHeaderProps> = ({
  product
}) => {
  const { spacing, palette } = useTheme();
  const { isScrolledDown } = usePageScroll(120);
  const isTabletAndDesktop = useTabletAndDesktop();
  const { locale } = useIntl();
  const productFormatter: ProductFormatter = new ProductFormatter(
    product,
    locale
  );

  if (!product || !isScrolledDown || !isTabletAndDesktop) {
    return null;
  }

  const styles: ProductStickyHeaderStyles = {
    headerWrapper: {
      root: {
        backgroundColor: palette.white,
        marginTop: `-${spacing.s1}`,
        position: 'sticky',
        top: SITE_HEADER_HEIGHT + MAIN_HEADER_HEIGHT,
        zIndex: 3,
        opacity: isScrolledDown ? 1 : 0,
        visibility: isScrolledDown ? 'visible' : 'hidden',
        maxHeight: isScrolledDown ? 'auto' : 0,

        height: '100%',
        transition:
          isScrolledDown && isTabletAndDesktop
            ? 'visibility .3s, opacity 0.3s'
            : 'none',
        // The :before and :after will visualize the sticky header as 100vw and apply a box shadow
        selectors: {
          '::before, ::after': {
            content: "''",
            display: 'block',
            width: '50%',
            height: '100%',
            position: 'absolute',
            zIndex: -1,
            boxShadow: '0 5px 4px -4px rgba(0,0,0,.2)'
          },
          '::before': {
            right: '50%'
          },
          '::after': {
            left: '50%'
          }
        }
      }
    },
    headerActions: {
      root: {
        flexShrink: 0
      }
    },
    headerText: {
      root: {
        flexGrow: 1
      }
    },
    titleWrapper: {
      root: { flexGrow: 1 }
    },
    productNumber: {
      root: {
        fontWeight: FontWeights.semibold
      }
    }
  };

  return (
    <ContentContainerStack
      outerStackProps={{
        styles: styles.headerWrapper
      }}
    >
      <Stack
        horizontal
        wrap={false}
        tokens={{
          padding: spacing.s1,
          childrenGap: spacing.m
        }}
        verticalAlign="center"
      >
        <Stack.Item>
          <Image
            alt={productFormatter.formatImageCaption()}
            src={productFormatter.formatImageHref()}
            objectFit="contain"
            objectPosition="center"
            height={50}
            width={50}
            loader={widenImageLoader}
          />
        </Stack.Item>
        <Stack.Item styles={styles.titleWrapper}>
          <Stack>
            <Stack.Item>
              <Text styles={styles.productNumber} variant="large">
                {product.number || ''}
              </Text>
            </Stack.Item>
            <Stack.Item>
              <Text>{productFormatter.formatName()}</Text>
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item styles={styles.headerActions}>
          <Stack horizontal wrap={false} tokens={{ childrenGap: spacing.s1 }}>
            <Stack.Item>
              <ProductPagePricing
                product={product}
                enablePriceBreakInfo={false}
                inSticky={true}
              />
            </Stack.Item>
            <Stack.Item>
              <ProductBookmarkButton
                productId={product.id}
                displayAsDefaultButton={true}
              />
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </Stack>
    </ContentContainerStack>
  );
};
