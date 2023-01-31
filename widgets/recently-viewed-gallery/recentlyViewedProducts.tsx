import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { Stack, Text, useTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { Product } from '@services/portal-api';

import { RecentlyViewedProductsGallerySwiper } from './recentlyViewedGallery';
import { mapProductsToRecentlyViewedProductGalleryItems } from './recentlyViewedGalleryHelper';

const messages = defineMessages({
  title: {
    id: messageIds.recentlyViewed.title,
    defaultMessage: 'You recently viewed',
    description: 'Title text for recently viewed section'
  }
});

export const RecentlyViewedProducts: React.FC<{ products: Product[] }> = ({
  products
}) => {
  const { locale } = useRouter();
  const { spacing } = useTheme();
  const { formatMessage } = useIntl();
  return (
    <Stack tokens={{ padding: `${spacing.m} 0`, childrenGap: spacing.m }}>
      <Text variant="xLarge" as="h2">
        {formatMessage(messages.title)}
      </Text>
      <Stack.Item>
        <RecentlyViewedProductsGallerySwiper
          items={mapProductsToRecentlyViewedProductGalleryItems(
            products || [],
            locale || 'en-us'
          )}
        />
      </Stack.Item>
    </Stack>
  );
};
