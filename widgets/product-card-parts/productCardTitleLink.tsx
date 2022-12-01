import React from 'react';

import { NextLink } from '@components/link/nextLink';
import { mergeCss } from '@fluentui/merge-styles';
import { FontWeights, IFontStyles, Text, useTheme } from '@fluentui/react';
import { ProductCardViewModel } from '@widgets/product-card-parts/productCardViewModel';

type ProductCardTitleLinkSize = 'small' | 'default';

type ProductCardTitleLinkProps = Pick<
  ProductCardViewModel,
  'url' | 'number' | 'name'
> & {
  size?: ProductCardTitleLinkSize;
};

function getTitleVariant(size: ProductCardTitleLinkSize): keyof IFontStyles {
  if (size === 'small') {
    return 'large';
  }
  return 'xLarge';
}

function getDescriptionVariant(
  size: ProductCardTitleLinkSize
): keyof IFontStyles {
  if (size === 'small') {
    return 'medium';
  }
  return 'mediumPlus';
}

const ProductCardTitleLink: React.FC<ProductCardTitleLinkProps> = ({
  url,
  number,
  name,
  size = 'default'
}) => {
  const { palette } = useTheme();
  const styles = {
    title: {
      root: {
        display: 'block',
        fontWeight: FontWeights.semibold
      }
    },
    description: {
      root: {
        display: 'block'
      }
    },
    link: {
      root: url
        ? {
            '&:hover > *': {
              color: palette.accent
            }
          }
        : {}
    }
  };

  return (
    <NextLink href={url}>
      <a className={mergeCss(styles.link)}>
        <Text variant={getTitleVariant(size)} styles={styles.title}>
          {number}
        </Text>
        <Text variant={getDescriptionVariant(size)} styles={styles.description}>
          {name}
        </Text>
      </a>
    </NextLink>
  );
};

export default ProductCardTitleLink;
