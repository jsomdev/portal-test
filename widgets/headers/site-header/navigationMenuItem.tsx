import React, { useMemo } from 'react';

import Link from 'next/link';

import {
  ActionButton,
  IButtonStyles,
  IStackStyles,
  Stack,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';

import { MenuItemProps } from '../main-header/mainHeader.helper';

interface NavigationMenuItemProps {
  item: MenuItemProps;
  onClick?: () => void;
}

interface NavigationMenuItemStyles {
  link: IButtonStyles;
  linkContainer: IStackStyles;
}

type NavigationMenuItemType = 'link' | 'default';

export const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({
  item,
  onClick
}) => {
  const { semanticColors, spacing, palette } = useTheme();

  const renderAs: NavigationMenuItemType = useMemo(() => {
    if (item.href) {
      return 'link';
    }
    return 'default';
  }, [item]);

  const styles: NavigationMenuItemStyles = {
    linkContainer: {
      root: {
        borderBottom: `1px solid ${semanticColors.variantBorder}`
      }
    },
    link: {
      root: {
        padding: `${rem(spacing.l1)} ${rem(spacing.m)}`
      },
      flexContainer: {
        justifyContent: 'space-between'
      },
      menuIcon: {
        color: palette.themePrimary
      }
    }
  };

  return (
    <Stack
      key={`site-menu-panel-item-${item.text}`}
      styles={styles.linkContainer}
    >
      {renderAs === 'link' && (
        <Link
          aria-label={item.text}
          key={item.id}
          href={item.href as string}
          passHref
        >
          <ActionButton text={item.text} styles={styles.link} />
        </Link>
      )}
      {renderAs === 'default' && (
        <ActionButton
          text={item.text}
          styles={styles.link}
          onClick={onClick}
          menuIconProps={
            item.children?.length ? { iconName: 'chevronRight' } : undefined
          }
        />
      )}
    </Stack>
  );
};
