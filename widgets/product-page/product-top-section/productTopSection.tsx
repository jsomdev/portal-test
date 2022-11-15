import {
  IStackItemStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { useProductPage } from '@providers/product-page/productPageContext';
import { ProductCompareButton } from '@widgets/compare/product-compare-button/productCompareButton';
import { mediaQueryFrom } from '@widgets/media-queries';

import { ActiveProductConfiguration } from '../product-configuration/activeProductConfiguration';
import { ProductMediaGallery } from '../product-media-gallery/productMediaGallery';
import { ProductSectionContainer } from '../product-sections/productSectionContainer';
import { ProductPagePricing } from '../productPagePricing';

interface ProductTopSectionStyles {
  root: IStackStyles;
  mediaGalleryContainer: IStackItemStyles;
  mainContainer: IStackStyles;
}

export const ProductTopSection: React.FC = () => {
  const { spacing } = useTheme();
  const { product } = useProductPage();
  const styles: ProductTopSectionStyles = {
    root: {
      root: {
        width: '100%',
        flexDirection: 'column',
        ...mediaQueryFrom('tablet', {
          flexDirection: 'row'
        })
      }
    },
    mediaGalleryContainer: {
      root: {
        width: '100%',
        marginBottom: spacing.m,
        marginRight: 0,
        ...mediaQueryFrom('tablet', {
          marginBottom: 0,
          marginRight: spacing.m,
          flex: 5,
          overflow: 'hidden'
        })
      }
    },
    mainContainer: {
      root: {
        width: '100%',
        ...mediaQueryFrom('tablet', {
          flex: 3
        })
      }
    }
  };
  return (
    <ProductSectionContainer sectionKey="TopSection" title="">
      <Stack styles={styles.root}>
        <Stack.Item styles={styles.mediaGalleryContainer}>
          <ProductMediaGallery />
        </Stack.Item>
        <Stack
          tokens={{ childrenGap: spacing.l1 }}
          styles={styles.mainContainer}
        >
          <ActiveProductConfiguration />
          <ProductPagePricing product={product} />
          <ProductCompareButton product={product} />
        </Stack>
      </Stack>
    </ProductSectionContainer>
  );
};
