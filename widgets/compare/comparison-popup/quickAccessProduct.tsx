import React from 'react';

import { useIntl } from 'react-intl';

import {
  FontWeights,
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
  IconButton,
  Image,
  ImageFit,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { TextFormatter } from '@services/i18n/formatters/entity-formatters/textFormatter';
import { Product } from '@services/portal-api';
import {
  WidenImageHelper,
  WidenImagePreset
} from '@services/widen/widenImageHelper';
import ProductCardImage from '@widgets/product-card-parts/productCardImage';
import ProductCardTitleLink from '@widgets/product-card-parts/productCardTitleLink';

export interface QuickAccessProductProps {
  product: Product;
  onRemoveItem?: (id: string) => void;
}

export interface QuickAccessProductStyles {
  root: IStackStyles;
  title: ITextStyles;
  imageContainer: IStackItemStyles;
}

const textFormatter = new TextFormatter();
export const QuickAccessProduct: React.FC<QuickAccessProductProps> = ({
  product,
  onRemoveItem
}) => {
  const ITEMHEIGHT: number = 70;
  const CHARACTERSPERLINE = 28;
  const { palette, spacing, semanticColors } = useTheme();
  const { locale } = useIntl();
  const productFormatter: ProductFormatter = new ProductFormatter(
    product,
    locale
  );
  const styles: QuickAccessProductStyles = {
    root: {
      root: {
        cursor: 'pointer',
        backgroundColor: palette.white,
        minHeight: ITEMHEIGHT,
        overflowX: 'hidden',
        position: 'relative',
        marginTop: spacing.s1,
        marginBottom: spacing.s1,
        borderBottom: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: 0
      }
    },
    imageContainer: {
      root: {
        alignSelf: 'center',
        width: ITEMHEIGHT,
        height: ITEMHEIGHT
      }
    },
    title: {
      root: {
        fontWeight: FontWeights.semibold,
        color: palette.neutralPrimary
      }
    }
  };
  return (
    <Stack horizontal styles={styles.root}>
      <Stack.Item styles={styles.imageContainer}>
        <ProductCardImage
          size={'small'}
          url={productFormatter.formatUrl() || undefined}
          imageUrl={productFormatter.formatImageHref()}
        />
      </Stack.Item>
      <Stack.Item>
        <ProductCardTitleLink
          url={productFormatter.formatUrl() || undefined}
          size="small"
          number={textFormatter.formatText(
            product.number || '',
            CHARACTERSPERLINE - 1,
            '...'
          )}
          name={textFormatter.formatText(
            productFormatter.formatName() || '',
            CHARACTERSPERLINE * 2 - 1,
            '...'
          )}
        />
      </Stack.Item>

      <Stack grow horizontalAlign="end" verticalAlign="center">
        {onRemoveItem && (
          <IconButton
            iconProps={{ iconName: 'Delete' }}
            onClick={() => onRemoveItem(product.id || '')}
          />
        )}
      </Stack>
    </Stack>
  );
};
