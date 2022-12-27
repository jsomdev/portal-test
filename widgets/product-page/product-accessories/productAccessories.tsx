import { useMemo } from 'react';

import { useIntl } from 'react-intl';

import { IStackItemStyles, Stack } from '@fluentui/react';
import { useProductPage } from '@providers/product-page/productPageContext';
import { ProductCardViewModel } from '@widgets/product-card-parts/productCardViewModel';

import { ProductAccessoriesGallerySwiper } from './productAccessoriesGallery';
import { mapProductAccessoriesToProductAccessoriesGalleryItems } from './productAccessoriesHelper';

interface ProductAccessoriesStyles {
  root: IStackItemStyles;
}

export const ProductAccessories: React.FC = () => {
  const { accessories } = useProductPage();
  const { locale } = useIntl();

  const productAccessoriesGalleryItems: ProductAccessoriesGalleryItem[] =
    useMemo(() => {
      return mapProductAccessoriesToProductAccessoriesGalleryItems(
        accessories,
        locale
      );
    }, [accessories, locale]);

  const styles: ProductAccessoriesStyles = {
    root: {
      root: {
        width: '100%'
      }
    }
  };
  return (
    <Stack.Item styles={styles.root}>
      <ProductAccessoriesGallerySwiper items={productAccessoriesGalleryItems} />
    </Stack.Item>
  );
};

type ProductAccessoriesGalleryItem = ProductCardViewModel;
