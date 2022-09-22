import Image from 'next/image';
import Link from 'next/link';
import { useIntl } from 'react-intl';

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
import { Category } from '@services/portal-api';
import { rem } from '@utilities/rem';
import { mediaQueryFrom } from '@widgets/media-queries';

import { HomeCategoryItem, mapCategoryToHomeCategoryItem } from '../helper';

interface ApplicationsProps {
  category: Category | undefined;
}

interface ApplicationsStyles {
  root: IStackStyles;
  title: ITextStyles;
  itemsContainer: IStackStyles;
  itemContainer: IStackStyles;
  linkContainer: IStackStyles;
  button: Partial<IButtonStyles>;
}

export const Applications: React.FC<ApplicationsProps> = ({ category }) => {
  const { locale } = useIntl();
  const { palette, spacing } = useTheme();
  const categoryItem: HomeCategoryItem | undefined = category
    ? mapCategoryToHomeCategoryItem(category, locale)
    : undefined;
  const styles: ApplicationsStyles = {
    title: {
      root: {
        ...mediaQueryFrom('tablet', {
          marginLeft: rem(20)
        })
      }
    },
    itemContainer: {
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
    button: {
      root: {
        fontSize: rem(FontSizes.mediumPlus),
        color: palette.white
      },
      labelHovered: {
        color: palette.neutralLight
      }
    },
    itemsContainer: {
      inner: {
        justifyContent: 'space-around',
        ...mediaQueryFrom('tablet', {
          justifyContent: 'flex-start'
        })
      }
    },
    linkContainer: {
      root: {
        height: 65,
        background: palette.themeDark,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        borderTop: `1px solid ${palette.neutralLight}`
      }
    },
    root: {
      root: {
        background: palette.neutralLight,
        padding: `${spacing.l1} ${spacing.l2}`,
        ...mediaQueryFrom('tablet', {
          padding: `${spacing.l2} ${rem(120)}`
        })
      }
    }
  };

  if (!categoryItem) {
    return null;
  }
  return (
    <Stack tokens={{ childrenGap: rem(spacing.m) }} styles={styles.root}>
      <Text as="h2" variant="xxLargePlus" styles={styles.title}>
        {categoryItem.name}
      </Text>
      <Stack
        horizontal
        wrap
        tokens={{ padding: rem(spacing.m), childrenGap: rem(spacing.s1) }}
        styles={styles.itemsContainer}
      >
        {categoryItem.children?.map(categoryItem => (
          <Stack.Item key={categoryItem.id}>
            <Link passHref href={categoryItem.href}>
              <a>
                <Stack styles={styles.itemContainer}>
                  <Image
                    layout="fixed"
                    width={214}
                    height={150}
                    alt={categoryItem.imageCaption}
                    src={categoryItem.imageSrc}
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <Stack
                    styles={styles.linkContainer}
                    horizontalAlign="center"
                    verticalAlign="center"
                  >
                    <Link passHref href={categoryItem.href}>
                      <ActionButton styles={styles.button}>
                        {categoryItem.name}
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
};
