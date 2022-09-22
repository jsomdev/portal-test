import { useMemo } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { FormattedMessage, defineMessages, useIntl } from 'react-intl';

import {
  ActionButton,
  FontSizes,
  IButtonStyles,
  IStackStyles,
  ITextStyles,
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
    description: 'Header text for the homepage catalog section'
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
        background: palette.neutralLighterAlt,
        padding: `${spacing.l1} ${spacing.l2}`,
        ...mediaQueryFrom('tablet', {
          padding: `${spacing.l2} ${rem(120)}`
        })
      }
    },
    title: {
      root: {
        ...mediaQueryFrom('tablet', {
          marginLeft: rem(spacing.l1)
        })
      }
    },
    itemTitle: {
      root: {
        marginBottom: rem(spacing.s2),
        color: palette.themePrimary,
        ...mediaQueryFrom('tablet', { marginLeft: rem(spacing.l1) })
      }
    },
    itemDescription: {
      root: {
        display: 'inline-block',
        ...mediaQueryFrom('tablet', { marginLeft: rem(spacing.l1) })
      }
    },
    subItemsContainer: {
      root: { width: '100%' },
      inner: {
        justifyContent: 'space-around',
        ...mediaQueryFrom('tablet', { justifyContent: 'flex-start' })
      }
    },
    subItemContainer: {
      root: {
        width: 216,
        background: palette.white,
        borderRadius: 7,
        border: `1px solid ${palette.neutralLight}`,
        img: {
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7
        }
      }
    },
    subItemLinkContainer: {
      root: {
        height: 65,
        border: `1px solid ${palette.neutralLight}`
      }
    },
    subItemButton: {
      root: {
        fontSize: FontSizes.mediumPlus,
        color: palette.accent
      },
      labelHovered: {
        color: palette.themeDark
      }
    }
  };
  return (
    <Stack tokens={{ childrenGap: rem(spacing.m) }} styles={styles.root}>
      <Text as="h2" variant="xxLargePlus" styles={styles.title}>
        <FormattedMessage {...messages.catalogTitle} />
      </Text>
      {categoryItems.map(categoryItem => {
        return (
          <Stack key={categoryItem.id}>
            <Link passHref href={categoryItem.href}>
              <a>
                <Text as="h3" variant="xxLarge" styles={styles.itemTitle}>
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
                  {categoryItem.description}
                </Text>
              </a>
            </Link>
            <Stack
              horizontal
              tokens={{
                padding: rem(spacing.l1),
                childrenGap: rem(spacing.s1)
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
                          width={214}
                          height={150}
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
