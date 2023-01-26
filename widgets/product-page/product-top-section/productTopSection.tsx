import { FormattedMessage, defineMessages } from 'react-intl';

import { PortalMessageBar } from '@components/messages/portalMessageBar';
import {
  IStackItemStyles,
  IStackStyles,
  MessageBarType,
  Stack,
  useTheme
} from '@fluentui/react';
import { useProductPage } from '@providers/product-page/productPageContext';
import { messageIds } from '@services/i18n';
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

interface ProductTopSectionProps {
  isModel?: boolean;
}

const messages = defineMessages({
  notAvailableInYourRegion: {
    id: messageIds.pages.product.sections.top.notAvailableInYourRegion,
    defaultMessage:
      'This product may not be available in your region. However, feel free to add it to your cart and our sales team will help you accordingly.'
  }
});

export const ProductTopSection: React.FC<ProductTopSectionProps> = ({
  isModel = false
}) => {
  const { spacing } = useTheme();
  const { product, isValidAudience } = useProductPage();
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
        {!isModel && (
          <Stack
            tokens={{ childrenGap: spacing.l1 }}
            styles={styles.mainContainer}
          >
            <ActiveProductConfiguration />
            <ProductPagePricing product={product} />
            {!isValidAudience && (
              <PortalMessageBar messageBarType={MessageBarType.warning}>
                <FormattedMessage {...messages.notAvailableInYourRegion} />
              </PortalMessageBar>
            )}
            <ProductCompareButton product={product} />
          </Stack>
        )}
      </Stack>
    </ProductSectionContainer>
  );
};
