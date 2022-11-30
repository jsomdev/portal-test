import React from 'react';

import {
  IStackItemStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { FacetedSearchProduct } from '@services/portal-api/faceted-search/types';
import { ProductCompareButton } from '@widgets/compare/product-compare-button/productCompareButton';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';
import ProductCard from '@widgets/product-card-parts/productCard';
import ProductCardImage from '@widgets/product-card-parts/productCardImage';
import ProductCardTitleLink from '@widgets/product-card-parts/productCardTitleLink';
import { ProductCardViewModel } from '@widgets/product-card-parts/productCardViewModel';

import { FacetChip } from './facetChip';
import { ProductListItemPricing } from './listItemPricing';

interface ProductListItemComponentStyles {
  productInfoContainer: IStackItemStyles;
  productPricingContainer: IStackItemStyles;
  chipDivider: ITextStyles;
}

export type FacetedSearchProductViewModel = {
  product: ProductCardViewModel;
  chips: { code: string; value: string; description: string; title: string }[];
  data: FacetedSearchProduct; //TODO map to view model and rename FacetedSearchProductProps to more generic name?
};

export type ProductListItemProps = FacetedSearchProductViewModel;

export const ProductListItem: React.FC<ProductListItemProps> = ({
  product,
  chips,
  data
}) => {
  const { spacing, fonts, palette } = useTheme();

  const styles: ProductListItemComponentStyles = {
    productInfoContainer: { root: { flex: 1, minWidth: 220 } },
    productPricingContainer: { root: { padding: `${spacing.s1} 0` } },
    chipDivider: {
      root: {
        fontSize: fonts.mediumPlus.fontSize,
        color: palette.neutralLight,
        display: 'inline-block',
        marginLeft: 4,
        lineHeight: '140%',
        marginRight: 4
      }
    }
  };

  return (
    <ProductCard verticalAlign={'start'}>
      <Stack tokens={{ padding: spacing.s1 }}>
        <Stack.Item>
          <ProductCardImage {...product} />
        </Stack.Item>
        <Mobile>
          <ProductCompareButton product={data} />
        </Mobile>
      </Stack>

      <Stack
        styles={styles.productInfoContainer}
        tokens={{
          padding: `${spacing.m} ${spacing.s1}`,
          childrenGap: spacing.s1
        }}
      >
        <Stack tokens={{ childrenGap: spacing.s2 }}>
          <ProductCardTitleLink {...product} />

          <div>
            {chips.map((chip, index) => (
              <React.Fragment key={chip.code}>
                <FacetChip key={chip.code} {...chip} />
                {chips.length > 1 && index < chips.length - 1 && (
                  <Text styles={styles.chipDivider}>|</Text>
                )}
              </React.Fragment>
            ))}
          </div>
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
        <Stack tokens={{ padding: `${spacing.m} ${spacing.s1}` }}>
          <ProductListItemPricing product={data} />
        </Stack>
      </TabletAndDesktop>
    </ProductCard>
  );
};
