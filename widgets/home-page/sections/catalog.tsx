import { useMemo } from 'react';

import { FormattedMessage, defineMessages, useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import {
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { Category } from '@services/portal-api';
import { rem } from '@utilities/rem';
import { CategoryCard } from '@widgets/category-card/categoryCard';
import { mediaQueryFrom } from '@widgets/media-queries';

import { HomeCategoryItem, mapCategoriesToHomeCategoryItems } from '../helper';

interface CatalogProps {
  categories: Category[];
}

interface CatalogStyles {
  root: IStackStyles;
  title: ITextStyles;
  itemTitle: ITextStyles;
  itemDescription: ITextStyles;
  subItemsContainer: IStackStyles;
}

const messages = defineMessages({
  catalogTitle: {
    id: messageIds.pages.home.sections.catalog.title,
    description: 'Header text for the homepage catalog section',
    defaultMessage: 'Browse our catalog'
  },
  viewAll: {
    id: messageIds.pages.home.sections.catalog.items.viewAll,
    description: 'Button text to view all ',
    defaultMessage: 'Browse all'
  }
});

export const Catalog: React.FC<CatalogProps> = ({ categories }) => {
  const { locale } = useIntl();
  const { palette, spacing } = useTheme();
  const categoryItems: HomeCategoryItem[] = useMemo(() => {
    return mapCategoriesToHomeCategoryItems(categories, locale);
  }, [categories, locale]);
  const styles: CatalogStyles = {
    root: {
      root: {
        width: '100%',
        padding: `${spacing.l1} 0`,
        ...mediaQueryFrom('tablet', {
          padding: `${spacing.l2} 0`
        })
      }
    },
    title: {
      root: {
        display: 'block',
        marginBottom: spacing.l1
      }
    },
    itemTitle: {
      root: {
        display: 'block',
        marginBottom: spacing.m,
        color: palette.themeDarker
      }
    },
    itemDescription: {
      root: {
        display: 'inline-block',

        marginBottom: spacing.s1,
        maxWidth: rem(980)
      }
    },
    subItemsContainer: {
      root: { width: '100%' }
    }
  };
  return (
    <Stack tokens={{ childrenGap: spacing.m }} styles={styles.root}>
      <Text as="h2" variant="xxLargePlus" styles={styles.title}>
        <FormattedMessage {...messages.catalogTitle} />
      </Text>
      {categoryItems.map(categoryItem => {
        return (
          <Stack key={categoryItem.id}>
            <NextLink passHref href={categoryItem.href}>
              <a>
                <Text as="h3" variant="xLargePlus" styles={styles.itemTitle}>
                  {categoryItem.name}
                </Text>
              </a>
            </NextLink>

            <NextLink passHref href={categoryItem.href}>
              <a>
                <Text
                  as="p"
                  variant="mediumPlus"
                  styles={styles.itemDescription}
                >
                  {categoryItem.description
                    .replace('Co.', '##')
                    .split('.')[0]
                    .concat('.')
                    .replace('##', 'Co.')}
                </Text>
              </a>
            </NextLink>

            <Stack
              horizontal
              tokens={{
                padding: `${spacing.l1} 0`,
                childrenGap: spacing.s1
              }}
              styles={styles.subItemsContainer}
              wrap
            >
              {categoryItem.children.map(childCategoryItem => (
                <Stack.Item key={childCategoryItem.id}>
                  <CategoryCard {...childCategoryItem} />
                </Stack.Item>
              ))}
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};
