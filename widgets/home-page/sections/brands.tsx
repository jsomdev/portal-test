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

interface BrandsProps {
  category: Category | undefined;
}

interface BrandsStyles {
  root: IStackStyles;
  title: ITextStyles;
  item: IButtonStyles;
}

export const Brands: React.FC<BrandsProps> = ({ category }) => {
  const { locale } = useIntl();
  const { palette, spacing } = useTheme();
  const categoryItem: HomeCategoryItem | undefined = category
    ? mapCategoryToHomeCategoryItem(category, locale)
    : undefined;

  const styles: BrandsStyles = {
    root: {
      root: {
        background: palette.white,
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
    item: {
      root: {
        border: `1px solid ${palette.neutralTertiary}`,
        borderRadius: rem(spacing.s1),
        background: palette.white
      },
      label: {
        fontSize: rem(FontSizes.mediumPlus),
        fontWeight: 500
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
        tokens={{ padding: rem(spacing.m), childrenGap: rem(spacing.m) }}
      >
        {categoryItem.children?.map(item => {
          return (
            <Link key={item.id} href={item.href} passHref>
              <ActionButton styles={styles.item}>{item.name}</ActionButton>
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
};
