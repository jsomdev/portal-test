import { useMemo } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { FormattedMessage, defineMessages, useIntl } from 'react-intl';

import {
  ActionButton,
  IButtonStyles,
  IStackStyles,
  ITextStyles,
  LinkBase,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { Category } from '@services/portal-api';
import { rem } from '@utilities/rem';
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
  subItemContainer: IStackStyles;
  subItemLinkContainer: IStackStyles;
  subItemButton: Partial<IButtonStyles>;
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
  const { palette, spacing, fonts } = useTheme();
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
    },
    subItemContainer: {
      root: {
        width: 268,
        background: palette.white,
        borderRadius: 7,
        img: {
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7
        }
      }
    },
    subItemLinkContainer: {
      root: {
        height: 65,
        width: '100%',
        borderTop: `1px solid ${palette.neutralLight}`
      }
    },
    subItemButton: {
      root: {
        fontSize: fonts.mediumPlus.fontSize,
        color: palette.accent
      },
      labelHovered: {
        color: palette.themeDark
      }
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
            <Link passHref href={categoryItem.href}>
              <a>
                <Text as="h3" variant="xLargePlus" styles={styles.itemTitle}>
                  {categoryItem.name}
                </Text>
              </a>
            </Link>
            <Link passHref href={categoryItem.href}>
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
            </Link>

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
                  <Link passHref href={childCategoryItem.href}>
                    <a>
                      <Stack styles={styles.subItemContainer}>
                        <Image
                          layout="fixed"
                          width={268}
                          height={204}
                          alt={childCategoryItem.imageCaption}
                          src={childCategoryItem.imageSrc}
                          objectFit="cover"
                          objectPosition="center"
                        />
                        <Stack
                          styles={styles.subItemLinkContainer}
                          horizontalAlign="center"
                          verticalAlign="center"
                        >
                          <Link passHref href={childCategoryItem.href}>
                            <ActionButton styles={styles.subItemButton}>
                              {childCategoryItem.name}
                            </ActionButton>
                          </Link>
                        </Stack>
                      </Stack>
                    </a>
                  </Link>
                </Stack.Item>
              ))}
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};
