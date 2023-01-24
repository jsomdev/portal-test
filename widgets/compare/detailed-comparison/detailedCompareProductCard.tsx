import { defineMessages, useIntl } from 'react-intl';

import {
  IStackStyles,
  IconButton,
  Stack,
  TooltipHost,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import ProductCardImage from '@widgets/product-card-parts/productCardImage';
import ProductCardTitleLink from '@widgets/product-card-parts/productCardTitleLink';

import { CompareProductCardViewModel } from './detailedCompare.types';

export type DetailedCompareProductCardProps = {
  product: CompareProductCardViewModel;
  isBase: boolean;
  onBaseClick: () => void;
  onRemoveClick: () => void;
};

export interface CompareProductCardStyles {
  root: IStackStyles;
  iconButtonContainer: IStackStyles;
}

const messages = defineMessages({
  setBaseline: {
    id: messageIds.pages.compare.setBaseline,
    defaultMessage: 'Set as baseline product',
    description: 'Tooltip text to set the product as base product'
  },
  currentBaseline: {
    id: messageIds.pages.compare.currentBaseline,
    defaultMessage: 'Current baseline product'
  }
});

export const DetailedCompareProductCard: React.FC<
  DetailedCompareProductCardProps
> = ({ product, onBaseClick, onRemoveClick, isBase }) => {
  const { formatMessage } = useIntl();
  const { spacing, semanticColors, effects } = useTheme();
  const styles: CompareProductCardStyles = {
    root: {
      root: {
        position: 'relative',
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner6,
        height: '100%'
      }
    },
    iconButtonContainer: {
      root: {
        position: 'absolute',
        top: spacing.s2,
        right: spacing.s2
      }
    }
  };

  return (
    <Stack
      styles={styles.root}
      tokens={{ padding: spacing.m }}
      horizontalAlign="center"
    >
      <ProductCardImage {...product} />
      <ProductCardTitleLink {...product} />
      <Stack styles={styles.iconButtonContainer}>
        <IconButton
          onClick={onRemoveClick}
          iconProps={{
            iconName: 'Cancel'
          }}
        />
        <TooltipHost
          content={
            isBase
              ? formatMessage(messages.currentBaseline)
              : formatMessage(messages.setBaseline)
          }
          calloutProps={{ gapSpace: 8 }}
        >
          <IconButton
            onClick={onBaseClick}
            iconProps={{
              iconName: isBase ? 'CheckboxCompositeReversed' : 'Checkbox'
            }}
          />
        </TooltipHost>
        <IconButton />
      </Stack>
    </Stack>
  );
};
