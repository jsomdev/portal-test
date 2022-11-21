import Image from 'next/image';
import Link from 'next/link';
import { useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import {
  ActionButton,
  IButtonStyles,
  IStackStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { Category } from '@services/portal-api';
import widenImageLoader from '@utilities/image-loaders/widenImageLoader';
import { mediaQueryFrom } from '@widgets/media-queries';

import { HomeCategoryItem, mapCategoryToHomeCategoryItem } from '../helper';

interface ApplicationsProps {
  category: Category | undefined;
}

interface ApplicationsStyles {
  root: IStackStyles;
  itemsContainer: IStackStyles;
  itemContainer: IStackStyles;
  linkContainer: IStackStyles;
  button: Partial<IButtonStyles>;
}

const width: number = 268;

export const Applications: React.FC<ApplicationsProps> = ({ category }) => {
  const { locale } = useIntl();
  const { palette, spacing, fonts } = useTheme();
  const categoryItem: HomeCategoryItem | undefined = category
    ? mapCategoryToHomeCategoryItem(category, locale)
    : undefined;
  const styles: ApplicationsStyles = {
    itemContainer: {
      root: {
        width: width,
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
        fontSize: fonts.mediumPlus.fontSize,
        color: palette.white
      },
      labelHovered: {
        color: palette.neutralLight
      }
    },
    itemsContainer: {},
    linkContainer: {
      root: {
        height: 65,
        background: palette.themeDark,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        width: width,
        borderTop: `1px solid ${palette.neutralLight}`
      }
    },
    root: {
      root: {
        padding: `${spacing.l1} 0`,
        ...mediaQueryFrom('tablet', {
          padding: `${spacing.l2} 0`
        })
      }
    }
  };

  if (!categoryItem) {
    return null;
  }
  return (
    <Stack tokens={{ childrenGap: spacing.m }} styles={styles.root}>
      <Text as="h2" variant="xxLargePlus">
        {categoryItem.name}
      </Text>
      <Stack
        horizontal
        wrap
        tokens={{
          padding: `${spacing.m} 0`,
          childrenGap: spacing.s1
        }}
        styles={styles.itemsContainer}
      >
        {categoryItem.children?.map(categoryItem => (
          <Stack.Item key={categoryItem.id}>
            <NextLink passHref href={categoryItem.href}>
              <a>
                <Stack styles={styles.itemContainer}>
                  <Image
                    layout="fixed"
                    width={268}
                    height={width * 0.7}
                    alt={categoryItem.imageAlt}
                    src={categoryItem.imageSrc}
                    objectFit="cover"
                    loader={widenImageLoader}
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
            </NextLink>
          </Stack.Item>
        ))}
      </Stack>
    </Stack>
  );
};
