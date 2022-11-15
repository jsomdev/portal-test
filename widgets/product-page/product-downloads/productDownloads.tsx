import React, { useMemo } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  IStackItemStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { useProductPage } from '@providers/product-page/productPageContext';
import { useSystemOfMeasurement } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { messageIds } from '@services/i18n';
import { mediaQueryFrom } from '@widgets/media-queries';

import { ProductSubsectionHeader } from '../product-sections/productSubSectionHeader';
import { ProductCadenasDrawings } from './productCadenasDrawings';
import { ProductDownloadsGalleryItem } from './productDownloads.types';
import { ProductDownloadsGallerySwiper } from './productDownloadsGallery';
import { mapResourcesToProductDownloadsGalleryItems } from './productDownloadsHelper';

interface ProductDownloadsStyles {
  root: IStackStyles;
  carouselContainer: IStackItemStyles;
  resourceContainer: IStackItemStyles;
}

const messages = defineMessages({
  documentsTitle: {
    id: messageIds.pages.product.sections.downloads.documentsTitle,
    defaultMessage: 'Documents',
    description: 'Title for the documents sub section'
  },
  otherTitle: {
    id: messageIds.pages.product.sections.downloads.otherTitle,
    defaultMessage: 'Other',
    description: 'Title for the other sub section'
  }
});

export const ProductDownloads: React.FC = () => {
  const { spacing } = useTheme();
  const { downloads, cadenasIdentifier } = useProductPage();
  const { systemOfMeasurement } = useSystemOfMeasurement();
  const intl = useIntl();
  const { locale, formatMessage } = intl;
  const downloadsGalleryItems: ProductDownloadsGalleryItem[] = useMemo(
    () =>
      mapResourcesToProductDownloadsGalleryItems(
        downloads,
        systemOfMeasurement,
        intl,
        locale
      ),
    [downloads, intl, locale, systemOfMeasurement]
  );
  const styles: ProductDownloadsStyles = {
    root: {
      root: {
        width: '100%',
        flexDirection: 'column',
        ...mediaQueryFrom('tablet', {
          flexDirection: 'row'
        })
      }
    },
    carouselContainer: {
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
    resourceContainer: {
      root: {
        width: '100%',
        ...mediaQueryFrom('tablet', {
          flex: 3
        })
      }
    }
  };

  return (
    <Stack
      horizontal
      wrap
      tokens={{ childrenGap: spacing.s1 }}
      verticalAlign={'start'}
      styles={styles.root}
    >
      <Stack.Item styles={styles.carouselContainer}>
        <ProductSubsectionHeader
          title={formatMessage(messages.documentsTitle)}
        />
        <ProductDownloadsGallerySwiper items={downloadsGalleryItems} />
      </Stack.Item>
      {cadenasIdentifier && cadenasIdentifier.value && (
        <Stack.Item styles={styles.resourceContainer}>
          <Stack>
            <ProductSubsectionHeader
              title={formatMessage(messages.otherTitle)}
            />
            <ProductCadenasDrawings cadenasId={cadenasIdentifier.value} />
          </Stack>
        </Stack.Item>
      )}
    </Stack>
  );
};
