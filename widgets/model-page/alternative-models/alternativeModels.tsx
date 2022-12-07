import { useMemo } from 'react';

import { useIntl } from 'react-intl';

import { IStackItemStyles, Stack } from '@fluentui/react';
import { Model } from '@services/portal-api';
import { ProductCardViewModel } from '@widgets/product-card-parts/productCardViewModel';

import { ModelsGallerySwiper } from './alternativeModelsGallery';
import {
  ModelGalleryItem,
  mapModelsToModelsGalleryItems
} from './alternativeModelsHelper';

interface AlternativeModelsStyles {
  root: IStackItemStyles;
}

export const AlternativeModels: React.FC<{
  alternativeModels: Model[];
}> = ({ alternativeModels }) => {
  const { locale } = useIntl();
  const alternativeModelssGalleryItems: ModelGalleryItem[] = useMemo(() => {
    return mapModelsToModelsGalleryItems(alternativeModels, locale);
  }, [alternativeModels, locale]);

  const styles: AlternativeModelsStyles = {
    root: {
      root: {
        width: '100%'
      }
    }
  };
  return (
    <Stack.Item styles={styles.root}>
      <ModelsGallerySwiper items={alternativeModelssGalleryItems} />
    </Stack.Item>
  );
};
