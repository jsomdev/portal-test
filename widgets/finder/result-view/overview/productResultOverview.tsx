import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { TrustFactors } from '@components/trust-factor/trustFactor';
import { IStackStyles, PrimaryButton, Stack, useTheme } from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { CategoryFormatter } from '@services/i18n/formatters/entity-formatters/categoryFormatter';
import { Category } from '@services/portal-api';
import { CategoryCard } from '@widgets/category-card/categoryCard';

import { ProductResultOverviewItem } from './productResultOverview.types';

interface ProductResultOverviewProps {
  category: Category;
  categoryItems: ProductResultOverviewItem[];
}

interface ProductResultOverviewStyles {
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
      root: {
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner6
      }
    }
  };
  return (
    <Stack tokens={{ padding: '0 0 80px 0', childrenGap: spacing.l2 }}>
      <Stack
        horizontal
        wrap
        tokens={{
          childrenGap: spacing.m
        }}
      >
        {categoryItems.map(item => (
          <Stack.Item styles={styles.subCategoriesContainer} key={item.name}>
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
