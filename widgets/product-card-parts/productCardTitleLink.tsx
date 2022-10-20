import React from 'react';

import { OptionalLink } from '@components/link/optionalLink';
import { mergeCss } from '@fluentui/merge-styles';
import { FontWeights, Text, useTheme } from '@fluentui/react';
import { ProductCardViewModel } from '@widgets/product-card-parts/productCardViewModel';

type ProductCardTextProps = Pick<
  ProductCardViewModel,
  'url' | 'number' | 'name'
>;

const ProductCardTitleLink: React.FC<ProductCardTextProps> = ({
  url,
  number,
  name
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
    <OptionalLink href={url}>
      <a className={mergeCss(styles.link)}>
        <Text variant="xLarge" styles={styles.title}>
          {number}
        </Text>
        <Text variant="mediumPlus" styles={styles.description}>
          {name}
        </Text>
      </a>
    </OptionalLink>
  );
};

export default ProductCardTitleLink;
