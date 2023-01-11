import Image from 'next/image';
import { useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import {
  ActionButton,
  IButtonStyles,
  IStackItemStyles,
  IStackStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { Category } from '@services/portal-api';
import { getImageLoader } from '@utilities/image-loaders/getImageLoader';
import { mediaQueryFrom } from '@widgets/media-queries';

import { HomeCategoryItem, mapCategoryToHomeCategoryItem } from '../helper';

interface ApplicationsProps {
  category: Category | undefined;
}

interface ApplicationsStyles {
  root: IStackStyles;
  itemsContainer: IStackStyles;
  itemContainer: IStackStyles;
  imageContainer: IStackItemStyles;
  subItemContainer: IStackItemStyles;
  linkContainer: IStackStyles;
  button: Partial<IButtonStyles>;
}

const height: number = 224;

export const Applications: React.FC<ApplicationsProps> = ({ category }) => {
  const { locale } = useIntl();
  const { palette, spacing, fonts } = useTheme();
  const categoryItem: HomeCategoryItem | undefined = category
    ? mapCategoryToHomeCategoryItem(category, locale)
    : undefined;
  const styles: ApplicationsStyles = {
    itemContainer: {
      root: {
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
    imageContainer: {
      root: {
        position: 'relative',
        width: '100%',
        height: height
      }
    },
    subItemContainer: {
      root: {
        width: `calc(100% - ${spacing.m})`,
        ...mediaQueryFrom('largePhone', {
          width: `calc(50% - ${spacing.m})`
        }),
        ...mediaQueryFrom('tablet', {
          width: `calc(25% - ${spacing.m})`
        }),
        ...mediaQueryFrom('desktop', {
          width: `calc(20% - ${spacing.m})`
        })
      }
    },
    itemsContainer: {
      root: { width: '100%' },
      inner: {
        flexFlow: 'column wrap',
        ...mediaQueryFrom('largePhone', {
          flexFlow: 'row wrap'
        })
      }
    },
    linkContainer: {
      root: {
        height: 65,
        background: palette.themeDark,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        width: '100%',
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
        wrap
        tokens={{
          padding: `${spacing.m} 0`,
          childrenGap: spacing.m
        }}
        styles={styles.itemsContainer}
      >
        {categoryItem.children?.map(categoryItem => (
          <Stack.Item key={categoryItem.id} styles={styles.subItemContainer}>
            <NextLink passHref href={categoryItem.href}>
              <a>
                <Stack styles={styles.itemContainer}>
                  <Stack.Item styles={styles.imageContainer}>
                    <Image
                      layout="fill"
                      alt={categoryItem.imageAlt}
                      src={categoryItem.imageSrc}
                      objectFit={
                        categoryItem.imageSrc.indexOf('?crop=true') > -1
                          ? 'cover'
                          : 'contain'
                        /* Legacy behavior:
                    - images with a non-white background can be cropped, you can identify these by the url that has a querystring "?crop=true"
                    - image with a white background can not be cropped and should be fully visible, as parts of the product will be cut off when cropped  */
                      }
                      loader={getImageLoader(categoryItem.imageSrc)}
                      objectPosition="center"
                    />
                  </Stack.Item>
                  <Stack
                    styles={styles.linkContainer}
                    horizontalAlign="center"
                    verticalAlign="center"
                  >
                    <NextLink passHref href={categoryItem.href}>
                      <ActionButton styles={styles.button}>
                        {categoryItem.name}
                      </ActionButton>
                    </NextLink>
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
