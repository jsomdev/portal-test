import React, { useMemo } from 'react';

import Image from 'next/image';
import { UrlObject } from 'url';

import { NextLink } from '@components/link/nextLink';
import {
  FontWeights,
  IButtonStyles,
  IStackStyles,
  ITextStyles,
  IconButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { OrderLine } from '@services/portal-api';
import { QuoteLine } from '@services/portal-api/models/QuoteLine';
import { QuoteRequestLine } from '@services/portal-api/models/QuoteRequestLine';
import { WidenImageHelper } from '@services/widen/widenImageHelper';
import { getImageLoader } from '@utilities/image-loaders/getImageLoader';
import {
  mediaQueryFrom,
  useBetweenMobileAndTablet,
  useTablet,
  useTabletAndDesktop
} from '@widgets/media-queries';

interface AccountCardProductLinesProps {
  lines: OrderLine[] | QuoteRequestLine[] | QuoteLine[];
  href: UrlObject | string;
  compactView: boolean;
}

interface AccountCardProductLinesStyles {
  container: IStackStyles;
  viewMoreButton: IButtonStyles;
  moreButtonText: ITextStyles;
  viewMoreContainer: IStackStyles;
}

export const AccountCardProductLines: React.FC<
  AccountCardProductLinesProps
> = ({ lines, href, compactView }) => {
  const { spacing, semanticColors, palette, effects } = useTheme();
  const isMobileOrTablet = useBetweenMobileAndTablet();
  const isTablet = useTablet();

  const visibleItems: number = React.useMemo(() => {
    if (isMobileOrTablet || compactView) {
      return 1;
    }
    if (isTablet) {
      return 1;
    }
    return 3;
  }, [isMobileOrTablet, isTablet, compactView]);

  const viewMoreText: string = useMemo(() => {
    if (lines?.length) {
      return `+${lines.length - visibleItems}`;
    }
    return '';
  }, [lines, visibleItems]);

  const product = lines?.[visibleItems]?.product;
  const viewMoreImageSrc = product
    ? new ProductFormatter(product).formatImageHref()
    : null;
  const styles: AccountCardProductLinesStyles = {
    container: {
      root: {
        borderTop: `1px solid ${semanticColors.variantBorder}`,
        padding: `${spacing.m} ${spacing.m} 0`,
        display: 'flex'
      }
    },
    viewMoreButton: {
      root: {
        height: 65,
        width: 65,
        minWidth: 65,
        minHeight: 65,
        padding: `${spacing.s2}`,
        position: 'relative',
        backgroundImage: `url('${
          viewMoreImageSrc
            ? WidenImageHelper.getOptimizedSrc(viewMoreImageSrc, {
                dimensions: {
                  width: 57,
                  height: 57
                }
              })
            : STATIC_IMAGES.cart.defaultItem.src
        }')`,
        backgroundSize: 'auto 57px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'block'
      },
      rootHovered: {
        backgroundColor: 'transparent'
      },
      rootPressed: {
        backgroundColor: 'transparent',
        height: 65,
        width: 65,
        padding: 2
      }
    },
    moreButtonText: {
      root: {
        fontWeight: FontWeights.bold,
        color: palette.white,
        textShadow: `${palette.themeDarker} 1px 1px 2px`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: effects.elevation4,
        borderRadius: effects.roundedCorner4
      }
    },
    viewMoreContainer: {
      root: {
        margin: 'auto !important',
        paddingLeft: spacing.m
      }
    }
  };
  return (
    <Stack
      className="list-scroll"
      verticalFill
      verticalAlign="center"
      tokens={{ childrenGap: spacing.l2 }}
      horizontal
      styles={styles.container}
    >
      {lines
        ?.slice(0, visibleItems)
        .map((accountProductLine: QuoteRequestLine) => {
          return (
            <AccountProductLine
              key={accountProductLine.productId}
              href={href}
              productLine={accountProductLine}
            />
          );
        })}
      {lines?.length && lines.length - visibleItems > 0 && (
        <Stack styles={styles.viewMoreContainer}>
          <NextLink href={href} passHref>
            <a>
              <IconButton styles={styles.viewMoreButton}>
                <Text variant="xLarge" styles={styles.moreButtonText}>
                  {viewMoreText}
                </Text>
              </IconButton>
            </a>
          </NextLink>
        </Stack>
      )}
    </Stack>
  );
};

interface AccountProductLineStyles {
  accountProductLineContainer: IStackStyles;
  accountProductLineImageContainer: IStackStyles;
}

interface AccountProductLineProps {
  productLine: QuoteRequestLine | OrderLine | QuoteLine;
  href: UrlObject | string;
}

const AccountProductLine: React.FC<AccountProductLineProps> = ({
  productLine,
  href
}) => {
  const { spacing, effects } = useTheme();
  const isTabletOrDesktop = useTabletAndDesktop();
  const productFormatter = new ProductFormatter(
    productLine?.product || undefined
  );

  const styles: AccountProductLineStyles = {
    accountProductLineContainer: {
      root: {
        width: 250,
        borderRadius: effects.roundedCorner4,
        height: '100%'
      }
    },
    accountProductLineImageContainer: {
      root: {
        width: 70,
        minWidth: 70,
        height: 90,
        maxHeight: 90,
        position: 'relative',
        ...mediaQueryFrom('tablet', {
          width: 120,
          height: 90,
          position: 'relative'
        })
      }
    }
  };

  const src =
    productFormatter.formatImageHref() || STATIC_IMAGES.cart.defaultItem.src;
  return (
    <Stack
      key={productLine.id}
      horizontal
      horizontalAlign="space-between"
      verticalAlign="center"
      tokens={{ childrenGap: spacing.m }}
      styles={styles.accountProductLineContainer}
    >
      <NextLink href={href} passHref>
        <a>
          <Stack
            horizontal
            verticalAlign="center"
            tokens={{ childrenGap: spacing.m }}
          >
            <Stack styles={styles.accountProductLineImageContainer}>
              <Image
                priority
                src={src}
                alt={productFormatter.formatImageCaption()}
                width={isTabletOrDesktop ? 120 : 70}
                height={isTabletOrDesktop ? 90 : 70}
                layout="intrinsic"
                objectFit="contain"
                objectPosition="center"
                loader={getImageLoader(src)}
              />
            </Stack>
            <Stack tokens={{ childrenGap: spacing.s1 }}>
              <Text variant="mediumPlus">{productLine.productNumber}</Text>
              <Text>{productFormatter.formatName()}</Text>
              <Text>x{productLine.quantity}</Text>
            </Stack>
          </Stack>
        </a>
      </NextLink>
    </Stack>
  );
};
