import React from 'react';

import { useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import {
  ActionButton,
  FontWeights,
  IButtonStyles,
  IStackStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { Category } from '@services/portal-api';
import { mediaQueryFrom } from '@widgets/media-queries';

import { HomeCategoryItem, mapCategoryToHomeCategoryItem } from '../helper';

interface BrandsProps {
  category: Category | undefined;
}

interface BrandsStyles {
  root: IStackStyles;
  item: IButtonStyles;
}

export const Brands: React.FC<BrandsProps> = ({ category }) => {
  const { locale } = useIntl();
  const { palette, spacing, fonts } = useTheme();
  const categoryItem: HomeCategoryItem | undefined = category
    ? mapCategoryToHomeCategoryItem(category, locale)
    : undefined;

  const styles: BrandsStyles = {
    root: {
      root: {
        padding: `${spacing.l1} 0`,
        ...mediaQueryFrom('tablet', {
          padding: `${spacing.l2} 0`
        })
      }
    },
    item: {
      root: {
        border: `1px solid ${palette.neutralTertiary}`,
        borderRadius: spacing.s1,
        background: palette.white
      },
      label: {
        fontSize: fonts.mediumPlus.fontSize,
        fontWeight: FontWeights.semibold
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
        tokens={{ padding: `${spacing.m} 0`, childrenGap: spacing.m }}
      >
        {categoryItem.children?.map(item => {
          return (
            <NextLink key={item.id} href={item.href} passHref>
              <ActionButton styles={styles.item}>{item.name}</ActionButton>
            </NextLink>
          );
        })}
      </Stack>
    </Stack>
  );
};
