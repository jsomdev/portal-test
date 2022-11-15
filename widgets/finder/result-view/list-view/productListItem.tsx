import React from 'react';

import {
  IStackItemStyles,
  Stack,
  VerticalDivider,
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
}

export type FacetedSearchProductViewModel = {
  product: ProductCardViewModel;
  chips: { code: string; value: string }[];
  data: FacetedSearchProduct; //TODO map to view model and rename FacetedSearchProductProps to more generic name?
};

export type ProductListItemProps = FacetedSearchProductViewModel;

export const ProductListItem: React.FC<ProductListItemProps> = ({
  product,
  chips,
  data
}) => {
  const { spacing } = useTheme();

  const styles: ProductListItemComponentStyles = {
    productInfoContainer: { root: { flex: 1, minWidth: 220 } },
    productPricingContainer: { root: { padding: `${spacing.s1} 0` } }
  };

  return (
    <ProductCard verticalAlign={'start'}>
      <Stack>
        <Stack.Item>
          <ProductCardImage {...product} />
        </Stack.Item>
        <Mobile>
          <ProductCompareButton product={data} />
        </Mobile>
      </Stack>

      <Stack verticalAlign="space-between" styles={styles.productInfoContainer}>
        <Stack>
          <ProductCardTitleLink {...product} />

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
    </ProductCard>
  );
};
