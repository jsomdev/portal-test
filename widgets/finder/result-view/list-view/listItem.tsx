import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  FontWeights,
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  VerticalDivider,
  useTheme
} from '@fluentui/react';
import { FacetedSearchProduct } from '@services/portal-api/faceted-search/types';
import { rem } from '@utilities/rem';
import { ProductCompareButton } from '@widgets/compare/product-compare-button/productCompareButton';
import {
  Mobile,
  TabletAndDesktop,
  mediaQueryFrom
} from '@widgets/media-queries';

import { FacetChip } from './facetChip';
import { ProductListItemPricing } from './listItemPricing';

interface ProductListItemComponentStyles {
  root: IStackStyles;
  productImageContainer: IStackItemStyles;
  productInfoContainer: IStackItemStyles;
  productPricingContainer: IStackItemStyles;
  title: ITextStyles;
  description: ITextStyles;
}

export type ProductListItemViewModel = {
  id: string;
  number: string;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  chips: { code: string; value: string }[];
  data: FacetedSearchProduct;
};

type ProductListItemProps = ProductListItemViewModel;

export const ProductListItem: React.FC<ProductListItemProps> = ({
  imageAlt,
  chips,
  imageSrc,
  href,
  number,
  name,
  data
}) => {
  const { semanticColors, palette, spacing } = useTheme();

  const styles: ProductListItemComponentStyles = {
    root: {
      root: {
        marginBottom: spacing.s1,
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: 7
      }
    },
    productImageContainer: {
      root: {
        width: 120,
        cursor: 'pointer',
        height: 120,
        position: 'relative',
        ...mediaQueryFrom('tablet', {
          width: 160,
          height: 160
        })
      }
    },
    productInfoContainer: { root: { flex: 1, minWidth: 220 } },
    productPricingContainer: { root: { padding: `${spacing.s1} 0` } },
    title: {
      root: {
        fontWeight: FontWeights.semibold,
        cursor: 'pointer',
        '&:hover': {
          color: palette.accent
        }
      }
    },
    description: {
      root: {
        cursor: 'pointer',
        '&:hover': {
          color: palette.accent
        }
      }
    }
  };
  return (
    <Stack
      horizontal
      wrap
      verticalAlign="stretch"
      tokens={{ padding: spacing.s1 }}
      styles={styles.root}
    >
      <Stack>
        <Stack.Item styles={styles.productImageContainer}>
          <Link href={href}>
            <a>
              <Image
                src={imageSrc}
                alt={imageAlt}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </a>
          </Link>
        </Stack.Item>
        <Mobile>
          <ProductCompareButton product={data} />
        </Mobile>
      </Stack>

      <Stack verticalAlign="space-between" styles={styles.productInfoContainer}>
        <Stack>
          <Link href={href} passHref>
            <a>
              <Text
                variant="xLarge"
                title={`${number} | ${name}`}
                styles={styles.title}
              >
                {number}
              </Text>
            </a>
          </Link>
          <Link href={href} passHref>
            <a>
              <Text
                variant="mediumPlus"
                title={`${number} | ${name}`}
                styles={styles.description}
              >
                {name}
              </Text>
            </a>
          </Link>
          <Stack
            horizontal
            wrap
            tokens={{
              childrenGap: spacing.s2,
              padding: `${spacing.s1} 0`
            }}
          >
            {chips.slice().map((chip, index) => (
              <React.Fragment key={chip.code}>
                <FacetChip key={chip.code} {...chip} />
                {chips.length > 1 && index < chips.length - 1 && (
                  <Stack tokens={{ padding: `0 ${spacing.s1}` }}>
                    <VerticalDivider />
                  </Stack>
                )}
              </React.Fragment>
            ))}
          </Stack>
        </Stack>
        <TabletAndDesktop>
          <Stack.Item tokens={{ padding: `${spacing.s1} 0` }}>
            <ProductCompareButton product={data} />
          </Stack.Item>
        </TabletAndDesktop>
        <Mobile>
          <Stack.Item styles={styles.productPricingContainer}>
            <ProductListItemPricing product={data} />
          </Stack.Item>
        </Mobile>
      </Stack>
      <TabletAndDesktop>
        <ProductListItemPricing product={data} />
      </TabletAndDesktop>
    </Stack>
  );
};
