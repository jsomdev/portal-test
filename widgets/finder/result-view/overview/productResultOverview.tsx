import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { TrustFactors } from '@components/trust-factor/trustFactor';
import {
  IStackItemStyles,
  IStackStyles,
  PrimaryButton,
  Stack,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { CategoryFormatter } from '@services/i18n/formatters/entity-formatters/categoryFormatter';
import { Category } from '@services/portal-api';
import { rem } from '@utilities/rem';
import { CategoryCard } from '@widgets/category-card/categoryCard';
import { mediaQueryFrom } from '@widgets/media-queries';

import { ProductResultOverviewItem } from './productResultOverview.types';

interface ProductResultOverviewProps {
  category: Category;
  categoryItems: ProductResultOverviewItem[];
}

interface ProductResultOverviewStyles {
  subCategoryContainer: IStackItemStyles;
  subCategoriesContainer: IStackStyles;
}

const messages = defineMessages({
  browseAll: {
    id: messageIds.finder.overview.browseAll,
    defaultMessage: 'Browse all products',
    description: 'Button text to browse all products belonging to that category'
  }
});

export const ProductResultOverview: React.FC<ProductResultOverviewProps> = ({
  categoryItems,
  category
}) => {
  const { spacing, semanticColors, effects } = useTheme();
  const { formatMessage } = useIntl();
  const router = useRouter();
  const categoryFormatter = new CategoryFormatter(category);
  const styles: ProductResultOverviewStyles = {
    subCategoriesContainer: {
      root: { width: '100%' },
      inner: {
        flexFlow: 'column wrap',
        ...mediaQueryFrom('largePhone', {
          flexFlow: 'row wrap'
        })
      }
    },
    subCategoryContainer: {
      root: {
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner6,
        width: `calc(100% - ${spacing.m})`,
        ...mediaQueryFrom('largePhone', {
          width: `calc(50% - ${spacing.m})`
        }),
        ...mediaQueryFrom('tablet', {
          width: `calc(33.3% - ${spacing.m})`
        }),
        ...mediaQueryFrom('desktop', {
          width: `calc(25% - ${spacing.m})`
        })
      }
    }
  };

  return (
    <Stack tokens={{ padding: `0 0 ${rem(80)} 0`, childrenGap: spacing.l2 }}>
      <Stack
        horizontal
        wrap
        tokens={{
          childrenGap: spacing.m
        }}
        styles={styles.subCategoriesContainer}
      >
        {categoryItems.map(item => (
          <Stack.Item styles={styles.subCategoryContainer} key={item.name}>
            <CategoryCard {...item} size="small" />
          </Stack.Item>
        ))}
      </Stack>
      <Stack.Item align="center">
        <PrimaryButton
          onClick={() =>
            router.push(
              { ...router, query: { ...router.query, all: true } },
              undefined,
              { shallow: true }
            )
          }
        >
          {formatMessage(messages.browseAll, {
            category: categoryFormatter.formatName()
          })}
        </PrimaryButton>
      </Stack.Item>
      <TrustFactors />
    </Stack>
  );
};
